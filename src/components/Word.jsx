import { useState } from "react";
export default function Word({ words }) {
  const [currentWord, setCurrentWord] = useState("REACT");

  const wordLetters = currentWord
    .split("")
    .map((letter) => <span key={letter}>{letter.toLocaleUpperCase()}</span>);

  console.log(wordLetters);

  return <section className="letters">{wordLetters}</section>;
}
