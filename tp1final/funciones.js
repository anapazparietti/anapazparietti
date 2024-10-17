function cargarImagen(imagenes, x, y, ancho, alto, alineacion) {
  imageMode(alineacion);
  image(imagenes, x, y, ancho, alto);
}

function botonUso(x, y, ancho, alto) {
  return mouseX > x && mouseX < x+ancho && mouseY > y && mouseY < y+alto;
}


function escribirTitulo(texto, x, y, tam, alinea) {//para ecribir el texto del título 
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

function botonDibujo2(texto, x, y, ancho, alto) {
  push();
  if (botonUso(x, y, ancho, alto)) {
    fill(126, 216, 31);
  } else {
    fill(57, 103, 8);
  }
  noStroke();
  rect(x, y, ancho, alto, alto/4);
  escribirTitulo2(texto, x+ancho/2, y+alto/2);
  pop();
}

function escribirTitulo2(texto, x, y) {//para ecribir el texto del título y los botones
  push();
  textAlign(CENTER, CENTER);
  stroke(0);
  fill(255)
  textSize(25);
  text(texto, x, y);
  pop();
}
