import { estaDisponible } from '../utils/materiales'

function TarjetaMaterial({ material, verDetalle, cambiarReserva }) {
  const disponible = estaDisponible(material)

  return (
    <li className="tarjeta">
      <h3>{material.nombre}</h3>
      <p>Categoría: {material.categoria}</p>
      <p>Ubicación: {material.ubicacion}</p>
      <p>{disponible ? 'Disponible' : 'Reservado'}</p>
      <button type="button" onClick={() => verDetalle(material.id)}>
        Ver detalle
      </button>{' '}
      <button type="button" onClick={() => cambiarReserva(material.id)}>
        {disponible ? 'Reservar' : 'Liberar'}
      </button>
    </li>
  )
}

export default TarjetaMaterial
