const express = require('express');
const cors = require('cors');
const componentes = require('./componentes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static('public'));

app.get('/api/componentes', (req, res) => {
  res.json(componentes);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});