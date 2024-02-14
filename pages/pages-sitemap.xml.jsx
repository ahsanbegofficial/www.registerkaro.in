const GLOBAL_VARIABLE=process.env.GLOBAL_VARIABLE

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      <url>
       <loc>${GLOBAL_VARIABLE}/business-registration</loc>
       <lastmod>2021-06-28</lastmod>
      </url>
      <url>
       <loc>${GLOBAL_VARIABLE}/companies</loc>
       <lastmod>2021-06-28</lastmod>
      </url>
      <url>
       <loc>${GLOBAL_VARIABLE}/directors</loc>
       <lastmod>2021-06-28</lastmod>
      </url>
      <url>
       <loc>${GLOBAL_VARIABLE}/llp</loc>
       <lastmod>2021-06-28</lastmod>
      </url>
      <url>
       <loc>${GLOBAL_VARIABLE}/company-name-check</loc>
       <lastmod>2021-06-28</lastmod>
      </url>
      <url>
       <loc>${GLOBAL_VARIABLE}/company-details</loc>
       <lastmod>2021-06-28</lastmod>
      </url>
      <url>
       <loc>${GLOBAL_VARIABLE}/nic-code</loc>
       <lastmod>2021-06-28</lastmod>
      </url>
      <url>
       <loc>${GLOBAL_VARIABLE}/terms-and-conditions</loc>
       <lastmod>2021-06-28</lastmod>
      </url>
      <url>
       <loc>${GLOBAL_VARIABLE}/virtual-office</loc>
       <lastmod>2021-06-28</lastmod>
      </url>
   </urlset>
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