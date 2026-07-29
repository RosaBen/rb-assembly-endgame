import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Chips from "./components/Chips";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";

import { languages } from "./assets/scripts/data";
import { getFarewellText } from "./assets/scripts/utils";

function App() {
  const [currentWord, setCurrentWord] = useState("REACT");
  const [guessedLetters, setGuessedLetters] = useState([]);

  const { name, id } = languages;

  const lowerCurrentWord = currentWord.toLowerCase();
  const handleSelect = (value) => {
    setGuessedLetters((prev) =>
      prev.includes(value) ? prev : [...prev, value],
    );
  };

  const wrongGuessedCount = guessedLetters.filter(
    (letter) => !lowerCurrentWord.includes(letter),
  ).length;

  const isGameWon = lowerCurrentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const isGameLost = wrongGuessedCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const islastGuessIncorrect =
    lastGuessedLetter && !lowerCurrentWord.includes(lastGuessedLetter);

  function renderGameStatus() {
    if (!isGameOver && islastGuessIncorrect) {
      return (
        <>
          <p className="farewell-text">
            {getFarewellText(languages[wrongGuessedCount - 1].name)}
          </p>
        </>
      );
    }

    if (isGameWon) {
      return (
        <>
          <h2>You win!</h2>
          <p>Well done! 🎉</p>
        </>
      );
    } else if (isGameLost) {
      return (
        <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly 😭</p>
        </>
      );
    }

    return null;
  }

  return (
    <main>
      <Header
        statusGame={renderGameStatus}
        win={isGameWon}
        lost={isGameLost}
        farewell={islastGuessIncorrect}
      />
      <Chips
        langs={languages}
        count={wrongGuessedCount}
        // onChangeChipState={handleChipState}
      />
      <Word word={lowerCurrentWord} selectedLetter={guessedLetters} />
      <Keyboard
        onSelect={handleSelect}
        selected={guessedLetters}
        currentWord={lowerCurrentWord}
      />
      {isGameOver && <button className="new-game">New Game</button>}
      <Footer />
    </main>
  );
}

export default App;
