import FlashCard from "../FlashCard/FlashCard";

const profile = { name: "Hope", fact: "Has a dog named porridge" };

export default function CardDisplay() {
  return (
    <div>
      <FlashCard name={profile.name} fact={profile.fact} />
    </div>
  );
}
