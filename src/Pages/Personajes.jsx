
import { useState } from 'react'

import CharacterList from '../components/CharacterList'
import { useCharacters } from '../data/UseCharacter'
import Pagination from '../components/Pagination'

function Personajes() {
  const [page, setPage] = useState(1)

  const {
    characters,
    totalPages,
    loading,
    error,
  } = useCharacters(page)

  return (
    <main className="app-shell">
      <header className="hero">
        <p className="eyebrow">EXPLORA LA API</p>

        <h1>
          Rick and <span>Morty</span>
        </h1>

        <p className="intro">
          Descubre los personajes de la serie y navega
          entre las diferentes páginas.
        </p>
      </header>

      <section
        className="characters-section"
        aria-label="Lista de personajes"
      >
        <header className="characters-header">
          <h2>Personajes</h2>
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
    </main>
  )
}

export default Personajes
