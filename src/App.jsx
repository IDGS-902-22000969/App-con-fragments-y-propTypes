
import { useMemo, useState } from 'react'
import './App.css'
import LanguageRow from './components/LanguageRow'
import FilterBar from './components/FilterBar'
import LANGUAGES from './data/lenguajes'

import CharacterList from './components/CharacterList'
import { useCharacters } from './data/UseCharacter'
import Pagination from './components/Pagination'

function App() {

  // Estados para los lenguajes
  const [tipoActivo, setTipoActivo] = useState('Todos')
  const [busqueda, setBusqueda] = useState('')

  const tipos = [
     'Todos',
    ...new Set(LANGUAGES.map((lenguaje) => lenguaje.tipo))
  ]

  const lenguajesFiltrados = useMemo(
    () =>
      LANGUAGES.filter((lenguaje) => {
        const coincideTipo =
          tipoActivo === 'Todos' ||
          lenguaje.tipo === tipoActivo

        const coincideTexto =
          `${lenguaje.nombre} ${lenguaje.descripcion}`
            .toLowerCase()
            .includes(busqueda.toLowerCase())

        return coincideTipo && coincideTexto
      }),
    [tipoActivo, busqueda]
  )

  // Estos son de rick y el morty
  const [page, setPage] = useState(1)
  const { characters,totalPages,loading, error} = useCharacters(page)

  return (
    <main className="app-shell">

      {/* Visualizacion de lenguajes */}
      <header className="hero">
        <p className="eyebrow">
          GUÍA RÁPIDA · DESARROLLO
        </p>

        <h1>
          Lenguajes de <span>programación</span>
        </h1>

        <p className="intro">
          Explora lenguajes populares, conoce para qué
          se usan y cuándo aparecieron.
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
          <label className="search-box">
            <span aria-hidden="true">⌕</span>

            <input
              value={busqueda}
              onChange={(e) =>
                setBusqueda(e.target.value)
              }
              placeholder="Buscar un lenguaje..."
              aria-label="Buscar lenguaje"
            />
          </label>

          <span className="result-count">
            {lenguajesFiltrados.length} resultados
          </span>
        </div>

        <FilterBar
          tipos={tipos}
          tipoActivo={tipoActivo}
          onSeleccionar={setTipoActivo}
        />

        <div className="list-heading">
          <span>Lenguaje</span>
          <span>Descripción</span>
          <span>Año</span>
        </div>

        <div className="language-list">
          {lenguajesFiltrados.length ? (
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

      {/* Visualizacion de Rick */}
      <section className="characters-section">
        <header className="characters-header">
          <h2>Rick and Morty</h2>

        </header>

        {loading && (
          <p className="loading-message">
            Cargando personajes...
          </p>
        )}

        {error && (
          <p className="error-message" role="alert">
            Ocurrió un error: {error}
          </p>
        )}

        {!loading && !error && (
          <>
            <CharacterList characters={characters} />

            <Pagination
              page={page}
              totalPage={totalPages}
              onPreview={() =>
                setPage((p) => p - 1)
              }
              onNext={() =>
                setPage((p) => p + 1)
              }
            />
          </>
        )}
      </section>

      <footer className="page-footer">
        Hecho con React + Hooks.
        <span>Realizado por Vanesa Rea IDGS 1002</span>
      </footer>

    </main>
  )
}

export default App
