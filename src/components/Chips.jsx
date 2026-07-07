export default function Chips({ chips }) {
  const languages = chips.map((chip, index) => (
    <span
      key={index}
      style={{ backgroundColor: chip.backgroundColor, color: chip.color }}
    >
      {chip.name}
    </span>
  ));
  return <section className="chips">{languages}</section>;
}
