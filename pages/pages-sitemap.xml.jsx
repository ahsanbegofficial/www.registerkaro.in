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
      <url>
       <loc>${GLOBAL_VARIABLE}/one-person-company</loc>
       <lastmod>2021-06-28</lastmod>
      </url>
      <url>
      <loc>${GLOBAL_VARIABLE}/llp-registration</loc>
      <lastmod>2021-06-28</lastmod>
     </url>
     <url>
     <loc>${GLOBAL_VARIABLE}/winding-up-of-a-company</loc>
     <lastmod>2021-06-28</lastmod>
    </url>
    <url>
    <loc>${GLOBAL_VARIABLE}/fpo-mark-certification</loc>
    <lastmod>2021-06-28</lastmod>
   </url>
   <url>
    <loc>${GLOBAL_VARIABLE}/trademark-registration</loc>
    <lastmod>2021-06-28</lastmod>
   </url>
   <url>
    <loc>${GLOBAL_VARIABLE}/fssai-registration</loc>
    <lastmod>2021-06-28</lastmod>
   </url>
   <url>
   <loc>${GLOBAL_VARIABLE}/section-8-company-registration</loc>
   <lastmod>2021-06-28</lastmod>
  </url>
  <url>
  <loc>${GLOBAL_VARIABLE}/isi-mark-certification</loc>
  <lastmod>2021-06-28</lastmod>
 </url>
 <url>
  <loc>${GLOBAL_VARIABLE}/bis-certification</loc>
  <lastmod>2021-06-28</lastmod>
 </url>
 <url>
 <loc>${GLOBAL_VARIABLE}/iso-certification</loc>
 <lastmod>2021-06-28</lastmod>
</url>
<url>
<loc>${GLOBAL_VARIABLE}/gumasta-license</loc>
<lastmod>2021-06-28</lastmod>
</url>
<url>
<loc>${GLOBAL_VARIABLE}/msme-registration-online</loc>
<lastmod>2021-06-28</lastmod>
</url>
<url>
<loc>${GLOBAL_VARIABLE}/consumer-complaint</loc>
<lastmod>2021-06-28</lastmod>
</url>
<url>
<loc>${GLOBAL_VARIABLE}/book-keeping-and-accounting-services</loc>
<lastmod>2021-06-28</lastmod>
</url>
<url>
<loc>${GLOBAL_VARIABLE}/firm-registration</loc>
<lastmod>2021-06-28</lastmod>
</url>
<url>
<loc>${GLOBAL_VARIABLE}/sole-proprietorship-registration</loc>
<lastmod>2021-06-28</lastmod>
</url>
<url>
<loc>${GLOBAL_VARIABLE}/partnership-firm-registration</loc>
<lastmod>2021-06-28</lastmod>
</url>
<url>
<loc>${GLOBAL_VARIABLE}/nbfc-registration</loc>
<lastmod>2021-06-28</lastmod>
</url>
<url>
<loc>${GLOBAL_VARIABLE}/trust-registration</loc>
<lastmod>2021-06-28</lastmod>
</url>
<url>
<loc>${GLOBAL_VARIABLE}/producer-company-registration</loc>
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