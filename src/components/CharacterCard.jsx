import PropTypes from 'prop-types'
import '../styles/LanguageRow.css'

export default function CharacterCard({ character }) {
  return (
    <li className="language-row">
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>
        {character.species} - {character.status}
      </p>
    </li>
  );
}

CharacterCard.prototype ={
character:PropTypes.string.isRequired
}