import CardsList from '../CardsList';

function MainPage({ showCharacters, generateRandomCards }) {
  return (
    <div>
      <CardsList showCharacters={showCharacters} />
      <button onClick={generateRandomCards}>Tentar novamente</button>
    </div>
  );
}

export default MainPage;
