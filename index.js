const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const noticiasRouter = require('./noticias');

// Configuración de middleware para servir archivos estáticos
app.use(express.static('public'));

// Middleware para manejar CORS
app.use(cors());

// Rutas
app.use('/api/noticias', noticiasRouter);

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});