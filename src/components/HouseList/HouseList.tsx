import SwornMemberList from "@/components/SwornMemberList";
import { useHouses } from "@/hooks/IceAndFire";

const HouseList = () => {
  const {
    data: houses,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isSuccess,
    fetchNextPage,
  } = useHouses();

  if (isLoading)
    return <p className="text-white/60 text-lg">Loading houses ...</p>;

  if (!isSuccess)
    return (
      <div className="bg-red-500 py-4 px-6 rounded-md text-lg" role="alert">
        Something went wrong
      </div>
    );

  const handleLoadMoreClick = () => fetchNextPage();

  return (
    <section aria-label="Houses' List" className="flex flex-col gap-4">
      {houses.map((house) => (
        <article
          key={house.id}
          aria-labelledby="houseName"
          className="bg-transparent/30 p-4 rounded-lg"
        >
          <h2 id="houseName" className="text-xl sm:text-2xl mb-4">
            {house.name}{" "}
            <span className="text-base sm:text-lg text-white/50">
              - {house.region}
            </span>
          </h2>

          <SwornMemberList
            houseName={house.name}
            membersIds={house.swornMembersIds}
          />
        </article>
      ))}

      {isFetchingNextPage && (
        <p className="text-white/60 text-lg text-center">
          Loading more houses ...
        </p>
      )}

      {hasNextPage && <button onClick={handleLoadMoreClick}>Load more</button>}
    </section>
  );
};

export default HouseList;
