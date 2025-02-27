document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/componentes')
    .then(response => response.json())
    .then(data => {
      const listaComponentes = document.getElementById('lista-componentes');
      data.forEach(componente => {
        const componenteHTML = `
          <div class="componente">
            <img src="${componente.imagen}" alt="${componente.nombre}">
            <h3>${componente.nombre}</h3>
            <p>${componente.descripcion}</p>
          </div>
        `;
        listaComponentes.innerHTML += componenteHTML;
      });
    });
});