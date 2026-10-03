// Ejercicio 7: Formulario dinámico
const seccion7 = crearSeccion("Ejercicio 7: Registrar una tecnología");
const formularioTec = document.createElement("form");

// Función de apoyo: crea una etiqueta con su campo de texto dentro del formulario
function crearCampo(textoEtiqueta) {
  const etiqueta = document.createElement("label");
  etiqueta.textContent = textoEtiqueta + ": ";
  const campo = document.createElement("input");
  campo.type = "text";
  etiqueta.appendChild(campo);
  formularioTec.appendChild(etiqueta);
  formularioTec.appendChild(document.createElement("br"));
  return campo;
}

const campoNombre = crearCampo("Nombre");
const campoDescripcion = crearCampo("Descripción");
const campoTipo = crearCampo("Tipo (categoría)");

const botonAgregarTec = document.createElement("button");
botonAgregarTec.type = "submit";
botonAgregarTec.textContent = "Agregar tecnología";
formularioTec.appendChild(botonAgregarTec);

const mensajeTec = document.createElement("p");

seccion7.appendChild(formularioTec);
seccion7.appendChild(mensajeTec);

formularioTec.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nombre = campoNombre.value.trim();
  const descripcion = campoDescripcion.value.trim();
  const tipo = campoTipo.value.trim();

  if (nombre === "" || descripcion === "" || tipo === "") {
    mensajeTec.className = "error";
    mensajeTec.textContent = "Todos los campos son obligatorios. Completa nombre, descripción y tipo.";
    return;
  }

  tecnologias.push({ nombre: nombre, descripcion: descripcion, tipo: tipo });

  // Si ya se cargó el ejercicio 9, se guarda en localStorage
  if (typeof guardarTecnologias === "function") {
    guardarTecnologias();
  }

  renderizar();
  formularioTec.reset();
  mensajeTec.className = "exito";
  mensajeTec.textContent = "Tecnología agregada correctamente.";
});
