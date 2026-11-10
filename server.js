const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/subscription/create-wave-checkout', async (req, res) => {
  res.json({ 
    success: true, 
    wave_launch_url: `https://pay.wave.com/c/mock-checkout-${Date.now()}`,
    message: "Redirection vers le portail de paiement sécurisé Wave" 
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur prêt sur le port ${PORT}`));
