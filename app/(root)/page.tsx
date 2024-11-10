import SearchForm from "@/components/SearchForm"


const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  return (
    <div className=" pink_container">
      <h1 className="heading">
      Pitch Your Startup, <br />
      Connect With Entrepreneurs
      </h1>

      <p className=" sub-heading !max-w-3xl">
      Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
      Competitions.
      </p>

      <SearchForm query={query} />
    </div>
  )
}

export default page