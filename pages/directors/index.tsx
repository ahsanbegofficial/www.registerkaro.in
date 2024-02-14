import Head from "next/head";
import useSWR from "swr";
import { Loading } from "../../components/child_components/Loading";
import Directors from "../../components/directors/Directors";

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json())
    .then((res) => res)

export default function Home() {
  const { data, error } = useSWR("/api/directors/getAllDirector", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loading />

  return (
    <div>
      <Head>
        <title>Directors Data | RegisterKaro</title>
        <meta name="description" content="CRM made in RegisterKaro" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.registerkaro.in/directors" />
        <meta property="og:title" content="Directors Data  | RegisterKaro" />
        <meta property="og:description" content="The Official RegisterKaro" />
      </Head>

      <main className="container d-flex justify-content-center align-items-center">
        <div className="w-75">
          <h1 className="my-5 text-center">Directors Data</h1>
          {data.map((director: any, i: number) => (
            <Directors key={i} director={director} />
          ))}
        </div>
      </main>
    </div>
  );
}