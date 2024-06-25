const header = document.getElementById('menu')

// Obtener la altura del header
const headerHeight = header.clientHeight

// Función para agregar o quitar la clase sticky al header
let sticky = () => {

    if (!window.pageYOffset > headerHeight) {
        header.classList.remove('sticky')
    }
    header.classList.add('sticky')
}

let resetHeader = () => {
    if (window.pageYOffset === 0) {
        header.classList.remove('sticky')
    }
}

window.addEventListener('scroll', function () {
    sticky()
    resetHeader()
})