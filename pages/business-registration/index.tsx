import Head from "next/head";
import PricingCard from "../../components/child_components/PricingCard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Business Registration | RegisterKaro</title>
        <meta name="description" content="The Official RegisterKaro" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.registerkaro.in/business-registration" />
      </Head>
      <PricingCard />
    </div>
  );
};