const RASGOS = 7;

function estadisticasAzar() {
  const media = Array(RASGOS).fill(0);
  const varianza = Array(RASGOS).fill(0);
  PREGUNTAS.forEach(p => {
    for (let r = 0; r < RASGOS; r++) {
      const vals = p.opciones.map(o => o.pts[r]);
      const m = vals.reduce((a, b) => a + b, 0) / vals.length;
      const v = vals.reduce((a, b) => a + (b - m) ** 2, 0) / vals.length;
      media[r] += m;
      varianza[r] += v;
    }
  });
  return { media, desvio: varianza.map(Math.sqrt) };
}

function perfilesNormalizados() {
  const nombres = Object.keys(PERFILES);
  const filas = nombres.map(n => PERFILES[n]);
  const media = [], desvio = [];
  for (let r = 0; r < RASGOS; r++) {
    const col = filas.map(f => f[r]);
    const m = col.reduce((a, b) => a + b, 0) / col.length;
    media.push(m);
    desvio.push(Math.sqrt(col.reduce((a, b) => a + (b - m) ** 2, 0) / col.length));
  }
  return nombres.map((n, i) => ({
    nombre: n,
    z: filas[i].map((x, r) => (x - media[r]) / desvio[r])
  }));
}

function similitud(a, b) {
  const dot = a.reduce((s, x, i) => s + x * b[i], 0);
  const na = Math.sqrt(a.reduce((s, x) => s + x * x, 0));
  const nb = Math.sqrt(b.reduce((s, x) => s + x * x, 0));
  return dot / (na * nb + 1e-9);
}

function calcularResultado(puntos) {
  const { media, desvio } = estadisticasAzar();
  const z = puntos.map((x, r) => (x - media[r]) / desvio[r]);
  let mejor = null, mejorSim = -Infinity;
  perfilesNormalizados().forEach(p => {
    const s = similitud(z, p.z);
    if (s > mejorSim) { mejorSim = s; mejor = p.nombre; }
  });
  return mejor;
}
