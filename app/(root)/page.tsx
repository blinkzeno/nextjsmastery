import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

const page = async ({ searchParams,}: { searchParams: Promise<{ query?: string }>;}) => {
  const query = (await searchParams).query;

  const posts = [{
      _createdAt: "yesterday",
      views: 100,
      title: "Startup 1",
      description: "Startup 1 description",
      category: "Startup 1 category",
      author: { _id: "123", name: "John Doe" },
      _id: "123",
      image: "https://images.unsplash.com/photo-1709884735626-63e92727d8b6?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
]

  return (
    <>
      <section className=" pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className=" sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">{query ? `search resultat for "${query}"` : "All startups"}</p>

        <ul className="card_grid mt-3 ">
          {posts?.length > 0 ?(
            posts.map((post) => (
              <StartupCard key={post._id} post={post} />
            ))
          )
        : (
            <p>No posts found</p>
          )}


        </ul>
      </section>
    </>
  );
};

export default page;
