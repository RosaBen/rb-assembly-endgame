export default function Word({ word }) {
  const wordLetters = word
    .split("")
    .map((letter) => <span key={letter}>{letter.toLocaleUpperCase()}</span>);

  return <section className="letters">{wordLetters}</section>;
}
