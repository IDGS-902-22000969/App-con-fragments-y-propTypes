import { useMemo, useState } from 'react'
import './App.css'
import LanguageRow from './components/LanguageRow'
import FilterBar from './components/FilterBar'
import LANGUAGES from './data/lenguajes'

function App() {
  const [tipoActivo, setTipoActivo] = useState('Todos')
  const [busqueda, setBusqueda] = useState('')
  const tipos = ['Todos', ...new Set(LANGUAGES.map((lenguaje) => lenguaje.tipo))]
  const lenguajesFiltrados = useMemo(() => LANGUAGES.filter((lenguaje) => {
    const coincideTipo = tipoActivo === 'Todos' || lenguaje.tipo === tipoActivo
    const coincideTexto = `${lenguaje.nombre} ${lenguaje.descripcion}`.toLowerCase().includes(busqueda.toLowerCase())
    return coincideTipo && coincideTexto
  }), [tipoActivo, busqueda])

  return (
    <>
      <main className="app-shell">
        <header className="hero">
          <p className="eyebrow">GUÍA RÁPIDA · DESARROLLO</p>
          <h1>Lenguajes de <span>programación</span></h1>
          <p className="intro">Explora lenguajes populares, conoce para qué se usan y cuándo aparecieron.</p>
          <div className="stats"><strong>{LANGUAGES.length}</strong><span>lenguajes en la guía</span><i /> <strong>{tipos.length - 1}</strong><span>categorías</span></div>
        </header>

        <section className="explorer" aria-label="Explorar lenguajes">
          <div className="toolbar">
            <label className="search-box"><span aria-hidden="true">⌕</span><input value={busqueda} onChange={(e) => setBusqueda(e.target.value)} placeholder="Buscar un lenguaje..." aria-label="Buscar lenguaje" /></label>
            <span className="result-count">{lenguajesFiltrados.length} resultados</span>
          </div>
          <FilterBar tipos={tipos} tipoActivo={tipoActivo} onSeleccionar={setTipoActivo} />
          <div className="list-heading"><span>Lenguaje</span><span>Descripción</span><span>Año</span></div>
          <div className="language-list">
            {lenguajesFiltrados.length ? lenguajesFiltrados.map((lenguaje, index) => <LanguageRow key={lenguaje.id} {...lenguaje} numero={index + 1} />) : <p className="empty-state">No encontramos lenguajes con esa búsqueda.</p>}
          </div>
        </section>
        <footer className="page-footer">Hecho con React + PropTypes. <span>Realizado por Vanesa Rea IDGS 1002</span></footer>
      </main>
    </>
  )
}

export default App
