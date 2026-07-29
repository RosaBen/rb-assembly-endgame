import clsx from "clsx";

export default function Status({ status, win, lost, farewell }) {
  const classStatus = clsx("game-status", {
    won: win,
    lost: lost,
    farewell: farewell,
  });

  return <section className={classStatus}>{status()}</section>;
}
