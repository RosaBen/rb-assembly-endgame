import clsx from "clsx";

export default function Status({ status, win, lost }) {
  const classStatus = clsx("game-status", {
    won: win,
    lost: lost,
    // farewell: status,
  });

  return <section className={classStatus}>{status()}</section>;
}
