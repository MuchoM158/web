function mostrarCapitulos(manga) {
    const capitulos = {
        'manga1': [
            { nombre: "Capítulo 3", url: "https://drive.google.com/file/d/1leETu81dObY97hjvhtrY_nDWgEZakTxu/preview" },
            { nombre: "Capítulo 4", url: "https://drive.google.com/file/d/1EJQdalC9CXHbxvALUBth2HnN0kdmbMN5/preview" },
            { nombre: "Capítulo 5", url: "https://drive.google.com/file/d/1HwuEVmzQZxdPkSeOEOpNvifg8x-VMfnI/preview" },
            { nombre: "Capítulo 6", url: "https://drive.google.com/file/d/1NY4RrdwqKv8j1y_qmMUujIyfYj5hNwAH/preview" }
        ],
        'manga2': [
            { nombre: "Capítulo 1", url: "https://drive.google.com/file/d/1Eiv9_EynV17Fl9TUk02XJgU1dvFw-RMI/preview" },
            { nombre: "Capítulo 2", url: "https://drive.google.com/file/d/1xUHhYW7RhGrLIKHc3jY46hgVYrKXuz_w/preview" },
            { nombre: "Capítulo 3", url: "https://drive.google.com/file/d/1ejjDB-17QgW7RMw0KO7JLQiAIpU8hCVc/preview" },
            { nombre: "Capítulo 4", url: "https://drive.google.com/file/d/1v9WhpTBjdYOVBH3DNWYShttmUVS2q6vJ/preview" }
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
