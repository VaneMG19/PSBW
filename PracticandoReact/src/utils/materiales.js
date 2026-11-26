// Ejercicio 1: funciones auxiliares

// 1. Función declarada con function
export function textoMaterial(material) {
  return material.nombre + ' - ' + material.ubicacion
}

// 2. Función flecha con retorno implícito
export const estaDisponible = (material) => !material.reservado

// 3. Función flecha con bloque y return explícito
export const normalizarTexto = (texto) => {
  return texto.trim().toLowerCase()
}
