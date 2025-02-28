const express = require('express');
const router = express.Router();

// Datos ficticios de noticias
const noticias = [
    {
        id: 1,
        titulo: 'Título del Artículo Reciente 1',
        contenido: 'Contenido del artículo reciente 1...',
        imagen: 'imagen1.jpg'
    },
    {
        id: 2,
        titulo: 'Título del Artículo Reciente 2',
        contenido: 'Contenido del artículo reciente 2...',
        imagen: 'imagen2.jpg'
    },
    {
        id: 3,
        titulo: 'Título del Artículo de Noticias 1',
        contenido: 'Contenido del artículo de noticias 1...',
        imagen: 'imagen3.jpg'
    },
    {
        id: 4,
        titulo: 'Título del Artículo de Noticias 2',
        contenido: 'Contenido del artículo de noticias 2...',
        imagen: 'imagen4.jpg'
    }
];

// Endpoint para obtener todas las noticias
router.get('/', (req, res) => {
    res.json(noticias);
});

module.exports = router;