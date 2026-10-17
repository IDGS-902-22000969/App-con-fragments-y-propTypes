import CharacterCard from "./CharacterCard";
import '../styles/LanguageRow.css'

export default function CharacterList({ characters = [] }) {
  return (
    <ul className="glanguage-row">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </ul>
  );
}

//"grid"



