import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chips from "./components/Chips";
import Word from "./components/Word";
import Keyboard from "./components/Keyboard";

import { languages } from "./assets/scripts/data";
function App() {
  const [currentWord, setCurrentWord] = useState("REACT");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const handleSelect = (value) => {
    setGuessedLetters((prev) =>
      prev.includes(value) ? prev : [...prev, value],
    );
  };

  const lowerCurrentWord = currentWord.toLowerCase();

  const wrongGuessedArray = guessedLetters.filter(
    (letter) => !lowerCurrentWord.includes(letter),
  );
  return (
    <main>
      <Header />
      <Chips chips={languages} />
      <Word
        word={lowerCurrentWord}
        selectedLetter={guessedLetters}
        // setSelectedLetter={setGuessedLetters}
      />
      <Keyboard
        onSelect={handleSelect}
        selected={guessedLetters}
        currentWord={lowerCurrentWord}
      />
      <button className="new-game">New Game</button>
      <Footer />
    </main>
  );
}

export default App;
