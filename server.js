const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// MongoDB Verbindung
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Datenbank verbunden'))
  .catch(err => console.error('Datenbank Verbindungsfehler:', err));

app.get('/', (req, res) => {
  res.send('API läuft');
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port: ${PORT}`);
});
