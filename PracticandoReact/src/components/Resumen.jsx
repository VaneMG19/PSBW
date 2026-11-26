import { estaDisponible } from '../utils/materiales'

function Resumen({ materiales, resultados }) {
  // Todo se calcula a partir del arreglo, sin contadores aparte
  const total = materiales.length
  const disponibles = materiales.filter(estaDisponible).length
  const reservados = total - disponibles

  return (
    <section>
      <h2>Resumen</h2>
      <p>Total registrados: {total}</p>
      <p>Disponibles: {disponibles}</p>
      <p>Reservados: {reservados}</p>
      <p>
        Resultados de los filtros: {resultados}{' '}
        {resultados === 1 ? '(1 material)' : '(' + resultados + ' materiales)'}
      </p>
      {disponibles === 0 && <p className="error">Aviso: no hay materiales disponibles.</p>}
    </section>
  )
}

export default Resumen
