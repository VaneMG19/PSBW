// Ejercicio 4: El DOM también se puede reorganizar

// Función de apoyo: crea una sección con su título y la agrega a la página.
// Se reutiliza en los ejercicios 5 a 10.
const crearSeccion = (textoTitulo) => {
  const seccion = document.createElement("section");
  const encabezado = document.createElement("h3");
  encabezado.textContent = textoTitulo;
  seccion.appendChild(encabezado);
  document.getElementById("extras").appendChild(seccion);
  return seccion;
};

const seccion4 = crearSeccion("Ejercicio 4: Reorganizar página");

const botonReorganizar = document.createElement("button");
botonReorganizar.textContent = "Reorganizar página";

const botonRestaurar = document.createElement("button");
botonRestaurar.textContent = "Restaurar orden";

seccion4.appendChild(botonReorganizar);
seccion4.appendChild(botonRestaurar);

// Se obtienen los nodos que YA existen (no se crean de nuevo)
const zonaPagina = document.getElementById("pagina");
const nodoTitulo = zonaPagina.querySelector("h1");
const nodoDescripcion = document.getElementById("descripcion");
const nodoLista = zonaPagina.querySelector("ul");
const nodoContenedores = document.getElementById("contenedor-tecnologias");

// append() sobre un nodo que ya existe lo MUEVE al final de su padre
botonReorganizar.addEventListener("click", () => {
  zonaPagina.append(nodoContenedores);
  zonaPagina.append(nodoTitulo);
  zonaPagina.append(nodoLista);
  zonaPagina.append(nodoDescripcion);
});

botonRestaurar.addEventListener("click", () => {
  zonaPagina.append(nodoTitulo);
  zonaPagina.append(nodoDescripcion);
  zonaPagina.append(nodoLista);
  zonaPagina.append(nodoContenedores);
});
