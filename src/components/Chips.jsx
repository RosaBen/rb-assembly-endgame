export default function Chips({ chips }) {
  const languages = chips.map((chip) => (
    <span
      key={chip.name}
      style={{ backgroundColor: chip.backgroundColor, color: chip.color }}
    >
      {chip.name}
    </span>
  ));

  return <section className="language-chips">{languages}</section>;
}
