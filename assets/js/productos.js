/*
// Array de los productos
const productos = [
    { nombre: 'OG Kush', precio: 800 },
    { nombre: 'Wedding Cake', precio: 850 },
    { nombre: 'Afgani', precio: 1000 },
    { nombre: 'Scout Cookies', precio: 900 },
    { nombre: 'Critical', precio: 700 },
    { nombre: 'Cheese', precio: 1050},
];


// Los filtros de los productos
function cambiarVistaProductos() {
    const filtroSeleccion = document.getElementById('filtro-seleccion').value;

    if (filtroSeleccion === 'filtroNombre') {
        const nombreBusqueda = prompt('Ingrese el nombre del producto:');
        if (nombreBusqueda) {
            const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(nombreBusqueda.toLowerCase()));
            mostrarProductos(productosFiltrados);
        }
    } else if (filtroSeleccion === 'filtroPrecio') {
        const productosOrdenados = productos.slice().sort((a, b) => a.precio - b.precio);
        mostrarProductos(productosOrdenados);
    } else {
        mostrarProductos(productos);
    }
}

// Mostrar los productos con sus imagenes, precios y boton
function mostrarProductos(productosArray) {
    const productosDiv = document.getElementById('productos');
    productosDiv.innerHTML = '';

    productosArray.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.className = 'producto';

        const img = document.createElement('img');
        img.src = `../assets/img/${producto.nombre.toLowerCase().replace(/\s/g, '_')}.jpg`;
        img.alt = producto.nombre;
        divProducto.appendChild(img);

        const pNombre = document.createElement('p');
        pNombre.textContent = `${producto.nombre} - $${producto.precio}`;
        divProducto.appendChild(pNombre);

        const button = document.createElement('button');
        button.textContent = 'Agregar al Carrito';
        button.onclick = () => agregarAlCarrito(producto.nombre, producto.precio);
        divProducto.appendChild(button);

        productosDiv.appendChild(divProducto);
    });
}

// Te muestra los productos
mostrarProductos(productos);

*/


class Producto {

    constructor({ id, nombre, precio, descripcion, img }) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.cantidad = 1
        this.descripcion = descripcion
        this.img = img

    }

    aumentarCantidad() {
        this.cantidad++
    }
    disminuirCantidad() {
        if (this.cantidad > 1) {
            this.cantidad--
            return true
        }
        return false
    }
    descripcionHTMLCarrito() {
        return `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${this.img}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${this.nombre}</h5>
                        <p class="card-text">Cantidad: <button class="btn btn-dark" id="minus-${this.id}"><i class="fa-solid fa-minus fa-1x"></i></button>${this.cantidad}<button class="btn btn-dark" id="plus-${this.id}"><i class="fa-solid fa-plus"></i></button> </p>
                        <p class="card-text">Precio: $${this.precio}</p>
                        <button class="btn btn-danger" id="eliminar-${this.id}"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
            </div>
        </div>`
    }
    descripcionHTML() {
        return `<div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${this.nombre}</h5>
            <p class="card-text">${this.descripcion}</p>
            <p class="card-text">$${this.precio}</p>
            <button class="btn btn-primary" id="ap-${this.id}">Añadir al carrito</button>
        </div>
    </div>
        `
    }
}


class ControladorProductos{
    constructor(){
        this.listaProductos = []
    }
    cargarProductos(){
        const Producto1 = new Producto({id: 1, nombre: "Afgani", precio: 1000, descripcion: "gama alta", img: "assets\img\afgani.jpg"})
        const Producto2 = new Producto({id: 2, nombre: "Cheese", precio: 1050, descripcion: "gama alta", img: "assets\img\cheese.jpg"})
        const Producto3 = new Producto({id: 3, nombre: "Critical", precio: 700, descripcion: "gama baja", img: "assets\img\critical.jpg"})
        const Producto4 = new Producto({id: 4, nombre: "OG Kush", precio: 800, descripcion: "gama baja", img: "assets\img\og_kush.jpg"})
        const Producto5 = new Producto({id: 5, nombre: "Scout Cookies", precio: 900, descripcion: "gama media", img: "assets\img\scout_cookies.jpg"})
        const Producto6 = new Producto({id: 6, nombre: "Wedding Cake", precio: 850, descripcion: "gama media", img: "assets\img\wedding_cake.jpg"})

        this.agregar(Producto1)
        this.agregar(Producto2)
        this.agregar(Producto3)
        this.agregar(Producto4)
        this.agregar(Producto5)
        this.agregar(Producto6)
    }

    agregar(producto){
        this.listaProductos.push(producto)
    }

    mostrarProductos(){
        let contenedor_productos = document.getElementById("contenedor_productos")
        this.listaProductos.forEach(producto =>{
            contenedor_productos.innerHTML += producto.descripcionHTML()
        })

        this.listaProductos.forEach(producto =>{
            const agregar = document.getElementById('ap-${producto.id}')

            agregar.addEventListener("click", () =>{
                carrito.agregar(producto)
                carrito.guardarEnStorage()
                carrito.mostrarProductos()
                Toastify({
                    avatar: '${producto.img}',
                    text: '¡${producto.nombre} añadido',
                    duration: 2000,
                    gravity: "bottom",
                    position: "right",
                }).showToast();
            })
        })
    }
}


