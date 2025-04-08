const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware pour lire JSON
app.use(express.json());

// Servir les fichiers statiques depuis /app/public
app.use(express.static(path.join(__dirname, 'public')));

// Route POST /reserver
app.post('/reserver', (req, res) => {
  const { nom, email, service } = req.body;

  console.log('Réservation reçue :', nom, email, service);

  // Réponse à afficher dans le message de confirmation
  res.json({ message: `Merci ${nom}, votre service de ${service} a bien été réservé ! 🎉` });
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});
