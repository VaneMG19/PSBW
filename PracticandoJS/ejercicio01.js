// Ejercicio 1: Construyendo HTML desde JavaScript
const pagina = document.getElementById("pagina");

const titulo = document.createElement("h1");
titulo.textContent = "Tecnologías web";

// Contenedor que agrupa subtítulo y párrafos (se usará como "Descripción" en el ejercicio 4)
const descripcion = document.createElement("div");
descripcion.id = "descripcion";

const subtitulo = document.createElement("h2");
subtitulo.textContent = "Lo básico para crear páginas";

const parrafo1 = document.createElement("p");
parrafo1.textContent = "Una página web se construye combinando varias tecnologías.";

const parrafo2 = document.createElement("p");
parrafo2.textContent = "Cada una tiene una función: estructura, estilo o comportamiento.";

descripcion.appendChild(subtitulo);
descripcion.appendChild(parrafo1);
descripcion.appendChild(parrafo2);

const lista = document.createElement("ul");
const elementos = ["HTML", "CSS", "JavaScript", "DOM", "Git"];

elementos.forEach(elemento => {
  const li = document.createElement("li");
  li.textContent = elemento;
  lista.appendChild(li);
});

pagina.appendChild(titulo);
pagina.appendChild(descripcion);
pagina.appendChild(lista);
