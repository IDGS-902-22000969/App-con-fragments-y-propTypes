
import { useMemo, useState } from 'react'
import './App.css'

import LanguageRow from './components/LanguageRow'
import FilterBar from './components/FilterBar'
import LANGUAGES from './data/lenguajes'

import CharacterList from './components/CharacterList'
import { useCharacters } from './data/UseCharacter'
import Pagination from './components/Pagination'
import useSearch from './hooks/useSearch'

function App() {
  // Búsqueda persistente y filtrado de lenguajes
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

  // Rick and Morty
  const [page, setPage] = useState(1)
  const { characters, totalPages, loading, error } =
    useCharacters(page)

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

      <section className="explorer" aria-label="Explorar lenguajes">
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
              onPreview={() => setPage((p) => p - 1)}
              onNext={() => setPage((p) => p + 1)}
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
