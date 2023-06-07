window.addEventListener('DOMContentLoaded', (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
  
    if (productId === '1') {
      document.getElementById('producto-nombre').textContent = 'Producto 1';
      document.getElementById('producto-imagen').src = 'img/pochita.jpg';
      document.getElementById('producto-descripcion').textContent = 'Descripción detallada del Producto 1.';
    } else if (productId === '2') {
      document.getElementById('producto-nombre').textContent = 'Producto 2';
      document.getElementById('producto-imagen').src = 'img/groudon.jpg';
      document.getElementById('producto-descripcion').textContent = 'Descripción detallada del Producto 2.';
    }
  });
  