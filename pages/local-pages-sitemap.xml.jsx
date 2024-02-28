const GLOBAL_VARIABLE = process.env.GLOBAL_VARIABLE
import data from '../assets/data/services.json'

function generateSiteMap(data) {
  let sitemap = '';

  for (const key in data) {
    const { slug, date, city } = data[key];
    
    city.forEach(cityName => {
      sitemap += `<url><loc>${GLOBAL_VARIABLE}/${slug}/${slug}-in-${cityName}</loc><lastmod>${date}</lastmod></url>\n`;
    });
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
   ${sitemap}
   </urlset>
 `;
}

export default function SiteMap() { }

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap(data);
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}