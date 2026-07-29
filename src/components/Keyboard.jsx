import clsx from "clsx";

export default function Keyboard({ onSelect, selected, currentWord }) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const lowercaseWord = currentWord.toLowerCase();

  const keyboardsLetters = alphabet.split("").map((letter) => {
    const isSelected = selected.includes(letter.toLowerCase());
    const isCorrect =
      isSelected && lowercaseWord.includes(letter.toLowerCase());
    const isWrong = isSelected && !lowercaseWord.includes(letter.toLowerCase());
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });
    return (
      <button
        key={letter}
        onClick={() => onSelect(letter)}
        className={className}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  return <section className="keyboard">{keyboardsLetters}</section>;
}
