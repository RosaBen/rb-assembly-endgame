import clsx from "clsx";

export default function Keyboard({
  onSelect,
  selected,
  currentWord,
  disabled,
}) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const keyboardsLetters = alphabet.split("").map((letter, index) => {
    const isSelected = selected.includes(letter);
    const isCorrect = isSelected && currentWord.includes(letter);
    const isWrong = isSelected && !currentWord.includes(letter);
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <button
        key={letter}
        onClick={() => onSelect(letter)}
        className={className}
        disabled={disabled}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  return <section className="keyboard">{keyboardsLetters}</section>;
}
