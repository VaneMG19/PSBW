// Ejercicio 2: Modificando elementos existentes
const tituloH1 = document.querySelector("h1");
tituloH1.textContent = "Practicando JavaScript con el DOM";
tituloH1.id = "titulo-principal";
tituloH1.style.color = "darkblue";
tituloH1.style.fontSize = "36px";
tituloH1.style.textAlign = "center";

const parrafosPagina = document.querySelectorAll("#descripcion p");
for (const p of parrafosPagina) {
  p.classList.add("parrafo-descripcion");
  p.style.backgroundColor = "#e8eefc";
  p.style.padding = "8px";
  p.style.marginBottom = "12px";
}
