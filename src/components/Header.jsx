import Status from "./Status";

export default function Header({ win, lost, over }) {
  return (
    <header>
      <div>
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </div>
      <Status win={win} lost={lost} over={over} />
    </header>
  );
}
