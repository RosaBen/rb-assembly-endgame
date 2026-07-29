import Status from "./Status";

export default function Header({ statusGame, win, lost, farewell }) {
  return (
    <header>
      <div>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </div>
      <Status status={statusGame} win={win} lost={lost} farewell={farewell} />
    </header>
  );
}
