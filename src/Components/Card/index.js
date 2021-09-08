function Card({ character }) {
  return (
    <div>
      <figure>
        <img src={character.img} alt={`Foto ${character.name}`}></img>
        <figcaption></figcaption>
      </figure>
      <p>{character.name}</p>
      <p>{character.house}</p>
      <p>{character.alive}</p>
    </div>
  );
}

export default Card;
