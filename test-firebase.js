// Import des fonctions Firebase nécessaires
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AlzaSyDLbuTxR23ZtF_xjtMoyf5HDepTWXhnbCo",
  authDomain: "lumperapp1.firebaseapp.com",
  projectId: "lumperapp1",
  storageBucket: "lumperapp1.appspot.com",
  messagingSenderId: "192913670185",
  appId: "1:192913670185:web:b7c271a49f96ad8bd91c38"
};

// Fonction de test
async function testFirebaseConnection() {
  console.log('🔄 Test de connexion à Firebase en cours...');
  
  try {
    // Initialisation de Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    console.log('✅ Connexion à Firebase réussie!');
    console.log('📌 Configuration correctement chargée pour le projet:', firebaseConfig.projectId);
    
  } catch (error) {
    console.error('❌ Erreur de connexion:', error.message);
  }
}

// Exécution du test
testFirebaseConnection(); 