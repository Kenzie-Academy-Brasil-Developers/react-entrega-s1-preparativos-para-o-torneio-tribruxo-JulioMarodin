import { useEffect, useState } from 'react';
import './App.css';
import MainPage from './Components/MainPage';
import StartPage from './Components/StartPage';

function App() {
  const housesUsed = [];
  const [allCharacters, setAllCharacters] = useState([]);
  const [showCharacters, setShowCharacters] = useState([]);
  const [showStartPage, setShowStartPage] = useState(true);

  useEffect(() => {
    fetch('http://hp-api.herokuapp.com/api/characters/students')
      .then((response) => response.json())
      .then((response) => setAllCharacters(response))
      .catch((err) => console.log(err));
  }, []);

  const generateRandomCards = () => {
    setShowStartPage(false);
    const randomNumberList = [];
    const allCharactersLength = allCharacters.length;
    while (randomNumberList.length < 3) {
      const randomNumber = Math.floor(Math.random() * allCharacters.length);
      if (
        !randomNumberList.includes(randomNumber) &&
        !housesUsed.includes(allCharacters[randomNumber].house)
      ) {
        randomNumberList.push(randomNumber);
        housesUsed.push(allCharacters[randomNumber].house);
      }
    }
    setShowCharacters([
      allCharacters[randomNumberList[0]],
      allCharacters[randomNumberList[1]],
      allCharacters[randomNumberList[2]],
    ]);
  };

  return (
    <div className="App">
      <div className="container">
        {showStartPage && (
          <StartPage generateRandomCards={generateRandomCards} />
        )}
        {!showStartPage && (
          <MainPage
            showCharacters={showCharacters}
            generateRandomCards={generateRandomCards}
          />
        )}
      </div>
    </div>
  );
}

export default App;
