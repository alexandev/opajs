function mostrar_vacantes(){
    window.location.href="/corporativo?vacantes";
}

var $boton_vacantes=document.querySelector("#boton_vacantes")
$boton_vacantes.addEventListener("click", mostrar_vacantes)