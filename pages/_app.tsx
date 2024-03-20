import type { AppProps } from "next/app";
import "../public/assets/styles/main.scss";
import { SessionProvider } from 'next-auth/react';
import Footer from '../components/base_layout/Footer';
import Script from "next/script";
import Header from "../components/base_layout/Header";
import ZohoSalesIQ from "../components/base_layout/ZohoSalesIq";

export default function App({ Component, pageProps, router }: AppProps) {
  const excludeHeaderFolders = ['/404', '/ads/private-company-registration'];
  const excludeFooterFolders = ['/404', '/ads/pvt-registration', '/ads/private-company-registration', '/thank-you'];
  const excludeZohoSalesIQ = ['/404', '/ads/pvt-registration', '/ads/private-company-registration', '/payment', '/admin-dashboard', '/payment-admin'];

  const shouldRenderHeader = !excludeHeaderFolders.some((path) =>
    router.asPath.startsWith(path)
  );
  const shouldRenderfooter = !excludeFooterFolders.some((path) =>
    router.asPath.startsWith(path)
  );
  const shouldRenderZohoSalesIQ = !excludeZohoSalesIQ.some((path) =>
    router.asPath.startsWith(path)
  );

  return (
    <html lang='en'>
      <meta property="og:site_name" content="registerkaro" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.registerkaro.in/_next/static/media/Logo.77348f99.png" />
      <link rel="icon" href="/favicon.ico" />
      <SessionProvider session={pageProps.session}>
        {shouldRenderHeader && <Header />}
        <Component {...pageProps} />
        {shouldRenderfooter && <Footer />}
        {shouldRenderZohoSalesIQ && <ZohoSalesIQ />}
      </SessionProvider>
      <Script id="ms-clarity" dangerouslySetInnerHTML={{
        __html: `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "kl3azert5x");
          `,
      }} />
      <Script id="google-tag-script" dangerouslySetInnerHTML={{
        __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-M9BCLJM');
          `,
      }}
      />
      <Script id="facebook" dangerouslySetInnerHTML={{
        __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '3045522935711858');
        fbq('track', 'PageView');
          `,
      }}
      />
    </html>
  );
}