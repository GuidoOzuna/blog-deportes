// index.js
const express = require('express');
const app = express();
const port = 3000;

// Importa la lista de personas desde lista.js
const personas = require('./lista');

app.use(express.json());

app.get('/api/personas', (req, res) => {
  res.json(personas);
});

app.post('/api/personas', (req, res) => {
  const nuevaPersona = req.body;
  nuevaPersona.id = personas.length + 1;
  personas.push(nuevaPersona);
  res.status(201).json(nuevaPersona);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
