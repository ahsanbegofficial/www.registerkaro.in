import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Loading } from "../../components/child_components/Loading";
import Company from "../../components/companies/Company";
import Director from "../../components/directors/Director";

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export default function Home() {
  const router = useRouter();
  const id = router.query.id as string;
  const { data, error } = useSWR(`/api/directors/${id}`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loading />

  const directors = Array.isArray(data) ? data : [data];

  let hf = `https://www.registerkaro.in/directors/${id}`
  return (
    <div>
      <Head>
        <title>Director Data | RegisterKaro</title>
        <meta name="description" content="CRM made in RegisterKaro" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={hf} />
        <meta property="og:title" content="Directors Data  | RegisterKaro" />
        <meta property="og:description" content="The Official RegisterKaro" />
      </Head>

      <main className="container d-flex justify-content-center align-items-center">
        <div className="w-75">
          <h1 className="my-5 text-center">Director Data</h1>

          {directors.map((director: any, i: number) => (
            <Director key={i} director={director} />
          ))}
          {directors[0]?.DirectortoCompany.length > 0 && (
            <>
              <h1 className="my-5 text-center">Company Data</h1>
              {directors[0]?.DirectortoCompany.map((comp: any, i: number) => (
                <Company key={i} company={comp.CIN} />
              ))}
            </>
          )}
        </div>
      </main>
    </div>
  );
}