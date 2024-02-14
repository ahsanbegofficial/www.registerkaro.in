const GLOBAL_VARIABLE = process.env.GLOBAL_VARIABLE

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
       <loc>${GLOBAL_VARIABLE}/pages-sitemap.xml</loc>
       <changefreq>daily</changefreq>
    </sitemap>
    <sitemap>
       <loc>${GLOBAL_VARIABLE}/dynamic-pages-sitemap.xml</loc>
       <changefreq>daily</changefreq>
    </sitemap>
    <sitemap>
      <loc>${GLOBAL_VARIABLE}/blog-posts-sitemap.xml</loc>
      <changefreq>daily</changefreq>
    </sitemap>
    <sitemap>
    <loc>${GLOBAL_VARIABLE}/blog-categories-sitemap.xml</loc>
    <changefreq>daily</changefreq>
    </sitemap>
   <sitemap>
   <loc>${GLOBAL_VARIABLE}/dynamic-private-company-registration-sitemap.xml</loc>
   <changefreq>daily</changefreq>
   </sitemap>
   <sitemap>
   <loc>${GLOBAL_VARIABLE}/dynamic-llp-registration-sitemap.xml</loc>
   <changefreq>daily</changefreq>
   </sitemap>
   <sitemap>
   <loc>${GLOBAL_VARIABLE}/dynamic-one-person-company-registration-sitemap.xml</loc>
   <changefreq>daily</changefreq>
   </sitemap>
   <sitemap>
   <loc>${GLOBAL_VARIABLE}/state-sitemap.xml</loc>
   <changefreq>daily</changefreq>
   </sitemap>
  </sitemapindex>
 `;
}

export default function SiteMap() { }

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}