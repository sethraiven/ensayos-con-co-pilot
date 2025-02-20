const carrito = [];

function agregarAlCarrito(producto) {
    carrito.push(producto);
    alert(`${producto} ha sido añadido al carrito.`);
}

function mostrarCarrito() {
    let carritoHTML = '<h2>Carrito de Compras</h2><ul>';
    carrito.forEach(producto => {
        carritoHTML += `<li>${producto}</li>`;
    });
    carritoHTML += '</ul><button onclick="irAPagar()">Pagar</button>';
    document.getElementById('carrito').innerHTML = carritoHTML;
}

function irAPagar() {
    window.location.href = 'pagar.html';
}

function iniciarTransicionBanner() {
    const imagenes = document.querySelectorAll('.banner img');
    let indiceActual = 0;

    setInterval(() => {
        imagenes[indiceActual].classList.remove('active');
        indiceActual = (indiceActual + 1) % imagenes.length;
        imagenes[indiceActual].classList.add('active');
    }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.product button');
    botones.forEach((boton, index) => {
        boton.addEventListener('click', () => {
            const producto = boton.parentElement.querySelector('h2').innerText;
            agregarAlCarrito(producto);
        });
    });

    document.getElementById('ver-carrito').addEventListener('click', mostrarCarrito);
    iniciarTransicionBanner();
});
