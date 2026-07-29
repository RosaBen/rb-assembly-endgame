export default function Chips({ langs, count }) {
  const languages = langs.map((lang, index) => {
    const isLanguageLost = index < count;
    return (
      <span
        key={lang.name}
        style={{ backgroundColor: lang.backgroundColor, color: lang.color }}
        className={`chip ${isLanguageLost ? "lost" : ""}`}
      >
        {lang.name}
      </span>
    );
  });

  return <section className="language-chips">{languages}</section>;
}
