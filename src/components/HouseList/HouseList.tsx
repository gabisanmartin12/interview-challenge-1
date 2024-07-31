import { useHouses } from "@/hooks/IceAndFire";

const HouseList = () => {
  const { data: houses, isLoading, isSuccess } = useHouses();

  if (isLoading) return <p>Loading...</p>;

  if (!isSuccess) return <p>Something went wrong</p>;

  return (
    <section aria-label="Houses' List">
      {houses.map((house) => (
        <article key={house.id} aria-labelledby="houseName">
          <h2 id="houseName">{house.name}</h2>

          {/** TODO: Draw Sworn Memebers list */}
          {house.swornMembersIds.length === 0 ? (
            <p>This house has no sworn members</p>
          ) : (
            <section>Sworn list</section>
          )}
        </article>
      ))}
    </section>
  );
};

export default HouseList;
