/*

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

function finalizar(){

}

// Llamada inicial para cargar el carrito al cargar la página
actualizarCarrito();

*/

class Carrito{
    constructor(){
        this.listaCarrito = []
        this.contenedor_carrito = document.getElementById("contenedor_carrito")
        this.total = document.getElementById("total")
        this.finalizar_compra = document.getElementById("finalizar_compra")
        this.keyStorage = "listaCarrito"
    }

    levantarStorage(){
        this.listaCarrito = JSON.parse(localStorage.getItem(this.keyStorage)) || []

        if(this.listaCarrito.length > 0){
            let listaAuxiliar = []

            for (let i = 0; i < this.listaCarrito.length; i++){
                let productoClaseProducto = new Producto(this.listaCarrito[i])
                listaAuxiliar.push(productoClaseProducto)
            }
            this.listaCarrito = listaAuxiliar
        }
    }
    guardarEnStorage(){
        let listaCarritoJSON = JSON.stringify(this.listaCarrito)
        localStorage.setItem(this.keyStorage, listaCarritoJSON)
    }

    agregar(productoAgregar){
        let existeElProducto = this.listaCarrito.some(producto => producto.id == productoAgregar.id)

        if(existeElProducto){
            let producto = this.listaCarrito.find(producto => producto.id == productoAgregar.id)
            producto.cantidad = producto.cantidad + 1
        }else{
            this.listaCarrito.push(productoAgregar)
        }
    }

    eliminar(productoEliminar){
        let producto = this.listaCarrito.find(producto => producto.id == productoEliminar.id)
        let indice = this.listaCarrito.indexOf(producto)
        this.listaCarrito.splice(indice, 1)
    }
    
    limpiarContenedorCarrito(){
        this.contenedor_carrito.innerHTML = ""
    }

    mostrarProductos(){
        this.limpiarContenedorCarrito()
        this.listaCarrito.forEach(producto => {
            contenedor_carrito.innerHTML += producto.descripcionHTMLCarrito()
        })

        this.listaCarrito.forEach(producto => {
            let
        })
    }
}

