import TarjetaMaterial from './TarjetaMaterial'

function ListaMateriales({ materiales, verDetalle, cambiarReserva }) {
  return (
    <section>
      <h2>Materiales</h2>
      {materiales.length === 0 ? (
        <p>No hay materiales que coincidan con los filtros</p>
      ) : (
        <ul>
          {materiales.map((material) => (
            <TarjetaMaterial
              key={material.id}
              material={material}
              verDetalle={verDetalle}
              cambiarReserva={cambiarReserva}
            />
          ))}
        </ul>
      )}
    </section>
  )
}

export default ListaMateriales
