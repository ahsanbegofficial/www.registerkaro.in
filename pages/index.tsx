import Script from 'next/script'
import Hero from "../components/landing/Hero";
import Blog from "../components/landing/Blog";
import About from "../components/landing/About";
import Testimonial from "../components/landing/Testimonial";
import OurPartners from "../components/landing/OurPartners";
import WhatWeDo from "../components/landing/WhatWeDo";
import OurServices from "../components/landing/OurServices";
import Contact from '../components/landing/Contact';
import GrowYourBusiness from '../components/landing/GrowYourBusiness';
import NextNProgress from "nextjs-progressbar";
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | RegisterKaro</title>
        <meta property="og:description" content="The Official RegisterKaro" />
        <meta name="description" content="The Official RegisterKaro" />
        <link rel="canonical" href="https://www.registerkaro.in" />
        <meta property="og:title" content="Home | RegisterKaro" />
        <meta property="og:description" content="The Official RegisterKaro" />
      </Head>
      <>
        <NextNProgress color="#ffa229" height={5} />
        <Hero />
        <About isBg="yes" />
        <OurServices isBg="" />
        <GrowYourBusiness isBg="" />
        <OurPartners isBg="yes" />
        <WhatWeDo isBg="yes" />
        <Testimonial isBg="" />
        <Blog isBg="yes" />
        <Contact isBg="" />
      </>
      <Script id="pagesense" src="https://cdn-in.pagesense.io/js/60026709743/82347cc123444452a9f555d135a7a4c5.js" />
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M9BCLJM"
        height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
      <noscript><img height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}
        src="https://www.facebook.com/tr?id=3045522935711858&ev=PageView&noscript=1"
      /></noscript>
    </div>
  );
}