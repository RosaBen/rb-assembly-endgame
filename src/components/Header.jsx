import Status from "./Status";

export default function Header({ statusGame, win, lost }) {
  return (
    <header>
      <div>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </div>
      <Status status={statusGame} win={win} lost={lost} />
    </header>
  );
}
