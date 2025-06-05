document.addEventListener("DOMContentLoaded", function() {
    let titulo = document.getElementById("titulo");
    let textos = ["MuchoManga", "MuchoManhwa"];
    let index = 0;

    function cambiarTitulo() {
        titulo.style.opacity = 0;
        setTimeout(() => {
            titulo.textContent = textos[index];
            titulo.style.opacity = 1;
            
            index = (index + 1) % textos.length;

        }, 1000);
    }

    let intervalo = setInterval(cambiarTitulo, 3000);
});

// Redireccionar según la sección elegida
function irAPagina(url) {
    window.location.href = url;
}
