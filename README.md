# Lumper App - Complete Firebase Project

## ✅ Deploy Instructions

### 1. Install Firebase CLI
npm install -g firebase-tools

### 2. Login & Initialize
firebase login

### 3. Deploy Hosting
firebase deploy --only hosting

### 4. Deploy Backend Functions
cd functions
npm install
firebase deploy --only functions

### 5. Test Hosted App
Visit: https://lumperapp1.web.app
- /index.html (dashboard)
- /available-jobs.html
- /payment.html
- /onboard.html
