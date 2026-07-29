export default function Word({ word, selectedLetter }) {
  const wordLetters = word.split("").map((letter) => (
    <span
      key={letter}
      className={selectedLetter.includes(letter) ? "correct" : "wrong"}
    >
      {letter.toLocaleUpperCase()}
    </span>
  ));

  return <section className="letters">{wordLetters}</section>;
}
