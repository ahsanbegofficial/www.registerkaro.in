import Head from "next/head";
import useSWR from "swr";
import Companies from "../../components/companies/Companies";
import { Loading } from "../../components/child_components/Loading";

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json())
    .then((res) => res)

export default function Home() {
  const { data, error } = useSWR("/api/companies/getAllCompany", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <Loading />

  return (
    <div>
      <Head>
        <title>Companies Data | RegisterKaro</title>
        <meta name="description" content="CRM made in RegisterKaro" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.registerkaro.in/companies" />
        <meta property="og:title" content="Companies Data  | RegisterKaro" />
        <meta property="og:description" content="The Official RegisterKaro" />
      </Head>
      <main className="container d-flex justify-content-center align-items-center">
        <div className="w-75">
          <h1 className="my-5 text-center">Companies Data</h1>
          {data.map((company: any, i: number) => (
            <Companies company={company} key={i} />
          ))}
        </div>
      </main>
    </div>
  );
}