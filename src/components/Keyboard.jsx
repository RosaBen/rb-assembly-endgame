export default function Keyboard({ onSelect }) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const keyboardsLetters = alphabet.split("").map((letter) => (
    <button key={letter} onClick={() => onSelect(letter)}>
      {letter.toLocaleUpperCase()}
    </button>
  ));

  return <section className="keyboard">{keyboardsLetters}</section>;
}
