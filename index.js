// index.js

// Seleccionar el contenedor de libros y los elementos de libro
const librosContainer = document.querySelector('.libros-container');
const libros = librosContainer.querySelectorAll('.libro');

// Seleccionar el botón de "Libros" en la barra de navegación
const botonLibros = document.querySelector('.boton-libros');

// Agregar un evento de clic al botón de "Libros"
botonLibros.addEventListener('click', () => {
    // Alternar la clase "mostrar-todos" en el contenedor de libros
    librosContainer.classList.toggle('mostrar-todos');

    // Alternar la clase "libro-activo" en cada elemento de libro
    libros.forEach(libro => libro.classList.toggle('libro-activo'));
});


// Obtener el enlace "Inicio" por su ID
const enlaceInicio = document.getElementById('enlace-inicio');

// Agregar un evento de clic al enlace "Inicio"
enlaceInicio.addEventListener('click', (event) => {
    event.preventDefault(); 
    location.reload(); // Recargar la página
});