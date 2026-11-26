import { useState } from 'react'
import { categorias } from '../data/materiales'
import { normalizarTexto } from '../utils/materiales'

function Formulario({ materiales, agregarMaterial, mensaje, setMensaje }) {
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [categoria, setCategoria] = useState('')
  const [ubicacion, setUbicacion] = useState('')

  const enviarFormulario = (event) => {
    event.preventDefault()

    // Campos vacíos o solo con espacios
    if (
      normalizarTexto(nombre) === '' ||
      normalizarTexto(descripcion) === '' ||
      normalizarTexto(ubicacion) === '' ||
      categoria === ''
    ) {
      setMensaje({ tipo: 'error', texto: 'Todos los campos son obligatorios.' })
      return
    }

    // Duplicado: mismo nombre y misma ubicación
    const duplicado = materiales.some(
      (material) =>
        normalizarTexto(material.nombre) === normalizarTexto(nombre) &&
        normalizarTexto(material.ubicacion) === normalizarTexto(ubicacion)
    )

    if (duplicado) {
      setMensaje({
        tipo: 'error',
        texto: 'Ya existe un material con ese nombre en esa ubicación.',
      })
      return
    }

    const nuevoMaterial = {
      id: 'mat-' + Date.now(),
      nombre: nombre.trim(),
      descripcion: descripcion.trim(),
      categoria: categoria,
      ubicacion: ubicacion.trim(),
      reservado: false,
    }

    agregarMaterial(nuevoMaterial)

    // Limpiar el formulario
    setNombre('')
    setDescripcion('')
    setCategoria('')
    setUbicacion('')
    setMensaje({ tipo: 'ok', texto: 'Material registrado correctamente.' })
  }

  return (
    <section>
      <h2>Registrar material</h2>
      <form onSubmit={enviarFormulario}>
        <div>
          <label htmlFor="nombre">Nombre: </label>
          <input
            id="nombre"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción: </label>
          <input
            id="descripcion"
            value={descripcion}
            onChange={(event) => setDescripcion(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="categoria">Categoría: </label>
          <select
            id="categoria"
            value={categoria}
            onChange={(event) => setCategoria(event.target.value)}
          >
            <option value="">Selecciona una categoría</option>
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="ubicacion">Ubicación: </label>
          <input
            id="ubicacion"
            value={ubicacion}
            onChange={(event) => setUbicacion(event.target.value)}
          />
        </div>
        <button type="submit">Registrar</button>
      </form>

      {mensaje && (
        <p className={mensaje.tipo === 'error' ? 'error' : 'ok'}>{mensaje.texto}</p>
      )}
    </section>
  )
}

export default Formulario
