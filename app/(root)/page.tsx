import Navbar from "@/app/components/Navbar";
import SearchForm from "@/app/components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  return (
    <>
      <section className="blue_container">
        <h1 className="heading">
          Embark on your Journey, <br />
          Discover the Right People
        </h1>

        <p className="sub-heading !max-w-3xl">
          Share Ideas, Vote, and Get Noticed.
        </p>

        <SearchForm query={query} />
      </section>
    </>
  );
}
