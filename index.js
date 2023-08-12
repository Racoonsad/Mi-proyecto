// index.js
const librosContainer = document.querySelector('.libros-container');
const libros = librosContainer.querySelectorAll('.libro');
const botonLibros = document.querySelector('.boton-libros');

botonLibros.addEventListener('click', () => {
    librosContainer.classList.toggle('mostrar-todos');
    libros.forEach(libro => libro.classList.toggle('libro-activo'));
});
// index.js
const enlaceInicio = document.getElementById('enlace-inicio');

enlaceInicio.addEventListener('click', (event) => {
    event.preventDefault(); // Evita que el enlace recargue la página
    location.reload(); // Recarga la página
});
