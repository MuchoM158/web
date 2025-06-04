function mostrarCapitulos(manga) {
    const capitulos = {
        'manga1': [
            { nombre: "Capítulo 1", url: "https://drive.google.com/file/d/1KMs4DBuoagsiE5LaZh_gGDxPZflgcbHC/preview" },
            { nombre: "Capítulo 2", url: "SNV cap 02.pdf" },
            { nombre: "Capítulo 3", url: "SNV cap 03.pdf" },
            { nombre: "Capítulo 4", url: "SNV cap 04.pdf" }
        ],
        'manga2': [
            { nombre: "Vagabond - Capítulo 1", url: "Vagabond cap 01.pdf" },
            { nombre: "Vagabond - Capítulo 2", url: "Vagabond cap 02.pdf" }
        ]
    };

    const lista = document.getElementById("lista-capitulos");
    lista.innerHTML = "";
    
    capitulos[manga].forEach(capitulo => {
        let item = document.createElement("p");
        item.textContent = capitulo.nombre;
        item.onclick = () => mostrarPDF(capitulo.url, manga);
        lista.appendChild(item);
    });

    document.getElementById("capitulos-container").style.display = "block";
}

function cerrarCapitulos() {
    document.getElementById("capitulos-container").style.display = "none";
}

function mostrarPDF(pdfUrl, manga) {
    document.getElementById("visor-pdf").src = pdfUrl;
    document.getElementById("visor-container").style.display = "block";
    document.getElementById("menu-inicio").style.display = "none";
    document.getElementById("capitulos-container").style.display = "none";
}

function volverAlMenu() {
    document.getElementById("visor-container").style.display = "none";
    document.getElementById("menu-inicio").style.display = "flex";
    document.getElementById("capitulos-container").style.display = "block";
    document.querySelector(".titulo").textContent = "MUCHOMANGA";
}
