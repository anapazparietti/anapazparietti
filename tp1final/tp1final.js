//Naiara Victoria Coronel y Ana Paz Parietti comisión 1

let imagenes = [];
let estado;
let bestiario;

function preload() {
  for (let i=0; i<4; i++) {
    imagenes[i] = loadImage("data/pant"+i+".jpg");
  }
}

function setup() {
  createCanvas(640, 480);
  estado = "comienzo";
}


function draw() {
  background(0);

  if (estado ==="comienzo") {
    cargarImagen(imagenes[0], 0, 0, 640, 480, RIGHT);
    textSize(100);
    textAlign(CENTER);
    stroke(0);
    fill(255);
    text("Bestiario", width/2, 100);

    botonDibujo(width/2, 200, 100, 50);//comenzar
    botonDibujo(width/2+150, 200, 100, 50);//créditos
  } else if (estado==="creditos") {
    background(62, 124, 31);
    fill(255);
    text("hola", 200, 200);
    //botonDibujo(width/2, 200, 100, 50);//atrás
  } else if (estado==="cap1") {
    cargarImagen(imagenes[1], 0, 0, 640, 480, RIGHT);
   // botonDibujo(width/2, 200, 100, 50);//atras
  } else {
    cargarImagen(imagenes[3], 0, 0, 640, 480, RIGHT);
  }
}

function mousePressed() {
  if (estado==="comienzo") {
    if (botonUso(width/2, 200, 100, 50)) {
      estado="cap1";
    }
    if (botonUso(width/2+150, 200, 100, 50)) {
      estado="creditos";
    } /*else if (estado==="creditos") {
      if (botonUso(width/2, 200, 100, 50)) {
        estado="comienzo";
      }
    } else if (estado==="cap1") {
      if (botonUso(width/2, 200, 100, 50)) {
        estado="comienzo";
      }
    }*/
  }
}
