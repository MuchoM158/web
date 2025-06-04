function mostrarCapitulos(manhwa) {
    const capitulos = {
        'manhwa1': [
            { nombre: "Capítulo 1", url: "https://drive.google.com/file/d/1KMs4DBuoagsiE5LaZh_gGDxPZflgcbHC/preview" },
            { nombre: "Capítulo 2", url: "https://drive.google.com/file/d/1bcnCIFYs3jc2_iDzqVI3wKA1tHtxytsL/preview" },
            { nombre: "Capítulo 3", url: "https://drive.google.com/file/d/1qOsPftdxz4p2BPAetZ2Z-7LWuzBeHyWY/preview" },
            { nombre: "Capítulo 4", url: "https://drive.google.com/file/d/1iHIlrnhrvqxeW-BFt-e-6BLIyD48iiJH/preview" }
        ],
        'manhwa2': [
            { nombre: "Capítulo 1", url: "Vagabond cap 01.pdf" },
            { nombre: "Capítulo 2", url: "Vagabond cap 02.pdf" },
            { nombre: "Capítulo 3", url: "Vagabond cap 02.pdf" },
            { nombre: "Capítulo 4", url: "Vagabond cap 02.pdf" }
        ]
    };

    const lista = document.getElementById("lista-capitulos");
    lista.innerHTML = "";
    
    capitulos[manhwa].forEach(capitulo => {
        let item = document.createElement("p");
        item.textContent = capitulo.nombre;
        item.onclick = () => mostrarPDF(capitulo.url, manhwa);
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
