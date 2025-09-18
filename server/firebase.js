// Configuración de Firebase para Node.js
const { initializeApp, applicationDefault } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

// Inicializa la app de Firebase
initializeApp({
  credential: applicationDefault(),
});

const db = getFirestore();

module.exports = db;
