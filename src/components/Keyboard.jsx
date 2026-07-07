export default function Keyboard() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const keyboardsLetters = alphabet
    .split("")
    .map((letter) => <span key={letter}>{letter.toLocaleUpperCase()}</span>);

  return <section className="keyboard">{keyboardsLetters}</section>;
}
