function StartPage({ generateRandomCards }) {
  return (
    <div>
      <h1>Torneio Tribruxo</h1>
      <p>Clique no botão para encontrar os feiticeiros!</p>
      <button onClick={generateRandomCards}>Começar!</button>
    </div>
  );
}

export default StartPage;
