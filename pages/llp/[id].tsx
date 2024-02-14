import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Loading } from "../../components/child_components/Loading";
import Director from "../../components/directors/Director";
import LLP from "../../components/llp/LLP";

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export default function Home() {
  const router = useRouter();
  const id = router.query.id as string;
  const { data, error } = useSWR(`/api/llp/${id}`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loading />

  const llps = Array.isArray(data) ? data : [data];

  let hf = `https://www.registerkaro.in/llp/${id}`
  return (
    <div>
      <Head>
        <title>LLP Data | RegisterKaro</title>
        <meta name="description" content="CRM made in RegisterKaro" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={hf} />
        <meta property="og:title" content="LLP Data | RegisterKaro" />
        <meta property="og:description" content="The Official RegisterKaro" />
      </Head>

      <main className="container d-flex justify-content-center align-items-center">
        <div className="w-75">
          <h1 className="my-5 text-center">LLP Data</h1>

          {llps?.map((llp: any, i: number) => (
            <LLP key={i} llp={llp} />
          ))}

          {llps[0]?.Directortocompany.length > 0 ? (
            <h1 className="my-5 text-center">Director Data</h1>
          ) : null}

          {llps[0]?.Directortocompany.map((dir: any, i: number) => (
            <Director key={i} director={dir.DIN} />
          ))}
        </div>
      </main>
    </div>
  );
}