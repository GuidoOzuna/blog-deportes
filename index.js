const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const partidos = [
  // Fecha 1
  { fecha: 1, equipoLocal: 'Sportivo Trinidense', equipoVisitante: 'Sportivo Ameliano', resultado: '1-2' },
  { fecha: 1, equipoLocal: 'Sportivo Luqueño', equipoVisitante: 'Atlético Tembetary', resultado: '1-1' },
  { fecha: 1, equipoLocal: '2 de Mayo', equipoVisitante: 'Nacional', resultado: '0-0' },
  { fecha: 1, equipoLocal: 'General Caballero JLM', equipoVisitante: 'Deportivo Recoleta', resultado: '2-2'},
  { fecha: 1, equipoLocal: 'Olimpia', equipoVisitante: 'Guaraní', resultado: '0-1'},
  { fecha: 1, equipoLocal: 'Cerro Porteño', equipoVisitante: 'Libertad', resultado: '0-0'},
  // Fecha 2
  { fecha: 2, equipoLocal: 'Atlético Tembetary', equipoVisitante: 'Sportivo Trinidense', resultado: '2-2' },
  { fecha: 2, equipoLocal: 'Deportivo Recoleta', equipoVisitante: '2 de Mayo', resultado: '0-2' },
  { fecha: 2, equipoLocal: 'Sportivo Luqueño', equipoVisitante: 'Cerro Porteño', resultado: '1-1' },
  { fecha: 2, equipoLocal: 'Nacional', equipoVisitante: 'Libertad', resultado: '0-3'},
  { fecha: 2, equipoLocal: 'Guaraní', equipoVisitante: 'General Caballero JLM', resultado: '2-1'},
  { fecha: 2, equipoLocal: 'Sportivo Ameliano', equipoVisitante: 'Olimpia', resultado: '2-2'},
  // Fecha 3
];

const equipos = {};

partidos.forEach(partido => {
  const [golesLocal, golesVisitante] = partido.resultado.split('-').map(Number);

  if (!equipos[partido.equipoLocal]) {
    equipos[partido.equipoLocal] = { puntos: 0, ganados: 0, perdidos: 0, empatados: 0, golesAFavor: 0, golesEnContra: 0, partidosJugados: 0 };
  }

  if (!equipos[partido.equipoVisitante]) {
    equipos[partido.equipoVisitante] = { puntos: 0, ganados: 0, perdidos: 0, empatados: 0, golesAFavor: 0, golesEnContra: 0, partidosJugados: 0 };
  }

  equipos[partido.equipoLocal].golesAFavor += golesLocal;
  equipos[partido.equipoVisitante].golesAFavor += golesVisitante;
  equipos[partido.equipoLocal].golesEnContra += golesVisitante;
  equipos[partido.equipoVisitante].golesEnContra += golesLocal;
  equipos[partido.equipoLocal].partidosJugados += 1;
  equipos[partido.equipoVisitante].partidosJugados += 1;

  if (golesLocal > golesVisitante) {
    equipos[partido.equipoLocal].puntos += 3;
    equipos[partido.equipoLocal].ganados += 1;
    equipos[partido.equipoVisitante].perdidos += 1;
  } else if (golesLocal < golesVisitante) {
    equipos[partido.equipoVisitante].puntos += 3;
    equipos[partido.equipoVisitante].ganados += 1;
    equipos[partido.equipoLocal].perdidos += 1;
  } else {
    equipos[partido.equipoLocal].puntos += 1;
    equipos[partido.equipoVisitante].puntos += 1;
    equipos[partido.equipoLocal].empatados += 1;
    equipos[partido.equipoVisitante].empatados += 1;
  }
});

const tabla = Object.entries(equipos).map(([equipo, stats]) => ({
  equipo,
  ...stats,
  diferenciaDeGoles: stats.golesAFavor - stats.golesEnContra
})).sort((a, b) => b.puntos - a.puntos || b.diferenciaDeGoles - a.diferenciaDeGoles);

app.get('/api/partidos', (req, res) => {
  res.json(partidos);
});

app.get('/api/tabla', (req, res) => {
  res.json(tabla);
});

app.listen(port, () => {
  console.log(`API de deportes escuchando en http://localhost:${port}`);
});