document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/api/partidos')
    .then(response => response.json())
    .then(data => {
      const partidosDiv = document.getElementById('partidos');
      const partidosPorFecha = data.reduce((acc, partido) => {
        if (!acc[partido.fecha]) {
          acc[partido.fecha] = [];
        }
        acc[partido.fecha].push(partido);
        return acc;
      }, {});

      Object.keys(partidosPorFecha).forEach(fecha => {
        const fechaTitulo = document.createElement('h2');
        fechaTitulo.textContent = `Fecha ${fecha}`;
        partidosDiv.appendChild(fechaTitulo);

        partidosPorFecha[fecha].forEach(partido => {
          const partidoElement = document.createElement('div');
          partidoElement.className = 'partido';
          partidoElement.textContent = `${partido.equipoLocal} vs ${partido.equipoVisitante}: ${partido.resultado}`;
          partidosDiv.appendChild(partidoElement);
        });
      });
    })
    .catch(error => console.error('Error:', error));

  fetch('http://localhost:3000/api/tabla')
    .then(response => response.json())
    .then(data => {
      const tablaBody = document.getElementById('tabla');
      data.forEach(equipo => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${equipo.equipo}</td>
          <td>${equipo.partidosJugados}</td>
          <td>${equipo.puntos}</td>
          <td>${equipo.ganados}</td>
          <td>${equipo.empatados}</td>
          <td>${equipo.perdidos}</td>
          <td>${equipo.golesAFavor}</td>
          <td>${equipo.golesEnContra}</td>
          <td>${equipo.diferenciaDeGoles}</td>
        `;
        tablaBody.appendChild(row);
      });
    })
    .catch(error => console.error('Error:', error));
});