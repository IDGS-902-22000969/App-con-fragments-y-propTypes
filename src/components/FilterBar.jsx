import PropTypes from 'prop-types'

function FilterBar({ tipos, tipoActivo, onSeleccionar }) {
  return (
    <>
      <nav className="filter-bar" aria-label="Filtrar por tipo">
        {tipos.map((tipo) => (
          <button key={tipo} type="button" className={tipoActivo === tipo ? 'filter-button active' : 'filter-button'} onClick={() => onSeleccionar(tipo)} aria-pressed={tipoActivo === tipo}>{tipo}</button>
        ))}
      </nav>
    </>
  )
}

FilterBar.propTypes = {
  tipos: PropTypes.arrayOf(PropTypes.string).isRequired,
  tipoActivo: PropTypes.string.isRequired,
  onSeleccionar: PropTypes.func.isRequired,
}

export default FilterBar
