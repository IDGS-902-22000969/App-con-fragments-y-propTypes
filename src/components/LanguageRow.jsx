import PropTypes from 'prop-types'
import '../styles/LanguageRow.css'

function LanguageRow({ nombre, anio, tipo, descripcion, emoji, color, numero }) {
  return (
    <>
      <article className="language-row" style={{ '--language-color': color }}>
        <div className="language-identity">
          <span className="language-number">{String(numero).padStart(2, '0')}</span>
          <span className="language-emoji" aria-hidden="true">{emoji}</span>
          <div><h2>{nombre}</h2><span className="language-type">{tipo}</span></div>
        </div>
        <p className="language-description">{descripcion}</p>
        <time className="language-year" dateTime={String(anio)}>{anio}</time>
      </article>
    </>
  )
}

LanguageRow.propTypes = {
  nombre: PropTypes.string.isRequired,
  anio: PropTypes.number.isRequired,
  tipo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  numero: PropTypes.number.isRequired,
}

export default LanguageRow
