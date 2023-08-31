const descuentos = document.getElementById("descuentos")


descuentos.addEventListener("click", () => {
    aplicarDescuento();
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Aplicaste tus descuentos',
        showConfirmButton: false,
        timer: 1500
    })
})

