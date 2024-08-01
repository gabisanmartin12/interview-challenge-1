import { Character } from "@/types/IceAndFire";
import { lazy, Suspense } from "react";

const SwornMemberCard = lazy(() => import("@/components/SwornMemberCard"));
interface SwornMemberListProps {
  houseName: string;
  membersIds: Character["id"][];
}

const SwornMemberList = ({ houseName, membersIds }: SwornMemberListProps) => (
  <section
    aria-label={`${houseName}'s sworn member list`}
    className="flex flex-col gap-2"
  >
    {membersIds.length === 0 ? (
      <p className="p-4 text-zinc-400 text-center italic">
        This house has no sworn members
      </p>
    ) : (
      <Suspense fallback={<p className="text-white/40">Loading...</p>}>
        {membersIds.map((id) => (
          <SwornMemberCard key={id} memberId={id} />
        ))}
      </Suspense>
    )}
  </section>
);

export default SwornMemberList;
