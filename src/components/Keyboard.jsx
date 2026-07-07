export default function Keyboard() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const keyboardsLetters = alphabet
    .split("")
    .map((letter) => (
      <button key={letter}>{letter.toLocaleUpperCase()}</button>
    ));

  return <section className="keyboard">{keyboardsLetters}</section>;
}
