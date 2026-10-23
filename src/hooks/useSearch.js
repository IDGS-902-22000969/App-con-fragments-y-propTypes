
import { useCallback } from 'react'
import useLocalStorage from './useLocalStorage'

export default function useSearch() {
  const [busqueda, setBusqueda] = useLocalStorage(
    'busqueda-lenguajes',
    ''
  )

  const buscar = useCallback((texto) => {
    setBusqueda(texto)
  }, [setBusqueda])

  const filtrar = useCallback((lenguajes, tipoActivo) => {
    const texto = busqueda.trim().toLowerCase()

    return lenguajes.filter((lenguaje) => {
      const coincideTipo =
        tipoActivo === 'Todos' ||
        lenguaje.tipo === tipoActivo

      const contenido =
        `${lenguaje.nombre} ${lenguaje.descripcion}`.toLowerCase()

      return coincideTipo && contenido.includes(texto)
    })
  }, [busqueda])

  return { busqueda, buscar, filtrar }
}
