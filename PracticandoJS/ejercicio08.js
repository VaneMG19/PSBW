// Ejercicio 8: Buscar y filtrar información
const seccion8 = crearSeccion("Ejercicio 8: Buscar tecnología");

const etiquetaBuscador = document.createElement("label");
etiquetaBuscador.textContent = "Buscar tecnología: ";

const buscador = document.createElement("input");
buscador.type = "text";
buscador.id = "buscador"; // renderizar() (ejercicio 3) lee este campo para filtrar
buscador.placeholder = "Escribe un nombre...";

etiquetaBuscador.appendChild(buscador);
seccion8.appendChild(etiquetaBuscador);

// El evento "input" se dispara cada vez que cambia el texto del campo
buscador.addEventListener("input", renderizar);
