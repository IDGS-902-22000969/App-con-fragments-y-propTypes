
import PropTypes from 'prop-types'
import "../styles/LanguageCard.css"

///Hacer el npm install prop-types

/** 
*@param {object} props
*@param {string} props.nombre
*@param {number} props.anio
*@param {string} props.tipo
*@param {string} props.descripcion
*@param {string} props.emoji
*@param {string} props.color
***/
function LanguageCard({nombre,anio,tipo,descripcion,emoji,color}){
     
    return(
        <article className='card' style={{"--card-color" : color}}>

            {/*Aqui va ir el encabezado */}
            <div className="card_header">
                <span className="card_emoji"> {emoji} </span>
                <h2 className="card_title">{nombre}</h2>
            </div>
            {/*Aqui va el tipo*/}
            <span className='card_badge'>{tipo}</span>
            {/*Aqui va el descripcion*/}
            <p className='card_description'>{descripcion}</p>

            <>
            <footer className='card_footer'>
               Creado en {anio}
            </footer>
            </>

        </article>
    )
}

LanguageCard.PropTypes={
    nombre: PropTypes.string.isRequired,
    anio: PropTypes.number.isRequired,
    tipo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    emoji: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
}

export default LanguageCard;