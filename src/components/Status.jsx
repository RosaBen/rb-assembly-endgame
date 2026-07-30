import clsx from "clsx";

export default function Status({ status, mode }) {
  const classStatus = clsx("game-status", {
    won: mode === "won",
    lost: mode === "lost",
    farewell: mode === "farewell",
  });

  return (
    <section className={classStatus} aria-live="polite" role="status">
      {status()}
    </section>
  );
}
