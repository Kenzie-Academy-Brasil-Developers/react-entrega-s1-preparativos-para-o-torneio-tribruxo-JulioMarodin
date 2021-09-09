import './styles.css';

function Card({ character }) {
  return (
    <div className={`card-${character.house}`}>
      <figure>
        <img
          className={character.house}
          src={character.image}
          alt={`Foto ${character.name}`}
        ></img>
        <figcaption></figcaption>
      </figure>
      <p>{character.name}</p>
      <p className={`text-${character.house}`}>{character.house}</p>
      <p>{character.alive}</p>
    </div>
  );
}

export default Card;
