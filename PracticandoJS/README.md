# Practicando JavaScript (PSBW)

## Ejercicio 1: Construyendo HTML desde JavaScript

1. **¿Qué hace?** Crea desde JavaScript un título (h1), un subtítulo (h2), dos párrafos y una lista de cinco elementos, y los agrega a la página. El HTML solo tiene un contenedor vacío.
2. **Conceptos:** arreglos, ciclo `for`, DOM: `createElement()`, `textContent`, `appendChild()`.
3. **¿Ya los conocía?** no
4. **¿Dificultades?** un poco
5. **¿Utilizaste IA?** un poco.
   - Problema: armar la estructura de la página solo con JavaScript.
   - Qué pedí: ayuda para resolver los ejercicios de la práctica con lo visto en clase.
   - Qué usé: el código del ejercicio 1.
   - `document.createElement("h1")` crea un elemento nuevo en memoria, todavía invisible. `textContent` le asigna su texto. `appendChild(hijo)` lo inserta dentro de un elemento que ya está en la página; solo entonces se ve.

## Ejercicio 2: Modificando elementos existentes

1. **¿Qué hace?** Selecciona el título, cambia su texto, le agrega un `id`, agrega una clase a los párrafos y modifica color, tamaño de letra, alineación, fondo y márgenes desde JavaScript.
2. **Conceptos:** selectores del DOM, `id`, `classList`, propiedad `style`, ciclo `for...of`.
3. **¿Ya los conocía?** no
4. **¿Dificultades?** no, eso se me hizo sencillo
5. **¿Utilizaste IA?** no, bueno solo para preguntarle si lo estaba haciendo bien.
   - `document.querySelector("h1")` devuelve el primer elemento que coincide con el selector CSS. `querySelectorAll("#descripcion p")` devuelve todos los párrafos dentro de `#descripcion`.
   - `classList.add("clase")` agrega una clase sin borrar las que ya tiene.
   - `elemento.style.color = "..."` cambia una propiedad CSS en línea (en CSS `font-size`, en JavaScript `fontSize`).

## Ejercicio 3: Crear una colección de elementos desde datos

1. **¿Qué hace?** Define un arreglo de cinco objetos (nombre, descripción, tipo) y genera una tarjeta `div` con borde y separación por cada uno.
2. **Conceptos:** arreglos de objetos, funciones, ciclo `for...of`, condicionales, DOM.
3. **¿Ya los conocía?** Nop nunca lo habia hecho
4. **¿Dificultades?** si un poco, pero me guie de lo visto en clase y en internet despues vi que no era complicado
5. **¿Utilizaste IA?** Sí.
   - Se usó una función `renderizar()` que primero vacía el contenedor (`textContent = ""`) y luego vuelve a dibujar todas las tarjetas recorriendo el arreglo. Así se puede reutilizar cada vez que cambian los datos.
   - `[...tecnologiasIniciales]` copia el arreglo para conservar el original intacto.
   - Los bordes y espacios se aplican con `style.border`, `style.margin` y `style.padding`.

## Ejercicio 4: El DOM también se puede reorganizar

1. **¿Qué hace?** Con "Reorganizar página" mueve los elementos existentes al orden Contenedores → Título → Lista → Descripción. "Restaurar orden" los regresa a Título → Descripción → Lista → Contenedores.
2. **Conceptos:** DOM, eventos, funciones, mover nodos.
3. **¿Ya los conocía?** no hasta que lo vimos en clase
4. **¿Dificultades?** un poco
5. **¿Utilizaste IA?** Sí.
   - `appendChild()` aplicado a un nodo que ya está en el documento no lo duplica: lo mueve al final de su padre. Al llamarlo en el orden deseado, se obtiene el nuevo orden sin crear elementos nuevos.
   - `addEventListener("click", funcion)`: `addEventListener` registra una función que se ejecuta cuando ocurre el evento indicado (`"click"`) sobre el elemento (el botón).

## Ejercicio 5: Agregar y eliminar elementos

1. **¿Qué hace?** "Agregar elemento" añade a una lista "Elemento 1", "Elemento 2", etc. "Eliminar último elemento" quita el último. Si la lista está vacía, muestra un mensaje y no marca error.
2. **Conceptos:** eventos, condicionales, DOM, `children.length`.
3. **¿Ya los conocía?** no
4. **¿Dificultades?** no solo tenia dudas
5. **¿Utilizaste IA?** Sí para que me diera un ejemplo.
   - `lista.children.length` da la cantidad de elementos actuales; sumándole 1 se obtiene el número siguiente.
   - `lastElementChild` devuelve el último hijo, o `null` si no hay ninguno; esa comprobación evita el error.
   - `removeChild(nodo)` elimina el nodo de la lista.

## Ejercicio 6: Eventos e interacción

1. **¿Qué hace?** El "Panel interactivo" tiene tres botones: ocultar/mostrar la descripción, cambiar el texto del título y activar el modo oscuro. Además hay una caja que reacciona al mouse.
2. **Conceptos:** eventos, `classList.toggle()`, condicionales, DOM.
3. **¿Ya los conocía?** no
4. **¿Dificultades?** si porque no sabia muy bien como hacerlo porque solo vimos un ejemplo
5. **¿Utilizaste IA?** Sí, le pedi que me enseñara con un ejemplo.
   - `classList.toggle("oculto")` agrega la clase si no la tiene y la quita si la tiene, por eso el mismo botón sirve para ocultar y mostrar.
   - **Evento elegido: `mouseover` y `mouseout`.** `mouseover` se ejecuta cuando el puntero del mouse entra en la caja (cambia a color dorado y cambia el texto). `mouseout` se ejecuta cuando el puntero sale de la caja (regresa a su aspecto original).

## Ejercicio 7: Formulario dinámico

1. **¿Qué hace?** Crea con JavaScript un formulario (nombre, descripción, tipo). Al enviarlo valida que no haya campos vacíos; si faltan datos muestra un mensaje, y si están completos agrega la tecnología a la página sin recargarla.
2. **Conceptos:** funciones, objetos, arreglos (`push`), condicionales, eventos `submit`, DOM.
3. **¿Ya los conocía?** no
4. **¿Dificultades?** si
5. **¿Utilizaste IA?** Sí, le pedi que me enseñara con un ejemplo.
   - `evento.preventDefault()` evita que el formulario recargue la página al enviarse.
   - `value.trim()` obtiene el texto del campo sin espacios al inicio ni al final, para que un campo con solo espacios cuente como vacío.
   - `tecnologias.push(objeto)` agrega el nuevo objeto al arreglo y después `renderizar()` redibuja las tarjetas.

## Ejercicio 8: Buscar y filtrar información

1. **Qué hace:** Agrega un campo "Buscar tecnología". Mientras se escribe, solo se muestran las tarjetas cuyo nombre contiene el texto buscado.
2. **Conceptos:** eventos `input`, condicionales, métodos de cadenas, funciones.
3. **¿Ya los conocía?** no
4. **¿Dificultades?** no mucho, tenia duas
5. **¿Utilizaste IA?** no, bueno Sí, le pedi que me enseñara con un ejemplo.
  - El evento `input` se dispara cada vez que cambia el contenido del campo, por lo que la búsqueda se actualiza en cada letra.
   - `toLowerCase()` pasa a minúsculas para no distinguir mayúsculas. `includes(texto)` devuelve `true` si el nombre contiene el texto, lo que permite coincidencias parciales.
   - `continue` salta las tecnologías que no coinciden.

## Ejercicio 9: Estado y LocalStorage

1. **¿Qué hace?** Guarda las tecnologías en `localStorage` cada vez que se agrega una, las recupera al recargar la página y tiene un botón "Borrar datos guardados" que regresa al estado inicial.
2. **Conceptos:** `localStorage`, JSON, arreglos, condicionales, funciones, DOM.
3. **¿Ya los conocía?** no
4. **¿Dificultades?** si porque no sabia hacerlo
5. **¿Utilizaste IA?** Sí.
   - `localStorage.setItem(clave, valor)` guarda texto en el navegador; `getItem(clave)` lo lee (devuelve `null` si no existe); `removeItem(clave)` lo borra.
   - `JSON.stringify(arreglo)` convierte el arreglo a texto para poder guardarlo, y `JSON.parse(texto)` lo convierte de nuevo en arreglo.

## Ejercicio 10: Formularios y AJAX

1. **¿Qué hace?** Un formulario creado con JavaScript pide un usuario de GitHub, consulta la API de GitHub con `fetch()` y muestra avatar, usuario, nombre real, repositorios públicos, seguidores, seguidos y enlace al perfil. Maneja errores (campo vacío, usuario inexistente, error del servidor, falla de conexión) mostrando mensajes en la página, sin `alert()`. Cada nueva búsqueda reemplaza la anterior.
2. **Conceptos:** DOM, eventos `submit`, `fetch`, `async/await`, `try/catch`, JSON, condicionales.
3. **¿Ya los conocía?** lo poco que vimos en clase
4. **¿Dificultades?** [COMPLETAR]
5. **¿Utilizaste IA?** no, solo le pedi que me enseñara con un ejemplo.
   - `async function` permite usar `await` dentro; `await` pausa la función hasta que la petición termina, sin congelar la página.
   - `fetch(url)` hace la petición HTTP y devuelve la respuesta. `respuesta.ok` indica si el código está entre 200 y 299; `respuesta.status` da el código (404 = no encontrado). `respuesta.json()` convierte el cuerpo en un objeto de JavaScript.
   - `try/catch` captura los errores de red. `encodeURIComponent()` hace seguro el texto escrito para incluirlo en la URL.

### Preguntas adicionales

6. **¿Qué entiendo por AJAX?** Es una técnica para que JavaScript pida datos a un servidor en segundo plano y actualice solo una parte de la página, sin recargarla completa.
7. **¿Por qué la página no necesita recargarse?** Porque la petición la hace JavaScript con `fetch()`, no el navegador al navegar. Al llegar la respuesta, el programa modifica únicamente los elementos necesarios del DOM.
8. **¿Qué hace `fetch()`?** Envía una petición HTTP a una URL y devuelve una promesa que se resuelve con la respuesta del servidor.
9. **¿Qué representa la respuesta del servidor?** Un objeto con el código de estado (`status`, `ok`), los encabezados y el cuerpo con los datos del usuario.
10. **¿Qué es JSON y para qué se usó?** JSON es un formato de texto para representar datos con pares clave-valor. GitHub responde en JSON y con `respuesta.json()` se convirtió en un objeto del que se leen `login`, `name`, `followers`, etc.
11. **¿Qué hace `event.preventDefault()`?** Cancela el comportamiento por defecto del envío del formulario (recargar la página), para poder manejar el envío con JavaScript.
12. **Diferencia entre error en la petición y usuario inexistente:** si el usuario no existe, la petición sí se completó y el servidor respondió con código 404; se detecta con `respuesta.status`. Un error en la petición (sin internet, servidor caído) hace que `fetch()` falle y se captura en el `catch`.
13. **Recorrido de los datos:**
    1. El usuario escribe el nombre y presiona "Buscar usuario".
    2. Se dispara el evento `submit` y `preventDefault()` evita la recarga.
    3. Se lee el valor del campo y se verifica que no esté vacío.
    4. `fetch()` envía la petición a `https://api.github.com/users/USUARIO`.
    5. El servidor responde con un código de estado y los datos en JSON.
    6. Se revisa `status` y `ok` para detectar errores.
    7. `respuesta.json()` convierte los datos en un objeto.
    8. Con ese objeto se crean los elementos (imagen, párrafos, enlace) y se agregan al DOM, y el resultado aparece en pantalla.
