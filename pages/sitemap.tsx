import Image from "next/image";
import Link from "next/link";
import data from '../assets/data/sitemap.json';
import logo from '../assets/images/sitemaplink.png';
import Head from "next/head";

type SitemapData = {
  [category: string]: {
    [subcategory: string]: {
      link: string;
      topics: {
        link: string;
        title: string;
      }[];
    };
  };
};

export default function Sitemap() {
  const sitemapData: SitemapData = data;

  return (
    <>
      <Head>
        <title>Sitemap | RegisterKaro</title>
        <meta name="description" content="The Official RegisterKaro" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.registerkaro.in/sitemap" />
        <meta property="og:title" content="Sitemap | RegisterKaro" />
        <meta property="og:description" content="The Official RegisterKaro" />
      </Head>
      <div className="sitemap">
        <h1 className='sitemap-heading'>Our Services</h1>
        <div className='sitemap-div'>
          {Object.entries(sitemapData).map(([category, subcategories]) => (
            <div key={category}>
              <div className='category'>{category}</div>
              <div>
                {Object.entries(subcategories).map(([subcategory, details]) => (
                  <div key={subcategory}>
                    <h6><Image src={logo} alt='sitemap' className='sitemap-img' /><Link href={details.link}>{subcategory}</Link></h6>
                    {details.topics.map((topic, i) => (
                      <p key={i}><Link href={topic.link}>{topic.title}</Link></p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}