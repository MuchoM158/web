const FUENTE = 'system-ui, "Segoe UI", Roboto, Arial, sans-serif';
const C = { negro: '#111111', carbon: '#1f1f1f', naranja: '#f26a1b', crema: '#fff4e6', gris: '#9a9a9a' };

function lineas(ctx, texto, anchoMax) {
  const res = [];
  let linea = '';
  texto.split(' ').forEach(palabra => {
    const prueba = linea ? linea + ' ' + palabra : palabra;
    if (ctx.measureText(prueba).width > anchoMax && linea) {
      res.push(linea);
      linea = palabra;
    } else {
      linea = prueba;
    }
  });
  if (linea) res.push(linea);
  return res;
}

function ajustar(img, maxAncho, maxAlto) {
  const k = Math.min(maxAncho / img.width, maxAlto / img.height);
  return { w: img.width * k, h: img.height * k };
}

function rectRedondo(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function dibujarTarjeta(canvas, p, logo, foto) {
  const W = 1080, M = 90, ANCHO = W - 2 * M;
  const ctx = canvas.getContext('2d');

  ctx.font = `400 38px ${FUENTE}`;
  const lDesc = lineas(ctx, p.descripcion, ANCHO);
  ctx.font = `italic 400 36px ${FUENTE}`;
  const lMsj = lineas(ctx, p.mensaje, ANCHO - 100);
  const tLogo = logo ? ajustar(logo, 640, 190) : null;
  const tFoto = foto ? ajustar(foto, 640, 640) : null;

  let alto = 80;
  if (tLogo) alto += tLogo.h + 50;
  if (tFoto) alto += tFoto.h + 50;
  alto += 50 + 112 + 60 + 40;
  alto += lDesc.length * 54 + 50;
  alto += lMsj.length * 50 + 60 + 90;

  canvas.width = W;
  canvas.height = Math.ceil(alto);

  ctx.fillStyle = C.negro;
  ctx.fillRect(0, 0, W, canvas.height);
  const g = ctx.createRadialGradient(W / 2, canvas.height * 0.25, 0, W / 2, canvas.height * 0.25, canvas.height * 0.7);
  g.addColorStop(0, '#3a2112');
  g.addColorStop(1, C.negro);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, canvas.height);
  ctx.strokeStyle = C.naranja;
  ctx.lineWidth = 6;
  rectRedondo(ctx, 24, 24, W - 48, canvas.height - 48, 28);
  ctx.stroke();
  ctx.textAlign = 'center';
  let y = 80;
  if (tLogo) {
    ctx.drawImage(logo, (W - tLogo.w) / 2, y, tLogo.w, tLogo.h);
    y += tLogo.h + 50;
  }
  if (tFoto) {
    ctx.drawImage(foto, (W - tFoto.w) / 2, y, tFoto.w, tFoto.h);
    y += tFoto.h + 50;
  }

  ctx.fillStyle = C.gris;
  ctx.font = `400 40px ${FUENTE}`;
  ctx.fillText('Eres...', W / 2, y + 34);
  y += 50;

  let tam = 96;
  ctx.font = `800 ${tam}px ${FUENTE}`;
  while (ctx.measureText(p.nombre).width > ANCHO && tam > 40) {
    tam -= 4;
    ctx.font = `800 ${tam}px ${FUENTE}`;
  }
  ctx.fillStyle = C.naranja;
  ctx.fillText(p.nombre, W / 2, y + 84);
  y += 112;

  ctx.fillStyle = C.crema;
  ctx.font = `600 32px ${FUENTE}`;
  ctx.fillText(p.equipo.toUpperCase(), W / 2, y + 30);
  y += 60 + 40;

  ctx.font = `400 38px ${FUENTE}`;
  lDesc.forEach((l, i) => ctx.fillText(l, W / 2, y + 38 + i * 54));
  y += lDesc.length * 54 + 50;

  const hCaja = lMsj.length * 50 + 60;
  ctx.fillStyle = C.carbon;
  rectRedondo(ctx, M, y, ANCHO, hCaja, 24);
  ctx.fill();
  ctx.strokeStyle = C.naranja;
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.fillStyle = C.crema;
  ctx.font = `italic 400 36px ${FUENTE}`;
  lMsj.forEach((l, i) => ctx.fillText(l, W / 2, y + 62 + i * 50));

  return canvas;
}
