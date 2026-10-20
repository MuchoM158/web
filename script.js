let actual = 0;
let puntos = Array(RASGOS).fill(0);
let elegidas = [];
let resultadoActual = null;

function mostrar(id) {
  document.querySelectorAll('.pantalla').forEach(s => { s.hidden = s.id !== id; });
}

function empezar() {
  actual = 0;
  puntos = Array(RASGOS).fill(0);
  elegidas = [];
  mostrar('pregunta');
  mostrarPregunta();
}

function mostrarPregunta() {
  const p = PREGUNTAS[actual];
  document.getElementById('progreso').textContent = `${actual + 1} de ${PREGUNTAS.length}`;
  document.getElementById('texto-pregunta').textContent = p.texto;
  const cont = document.getElementById('opciones');
  cont.innerHTML = '';
  p.opciones.forEach(o => {
    const b = document.createElement('button');
    b.textContent = o.texto;
    b.addEventListener('click', () => elegir(o));
    cont.appendChild(b);
  });
}

function elegir(opcion) {
  elegidas.push(opcion);
  opcion.pts.forEach((x, i) => { puntos[i] += x; });
  actual++;
  if (actual < PREGUNTAS.length) mostrarPregunta();
  else terminar();
}

function volver() {
  if (actual === 0) {
    mostrar('portada');
    return;
  }
  actual--;
  const ultima = elegidas.pop();
  ultima.pts.forEach((x, i) => { puntos[i] -= x; });
  mostrarPregunta();
}

function terminar() {
  resultadoActual = calcularResultado(puntos);
  const p = PERSONAJES[resultadoActual];
  document.getElementById('nombre-resultado').textContent = p.nombre;
  document.getElementById('equipo-resultado').textContent = p.equipo;
  document.getElementById('descripcion').textContent = p.descripcion;
  document.getElementById('mensaje').textContent = p.mensaje;
  const img = document.getElementById('img-personaje');
  img.alt = p.nombre;
  img.src = p.imagen;
  mostrar('resultado');
}

function cargarImagen(src) {
  return new Promise(resolver => {
    const img = new Image();
    img.onload = () => resolver(img);
    img.onerror = () => resolver(null);
    img.src = src;
  });
}

async function descargar() {
  const p = PERSONAJES[resultadoActual];
  const [logo, foto] = await Promise.all([cargarImagen('img/titulo.png'), cargarImagen(p.imagen)]);
  const canvas = document.createElement('canvas');
  dibujarTarjeta(canvas, p, logo, foto);
  canvas.toBlob(blob => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mi-personaje-${resultadoActual.toLowerCase()}.png`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }, 'image/png');
}

const imgPersonaje = document.getElementById('img-personaje');
imgPersonaje.addEventListener('load', () => { imgPersonaje.hidden = false; });
imgPersonaje.addEventListener('error', () => { imgPersonaje.hidden = true; });

document.getElementById('btn-empezar').addEventListener('click', empezar);
document.getElementById('btn-atras').addEventListener('click', volver);
document.getElementById('btn-descargar').addEventListener('click', descargar);
document.getElementById('btn-reiniciar').addEventListener('click', empezar);
