import { Character } from "@/types/IceAndFire";

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
        <article key={id}>{id}</article>
      ))}
    </section>
  );
};

export default SwornMemberList;
