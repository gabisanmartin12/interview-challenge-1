import { Character } from "@/types/IceAndFire";
import SwornMemberCard from "@/components/SwornMemberCard";

interface SwornMemberListProps {
  membersIds: Character["id"][];
}

const SwornMemberList = ({ membersIds }: SwornMemberListProps) => {
  if (membersIds.length === 0) {
    return <p>This house has no sworn members</p>;
  }

  return (
    <section>
      {membersIds.map((id) => (
        <SwornMemberCard key={id} memberId={id} />
      ))}
    </section>
  );
};

export default SwornMemberList;
