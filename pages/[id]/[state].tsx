import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from "swr";
import bgImage from '../../assets/images/organic/bgColor.webp';
import { CustomDefault } from "../../components/child_components/CustomDefault";
import { Loading } from "../../components/child_components/Loading";
import ZohoFormService from "../../components/child_components/ZohoformService";
import { BusinessRegistrations } from "../../components/services/BusinessRegistrations";

const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then((res) => res.text());

function formatQuery(query: string) {
    return query ? query.split("-").map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") : "";
}

export default function Home() {
    const router = useRouter();
    const Query = router.query.state as string;
    const { data, error } = useSWR(`/api/startup/${Query}`, fetcher);
    const formattedQuery = Query ? formatQuery(Query) : "";
    const pageTitle = `${formattedQuery} | RegisterKaro`;

    let hf = `https://www.registerkaro.in/${Query}`

    if (!data && !error) {
        return <Loading />;
    }
    if (error || data === 'false') {
        return <CustomDefault />;
    }

    return (
        <div className="stateId">
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href={hf} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageTitle} />
            </Head>
            <div className="header-service">
                <Image
                    src={bgImage}
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    priority={true}
                    className="background-image"
                />
                <div className="header-content">
                    <h1>{formattedQuery}</h1>
                    <p className="para">Register your Company with India’s No.1 Company Registration service provider. Our experts will help you in incorporating your company in India in minimal time</p>
                    {/* <button onClick={openModal} className="youtube-btn">
                <Image className="img" src={Youtube} alt="image" height={30} width={30} />
                <span className="underline">Click to watch 60 seconds video</span>
              </button> */}
                    <p className="business"><span className="font-weight-700">50,000+</span> businesses incorporated since 2021</p>
                </div>
                <div className="zoho">
                    <ZohoFormService service={Query} />
                </div>
            </div>
            <BusinessRegistrations data={data} />
        </div>
    )
}