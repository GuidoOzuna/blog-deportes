const express = require('express');
const app = express();
const port = 3000;

const partidos = [
  { fecha: 1, equipoLocal: 'Olimpia', equipoVisitante: 'Cerro Porteño', resultado: '2-1' },
  { fecha: 1, equipoLocal: 'Guaraní', equipoVisitante: 'Recoleta FC', resultado: '1-3' },
  { fecha: 2, equipoLocal: 'Sportivo Trinidense', equipoVisitante: 'General Caballero JLM', resultado: '0-0' },
  // Agrega más partidos aquí con la correspondiente fecha
];

app.get('/api/partidos', (req, res) => {
  res.json(partidos);
});

app.listen(port, () => {
  console.log(`API de deportes escuchando en http://localhost:${port}`);
});
