

// Variables del carrito
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
let total = JSON.parse(localStorage.getItem('total')) || 0;

// Agregar elementos al carrito
function agregarAlCarrito(nombre, precio) {
    const producto = { nombre, precio };
    carrito.push(producto);
    total += precio;
    guardarEnStorage();
    actualizarCarrito();
}







// Vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    total = 0;
    guardarEnStorage();
    actualizarCarrito();
}

// Guardar el carrito y total en el Storage
function guardarEnStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    localStorage.setItem('total', JSON.stringify(total));
}

// Actualizar el carrito, agregar, eliminar y precio total
function actualizarCarrito() {
    const carritoLista = document.getElementById('carrito-lista');
    const precioTotal = document.getElementById('precio-total');

    carritoLista.innerHTML = '';
    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - Precio: $${producto.precio}`;
        carritoLista.appendChild(li);
    });

    precioTotal.textContent = `Total: $${total}`;

    // Llama a la función para actualizar el modal del carrito
    actualizarModalCarrito();
}



let descuentoAplicado = false;

function aplicarDescuento() {
    if (!descuentoAplicado) {
        const descuentoPorcentaje = 0.25;
        for (let i = 0; i < carrito.length; i++) {
            const precioOriginal = carrito[i].precio;
            const descuento = precioOriginal * descuentoPorcentaje;
            const precioConDescuento = precioOriginal - descuento;
            carrito[i].precio = precioConDescuento;
            total -= descuento;
        }

        descuentoAplicado = true;
        guardarEnStorage();
        actualizarCarrito();
    }
}
// Llamada inicial para cargar el carrito al cargar la página
actualizarCarrito();


