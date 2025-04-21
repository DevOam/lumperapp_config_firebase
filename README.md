# Application Lumper

## 📱 Description
Application de gestion pour les Lumpers avec interface utilisateur moderne et système de gestion des utilisateurs.

## 🚀 Comment démarrer l'application

1. **Installation des dépendances**
```bash
npm install
```

2. **Démarrer l'application**
```bash
npm start
```

3. **Ouvrir l'application**
- Ouvrez votre navigateur
- Allez à l'adresse : http://localhost:3000

## 📋 Fonctionnalités principales

- **Liste des Utilisateurs** : Affichage de tous les utilisateurs avec leurs informations
  - Nom
  - Email
  - Rôle
  - Date de création

## 🔒 Sécurité
- Authentification requise pour accéder aux données
- Règles de sécurité Firebase configurées
- Protection des données sensibles

## 📁 Structure du projet

```
src/
  ├── components/        # Composants réutilisables
  │   └── UsersList.jsx  # Liste des utilisateurs
  ├── pages/            # Pages de l'application
  │   └── Home.jsx      # Page d'accueil
  └── firebase.config.js # Configuration Firebase
```

## 🔧 Configuration requise

- Node.js version 14 ou supérieure
- Navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Connexion Internet pour Firebase

## 💡 Support

Pour toute question ou assistance :
- Email : [Votre email de support]
- Téléphone : [Votre numéro de support]

# Test de Configuration Firebase

Ce projet contient un test simple pour vérifier la connexion à Firebase pour l'application Lumper.

## 📋 Contenu

- `test-firebase.js` : Script de test de connexion
- `firebase.config.js` : Configuration Firebase
- `package.json` : Dépendances du projet

## 🚀 Installation

1. Cloner le repo :
```bash
git clone https://github.com/DevOam/lumperapp_config_firebase.git
cd lumperapp_config_firebase
```

2. Installer les dépendances :
```bash
npm install
```

## ✅ Test de la connexion

Pour tester la connexion Firebase :
```bash
npm test
```

### Résultats attendus

Si la connexion réussit :
```
🔄 Test de connexion à Firebase en cours...
✅ Connexion à Firebase réussie!
📌 Configuration correctement chargée pour le projet: lumperapp1
```

## 🔒 Configuration Firebase

Le fichier `firebase.config.js` contient :
- Configuration du projet
- Clés d'API
- ID du projet

## 📝 Notes

- Ce test vérifie uniquement la connexion à Firebase
- Pas besoin de modifier les règles de sécurité pour ce test
- Les clés d'API sont spécifiques au projet Lumper