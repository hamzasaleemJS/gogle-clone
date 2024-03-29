import Head from "next/head";
import Header from "../components/Header";
import Response from "../Response";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";

function Search({ results }) {
  const router = useRouter();
  console.log(results);
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Search Result */}
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  try {
    const { term } = context.query;
    const useDummyData = false;
    const startIndex = context.query.start || "0";

    const data = useDummyData
      ? Response
      : await fetch(
          `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${term}&start=${startIndex}`
        ).then((response) => response.json());

    return {
      props: {
        results: data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
    };
  }
}
