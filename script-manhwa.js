function mostrarCapitulos(manhwa) {
    const capitulos = {
        'manhwa1': [
            { nombre: "Prólogo", url: "https://drive.google.com/file/d/1TXW_dxefapJM_ZotqGVEp4hEd-K1LEkz/preview" },
            { nombre: "Capítulo 1", url: "https://drive.google.com/file/d/130DU0-jwOvPWflPEYkxkzYTaRRanTk4x/preview" },
            { nombre: "Capítulo 2", url: "https://drive.google.com/file/d/19WJk698xKAY9t1Yxl_1jVu65f_gBARIT/preview" },
            { nombre: "Capítulo 3", url: "https://drive.google.com/file/d/19EXkH6LNOmsLlpZILg2fkfVgpeqRpSQH/preview" }
        ],
        'manhwa2': [
            { nombre: "Capítulo 1", url: "" },
            { nombre: "Capítulo 2", url: "" },
            { nombre: "Capítulo 3", url: "" },
            { nombre: "Capítulo 4", url: "" }
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
