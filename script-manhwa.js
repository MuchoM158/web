function mostrarCapitulos(manhwa) {
    const capitulos = {
        'manhwa1': ['SNV cap 01.pdf', 'SNV cap 02.pdf', 'SNV cap 03.pdf', 'SNV cap 04.pdf'],
        'manhwa2': ['Vagabond cap 01.pdf', 'Vagabond cap 02.pdf']
    };
    const lista = document.getElementById("lista-capitulos");
    lista.innerHTML = "";
    
    capitulos[manhwa].forEach((archivo, index) => {
        let item = document.createElement("p");
        item.textContent = `Capítulo ${index + 1}`;
        item.onclick = () => mostrarPDF(archivo, manhwa);
        lista.appendChild(item);
    });

    document.getElementById("capitulos-container").style.display = "block";
}

function cerrarCapitulos() {
    document.getElementById("capitulos-container").style.display = "none";
}

function mostrarPDF(pdfUrl, manhwa) {
    document.getElementById("visor-pdf").src = pdfUrl;
    document.getElementById("visor-container").style.display = "block";

    document.getElementById("menu-inicio").style.display = "none";
    document.getElementById("capitulos-container").style.display = "none";
}

function volverAlMenu() {
    document.getElementById("visor-container").style.display = "none";
    document.getElementById("menu-inicio").style.display = "flex";
    document.getElementById("capitulos-container").style.display = "block";
    document.querySelector(".titulo").textContent = "MUCHOMANHWA";
}
