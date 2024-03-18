import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { DocumentRequired } from '../components/static/canada-company-registration/DocumentRequired'
import { Hero } from '../components/static/canada-company-registration/Hero'
import { Process } from '../components/static/canada-company-registration/Process'
import { ProcessCompany } from '../components/static/canada-company-registration/ProcessCompany'
import { Types } from '../components/static/canada-company-registration/Types'
import { WhyChoose } from '../components/static/canada-company-registration/WhyChoose'
import { Benefits } from '../components/static/canada-company-registration/Benefits'
import { Prerequisites } from '../components/static/canada-company-registration/Prerequisites'

const faq = [
    {
        "question": "How much does it cost to register a company in Canada?",
        "answer": "The cost to form a firm via mail or online is $300 CAD. The cost to register your business name is an extra $60. Quebec: The cost of incorporation in Quebec is $378 CAD, plus an extra $25 for the search for a business name."
    },
    {
        "question": "Can I register a company in Canada as a foreigner?",
        "answer": "Yes, even if you are not a citizen of Canada, you can still open a business there. Canada offers many immigration opportunities to overseas companies and welcomes enterprises from all over the world."
    },
    {
        "question": "What do you need to register a company in Canada?",
        "answer": "The steps involved in registering a company in Canada include choosing your business structure, registering your name, applying for licenses and permits, drafting articles of incorporation, obtaining your main office's registered business address, opening a bank account specifically for your company, and paying the registration fees."
    },
    {
        "question": "How much money do I need to open a business in Canada?",
        "answer": "Your inventory and supply costs may range from $5,000 to $10,000, depending on the kind of business you intend to launch. Estimating legal fees is not that difficult if you look for a reputable attorney. Prices range from $500 to as much as $10,000. Each province has a different registration fee."
    },
    {
        "question": "How long does it take to open a company in Canada?",
        "answer": "Federal business registration is a quick and easy process that usually takes five business days. You can register your business online, by mail, or in person in the majority of provinces."
    },
    {
        "question": "How much tax do business owners pay in Canada?",
        "answer": "Following a 10% federal tax abatement and a 13% general tax decrease, the general corporation tax rate in Canada is 15%. Nonetheless, the federal tax rate is lowered for small firms to 9%."
    },
    {
        "question": "Is it LLP or LLC in Canada?",
        "answer": "LLPs and LLCs are corporate structures that perform many of the same functions in numerous nations. Nonetheless, LLCs are regarded as firms in Canada. This implies that a business that is currently organized as an LLC in Canada may adopt the name of an LLP and maintain its legal rights."
    }
]


  
const Home = () => {
    return (
        <div className='services-pages canada-regi'>
            <Head>
                {/* <title>Private Limited Company Registration | RegisterKaro</title> */}
                {/* <meta name="description" content="The Official RegisterKaro" /> */}
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
                {/* <link rel="canonical" href="https://www.registerkaro.in/ads/public-limited-company-registration" /> */}
            </Head>
            <Hero />
            <h1 className='main-heading'>An Overview of Company Registration in Canada</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>Benefits of Company Registration in Canada</h1>
            <div className='heading-line'></div>
            <Benefits />
            <h1 className='main-heading'>Types of Company Structures in Canada</h1>
            <div className='heading-line'></div>
            <Types />
            <h1 className='main-heading'>Prerequisites of Company Registration in Canada</h1>
            <div className='heading-line'></div>
            <Prerequisites />
            <h1 className='main-heading'>Documents required for Company registration</h1>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h1 className='main-heading'>Process of Company Registration in Canada</h1>
            <div className='heading-line'></div>
            <ProcessCompany />
            <h1 className='main-heading'>Why Choose RegisterKaro for Company Registration in Canada?</h1>
            <div className='heading-line'></div>
            <WhyChoose/>
            <h1 className="main-heading">Why RegisterKaro?</h1>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h1 className="main-heading">FAQs</h1>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
        </div>
    )
}
export default Home