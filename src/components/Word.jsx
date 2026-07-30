export default function Word({ word, selectedLetter }) {
  const wordLetters = word
    .split("")
    .map((letter, index) => (
      <span key={index}>
        {selectedLetter.includes(letter) ? letter.toUpperCase() : ""}
      </span>
    ));

  return (
    <>
      <section className="letters">{wordLetters}</section>
    </>
  );
}
