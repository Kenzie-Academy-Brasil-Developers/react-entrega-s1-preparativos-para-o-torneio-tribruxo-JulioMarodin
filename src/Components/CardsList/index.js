import Card from '../Card';

function CardsList({ showCharacters }) {
  return (
    <div>
      {showCharacters.map((character) => (
        <Card character={character} key={character.id} />
      ))}
    </div>
  );
}

export default CardsList;
