const GLOBAL_VARIABLE=process.env.GLOBAL_VARIABLE
const NEWGLOBAL_VARIABLE=process.env.NEWGLOBAL_VARIABLE

function generateSiteMap(posts) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; 
  };

  const sitemap = posts
    .map(e => `<url><loc>${GLOBAL_VARIABLE}/${e.slug}</loc><lastmod>${formatDate(e.modified_gmt)}</lastmod></url>`)
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
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
    const response = await fetch(`${NEWGLOBAL_VARIABLE}/wordpress/wp-json/wp/v2/pages?page=${page}`);
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