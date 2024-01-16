const menuPrimario = document.querySelector(".menu__primario")
const menuSecundario = document.querySelector(".menu__secundario")
const iconPrimario = document.querySelector(".cabecalho__icon")
const iconSecundario = document.querySelector(".cabecalho__icon__secundario")

menuPrimario.addEventListener("click", abrirMenuPrimario)
menuSecundario.addEventListener("click", abrirMenuSecundario)

function abrirMenuPrimario (event) {
    event.preventDefault()
    menuPrimario.classList.toggle("active")
    if (menuPrimario.classList.contains("active")) {
        iconPrimario.setAttribute("class","fa-solid fa-caret-up cabecalho__icon")
    }else {
        iconPrimario.setAttribute("class","fa-solid fa-caret-down cabecalho__icon")
    }
}

function abrirMenuSecundario (event) { 
    event.preventDefault()
    menuSecundario.classList.toggle("active")
    if (menuSecundario.classList.contains("active")) {
        iconSecundario.setAttribute("class","fa-solid fa-xmark cabecalho__icon__secundario")
        console.log("Aqui")
    }else {
        iconSecundario.setAttribute("class","fa-solid fa-bars cabecalho__icon__secundario")
    }
}
