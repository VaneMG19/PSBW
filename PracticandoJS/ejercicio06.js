// Ejercicio 6: Eventos e interacción
const seccion6 = crearSeccion("Panel interactivo");

const botonOcultar = document.createElement("button");
botonOcultar.textContent = "Ocultar/mostrar descripción";

const botonTitulo = document.createElement("button");
botonTitulo.textContent = "Cambiar texto del título";

const botonOscuro = document.createElement("button");
botonOscuro.textContent = "Modo oscuro";

seccion6.appendChild(botonOcultar);
seccion6.appendChild(botonTitulo);
seccion6.appendChild(botonOscuro);

// Acción 1: ocultar o mostrar una sección (clase "oculto")
let descripcionOculta = false;
botonOcultar.addEventListener("click", () => {
  const bloque = document.getElementById("descripcion");
  if (descripcionOculta) {
    bloque.classList.remove("oculto");
  } else {
    bloque.classList.add("oculto");
  }
  descripcionOculta = !descripcionOculta;
});

// Acción 2: cambiar un texto
const tituloOriginal = document.getElementById("titulo-principal").textContent;
let tituloCambiado = false;
botonTitulo.addEventListener("click", () => {
  const h1 = document.getElementById("titulo-principal");
  if (tituloCambiado) {
    h1.textContent = tituloOriginal;
  } else {
    h1.textContent = "¡Título modificado con un botón!";
  }
  tituloCambiado = !tituloCambiado;
});

// Acción 3: cambiar una clase
let modoOscuro = false;
botonOscuro.addEventListener("click", () => {
  if (modoOscuro) {
    document.body.classList.remove("modo-oscuro");
  } else {
    document.body.classList.add("modo-oscuro");
  }
  modoOscuro = !modoOscuro;
});

// Evento distinto de click: mouseover y mouseout
const cajaMouse = document.createElement("div");
cajaMouse.textContent = "Pasa el mouse sobre esta caja";
cajaMouse.style.border = "2px dashed #555";
cajaMouse.style.padding = "20px";
cajaMouse.style.marginTop = "12px";
cajaMouse.style.textAlign = "center";
seccion6.appendChild(cajaMouse);

cajaMouse.addEventListener("mouseover", () => {
  cajaMouse.style.backgroundColor = "gold";
  cajaMouse.style.color = "black";
  cajaMouse.textContent = "El mouse está encima";
});

cajaMouse.addEventListener("mouseout", () => {
  cajaMouse.style.backgroundColor = "";
  cajaMouse.style.color = "";
  cajaMouse.textContent = "Pasa el mouse sobre esta caja";
});
