import { useEffect, useState } from 'react'
import './App.css'
import Encabezado from './components/Encabezado'
import Formulario from './components/Formulario'
import Filtros from './components/Filtros'
import ListaMateriales from './components/ListaMateriales'
import Detalle from './components/Detalle'
import Resumen from './components/Resumen'
import { materialesIniciales } from './data/materiales'
import { estaDisponible, normalizarTexto } from './utils/materiales'

function App() {
  // Ejercicio 8: se recuperan los datos guardados al iniciar
  const [materiales, setMateriales] = useState(() => {
    const valorGuardado = localStorage.getItem('materiales')
    if (valorGuardado == null) {
      return materialesIniciales
    }
    try {
      return JSON.parse(valorGuardado)
    } catch {
      return materialesIniciales
    }
  })

  const [busqueda, setBusqueda] = useState('')
  const [categoria, setCategoria] = useState('Todas')
  const [soloDisponibles, setSoloDisponibles] = useState(false)
  const [idSeleccionado, setIdSeleccionado] = useState(null)
  const [mensaje, setMensaje] = useState(null)

  // Ejercicio 8: se guardan los materiales cada vez que cambian
  useEffect(() => {
    localStorage.setItem('materiales', JSON.stringify(materiales))
  }, [materiales])

  // Ejercicio 3: agregar (crea un arreglo nuevo)
  const agregarMaterial = (nuevoMaterial) => {
    setMateriales([...materiales, nuevoMaterial])
  }

  // Ejercicio 6: reservar / liberar sin modificar el estado directamente
  const cambiarReserva = (id) => {
    const nuevosMateriales = materiales.map((material) => {
      if (material.id === id) {
        return { ...material, reservado: !material.reservado }
      }
      return material
    })
    setMateriales(nuevosMateriales)
  }

  // Ejercicio 4: filtros combinados (el arreglo original no se modifica)
  const textoBusqueda = normalizarTexto(busqueda)

  const materialesFiltrados = materiales.filter((material) => {
    const coincideNombre = normalizarTexto(material.nombre).includes(textoBusqueda)
    const coincideCategoria = categoria === 'Todas' || material.categoria === categoria
    const coincideDisponible = !soloDisponibles || estaDisponible(material)
    return coincideNombre && coincideCategoria && coincideDisponible
  })

  const limpiarFiltros = () => {
    setBusqueda('')
    setCategoria('Todas')
    setSoloDisponibles(false)
  }

  // Ejercicio 5: detalle con find
  const materialSeleccionado = materiales.find((material) => material.id === idSeleccionado)

  const verDetalle = (id) => setIdSeleccionado(id)
  const cerrarDetalle = () => setIdSeleccionado(null)

  // Ejercicio 8: restablecer datos iniciales
  const restablecerDatos = () => {
    setMateriales(materialesIniciales)
    limpiarFiltros()
    setIdSeleccionado(null)
    setMensaje(null)
  }

  return (
    <>
      <Encabezado />
      <Formulario
        materiales={materiales}
        agregarMaterial={agregarMaterial}
        mensaje={mensaje}
        setMensaje={setMensaje}
      />
      <Filtros
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        categoria={categoria}
        setCategoria={setCategoria}
        soloDisponibles={soloDisponibles}
        setSoloDisponibles={setSoloDisponibles}
        limpiarFiltros={limpiarFiltros}
      />
      <Resumen materiales={materiales} resultados={materialesFiltrados.length} />
      <ListaMateriales
        materiales={materialesFiltrados}
        verDetalle={verDetalle}
        cambiarReserva={cambiarReserva}
      />
      <Detalle
        idSeleccionado={idSeleccionado}
        material={materialSeleccionado}
        cerrarDetalle={cerrarDetalle}
      />
      <button type="button" onClick={restablecerDatos}>
        Restablecer datos iniciales
      </button>
    </>
  )
}

export default App
