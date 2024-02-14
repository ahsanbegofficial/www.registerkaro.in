import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from 'react';
import useSWR from "swr";
import { BusinessRegistrations } from "../../components/services/BusinessRegistrations";
import { Loading } from "../../components/child_components/Loading";

const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then((res) => res.text());

function formatQuery(query: string) {
    return query ? query.split("-").map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") : "";
}

export default function Home() {
    const router = useRouter();
    const Query = router.query.id as string;

    const { data, error } = useSWR(`/api/startup/${Query}`, fetcher);

    useEffect(() => {
        if (error) {
            router.push("/");
        }
    }, [error, router]);

    if (!data) return <Loading />

    const formattedQuery = Query ? formatQuery(Query) : "";
    const pageTitle = `${formattedQuery} | RegisterKaro`;

    return (
        <div>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <BusinessRegistrations data={data} />
        </div>
    )
}