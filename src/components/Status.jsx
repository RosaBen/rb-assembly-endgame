import clsx from "clsx";

export default function Status({ win, lost, over }) {
  const classStatus = clsx("game-status", {
    won: win,
    lost: lost,
  });
  return (
    <section className={classStatus}>
      {over ? (
        win ? (
          <>
            <h2>You win!</h2>
            <p>Well done! 🎉</p>
          </>
        ) : (
          <>
            <h2>Game over!</h2>
            <p>You lose! Better start learning Assembly 😭</p>
          </>
        )
      ) : null}
    </section>
  );
}
<>
  <h2>You win!</h2>
  <p>Well done! 🎉</p>
</>;
