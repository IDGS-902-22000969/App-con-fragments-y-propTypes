
import { useMemo, useState } from 'react'

import LanguageRow from '../components/LanguageRow'
import FilterBar from '../components/FilterBar'
import LANGUAGES from '../data/lenguajes'
import useSearch from '../hooks/useSearch'

function Lenguajes() {
  const { busqueda, buscar, filtrar } = useSearch()
  const [tipoActivo, setTipoActivo] = useState('Todos') 
  const tipos = [
    'Todos',
    ...new Set(LANGUAGES.map((lenguaje) => lenguaje.tipo)),
  ]

  const lenguajesFiltrados = useMemo(
    () => filtrar(LANGUAGES, tipoActivo),
    [busqueda, tipoActivo, filtrar]
  )

  return (
    <main className="app-shell">
      <header className="hero">
        <p className="eyebrow">GUÍA RÁPIDA · DESARROLLO</p>

        <h1>
          Lenguajes de <span>programación</span>
        </h1>

        <p className="intro">
          Explora lenguajes populares, conoce para qué se usan
          y cuándo aparecieron.
        </p>

        <div className="stats">
          <strong>{LANGUAGES.length}</strong>
          <span>lenguajes en la guía</span>

          <i />

          <strong>{tipos.length - 1}</strong>
          <span>categorías</span>
        </div>
      </header>

      <section
        className="explorer"
        aria-label="Explorar lenguajes"
      >
        <div className="toolbar">
          <span className="result-count">
            {lenguajesFiltrados.length} resultados
          </span>
        </div>

        <FilterBar
          tipos={tipos}
          tipoActivo={tipoActivo}
          onSeleccionar={setTipoActivo}
          busqueda={busqueda}
          onBuscar={buscar}
        />

        <div className="list-heading">
          <span>Lenguaje</span>
          <span>Descripción</span>
          <span>Año</span>
        </div>

        <div className="language-list">
          {lenguajesFiltrados.length > 0 ? (
            lenguajesFiltrados.map((lenguaje, index) => (
              <LanguageRow
                key={lenguaje.id}
                {...lenguaje}
                numero={index + 1}
              />
            ))
          ) : (
            <p className="empty-state">
              No encontramos lenguajes con esa búsqueda.
            </p>
          )}
        </div>
      </section>
    </main>
  )
}

export default Lenguajes
