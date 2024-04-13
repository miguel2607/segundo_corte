
const sala1 = Array(10).fill(false);
const sala2 = Array(10).fill(false);
const precioasiento = 10000
let peliculas


function verDisponibilidad() {  // la funcion muestra la disponibilidad de el cine, el tipo de sala y los asientos
  alert("Sala 1:");
  alert(sala1.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
  alert("Sala 2:");
  alert(sala2.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
}

function reservarAsiento() {  // la funcion nos muestra primero la sala a la que queremos entrar y el numero de el asiento, de cada sala revisa si un asiento ewsta reservado o no y ademas aparece un alert si una silla no esta en la sala
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const asiento = parseInt(prompt("Ingresa el número del asiento (1 a 10)")) - 1;

  if (sala === "1" && !sala1[asiento]) {
    sala1[asiento] = true;
    alert(`Asiento ${asiento + 1} de la sala 1 reservado.`);
  } else if (sala === "2" && !sala2[asiento]) {
    sala2[asiento] = true;
    alert(`Asiento ${asiento + 1} de la sala 2 reservado.`);
  } else {
    alert("El asiento ya está reservado o la sala no es válida.");
  }
}


function verPelicula() { // esta funcion nos deja elegir si deseamos estar en la sala 1 o 2 y los asientos de estas salas
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const asientosLibres = sala === "1" ? sala1.filter(asiento => !asiento) : sala2.filter(asiento => !asiento);

  if (asientosLibres.length > 0) {
    alert(`Hay ${asientosLibres.length} asientos libres en la sala ${sala}.`);
    alert("Disfrutad de la película!");
  } else {
    alert(`Lo siento, todos los asientos de la sala ${sala} están reservados.`);
  }
}


function verBalance (){ // la funcion nos sirve para ver el total recaudado de las salas y al final el total de todo 
  
    const totalRecaudadoSala1 = sala1.reduce((total, asiento) => total + (asiento ? precioasiento : 0), 0); // el .reduce lo que hace es que reduce los elementos de izquiera a derecha hasta tener un solo valor
    const totalRecaudadoSala2 = sala2.reduce((total, asiento) => total + (asiento ? precioasiento : 0), 0);
  
    alert(`Dinero recaudado en la sala 1: $${totalRecaudadoSala1}`);
    alert(`Dinero recaudado en la sala 2: $${totalRecaudadoSala2}`);
    alert(`Dinero recaudado total: $${totalRecaudadoSala1 + totalRecaudadoSala2}`);
  }



function vercartelera (){
peliculas = alert ("las peliculas de la sala 1 son:  1 titanic  2 avegers  3 star wars y \las peliculas de la sala 2 son: 1 toy story 2 los increibles 3cars")

}




while (true) {
  console.log("hola")
  const opcion = prompt("Ingresa tu opción:Bienvenido a la sala de cine"+ " \nSelecciona una opción:" +"1. Ver disponibilidad de asientos"+ 
  " 2. Reservar asiento"+ " 3. Ver ocupación sala" +  "4.ver cartelera" + "5. Dinero recaudado" +  " 6. Salir" );

  switch (opcion) {
    case "1":
      verDisponibilidad();
      break;
    case "2":
      reservarAsiento();
      break;
    case "3":
      verPelicula();
      break;
      case "4" :
      vercartelera();
      break;
      case "5":
        verBalance()
      break
    case "6":
      alert("¡Hasta luego!");
        break;
    default:
      alert("Opción no válida. Intenta de nuevo.");
  }
}