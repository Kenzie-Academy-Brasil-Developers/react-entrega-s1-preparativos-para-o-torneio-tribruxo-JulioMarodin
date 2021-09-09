import Card from '../Card';
import './styles.css';

function CardsList({ showCharacters }) {
  return (
    <div className="cards-list">
      {showCharacters.map((character) => (
        <Card character={character} key={character.id} />
      ))}
    </div>
  );
}

export default CardsList;
