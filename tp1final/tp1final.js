//Naiara Victoria Coronel y Ana Paz Parietti comisión 1

let imagenes = [];
let estado;
let bestiario=[];
let num=0;

function preload() {
  for (let i=0; i<12; i++) {
    imagenes[i] = loadImage("data/pant"+i+".jpg");
  }
  bestiario=loadStrings("data/bestiario.txt");
}

function setup() {
  createCanvas(640, 480);
  estado = "comienzo";
}


function draw() {
  background(0);
  //INICIO
  if (estado ==="comienzo") {
    cargarImagen(imagenes[0], 0, 0, 640, 480, RIGHT);
    escribirTitulo("Bestiario", width/2, 100, 100, CENTER);
    //botones
    botonDibujo(width/2-100, 200, 200, 50);//comenzar
    botonDibujo(width/2+145, 200, 115, 50);//créditos
    escribirTitulo("Comenzar", width/2, 235, 35, CENTER);
    escribirTitulo("Créditos", width/2+200, 235, 30, CENTER);
    //CRÉDITOS
  } else if (estado==="creditos") {
    background(62, 124, 31);
    escribirTitulo("Créditos", width/2, 100, 100, CENTER);
    //botón
    botonDibujo(width/2+145, 200, 115, 50);
    escribirTitulo("Volver", width/2+200, 235, 30, CENTER);
    //CAP1 PANTALLA2
  } else if (estado==="pant2") {
    cargarImagen(imagenes[1], 0, 0, 640, 480, RIGHT);
    //botones
    botonDibujo(width/2, 200, 100, 50);//atrás
    escribirTitulo("Volver", width/2+50, 235, 30, CENTER);
    botonDibujo(width/2+150, 200, 100, 50);//adelante y pasas a la pant3
    escribirTitulo("Continuar", width/2+200, 235, 30, CENTER);
    //párrafo
    textSize(20);
    text(bestiario[0], 50, 50, 500);
    //CAP2 PANTALLA3
  } else if (estado==="pant3") {
    cargarImagen(imagenes[1], 0, 0, 640, 480, RIGHT);
    //botones
    botonDibujo(width/2, 200, 100, 50);//quedarte con tus primos
    escribirTitulo("Opción 1", width/2+50, 235, 30, CENTER);
    botonDibujo(width/2+150, 200, 100, 50);//explorar la casa
    escribirTitulo("Opción2", width/2+200, 235, 30, CENTER);
    //párrafo
    textSize(20);
    text(bestiario[1], 50, 50, 500);
  } else if (estado==="pant4") {//si elegis jugar con tus primos
    cargarImagen(imagenes[2], 0, 0, 640, 480, RIGHT);
    botonDibujo(width/2, 200, 100, 50);//avanzar pant5
    text("pant4", 200, 200);
    text(bestiario[2], 50, 50, 500);
  } else if (estado==="pant5") {//capitulo5/6 cena y se habla del viaje
    cargarImagen(imagenes[3], 0, 0, 640, 480, RIGHT);
    botonDibujo(width/2, 200, 100, 50);//ir al viaje
    botonDibujo(width/2+150, 200, 100, 50);//no ir
    text("pant5", 200, 200);
    text(bestiario[3], 50, 50, 500);
  } else if (estado==="pant6") {//si elegis ir al viaje, te cuentan la reglas
    cargarImagen(imagenes[4], 0, 0, 640, 480, RIGHT);
    botonDibujo(width/2, 200, 100, 50);//pasar pant 7
    text("pant6", 200, 200);
    text(bestiario[4], 50, 50, 500);
  } else if (estado==="pant7") {//capitulo 8/9 vuelven del viaje e isabel tiene un encuentro con el tigre
    cargarImagen(imagenes[5], 0, 0, 640, 480, RIGHT);
    botonDibujo(width/2, 200, 100, 50);//se va de la casa, FINAL ALT 4 AGREGAR BOTÓN PARA VOLVER A EMPEZAR
    botonDibujo(width/2+150, 200, 100, 50);//se queda
    text("pant7", 200, 200);
    text(bestiario[5], 50, 50, 500);
  } else if (estado==="pant8") {//se queda en la casa y la historia continua, le preguntan dónde está el tigre
    cargarImagen(imagenes[6], 0, 0, 640, 480, RIGHT);
    botonDibujo(width/2, 200, 100, 50);//estudio de Nene
    botonDibujo(width/2+150, 200, 100, 50);//la biblioteca
    text("pant8", 200, 200);
    text(bestiario[6], 50, 50, 500);
  } else if (estado==="pant9") {//FINAL REAL, ELEGISTE ESTUDIO
    cargarImagen(imagenes[8], 0, 0, 640, 480, RIGHT);
    botonDibujo(width/2, 200, 100, 50);//volver a jugar, PANT3
    text("pant9", 200, 200);
    text(bestiario[10], 50, 50, 500);
  } else {
    cargarImagen(imagenes[1], 0, 0, 640, 480, RIGHT);//última pantalla
  }
}

function mousePressed() {
  if (estado==="comienzo") {
    if (botonUso(width/2, 200, 100, 50)) {
      estado="pant2";
    }
    if (botonUso(width/2+150, 200, 100, 50)) {
      estado="creditos";
    }
  } else if (estado==="creditos") {
    if (botonUso(width/2+145, 200, 115, 50)) {
      estado="comienzo";
    }
  } else if (estado==="pant2") {
    if (botonUso(width/2, 200, 100, 50)) {
      estado="comienzo";//atras
    } else if (botonUso(width/2+150, 200, 100, 50)) {
      estado="pant3";//avanzar
    }
  } else if (estado==="pant3") {
    if (botonUso(width/2, 200, 100, 50)) {
      estado="pant4";//quedarte con tus primos
    }/* else if (botonUso(width/2+150, 200, 100, 50)) {
     estado="pant16";//explorar casa
     }*/
  } else if (estado==="pant4") {
    if (botonUso(width/2, 200, 100, 50)) {
      estado="pant5";//quedarte con tus primos
    }
  } else if (estado==="pant5") {
    if (botonUso(width/2, 200, 100, 50)) {
      estado="pant6";//ir al viaje
    } else if (botonUso(width/2+150, 200, 100, 50)) {
      estado="pant13";//no ir
    }
  } else if (estado==="pant6") {
    if (botonUso(width/2, 200, 100, 50)) {
      estado="pant7";//continuar
    }
  } else if (estado==="pant7") {
    if (botonUso(width/2, 200, 100, 50)) {
      estado="pant8";//se queda
    } else if (botonUso(width/2+150, 200, 100, 50)) {
      estado="pant17";//se va FINAL ALT 4
    }
  } else if (estado==="pant8") {
    if (botonUso(width/2, 200, 100, 50)) {
      estado="pant9";//estudio del Nene FINAL REAL
    } else if (botonUso(width/2+150, 200, 100, 50)) {
      estado="pant15";//FINAL ALTERNATIVO 4 final feliz
    }
  } else if (estado==="pant9") {
    if (botonUso(width/2, 200, 100, 50)) {
      estado="pant3";//volver
    }
  }







  //LLAVE FINAL MOUSE PRESSED
}
