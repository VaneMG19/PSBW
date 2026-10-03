// Ejercicio 5: Agregar y eliminar elementos
const seccion5 = crearSeccion("Ejercicio 5: Agregar y eliminar elementos");

const botonAgregar = document.createElement("button");
botonAgregar.textContent = "Agregar elemento";

const botonEliminar = document.createElement("button");
botonEliminar.textContent = "Eliminar último elemento";

const mensajeLista = document.createElement("p");
const listaElementos = document.createElement("ul");

seccion5.appendChild(botonAgregar);
seccion5.appendChild(botonEliminar);
seccion5.appendChild(mensajeLista);
seccion5.appendChild(listaElementos);

botonAgregar.addEventListener("click", function () {
  // El número siguiente es la cantidad actual de elementos + 1
  const numero = listaElementos.children.length + 1;
  const li = document.createElement("li");
  li.textContent = "Elemento " + numero;
  listaElementos.appendChild(li);
  mensajeLista.textContent = "";
});

botonEliminar.addEventListener("click", function () {
  const ultimo = listaElementos.lastElementChild;
  if (ultimo === null) {
    mensajeLista.textContent = "La lista está vacía, no hay elementos que eliminar.";
  } else {
    listaElementos.removeChild(ultimo);
    mensajeLista.textContent = "";
  }
});
