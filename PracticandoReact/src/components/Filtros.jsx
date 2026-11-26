import { categorias } from '../data/materiales'

function Filtros({
  busqueda,
  setBusqueda,
  categoria,
  setCategoria,
  soloDisponibles,
  setSoloDisponibles,
  limpiarFiltros,
}) {
  return (
    <section>
      <h2>Buscar y filtrar</h2>
      <div>
        <label htmlFor="busqueda">Buscar por nombre: </label>
        <input
          id="busqueda"
          value={busqueda}
          onChange={(event) => setBusqueda(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="filtroCategoria">Categoría: </label>
        <select
          id="filtroCategoria"
          value={categoria}
          onChange={(event) => setCategoria(event.target.value)}
        >
          <option value="Todas">Todas</option>
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <div>
        <input
          id="soloDisponibles"
          type="checkbox"
          checked={soloDisponibles}
          onChange={(event) => setSoloDisponibles(event.target.checked)}
        />
        <label htmlFor="soloDisponibles"> Solo disponibles</label>
      </div>
      <button type="button" onClick={limpiarFiltros}>
        Limpiar filtros
      </button>
    </section>
  )
}

export default Filtros
