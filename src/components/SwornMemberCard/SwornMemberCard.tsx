import { useCharacter } from "@/hooks/IceAndFire";
import { Character } from "@/types/IceAndFire";

interface SwordMemberCardProps {
  memberId: Character["id"];
}

const SwordMemberCard = ({ memberId }: SwordMemberCardProps) => {
  const { data: member, isLoading, isSuccess } = useCharacter(memberId);

  if (isLoading) return <p>Loading...</p>;
  if (!isSuccess) return <p>Something went wrong</p>;

  return (
    <article aria-labelledby="memberName">
      <header>
        <h3 id="memberName">{member.name}</h3>
        {member.hasDied && <span>Dead</span>}
      </header>

      {member.hasDied && <p>{member.deathReason}</p>}
    </article>
  );
};

export default SwordMemberCard;
