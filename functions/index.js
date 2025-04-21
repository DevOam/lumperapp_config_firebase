const functions = require("firebase-functions");
const admin = require("firebase-admin");
const stripe = require("stripe")(functions.config().stripe.secret);
admin.initializeApp();
const db = admin.firestore();

exports.createCheckoutSession = functions.https.onRequest(async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [{
      price_data: {
        currency: "usd",
        product_data: { name: "Lumper Job" },
        unit_amount: 11700,
      },
      quantity: 1,
    }],
    mode: "payment",
    success_url: "https://lumperapp1.web.app/success",
    cancel_url: "https://lumperapp1.web.app/cancel"
  });
  res.json({ id: session.id });
});

exports.createAccountLink = functions.https.onRequest(async (req, res) => {
  const account = await stripe.accounts.create({
    type: "express",
    capabilities: { transfers: { requested: true } }
  });

  const accountLink = await stripe.accountLinks.create({
    account: account.id,
    refresh_url: "https://lumperapp1.web.app/onboard",
    return_url: "https://lumperapp1.web.app/onboard/success",
    type: "account_onboarding"
  });

  await db.collection("users").doc(req.body.uid).update({ stripeAccountId: account.id });
  res.json({ url: accountLink.url });
});

exports.sendLumperPayout = functions.firestore.document("jobs/{jobId}").onUpdate(async (change, context) => {
  const job = change.after.data();
  const before = change.before.data();
  if (job.status === "done" && before.status !== "done") {
    const userDoc = await db.collection("users").doc(job.lumperId).get();
    const stripeId = userDoc.data().stripeAccountId;
    await stripe.transfers.create({
      amount: job.pay * 100,
      currency: "usd",
      destination: stripeId,
      description: `Payout for job ${context.params.jobId}`
    });
    await db.collection("payments").add({
      jobId: context.params.jobId,
      lumperId: job.lumperId,
      amount: job.pay,
      status: "paid",
      timestamp: new Date().toISOString()
    });
  }
});