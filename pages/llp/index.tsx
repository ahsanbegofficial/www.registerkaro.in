import Head from "next/head";
import useSWR from "swr";
import { Loading } from "../../components/child_components/Loading";
import LLPs from "../../components/llp/LLPs";

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json())
    .then((res) => res)

export default function Home() {
  const { data, error } = useSWR("/api/llp/getAllLLP", fetcher, {
    revalidateOnFocus: true,
    refreshInterval: 600000,
  });

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loading />

  return (
    <div>
      <Head>
        <title>LLP's Data | RegisterKaro</title>
        <meta name="description" content="CRM made in RegisterKaro" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.registerkaro.in/llp" />
        <meta property="og:title" content="LLP's Data" />
        <meta property="og:description" content="The Official RegisterKaro" />
      </Head>
      <main className="container d-flex justify-content-center align-items-center">
        <div className="w-75">
          <h1 className="my-5 text-center">LLP Data</h1>
          {data?.map((llp: any, i: number) => (
            <LLPs key={i} llp={llp} />
          ))}
        </div>
      </main>
    </div>
  );
}