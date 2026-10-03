// Ejercicio 3: Crear una colección de elementos desde datos
const tecnologiasIniciales = [
  { nombre: "HTML", descripcion: "Lenguaje de marcado que define la estructura de una página.", tipo: "Frontend" },
  { nombre: "CSS", descripcion: "Lenguaje que define el aspecto visual de una página.", tipo: "Frontend" },
  { nombre: "JavaScript", descripcion: "Lenguaje de programación que da comportamiento a la página.", tipo: "Frontend" },
  { nombre: "Node.js", descripcion: "Entorno para ejecutar JavaScript en el servidor.", tipo: "Backend" },
  { nombre: "React", descripcion: "Biblioteca para construir interfaces de usuario.", tipo: "Biblioteca" }
];

// slice() hace una copia del arreglo, así se conserva el original (ejercicio 9)
let tecnologias = tecnologiasIniciales.slice();

const contenedorTecnologias = document.createElement("div");
contenedorTecnologias.id = "contenedor-tecnologias";
document.getElementById("pagina").appendChild(contenedorTecnologias);

// Dibuja las tarjetas. Si existe el campo de búsqueda (ejercicio 8), filtra por nombre.
const renderizar = () => {
  contenedorTecnologias.textContent = "";

  const campoBusqueda = document.getElementById("buscador");
  let texto = "";
  if (campoBusqueda !== null) {
    texto = campoBusqueda.value.toLowerCase().trim();
  }

  let mostradas = 0;

  tecnologias.forEach(tec => {
    if (tec.nombre.toLowerCase().includes(texto)) {
      const tarjeta = document.createElement("div");
      tarjeta.style.border = "2px solid #333";
      tarjeta.style.borderRadius = "6px";
      tarjeta.style.padding = "10px";
      tarjeta.style.margin = "12px 0";

      const nombre = document.createElement("h3");
      nombre.textContent = tec.nombre;

      const desc = document.createElement("p");
      desc.textContent = tec.descripcion;

      const tipo = document.createElement("p");
      tipo.textContent = "Tipo: " + tec.tipo;

      tarjeta.appendChild(nombre);
      tarjeta.appendChild(desc);
      tarjeta.appendChild(tipo);
      contenedorTecnologias.appendChild(tarjeta);
      mostradas++;
    }
  });

  if (mostradas === 0) {
    const vacio = document.createElement("p");
    vacio.textContent = "No se encontraron tecnologías.";
    contenedorTecnologias.appendChild(vacio);
  }
};

renderizar();
