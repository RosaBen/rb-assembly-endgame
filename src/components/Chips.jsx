import clsx from "clsx";

export default function Chips({ langs, count }) {
  const languages = langs.map((lang, index) => {
    const isLanguageLost = index < count;
    const className = clsx("chip", isLanguageLost && "lost");
    return (
      <span
        key={lang.name}
        style={{ backgroundColor: lang.backgroundColor, color: lang.color }}
        className={className}
      >
        {lang.name}
      </span>
    );
  });

  return <section className="language-chips">{languages}</section>;
}
