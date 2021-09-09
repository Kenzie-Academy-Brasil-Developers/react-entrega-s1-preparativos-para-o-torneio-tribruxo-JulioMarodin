import './styles.css';

function StartPage({ generateRandomCards }) {
  return (
    <div>
      <h1 className="text-start">Torneio Tribruxo</h1>
      <p className="text-start">
        Clique no botão para encontrar os feiticeiros!
      </p>
      <button className="button-start" onClick={generateRandomCards}>
        Começar!
      </button>
    </div>
  );
}

export default StartPage;
