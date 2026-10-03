// Ejercicio 9: Estado y LocalStorage
function guardarTecnologias() {
  // localStorage solo guarda texto, por eso el arreglo se convierte a JSON
  localStorage.setItem("tecnologias", JSON.stringify(tecnologias));
}

// Al cargar la página: ¿hay información guardada?
const datosGuardados = localStorage.getItem("tecnologias");
if (datosGuardados !== null) {
  tecnologias = JSON.parse(datosGuardados);
  renderizar();
}

const seccion9 = crearSeccion("Ejercicio 9: Datos guardados");

const botonBorrar = document.createElement("button");
botonBorrar.textContent = "Borrar datos guardados";
seccion9.appendChild(botonBorrar);

botonBorrar.addEventListener("click", function () {
  localStorage.removeItem("tecnologias");
  tecnologias = [...tecnologiasIniciales];
  renderizar();
});
