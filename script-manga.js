function mostrarCapitulos(manga) {
    const capitulos = {
        'manga1': [
            { nombre: "Capítulo 5", url: "https://drive.google.com/file/d/1HwuEVmzQZxdPkSeOEOpNvifg8x-VMfnI/preview" },
            { nombre: "Capítulo 6", url: "https://drive.google.com/file/d/1NY4RrdwqKv8j1y_qmMUujIyfYj5hNwAH/preview" },
            { nombre: "Capítulo 7", url: "https://drive.google.com/file/d/18nUJmaoAF4C1JguGvXN6iZf_qLA5wK9m/preview" },
            { nombre: "Capítulo 8", url: "https://drive.google.com/file/d/1qQKE3E8h2lxARQW_CkycKZf1URCfU3_4/preview" }
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

const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPause");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const volumeSlider = document.getElementById("volume");
const songTitle = document.getElementById("songTitle");
const timeDisplay = document.getElementById("timeDisplay");

let songs = [
    { title: "TEMA 01", file: "TEMA 01.mp3" },
    { title: "TEMA 02", file: "TEMA 02.mp3" },
    { title: "TEMA 03", file: "TEMA 03.mp3" },
    { title: "TEMA 04", file: "TEMA 04.mp3" },
    { title: "TEMA 05", file: "TEMA 05.mp3" },
    { title: "TEMA 06", file: "TEMA 06.mp3" },
    { title: "TEMA 07", file: "TEMA 07.mp3" }
];

let songIndex = 0;

function loadSong(index) {
    audio.src = songs[index].file;
    songTitle.textContent = songs[index].title;
    audio.load();
}

function updateTime() {
    let minutes = Math.floor(audio.currentTime / 60).toString().padStart(2, "0");
    let seconds = Math.floor(audio.currentTime % 60).toString().padStart(2, "0");
    let durationMinutes = Math.floor(audio.duration / 60).toString().padStart(2, "0") || "00";
    let durationSeconds = Math.floor(audio.duration % 60).toString().padStart(2, "0") || "00";
    timeDisplay.textContent = `${minutes}:${seconds} / ${durationMinutes}:${durationSeconds}`;
}

function playPause() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        audio.pause();
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
}

function prevSong() {
    songIndex = (songIndex > 0) ? songIndex - 1 : songs.length - 1;
    loadSong(songIndex);
    audio.play();
}

function nextSong() {
    songIndex = (songIndex < songs.length - 1) ? songIndex + 1 : 0;
    loadSong(songIndex);
    audio.play();
}

audio.onended = nextSong;
audio.ontimeupdate = updateTime;
volumeSlider.oninput = () => audio.volume = volumeSlider.value;

playPauseBtn.addEventListener("click", playPause);
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

loadSong(songIndex);
