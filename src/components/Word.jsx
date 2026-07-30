import clsx from "clsx";

export default function Word({ word, selectedLetter, lost, notFound, found }) {
  const wordLetters = word.split("").map((letter, index) => {
    const isNotFound = notFound.includes(letter);
    const isFound = found.includes(letter);
    const className = clsx(
      lost && isNotFound && "not-guessed",
      lost && isFound && "guessed",
    );
    return (
      <span key={index} className={className}>
        {!lost
          ? selectedLetter.includes(letter)
            ? letter.toUpperCase()
            : ""
          : letter.toUpperCase()}
      </span>
    );
  });

  return (
    <>
      <section className="letters">{wordLetters}</section>
    </>
  );
}
