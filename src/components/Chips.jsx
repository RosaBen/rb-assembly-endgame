export default function Chips({ chips }) {
  console.log(chips);
  const languages = chips.map((chip, index) => (
    <span key={index}>{chip.name}</span>
  ));
  return <section>{languages}</section>;
}
