export default function Word({ word, selectedLetter }) {
  const lowercaseWord = word.toLowerCase();
  const wordLetters = lowercaseWord
    .split("")
    .map((letter) => (
      <span key={letter}>
        {selectedLetter.includes(letter) ? letter.toUpperCase() : ""}
      </span>
    ));

  return <section className="letters">{wordLetters}</section>;
}
