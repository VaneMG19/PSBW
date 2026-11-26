(PSBW). Aplicación para registrar, buscar, consultar y reservar materiales recuperados que sirven para hacer maquetas.

## Cómo instalar y ejecutar

```bash
cd PracticandoReact
npm install
npm run dev
```

Después se abre en el navegador la dirección que muestra la terminal (normalmente http://localhost:5173).

## Estructura

```
src/
├── components/
│   ├── Encabezado.jsx
│   ├── Formulario.jsx
│   ├── Filtros.jsx
│   ├── ListaMateriales.jsx
│   ├── TarjetaMaterial.jsx
│   ├── Detalle.jsx
│   └── Resumen.jsx
├── data/materiales.js
├── utils/materiales.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

## Ejercicio 1: Datos y diferentes formas de función

1. **¿Qué hace y en qué archivos está?** Guarda los seis materiales iniciales y tres funciones auxiliares. Los datos están en `src/data/materiales.js` y las funciones en `src/utils/materiales.js`. Se usan en `App.jsx`, `TarjetaMaterial.jsx`, `Detalle.jsx`, `Resumen.jsx` y `Formulario.jsx`.
2. **¿Qué conceptos utilicé?** Arreglos de objetos, `export`/`import`, función declarada con `function`, función flecha con retorno implícito y función flecha con bloque y `return`.
3. **¿Qué datos recibe y qué resultado produce?** `textoMaterial(material)` recibe un material y devuelve "nombre - ubicación". `estaDisponible(material)` recibe un material y devuelve `true` o `false`. `normalizarTexto(texto)` recibe un texto y lo devuelve sin espacios al inicio y al final y en minúsculas.
4. **¿Qué dificultad encontré y cómo la resolví?** Recordar cuándo usar `return` y cuándo no en las funciones flecha. Lo resolví usando paréntesis o expresión directa para el retorno implícito y llaves con `return` para la que lleva bloque.
5. **¿Utilicé inteligencia artificial?** Sí. Le pedí a Claude que me ayudara a organizar siguiendo la estructura del proyecto de ejemplo de la clase (`mi-react`). Incorporé el proyecto completo y revisé cómo funciona cada archivo. Las funciones auxiliares se usan en la tarjeta, el detalle, el resumen, el formulario y el filtro.

## Ejercicio 2: Interfaz dividida en componentes

1. **¿Qué hace y en qué archivos está?** Divide la interfaz en componentes: `Encabezado`, `Formulario`, `Filtros`, `ListaMateriales`, `TarjetaMaterial`, `Detalle` y `Resumen`, todos en `src/components/`. `App.jsx` los junta y guarda el arreglo de materiales en un estado.
2. **¿Qué conceptos utilicé?** Componentes, props, desestructuración de props (por ejemplo `function TarjetaMaterial({ material, verDetalle, cambiarReserva })`), `map` con `key={material.id}` y `useState`.
3. **¿Qué datos recibe y qué resultado produce?** `ListaMateriales` recibe el arreglo ya filtrado y las funciones; por cada material dibuja una `TarjetaMaterial` con nombre, categoría, ubicación y disponibilidad.
4. **¿Qué dificultad encontré y cómo la resolví?** Decidir dónde poner el estado. Lo resolví dejando el arreglo de materiales en `App` y pasando funciones por props para que los hijos pidan los cambios.
5. **¿Utilicé inteligencia artificial?** Sí. Pedí que checara si use bien ssel estilo de la clase (props con desestructuración y `map` con `key`). Incorporé todos los componentes y entiendo que los hijos nunca modifican las props directamente, solo llaman funciones que vienen de `App`.

## Ejercicio 3: Formulario controlado y validación

1. **¿Qué hace y en qué archivos está?** Registra un material nuevo. Está en `src/components/Formulario.jsx`; la función que agrega el material está en `App.jsx` (`agregarMaterial`).
2. **¿Qué conceptos utilicé?** Inputs controlados con `value` y `onChange`, `event.preventDefault()`, `trim()`, `some`, spread para crear el arreglo nuevo y renderizado condicional para el mensaje.
3. **¿Qué datos recibe y qué resultado produce?** Recibe `materiales`, `agregarMaterial`, `mensaje` y `setMensaje`. Si hay error muestra un mensaje y conserva lo escrito; si todo es válido agrega el material con `reservado: false` e id único (`'mat-' + Date.now()`), limpia el formulario y muestra una confirmación.
4. **¿Qué dificultad encontré y cómo la resolví?** Detectar duplicados sin importar mayúsculas ni espacios. Lo resolví aplicando `normalizarTexto` al nombre y a la ubicación de ambos materiales antes de compararlos.
5. **¿Utilicé inteligencia artificial?** Sí. Pedí el formulario con validaciones y mensajes dentro de la interfaz (sin `alert`). Incorporé el componente completo y entiendo que la validación se hace en orden: primero vacíos o solo espacios, luego duplicados, y al final se registra.

## Ejercicio 4: Búsqueda y filtros combinados

1. **¿Qué hace y en qué archivos está?** Filtra la lista por nombre, categoría y disponibilidad al mismo tiempo. Los controles están en `src/components/Filtros.jsx` y el filtrado en `App.jsx`.
2. **¿Qué conceptos utilicé?** `filter`, `includes`, estados para cada control y `&&` para combinar condiciones.
3. **¿Qué datos recibe y qué resultado produce?** `Filtros` recibe los valores y sus funciones `set` por props. En `App`, `materialesFiltrados` es un arreglo nuevo con los materiales que cumplen las tres condiciones. Si no hay ninguno, `ListaMateriales` muestra "No hay materiales que coincidan con los filtros". "Limpiar filtros" regresa los tres controles a su valor inicial.
4. **¿Qué dificultad encontré y cómo la resolví?** Que los tres criterios funcionaran juntos. Lo resolví con tres variables booleanas dentro del `filter` y devolviendo `coincideNombre && coincideCategoria && coincideDisponible`.
5. **¿Utilicé inteligencia artificial?** Sí. Pedí que checara si hice bien la lógica del ejemplo de `Cursos.jsx` de la clase (normalizar el texto y usar `filter` con `includes`). Incorporé el filtro y los controles.

## Ejercicio 5: Consulta de detalle con find

1. **¿Qué hace y en qué archivos está?** Muestra todos los datos de un material al presionar "Ver detalle". Está en `src/components/Detalle.jsx`; el estado y el `find` están en `App.jsx`.
2. **¿Qué conceptos utilicé?** Estado con el id seleccionado, `find` y renderizado condicional.
3. **¿Qué datos recibe y qué resultado produce?** `Detalle` recibe `idSeleccionado`, `material` y `cerrarDetalle`. Si el id es `null` muestra "Selecciona un material para consultar sus datos"; si el id no existe en el arreglo muestra un aviso; si existe muestra todos sus datos y el botón de cerrar.
4. **¿Qué dificultad encontré y cómo la resolví?** Que el detalle siguiera visible aunque el filtro oculte la tarjeta. Lo resolví haciendo el `find` sobre `materiales` (el arreglo completo) y no sobre `materialesFiltrados`.
5. **¿Utilicé inteligencia artificial?** Sí. Pedí el detalle con los tres casos de mensaje. Incorporé el componente y el `find` en `App`.

## Ejercicio 6: Reservar y liberar sin modificar el estado directamente

1. **¿Qué hace y en qué archivos está?** Cambia un material entre disponible y reservado. El botón está en `TarjetaMaterial.jsx` y la función `cambiarReserva` en `App.jsx`.
2. **¿Qué conceptos utilicé?** `map`, spread (`{ ...material, reservado: !material.reservado }`) y `setMateriales` con un arreglo nuevo.
3. **¿Qué datos recibe y qué resultado produce?** Recibe el id del material. Devuelve un arreglo nuevo donde solo cambia ese material; los demás se quedan igual. La tarjeta, el detalle, el resumen y el filtro "Solo disponibles" se actualizan solos porque se calculan a partir del estado.
4. **¿Qué dificultad encontré y cómo la resolví?** Evitar `material.reservado = true`. Lo resolví creando un objeto nuevo con spread dentro de `map`.
5. **¿Utilicé inteligencia artificial?** Sí. Pedí la función de reservar y liberar sin modificar el estado directamente. Incorporé `cambiarReserva` y probé el caso de reservar con "Solo disponibles" activado.

## Ejercicio 7: Resumen y mensajes según el estado

1. **¿Qué hace y en qué archivos está?** Muestra total, disponibles, reservados y resultados de los filtros. Está en `src/components/Resumen.jsx`.
2. **¿Qué conceptos utilicé?** Valores derivados con `length` y `filter`, operador ternario y `&&`.
3. **¿Qué datos recibe y qué resultado produce?** Recibe `materiales` y la cantidad de `resultados`. Calcula los totales en cada render. El ternario alterna entre "(1 material)" y "(N materiales)". Con `&&` se muestra un aviso cuando no hay materiales disponibles.
4. **¿Qué dificultad encontré y cómo la resolví?** No usar contadores aparte. Lo resolví calculando los totales directamente del arreglo cada vez que se dibuja el componente.
5. **¿Utilicé inteligencia artificial?** Sí. Pedí el resumen con los cuatro totales. Incorporé el componente y entiendo que se actualiza al registrar, reservar, liberar y filtrar porque depende de las props.

## Ejercicio 8: Persistencia con JSON y useEffect

1. **¿Qué hace y en qué archivos está?** Guarda los materiales en `localStorage` y los recupera al recargar. Está en `App.jsx`, incluido el botón "Restablecer datos iniciales".
2. **¿Qué conceptos utilicé?** `localStorage`, `JSON.stringify`, `JSON.parse`, `useEffect` y la función inicial de `useState`.
3. **¿Qué datos recibe y qué resultado produce?** Al iniciar, `useState` lee `localStorage`; si no hay nada usa los seis materiales iniciales. El `useEffect` guarda el arreglo cada vez que cambia. El botón de restablecer pone de nuevo los seis materiales iniciales, limpia filtros, selección y mensajes, y el `useEffect` guarda ese resultado.
4. **¿Qué dificultad encontré y cómo la resolví?** Evitar que los datos guardados se sobrescribieran con los iniciales. Lo resolví leyendo `localStorage` dentro de la función inicial de `useState`, igual que en el ejemplo de la clase, de modo que el estado ya trae los datos guardados antes de que corra el `useEffect`.
5. **¿Utilicé inteligencia artificial?** Sí. Pedí que checara si estaba usando de manera correcta la lógica del ejemplo de la clase (`Test` y `Curso`). Incorporé la lectura inicial, el `useEffect` y el botón de restablecer.

---

## Explicaciones breves

**Qué llega por props y qué se conserva en estado.** Por props llegan los datos y funciones que cada componente necesita (por ejemplo `material`, `verDetalle`, `cambiarReserva`). En estado (en `App`) se conservan los materiales, la búsqueda, la categoría, "Solo disponibles", el id seleccionado y el mensaje. Cada campo del formulario tiene su propio estado dentro de `Formulario`.

**Por qué filtrar no elimina materiales del arreglo original.** `filter` devuelve un arreglo nuevo y no modifica el original. Los filtros solo cambian lo que se muestra; si se borraran del original, al limpiar los filtros esos materiales ya no existirían.

**Por qué el estado requiere nuevos arreglos u objetos.** React compara la referencia anterior con la nueva para saber si algo cambió. Si se modifica el mismo arreglo u objeto, la referencia es la misma y React puede no volver a dibujar. Por eso se usan `map` y spread para crear copias.

**Qué hace el useEffect de persistencia y de qué depende.** Guarda el arreglo de materiales en `localStorage` con `JSON.stringify`. Depende de `[materiales]`, así que se ejecuta al iniciar y cada vez que ese arreglo cambia.

**Por qué la interfaz cambia sin recargar y por qué eso no significa que tenga servidor propio.** React cambia el estado y vuelve a dibujar solo las partes que cambiaron, sin pedir una página nueva. Aun así, todo corre en el navegador: los datos se guardan en `localStorage` de ese navegador y no existe un servidor ni una base de datos propia (Vite solo sirve los archivos durante el desarrollo).
