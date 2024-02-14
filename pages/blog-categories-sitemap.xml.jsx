const GLOBAL_VARIABLE=process.env.GLOBAL_VARIABLE
const NEWGLOBAL_VARIABLE=process.env.NEWGLOBAL_VARIABLE

function generateSiteMap(posts) {
  const sitemap = posts
    .map(e => `<url><loc>${GLOBAL_VARIABLE}/blog/categories/${e.slug}</loc><lastmod>2023-12-17</lastmod></url>`)
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
   <url><loc>${GLOBAL_VARIABLE}/blog</loc></url>
   ${sitemap}
   </urlset>
 `;
}

export default function SiteMap() { }

export async function getServerSideProps({ res }) {
  let allPosts = [];
  let page = 1;
  let totalPages = 1;
  
  while (page <= totalPages) {
    const response = await fetch(`${NEWGLOBAL_VARIABLE}/wordpress/wp-json/wp/v2/categories?page=${page}`);
    const data = await response.json();

    allPosts = [...allPosts, ...data];

    const totalPagesHeader = response.headers.get('X-WP-TotalPages');
    if (totalPagesHeader) {
      totalPages = parseInt(totalPagesHeader);
    }
    page++;
  }

  const sitemap = generateSiteMap(allPosts);
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}