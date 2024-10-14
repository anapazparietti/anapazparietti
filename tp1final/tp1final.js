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
    botonDibujo(100, 400, 200, 50);//comenzar
    botonDibujo(350, 400, 115, 50);//créditos
    escribirTitulo("Comenzar", 200, 440, 35, CENTER);
    escribirTitulo("Créditos", 410, 440, 30, CENTER);

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
    botonDibujo(100, 400, 200, 50);//atrás
    escribirTitulo("Volver", 200, 440, 20, CENTER);
    botonDibujo(350, 400, 115, 50);//adelante y pasas a la pant3
    escribirTitulo("Continuar", 410, 440, 20, CENTER);

    //párrafo
    textSize(20);
    text(bestiario[0], 50, 50, 500);


    //CAP2 PANTALLA3
  } else if (estado==="pant3") {
    cargarImagen(imagenes[1], 0, 0, 640, 480, RIGHT);

    //botones
    botonDibujo(100, 400, 200, 50);//quedarte con tus primos
    escribirTitulo("quedarte con tus primos", 200, 440, 20, CENTER);
    botonDibujo(350, 400, 115, 50);//explorar la casa
    escribirTitulo("explorar", 410, 440, 20, CENTER);

    //párrafo
    textSize(20);
    text(bestiario[1], 50, 50, 500);
    

    //CAP3 PANTALLA 4
  } else if (estado==="pant4") {//si elegis jugar con tus primos
    cargarImagen(imagenes[2], 0, 0, 640, 480, RIGHT);

    //boton
    botonDibujo(200, 400, 200, 50);//avanzar pant5
    escribirTitulo("ir a la cena", 300, 440, 20, CENTER);

    //parrafo
    text("pant4", 200, 200);
    text(bestiario[2], 50, 50, 500);
    

    //CAP5-6 PANTALLA 5
  } else if (estado==="pant5") {//capitulo5/6 cena y se habla del viaje
    cargarImagen(imagenes[3], 0, 0, 640, 480, RIGHT);

    //botones
    botonDibujo(100, 400, 200, 50);//ir al viaje
    escribirTitulo("ir al viaje", 200, 440, 20, CENTER);
    botonDibujo(350, 400, 115, 50);//no ir
    escribirTitulo("no ir al viaje", 410, 440, 20, CENTER);

    //parrafos
    text("pant5", 200, 200);
    text(bestiario[3], 50, 50, 500);

    //CAP5-6 PANTALLA 6
  } else if (estado==="pant6") {//si elegis ir al viaje, te cuentan la reglas
    cargarImagen(imagenes[4], 0, 0, 640, 480, RIGHT);

    //boton
    botonDibujo(100, 400, 200, 50);//pasar pant 7
    escribirTitulo("siguiente", 200, 440, 20, CENTER);

    //parrafo
    text("pant6", 200, 200);
    text(bestiario[4], 50, 50, 500);

    //CAP 8-9 PANTALLA 7
  } else if (estado==="pant7") {//capitulo 8/9 vuelven del viaje e isabel tiene un encuentro con el tigre
    cargarImagen(imagenes[5], 0, 0, 640, 480, RIGHT);

    //botones
    botonDibujo(100, 400, 200, 50);//se va de la casa, FINAL ALT 4 AGREGAR BOTÓN PARA VOLVER A EMPEZAR
    escribirTitulo("quedarse en la casa", 200, 440, 20, CENTER);
    botonDibujo(350, 400, 115, 50);//se queda
    escribirTitulo("irte de la casa", 410, 440, 20, CENTER);

    //parrafo
    text("pant7", 200, 200);
    text(bestiario[5], 50, 50, 500);

    //CAP10 PANTALLA 8
  } else if (estado==="pant8") {//se queda en la casa y la historia continua, le preguntan dónde está el tigre
    cargarImagen(imagenes[6], 0, 0, 640, 480, RIGHT);

    //botones
    botonDibujo(100, 400, 200, 50);//estudio de Nene
    escribirTitulo("estudio de Nene", 200, 440, 20, CENTER);
    botonDibujo(350, 400, 115, 50);//la biblioteca
    escribirTitulo("biblioteca", 410, 440, 20, CENTER);

    //parrafo
    text("pant8", 200, 200);
    text(bestiario[6], 50, 50, 500);

    //FINAL REAL PANTALLA 9
  } else if (estado==="pant9") {//FINAL REAL, ELEGISTE ESTUDIO
    cargarImagen(imagenes[8], 0, 0, 640, 480, RIGHT);

    //boton
    botonDibujo(100, 400, 200, 50);//volver a jugar, PANT3
    escribirTitulo("volver a jugar", 200, 440, 20, CENTER);

    //parrafo
    text("pant9", 200, 200);
    text(bestiario[7], 50, 50, 500);
    
    
  } else if (estado==="pant10") {//FINAL ALT 1
    cargarImagen(imagenes[7], 0, 0, 640, 480, RIGHT);

    //boton
    botonDibujo(100, 400, 200, 50);//volver a jugar, PANT3
    escribirTitulo("volver a jugar", 200, 440, 20, CENTER);

    //parrafo
    text("pant10", 200, 200);
    text(bestiario[8], 50, 50, 500);
    
    
  } else if (estado==="pant11") {
    cargarImagen(imagenes[11], 0, 0, 640, 480, RIGHT);

    //botones
    botonDibujo(100, 400, 200, 50);// confio en nino, va a pag4
    escribirTitulo("confía en Nino", 200, 440, 20, CENTER);
    botonDibujo(350, 400, 115, 50);//la biblioteca
    escribirTitulo("no confiar en Nino", 410, 440, 20, CENTER);


    //parrafo
    text("pant11", 200, 200);
    text(bestiario[9], 50, 50, 500);
    
  } else if (estado==="pant12") {// VAS A EXPLORAR A BIBLIOTECA, EDSPUÉS VAS A CENAR
   cargarImagen(imagenes[7], 0, 0, 640, 480, RIGHT);
   
   //boton
   botonDibujo(100, 400, 200, 50);//
   escribirTitulo("ir a la cena", 200, 440, 20, CENTER);
   
   
   //parrafo
   text("pant12", 200, 200);
   text(bestiario[11], 50, 50, 500);
   
} else if (estado==="pant13") {
  cargarImagen(imagenes[11], 0, 0, 640, 480, RIGHT);

  //botones
  botonDibujo(100, 400, 200, 50);//
  escribirTitulo("quedarse en el cuarto", 200, 440, 20, CENTER);
  botonDibujo(350, 400, 115, 50);//ir a explorar
  escribirTitulo("explorar", 410, 440, 20, CENTER);

  //parrafo
  text("pant13", 200, 200);
  text(bestiario[12], 50, 50, 500);
  
  
} else if (estado==="pant14") { //FINAL ALT 2, solo si no confías en nino, no viajas y decidís explorar.
  cargarImagen(imagenes[11], 0, 0, 640, 480, RIGHT);

  //botones
  botonDibujo(100, 400, 200, 50);//
  escribirTitulo("volver a intentarlo", 200, 440, 20, CENTER);


  //parrafo
  text("pant14", 200, 200);
  text(bestiario[14], 50, 50, 500);

  //FINAL ALT 4
} else if (estado==="pant15") { // la historia continúa, te preguntan donde esta el tigre y elegís biblioteca
  cargarImagen(imagenes[11], 0, 0, 640, 480, RIGHT);

  //botones
  botonDibujo(100, 400, 200, 50);//
  escribirTitulo("volver a intentarlo", 200, 440, 20, CENTER);


  //parrafo
  text("pant15", 200, 200);
  text(bestiario[14], 50, 50, 500);
  
  
} else if (estado==="pant16") { // isabel se va de la casa
  cargarImagen(imagenes[9], 0, 0, 640, 480, RIGHT);

  //botones
  botonDibujo(100, 400, 200, 50);
  escribirTitulo("volver a intentarlo", 200, 440, 20, CENTER);


  //parrafo
  text("pant16", 200, 200);
  text(bestiario[15], 50, 50, 500);
  
  
} else if (estado==="pant17") { // pantalla dsp de elegir la opción de explorar la casa en pant3
  cargarImagen(imagenes[7], 0, 0, 640, 480, RIGHT);

  //botones
  botonDibujo(100, 400, 200, 50);
  escribirTitulo("cocina", 200, 440, 20, CENTER);
  botonDibujo(350, 400, 115, 50);//ir a explorar
  escribirTitulo("biblioteca", 410, 440, 20, CENTER);


  //parrafo
  text("pant17", 200, 200);
  text(bestiario[16], 50, 50, 500);
  
  
} else if (estado==="pant18") { // isa no va al viaje y se queda en su cuarto
  cargarImagen(imagenes[10], 0, 0, 640, 480, RIGHT);

  //botones
  botonDibujo(100, 400, 200, 50);
  escribirTitulo("continuar", 200, 440, 20, CENTER);



  //parrafo
  text("pant18", 200, 200);
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
    if (botonUso(width/2+145, 200, 115, 50)) {
      estado="comienzo";
    }
  } else if (estado==="pant2") {
    if (botonUso(100, 400, 200, 50)) { //atrás
      estado="comienzo";
    } else if (botonUso(350, 400, 115, 50)) {
      estado="pant3";//avanzar
    }
  } else if (estado==="pant3") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant4";//quedarte con tus primos
    } else if (botonUso(350, 400, 115, 50)) {
      estado="pant17"; //explorar casa
    }
  } else if (estado==="pant4") {
    if (botonUso(200, 400, 200, 50)) {
      estado="pant5";//quedarte con tus primos
    }
  } else if (estado==="pant5") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant6";//ir al viaje
    } else if (botonUso(350, 400, 115, 50)) {
      estado="pant13";//no ir
    }
  } else if (estado==="pant6") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant7";//continuar
    }
  } else if (estado==="pant7") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant8";//se queda
    } else if (botonUso(350, 400, 115, 50)) {
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
    }
  } else if (estado==="pant10") { // FINAL ALT 1
    if (botonUso(100, 400, 200, 50)) {
      estado="pant3"; //volver
    }
  } else if (estado==="pant11") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant4"; // Confías en nino
    } else if (botonUso(350, 400, 115, 50)) {
      estado="pant12"; // No confías en nino
    }
  } else if (estado==="pant12") {
    if (botonUso(100, 400, 200, 50)) {
      estado= "pant5" // vas a explorar la biblioteca y dsp vas a la cena
    }
  } else if (estado==="pant13") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant18";// te quedas en tu cuarto
    } else if  (botonUso(350, 400, 115, 50)) {
      estado="pant7";// final alt 1
      // faltaría ver como cumplir el final alt 2
    }
  } else if (estado==="pant14") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant3"; //volver
    }
  } else if (estado==="pant15") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant3"; //volver
    }
  } else if (estado==="pant16") {
    if (botonUso(100, 400, 200, 50)) {
      estado="pant3"; //volver
    }
  } else if (estado==="pant17") {
    if (botonUso(100, 400, 200, 50)) {
      estado= "pant11"
    } else if (botonUso(350, 400, 115, 50)) {
      estado= "pant10";
    } else if (estado==="pant18") {
    if (botonUso(100, 400, 200, 50)) {
      estado= "pant7"
    }
  }
 }









//LLAVE FINAL MOUSE PRESSED
}
