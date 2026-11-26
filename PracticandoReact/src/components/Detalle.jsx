import { textoMaterial, estaDisponible } from '../utils/materiales'

function Detalle({ idSeleccionado, material, cerrarDetalle }) {
  let contenido

  if (idSeleccionado === null) {
    contenido = <p>Selecciona un material para consultar sus datos</p>
  } else if (material === undefined) {
    contenido = <p>El material seleccionado ya no existe.</p>
  } else {
    contenido = (
      <div>
        <p>{textoMaterial(material)}</p>
        <p>ID: {material.id}</p>
        <p>Nombre: {material.nombre}</p>
        <p>Descripción: {material.descripcion}</p>
        <p>Categoría: {material.categoria}</p>
        <p>Ubicación: {material.ubicacion}</p>
        <p>Estado: {estaDisponible(material) ? 'Disponible' : 'Reservado'}</p>
      </div>
    )
  }

  return (
    <section>
      <h2>Detalle</h2>
      {contenido}
      {idSeleccionado !== null && (
        <button type="button" onClick={cerrarDetalle}>
          Cerrar detalle
        </button>
      )}
    </section>
  )
}

export default Detalle
