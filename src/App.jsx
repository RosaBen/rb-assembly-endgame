import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Chips from "./components/Chips";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";

import { languages, words } from "./assets/scripts/data";
import { getFarewellText, getNewWord } from "./assets/scripts/utils";

function App() {
  const { name, id } = languages;

  // state values
  const [currentWord, setCurrentWord] = useState(() => getNewWord());
  const [guessedLetters, setGuessedLetters] = useState([]);

  // derived values
  const numGuessedLeft = languages.length - 1;
  const lowerCurrentWord = currentWord.toLowerCase();
  const wrongGuessedCount = guessedLetters.filter(
    (letter) => !lowerCurrentWord.includes(letter),
  ).length;
  const isGameWon = lowerCurrentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameLost = wrongGuessedCount >= numGuessedLeft;
  const isGameOver = isGameWon || isGameLost;
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const islastGuessIncorrect =
    lastGuessedLetter && !lowerCurrentWord.includes(lastGuessedLetter);
  const srWord = lowerCurrentWord
    .split("")
    .map((letter) =>
      guessedLetters.includes(letter) ? letter + "." : "blank.",
    )
    .join(" ");

  // functions
  function handleSelect(value) {
    setGuessedLetters((prev) =>
      prev.includes(value) ? prev : [...prev, value],
    );
  }
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

  function startNewGame() {
    setCurrentWord(getNewWord());
    setGuessedLetters([]);
  }

  return (
    <main>
      <Header
        statusGame={renderGameStatus}
        win={isGameWon}
        lost={isGameLost}
        farewell={islastGuessIncorrect}
      />
      <Chips langs={languages} count={wrongGuessedCount} />
      <Word word={lowerCurrentWord} selectedLetter={guessedLetters} />

      {/* Combined visually-hidden aria-live region for status updates */}
      <section className="sr-only" aria-live="polite" role="status">
        <p>
          {lowerCurrentWord.includes(lastGuessedLetter)
            ? `Correct! The letter ${lastGuessedLetter} is in the word`
            : `Sorry, The letter ${lastGuessedLetter} is not in the word`}
          You have {numGuessedLeft} attempts left.
        </p>
        <p>{`Current Word: ${srWord}`}</p>
      </section>
      <Keyboard
        onSelect={handleSelect}
        selected={guessedLetters}
        currentWord={lowerCurrentWord}
        disabled={isGameOver}
      />
      {isGameOver && (
        <button className="new-game" onClick={() => startNewGame()}>
          New Game
        </button>
      )}
      <Footer />
    </main>
  );
}

export default App;
