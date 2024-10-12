function cargarImagen(imagenes, x, y, ancho, alto, alineacion) {
  imageMode(alineacion);
  image(imagenes, x, y, ancho, alto);
}

function botonUso(x, y, ancho, alto) {
  return mouseX > x && mouseX < x+ancho && mouseY > y && mouseY < y+alto;
}

function botonDibujo(x, y, ancho, alto) {
  fill(200);
  rect(x, y, ancho, alto);
}
