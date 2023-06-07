// Espera a que el contenido del DOM se haya cargado completamente
window.addEventListener('DOMContentLoaded', (event) => {
    // Obtiene los parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    // Obtiene el valor del parámetro 'id'
    const productId = urlParams.get('id');
  
    // Verifica el valor del parámetro 'id'
    if (productId === '1') {
      // Si el valor es '1', actualiza el nombre, la imagen y la descripción del producto en la página
      document.getElementById('producto-nombre').textContent = 'Producto 1';
      document.getElementById('producto-imagen').src = 'img/pochita.jpg';
      document.getElementById('producto-descripcion').textContent = 'Descripción detallada del Producto 1.';
    } else if (productId === '2') {
      // Si el valor es '2', actualiza el nombre, la imagen y la descripción del producto en la página
      document.getElementById('producto-nombre').textContent = 'Producto 2';
      document.getElementById('producto-imagen').src = 'img/groudon.jpg';
      document.getElementById('producto-descripcion').textContent = 'Descripción detallada del Producto 2.';
    }
  });
  