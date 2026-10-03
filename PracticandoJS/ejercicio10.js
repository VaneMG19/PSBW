// Ejercicio 10: Formularios y AJAX
const seccion10 = crearSeccion("Ejercicio 10: Buscar usuario de GitHub");

// Parte 1: formulario creado desde JavaScript
const formularioGithub = document.createElement("form");

const campoUsuario = document.createElement("input");
campoUsuario.type = "text";
campoUsuario.placeholder = "Usuario de GitHub (ej. octocat)";

const botonBuscar = document.createElement("button");
botonBuscar.type = "submit";
botonBuscar.textContent = "Buscar usuario";

const resultado = document.createElement("div");

formularioGithub.appendChild(campoUsuario);
formularioGithub.appendChild(botonBuscar);
seccion10.appendChild(formularioGithub);
seccion10.appendChild(resultado);

function mostrarMensaje(texto, clase) {
  resultado.textContent = "";
  const p = document.createElement("p");
  p.textContent = texto;
  p.className = clase;
  resultado.appendChild(p);
}

function mostrarUsuario(datos) {
  resultado.textContent = ""; // reemplaza la búsqueda anterior

  const avatar = document.createElement("img");
  avatar.src = datos.avatar_url;
  avatar.alt = "Avatar de " + datos.login;
  avatar.width = 120;

  const login = document.createElement("h3");
  login.textContent = datos.login;

  const nombreReal = document.createElement("p");
  nombreReal.textContent = "Nombre real: " + (datos.name || "No disponible");

  const repos = document.createElement("p");
  repos.textContent = "Repositorios públicos: " + datos.public_repos;

  const seguidores = document.createElement("p");
  seguidores.textContent = "Seguidores: " + datos.followers;

  const siguiendo = document.createElement("p");
  siguiendo.textContent = "Siguiendo: " + datos.following;

  const enlace = document.createElement("a");
  enlace.href = datos.html_url;
  enlace.textContent = "Ver perfil en GitHub";
  enlace.target = "_blank";

  resultado.appendChild(avatar);
  resultado.appendChild(login);
  resultado.appendChild(nombreReal);
  resultado.appendChild(repos);
  resultado.appendChild(seguidores);
  resultado.appendChild(siguiendo);
  resultado.appendChild(enlace);
}

// Parte 2: capturar el envío del formulario
formularioGithub.addEventListener("submit", async function (evento) {
  evento.preventDefault(); // evita que el navegador recargue la página

  const usuario = campoUsuario.value.trim();

  if (usuario === "") {
    mostrarMensaje("Escribe un nombre de usuario de GitHub.", "error");
    return;
  }

  mostrarMensaje("Buscando...", "");

  // Partes 3, 4 y 5: petición, procesamiento y manejo de errores
  try {
    const respuesta = await fetch("https://api.github.com/users/" + encodeURIComponent(usuario));

    if (respuesta.status === 404) {
      mostrarMensaje('El usuario "' + usuario + '" no existe en GitHub.', "error");
      return;
    }

    if (!respuesta.ok) {
      mostrarMensaje("El servidor respondió con un error (código " + respuesta.status + ").", "error");
      return;
    }

    const datos = await respuesta.json();
    mostrarUsuario(datos);
  } catch (error) {
    mostrarMensaje("No se pudo completar la petición. Revisa tu conexión a internet.", "error");
  }
});
