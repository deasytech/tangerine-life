import GoBackButton from "@/components/GoBackButton"
import TeamCard from "@/components/cards/TeamCard"
import { DIRECTORS, MANAGEMENT } from "@/constants/life"

const LeadershipTeamPage = () => {
  return (
    <>
      <section className="max-container padding-container mt-36">
        <GoBackButton />
        <h1 className="mt-10 bold-48 text-green-base mb-6">Leadership</h1>
        <p className="text-generic-700 text-lg w-full md:w-2/4">The backbone of our operations, our management team is committed to excellence in every aspect of our business. From human resources to technology, operations, sales, and customer service, each member brings their unique expertise to the table, driving growth and ensuring exceptional customer experiences.</p>
      </section>
      <section className="max-container padding-container mt-20">
        <p className="text-generic-500 uppercase font-gilroy-semibold mb-2">Leadership</p>
        <h2 className="bold-48 text-green-base mb-6">Board of Directors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {DIRECTORS.map((team) =>
            <TeamCard
              key={team.name}
              image={team.image}
              name={team.name}
              position={team.position}
              width={384}
              height={372}
            />
          )}
        </div>
      </section>
      <section className="max-container padding-container mt-32">
        <h1 className="bold-48 text-green-base mb-6">Management Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {MANAGEMENT.map((team) =>
            <TeamCard
              key={team.name}
              image={team.image}
              name={team.name}
              position={team.position}
            />
          )}
        </div>
      </section>
    </>
  )
}

export default LeadershipTeamPage