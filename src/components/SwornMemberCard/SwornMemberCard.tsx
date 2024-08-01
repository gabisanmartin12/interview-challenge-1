import { useCharacter } from "@/hooks/IceAndFire";
import { Character } from "@/types/IceAndFire";

interface SwordMemberCardProps {
  memberId: Character["id"];
}

const SwordMemberCard = ({ memberId }: SwordMemberCardProps) => {
  const { data: member, isSuccess } = useCharacter(memberId);

  if (!isSuccess) return null;

  const borderClass = member.hasDied
    ? "border-l-red-500"
    : "border-l-green-500";

  const liveIndicatorClasses = member.hasDied
    ? `bg-red-500 text-red-100`
    : `bg-green-500 text-green-100`;

  return (
    <article
      aria-labelledby="memberName"
      className={`py-2 px-4 border-l-4 ${borderClass}`}
    >
      <header className="flex gap-2 items-center">
        <h3 className="text-2xl" id="memberName">
          {member.name}
        </h3>
        <span
          className={`rounded-md py-0.5 px-1 text-sm ${liveIndicatorClasses}`}
        >
          {member.hasDied ? "Dead" : "Alive"}
        </span>
      </header>

      {member.hasDied && (
        <p className="mt-2 text-md text-white/60">{member.deathReason}</p>
      )}
    </article>
  );
};

export default SwordMemberCard;
