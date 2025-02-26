document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/api/partidos')
    .then(response => response.json())
    .then(data => {
      const partidosDiv = document.getElementById('partidos');
      data.forEach(partido => {
        const partidoElement = document.createElement('div');
        partidoElement.className = 'partido';
        partidoElement.textContent = `Fecha ${partido.fecha}: ${partido.equipoLocal} vs ${partido.equipoVisitante}: ${partido.resultado}`;
        partidosDiv.appendChild(partidoElement);
      });
    })
    .catch(error => console.error('Error:', error));
});
