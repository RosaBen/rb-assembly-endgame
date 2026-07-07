import { useState } from "react";
export default function Word({ words }) {
  const [currentWord, setCurrentWord] = useState("");

  const wordLetters = words[0].name.split("");

  const blocks = wordLetters.map((letter) => (
    <span key={letter}>{letter}</span>
  ));

  return <section className="letters">{blocks}</section>;
}
