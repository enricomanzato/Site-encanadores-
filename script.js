const formulario = document.querySelector(".formulario")
const mascara = document.querySelector(".mascara-formulario")
const faleConosco = document.querySelector(".fale-conosco")

function mostrarForm() {
    formulario.style.left = "50%";
    formulario.transform = "translateX(-50%)";
    mascara.style.visibility = "visible"
}

function esconderForm() {
    formulario.style.left = "-340px";
    formulario.transform = "translateX(0%)";
    mascara.style.visibility = "hidden"
}

function mostrarFaleConosco() {
    formulario.style.left = "50%";
    formulario.transform = "translateX(-50%)";
    mascara.style.visibility = "visible"
}