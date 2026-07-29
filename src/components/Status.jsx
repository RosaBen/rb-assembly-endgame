import clsx from "clsx";

export default function Status({ status, win, lost }) {
  const classStatus = clsx("game-status", {
    won: win,
    lost: lost,
  });

  return <section className={classStatus}>{status()}</section>;
}
<>
  <h2>You win!</h2>
  <p>Well done! 🎉</p>
</>;
