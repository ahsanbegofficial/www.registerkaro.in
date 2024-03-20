import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { DocumentRequired } from '../components/static/mauritius-company-registration/DocumentRequired'
import { Hero } from '../components/static/mauritius-company-registration/Hero'
import { Process } from '../components/static/mauritius-company-registration/Process'
import { ProcessCompany } from '../components/static/mauritius-company-registration/ProcessCompany'
import { Types } from '../components/static/mauritius-company-registration/Types'
import { Features } from '../components/static/mauritius-company-registration/Features'
import { HowDoes } from '../components/static/mauritius-company-registration/HowDoes'
import { IncorporationFees } from '../components/static/mauritius-company-registration/IncorporationFees'

const faq = [
    {
        "question": "How do I register a company in Mauritius?",
        "answer": "To register a company in Mauritius, you need to submit the required documents to the Registrar of Companies, including the company's memorandum and articles of association, proof of address, and identification documents for shareholders and directors."
    },
    {
        "question": "What types of companies can I register in Mauritius?",
        "answer": "Mauritius allows the registration of various types of companies, including private limited companies, public companies, and global business companies (GBCs), each with different requirements and benefits."
    },
    {
        "question": "What is the minimum capital requirement for company registration in Mauritius?",
        "answer": "There is no specific minimum capital requirement for company registration in Mauritius, except for certain types of business activities where minimum capital may be prescribed by law."
    },
    {
        "question": "How long does it take to register a company in Mauritius?",
        "answer": "The timeframe for company registration in Mauritius varies depending on factors such as the completeness of the application and the workload of the Registrar of Companies. It typically takes between 2 to 4 weeks."
    },
    {
        "question": "Can a foreigner register a company in Mauritius?",
        "answer": "Yes, foreigners can register companies in Mauritius, subject to compliance with relevant laws and regulations. Foreigners may need to appoint a local resident director and engage the services of a local registered agent."
    },
    {
        "question": "What are the tax implications for companies registered in Mauritius?",
        "answer": "Mauritius offers various tax incentives for companies, including low corporate tax rates and tax exemptions for certain types of business activities. However, it's essential to understand the tax residency rules and double taxation agreements that Mauritius has in place."
    },
    {
        "question": "Are there any special permits or licenses required for certain types of businesses in Mauritius?",
        "answer": "Yes, certain business activities in Mauritius may require special permits or licenses from regulatory authorities, such as the Financial Services Commission (FSC) for financial services companies or the Board of Investment (BOI) for foreign investment projects."
    },
    {
        "question": "Can I register an offshore company in Mauritius?",
        "answer": "Yes, Mauritius is a popular jurisdiction for the registration of offshore companies, known as Global Business Companies (GBCs). These companies enjoy various tax benefits and are suitable for international business activities."
    },
    {
        "question": "What are the annual compliance requirements for companies registered in Mauritius?",
        "answer": "Companies registered in Mauritius are required to comply with annual reporting and filing obligations, including the submission of annual returns, financial statements, and tax returns to the Registrar of Companies and the Mauritius Revenue Authority."
    },
    {
        "question": "Can I change the name or structure of my company after registration in Mauritius?",
        "answer": "Yes, you can change the name or structure of your company after registration by following the procedures prescribed by the Registrar of Companies, which may involve obtaining shareholder approval and updating the company's statutory documents."
    }
]


  
const Home = () => {
    return (
        <div className='services-pages mauritius-reg'>
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
            <h1 className='main-heading'>Why choose Mauritius for incorporation?</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>Features</h1>
            <div className='heading-line'></div>
            <Features />
            <h1 className='main-heading'>Types of company incorporated</h1>
            <div className='heading-line'></div>
            <Types />
            <h1 className='main-heading'>Documents Required</h1>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h1 className='main-heading'>Process of incorporation in Mauritius</h1>
            <div className='heading-line'></div>
            <ProcessCompany />
            <h1 className='main-heading'>Incorporation Fees</h1>
            <div className='heading-line'></div>
            <IncorporationFees />
            <h1 className='main-heading'>How does RegisterKaro help?</h1>
            <div className='heading-line'></div>
            <HowDoes/>
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