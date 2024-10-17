//Naiara Victoria Coronel y Ana Paz Parietti comisión 1

let imagenes = [];
let estado;
let bestiario=[];
let num=0;
let nino=false;
let viaje=false;

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
  background(10);

  //INICIO
  if (estado ==="comienzo") {
    cargarImagen(imagenes[0], 0, 0, 640, 480, RIGHT);
    escribirTitulo("Bestiario", width/2, 100, 100, CENTER);
    //botones
    botonDibujo2("Créditos", 350, 400, 120, 50);
    botonDibujo2("Comenzar", 100, 400, 200, 50);

    //CRÉDITOS
  } else if (estado==="creditos") {
    escribirTitulo("Créditos", width/2, 100, 80, CENTER);
    escribirTitulo("Bestiario de Julio Cortázar", width/2, 170, 35, CENTER);
    escribirTitulo("Trabajo Final de pmiw", width/2, 230, 20, CENTER);
    escribirTitulo("Ana Paz Parietti 93534/8", width/2, 265, 25, CENTER);
    escribirTitulo("Naiara Victoria Coronel 119000/2", width/2, 300, 25, CENTER);
    escribirTitulo("Imágenes hechas con ia", width/2, 350, 20, CENTER);
    //botón
    botonDibujo2("Volver", 20, 20, 120, 50);

    //CAP1 PANTALLA2
  } else if (estado==="pant2") {
    cargarImagen(imagenes[1], 0, 0, 640, 480, RIGHT);
    //botones
    botonDibujo2("Continuar", 350, 400, 150, 50);
    //párrafo
    textSize(20);
    text(bestiario[0], 50, 50, 500);

    //CAP2 PANTALLA3
  } else if (estado==="pant3") {
    cargarImagen(imagenes[1], 0, 0, 640, 480, RIGHT);
    //botones
    botonDibujo2("Explorar la casa", 370, 400, 200, 50);
    botonDibujo2("Quedarte con tus primos", 35, 400, 300, 50);
    //párrafo
    textSize(20);
    text(bestiario[1], 50, 50, 500);

    //CAP3 PANTALLA 4
  } else if (estado==="pant4") {//si elegis jugar con tus primos
    cargarImagen(imagenes[2], 0, 0, 640, 480, RIGHT);
    //boton
    botonDibujo2("Ir a cenar", 200, 400, 200, 50);
    //parrafo
    text(bestiario[2], 50, 50, 500);

    //CAP5-6 PANTALLA 5
  } else if (estado==="pant5") {//capitulo5/6 cena y se habla del viaje
    cargarImagen(imagenes[3], 0, 0, 640, 480, RIGHT);
    //botones
    botonDibujo2("Ir al viaje", 100, 400, 200, 50);
    botonDibujo2("No ir al viaje", 350, 400, 200, 50);
    //parrafos
    text(bestiario[3], 50, 50, 500);

    //CAP5-6 PANTALLA 6
  } else if (estado==="pant6") {//si elegis ir al viaje, te cuentan la reglas
    cargarImagen(imagenes[4], 0, 0, 640, 480, RIGHT);
    //boton
    botonDibujo2("Continuar", 100, 400, 200, 50);
    //parrafo
    text(bestiario[4], 50, 50, 500);

    //CAP 8-9 PANTALLA 7
  } else if (estado==="pant7") {//capitulo 8/9 vuelven del viaje e isabel tiene un encuentro con el tigre
    cargarImagen(imagenes[5], 0, 0, 640, 480, RIGHT);
    //botones
    botonDibujo2("Quedarse en la casa", 330, 400, 250, 50);
    botonDibujo2("Irte de la casa", 100, 400, 200, 50);//se va de la casa, FINAL ALT 4
    //parrafo
    text(bestiario[5], 50, 50, 500);

    //CAP10 PANTALLA 8
  } else if (estado==="pant8") {//se queda en la casa y la historia continua, le preguntan dónde está el tigre
    cargarImagen(imagenes[6], 0, 0, 640, 480, RIGHT);
    //botones
    botonDibujo2("Biblioteca", 350, 400, 130, 50);
    botonDibujo2("Estudio de Nene", 100, 400, 200, 50);
    //parrafo
    text(bestiario[6], 50, 50, 500);

    //FINAL REAL PANTALLA 9
  } else if (estado==="pant9") {//FINAL REAL, ELEGISTE ESTUDIO
    cargarImagen(imagenes[8], 0, 0, 640, 480, RIGHT);
    //boton
    botonDibujo2("Volver a jugar", 100, 400, 200, 50);
    //parrafo
    text(bestiario[7], 50, 50, 500);

    //FINAL ALT 1 PANTALLA 10
  } else if (estado==="pant10") {
    cargarImagen(imagenes[7], 0, 0, 640, 480, RIGHT);
    //boton
    botonDibujo2("Volver a jugar", 100, 400, 200, 50);
    //parrafo
    text(bestiario[8], 50, 50, 500);

    //PANTALLA 11, elegiste explorar la cocina
  } else if (estado==="pant11") {
    cargarImagen(imagenes[11], 0, 0, 640, 480, RIGHT);
    //botones
    botonDibujo2("Confiar en Nino", 100, 400, 200, 50);
    botonDibujo2("No confiar en Nino", 350, 400, 210, 50);
    //parrafo
    text(bestiario[9], 50, 50, 500);

    // PANTALLA12, VAS A EXPLORAR A BIBLIOTECA, DESPUÉS VAS A CENAR
  } else if (estado==="pant12") {
    cargarImagen(imagenes[7], 0, 0, 640, 480, RIGHT);
    //boton
    botonDibujo2("Ir a la cena", 100, 400, 200, 50);//no anda el boton
    //parrafo
    text(bestiario[11], 50, 50, 500);

    //PANTALLA 13, decidiste no ir al viaje familiar
  } else if (estado==="pant13") {
    cargarImagen(imagenes[11], 0, 0, 640, 480, RIGHT);
    //botones
    botonDibujo2("Quedarse en el cuarto", 80, 400, 250, 50);
    botonDibujo2("Ir a explorar", 380, 400, 140, 50);//ir a explorar
    //parrafo
    text(bestiario[12], 50, 50, 500);

    //PANTALLA 14
  } else if (estado==="pant14") { //FINAL ALT 2, solo si no confías en nino, no viajas y decidís explorar.
    cargarImagen(imagenes[11], 0, 0, 640, 480, RIGHT);
    //botones
    botonDibujo2("Volver a jugar", 100, 400, 200, 50);
    //parrafo
    text("pant14", 200, 200);
    text(bestiario[14], 50, 50, 500);

    //PANTALLA 15 FINAL ALT 4
  } else if (estado==="pant15") { // la historia continúa, te preguntan donde esta el tigre y elegís biblioteca
    cargarImagen(imagenes[11], 0, 0, 640, 480, RIGHT);
    //botones
    botonDibujo2("Volver a jugar", 100, 400, 200, 50);
    //parrafo
    text(bestiario[14], 50, 50, 500);

    //FINAL ISABEL SE VA
  } else if (estado==="pant16") { // isabel se va de la casa
    cargarImagen(imagenes[9], 0, 0, 640, 480, RIGHT);
    //botones
    botonDibujo2("Volver a jugar", 100, 400, 200, 50);
    //parrafo
    text(bestiario[15], 50, 50, 500);

    //PANTALLA 17, explorar la casa al principio
  } else if (estado==="pant17") {
    cargarImagen(imagenes[7], 0, 0, 640, 480, RIGHT);
    //botones
    botonDibujo2("Ir a la cocina", 100, 400, 200, 50);
    botonDibujo2("Ir a la biblioteca", 350, 400, 200, 50);
    //parrafo
    text(bestiario[16], 50, 50, 500);

    //PANTALLA 18 te quedas en tu cuarto cuando la familia se va de viaje
  } else if (estado==="pant18") { // isa no va al viaje y se queda en su cuarto
    cargarImagen(imagenes[10], 0, 0, 640, 480, RIGHT);
    //botones
    botonDibujo2("Continuar", 100, 400, 200, 50);
    //parrafo
    text(bestiario[17], 50, 50, 500);
  } else {
    cargarImagen(imagenes[1], 0, 0, 640, 480, RIGHT);//última pantalla
  }
}

function mousePressed() {
  if (estado==="comienzo") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant2";
    }
    if (botonUso(350, 400, 115, 50)) {
      estado="creditos";
    }
  } else if (estado==="creditos") {
    if (botonUso(20, 20, 120, 50)) {
      estado="comienzo";
    }
  } else if (estado==="pant2") {
    if (botonUso(350, 400, 150, 50)) {
      estado="pant3";//avanzar
    }
  } else if (estado==="pant3") {
    if (botonUso(50, 400, 300, 50)) {
      estado="pant4";//quedarte con tus primos
    } else if (botonUso(370, 400, 200, 50)) {
      estado="pant17"; //explorar casa
    }
  } else if (estado==="pant4") {
    if (botonUso(200, 400, 200, 50)) {
      estado="pant5";//quedarte con tus primos
    }
  } else if (estado==="pant5") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant6";//ir al viaje
    } else if (botonUso(350, 400, 200, 50)) {
      estado="pant13";//no ir
      viaje=true;
    }
  } else if (estado==="pant6") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant7";//continuar
    }
  } else if (estado==="pant7") {
    if (botonUso(330, 400, 250, 50)) {
      estado="pant8";//se queda
    } else if (botonUso(100, 400, 200, 50)) {
      estado="pant16";//se va FINAL ALT 4
    }
  } else if (estado==="pant8") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant9";//estudio del Nene FINAL REAL
    } else if (botonUso(350, 400, 115, 50)) {
      estado="pant15";//FINAL ALTERNATIVO 4 final feliz
    }
  } else if (estado==="pant9") { // FINAL REAL
    if (botonUso(100, 400, 200, 50)) {
      estado="pant3"; //volver
       nino=false;
      viaje=false;
    }
  } else if (estado==="pant10") { // FINAL ALT 1
    if (botonUso(100, 400, 200, 50)) {
      estado="pant3"; //volver
       nino=false;
      viaje=false;
    }
  } else if (estado==="pant11") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant4"; // Confías en nino
    } else if (botonUso(350, 400, 115, 50)) {
      estado="pant12"; // No confías en nino
      nino=true;
    }
  } else if (estado==="pant12") {
    if (botonUso(100, 400, 200, 50)) {
      estado= "pant5" // vas a explorar la biblioteca y dsp vas a la cena
    }
  } else if (estado==="pant13") {
    if (botonUso(80, 400, 250, 50)) {
      estado="pant18";// te quedas en tu cuarto
    } else if  (botonUso(380, 400, 140, 50) && nino===true && viaje===true) {
      estado="pant14";
    } else {
      estado="pant10";// final alt 1
      // faltaría ver como cumplir el final alt 2
    }
  } else if (estado==="pant14") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant3"; //volver
    }
  } else if (estado==="pant15") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant3"; //volver
       nino=false;
      viaje=false;
    }
  } else if (estado==="pant16") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant3"; //volver
    }
  } else if (estado==="pant17") {
    if (botonUso(100, 400, 200, 50)) {//elegiste ir a explorar la cocina
      estado= "pant11"
    } else if (botonUso(350, 400, 200, 50)) {//elegiste ir a explorar la biblioteca
      estado= "pant10";
    }
  } else if (estado==="pant18") {//elegiste quedarte en tu cuarto
    if (botonUso(100, 400, 200, 50)) {
      estado= "pant7"//la historia continua, encuentro con el tigre
    }
  }
  //LLAVE FINAL MOUSE PRESSED
}
