import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from 'react';

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push("/404");
    }, [router]);

    return (
        <div className="main-404">
            <Head>
                <title>Page Not Found | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href="https://www.registerkaro.in/404" />
            </Head>
            <div>
                <h1>404 - Page Not Found</h1>
            </div>
        </div>
    )
}