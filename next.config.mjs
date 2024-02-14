/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.pravatar.cc", "static.wixstatic.com", "www.registerkaro.in", "registerkaro.in", "secure.gravatar.com"],
  },
  async redirects() {
    return [
      {
        source: '/accounting-and-book-keeping',
        destination: '/book-keeping-and-accounting-services',
        permanent: true
      },
      {
        source: '/accounting-bookkeeping-services',
        destination: '/book-keeping-and-accounting-services',
        permanent: true
      },
      {
        source: '/basic-fssai-license-renewal',
        destination: '/basic-fssai-registration-renewal',
        permanent: true
      },
      {
        source: '/change-in-director-ad',
        destination: '/change-in-director',
        permanent: true
      },
      {
        source: '/change-of-directors',
        destination: '/change-in-director',
        permanent: true
      },
      {
        source: '/changes-to-llp-agreement',
        destination: '/change-llp-agreement',
        permanent: true
      },
      {
        source: '/business-and-object-clauses-in-moa',
        destination: '/post/business-and-object-clauses-in-moa',
        permanent: true
      },
      {
        source: '/close-the-pvt-ltd-company',
        destination: '/close-private-limited-company',
        permanent: true
      },
      {
        source: '/close-the-pvt-ltd-company-1',
        destination: '/close-private-limited-company',
        permanent: true
      },
      {
        source: '/companies-act-detailed-analysis',
        destination: '/companies-act-2013-analysis',
        permanent: true
      },
      {
        source: '/digital-signature-online',
        destination: '/digital-signature-certificate',
        permanent: true
      },
      {
        source: '/government-fees-for-fssai-registration',
        destination: '/post/government-fees-for-fssai-registration',
        permanent: true
      },
      {
        source: '/how-to-buy-a-dsc-from-e-mudhra',
        destination: '/post/how-to-buy-a-dsc-from-e-mudhra',
        permanent: true
      },
      {
        source: '/how-to-register-an-llp-online-in-india',
        destination: '/post/how-to-register-an-llp-online-in-india',
        permanent: true
      },
      {
        source: '/how-to-register-private-limited-company-in-india-online',
        destination: '/post/how-to-register-private-limited-company-in-india-online',
        permanent: true
      },
      {
        source: '/how-to-sign-using-dsc',
        destination: '/post/how-to-sign-using-dsc',
        permanent: true
      },
      {
        source: '/opc-company-reg',
        destination: '/ads/one-person-company',
        permanent: true
      },
      {
        source: '/opc-reg-online',
        destination: '/ads/one-person-company',
        permanent: true
      },
      {
        source: '/opc-registration',
        destination: '/one-person-company',
        permanent: true
      },
      {
        source: '/opc-registration-online',
        destination: '/one-person-company',
        permanent: true
      },
      {
        source: '/opcregistration-ads',
        destination: '/one-person-company',
        permanent: true
      },
      {
        source: '/fssai-registration-online',
        destination: '/fssai-registration',
        permanent: true
      },
      {
        source: '/llp-company-reg',
        destination: '/ads/llp-registration',
        permanent: true
      },
      {
        source: '/llp-compliance1',
        destination: '/llp-compliance',
        permanent: true
      },
      {
        source: '/llp-reg-online',
        destination: '/ads/llp-registration',
        permanent: true
      },
      {
        source: '/llp-registration-ads',
        destination: '/ads/llp-registration',
        permanent: true
      },
      {
        source: '/ngo',
        destination: '/ngo-registration',
        permanent: true
      },
      {
        source: '/nidhi-company-reg',
        destination: '/ads/nidhi-company-registration',
        permanent: true
      },
      {
        source: '/post/main-division-of-industrial-activity-of-the-company',
        destination: '/main-division-of-industrial-activity-code',
        permanent: true
      },
      {
        source: '/producer-company-reg',
        destination: '/ads/producer-company-registration',
        permanent: true
      },
      {
        source: '/pvt-com-registration',
        destination: '/private-limited-company-registration',
        permanent: true
      },
      {
        source: '/pvt-company-reg',
        destination: '/ads/private-limited-company-registration',
        permanent: true
      },
      {
        source: '/pvt-company-registration',
        destination: '/ads/private-limited-company-registration',
        permanent: true
      },
      {
        source: '/pvt-ltd-reg',
        destination: '/private-limited-company-registration',
        permanent: true
      },
      {
        source: '/pvt-reg',
        destination: '/ads/private-limited-company-registration',
        permanent: true
      },
      {
        source: '/pvt-registration-online',
        destination: '/ads/private-limited-company-registration',
        permanent: true
      },
      {
        source: '/pvt-ltd-company-compliance',
        destination: '/private-limited-company-compliance',
        permanent: true
      },
      {
        source: '/sec8-company-reg',
        destination: '/ads/section-8-company-registration',
        permanent: true
      },
      {
        source: '/section-8-company-reg',
        destination: '/section-8-company-registration',
        permanent: true
      },
      {
        source: '/sec-8-registration',
        destination: '/ads/section-8-company-registration',
        permanent: true
      },
      {
        source: '/trademark-registration-online',
        destination: '/trademark-registration',
        permanent: true
      },
      {
        source: '/trademark-registrations',
        destination: '/trademark-registration',
        permanent: true
      },
      {
        source: '/company-registration',
        destination: '/ads/private-limited-company-registration',
        permanent: true
      },
      {
        source: '/msme-registration',
        destination: '/msme-registration-online',
        permanent: true
      },
      {
        source: '/what-is-a-dsc-and-buy-a-dsc',
        destination: '/post/what-is-a-dsc-and-buy-a-dsc',
        permanent: true
      },
      {
        source: '/pub-company-reg',
        destination: '/ads/public-limited-company-registration',
        permanent: true
      },{
        source: '/wordpress/[id]',
        destination: '/[id]',
        permanent: true
      }
    ];
  },
  env: {
    GLOBAL_VARIABLE: 'https://www.registerkaro.in',
    NEWGLOBAL_VARIABLE: 'https://www.registerkaro.in',
    PAYMENT_VARIABLE: 'https://www.registerkaro.in',
    NEXTAUTH_URL: 'https://www.registerkaro.in',
    NEXT_AUTH_SECRET: 'ahsanauth',
    GOOGLE_CLIENT_ID: '794790062606-tu2on9k1rt491o7nvj4a5qrtfaa3t10a.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET: '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'
  }
};

export default nextConfig;