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

function escribirTitulo(texto, x, y, tam, alinea) {//para ecribir el texto del título y los botones
  stroke(0);
  fill(255)
  textAlign(CENTER);
  textSize(tam);
  text(texto, x, y);
}

function escribirParrafos (texto, x, y, tam, alinea) {//
  textAlign(CENTER);
  textSize(tam);
  text(texto, x, y);
}
