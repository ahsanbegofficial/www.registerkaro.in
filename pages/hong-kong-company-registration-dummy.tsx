import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/hong-kong-company-registration/Hero'
import { Process } from '../components/static/hong-kong-company-registration/Process'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { Features } from '../components/static/hong-kong-company-registration/Features'
import { Governing } from '../components/static/hong-kong-company-registration/Governing'
import { Types } from '../components/static/hong-kong-company-registration/Types'
import { Incorporation } from '../components/static/hong-kong-company-registration/Incorporation'
import { How } from '../components/static/hong-kong-company-registration/How'


const faq = [
    {
        "question": "How can I register a company in Hong Kong?",
        "answer": "To register a company in Hong Kong, you'll need to choose a company name, appoint a director and secretary, provide a registered office address, and submit the necessary documents to the Companies Registry."
    },
    {
        "question": "What types of business structures are available for registration in Hong Kong?",
        "answer": "Common business structures in Hong Kong include limited companies and branches of foreign companies. Limited companies can be private or public, with variations like limited by shares or guarantee."
    },
    {
        "question": "Do I need a local address for company registration in Hong Kong?",
        "answer": "Yes, a local registered office address is required for company registration in Hong Kong. This address will be used for official correspondence, and a P.O. Box is not acceptable."
    },
    {
        "question": "What is the minimum capital requirement for company registration in Hong Kong?",
        "answer": "Hong Kong does not have a minimum capital requirement. You can choose the amount of authorized share capital for your company, and there is no need to deposit this amount."
    },
    {
        "question": "Can a non-resident or foreigner register a company in Hong Kong?",
        "answer": "Yes, non-residents and foreigners can register a company in Hong Kong. However, there must be at least one director who is a natural person and acts as a resident of Hong Kong."
    },
    {
        "question": "How long does it take to register a company in Hong Kong?",
        "answer": "The company registration process in Hong Kong is efficient, and it usually takes around 1-2 weeks to complete. Factors such as name approval and document preparation can impact the timeline."
    },
    {
        "question": "What documents are required for company registration in Hong Kong?",
        "answer": "Commonly required documents include the company's Articles of Association, a copy of the director's passport, proof of the registered office address, and details of shareholders and company secretary."
    },
    {
        "question": "Is it mandatory to appoint a company secretary for my Hong Kong company?",
        "answer": "Yes, it is a legal requirement to appoint a company secretary within six months of company incorporation in Hong Kong. The secretary can be an individual or a corporate entity, but must have a registered office or place of business in Hong Kong."
    },
    {
        "question": "Are there annual filing requirements for companies registered in Hong Kong?",
        "answer": "Yes, companies in Hong Kong are required to file an Annual Return and submit audited financial statements. The Annual Return must be filed within 42 days of the company's anniversary of incorporation."
    },
    {
        "question": "Can I change the company name after registration in Hong Kong?",
        "answer": "Yes, it is possible to change the company name after registration in Hong Kong. The process involves obtaining approval from the Companies Registry and updating the relevant documents and records."
    }
];


const Home = () => {
    return (
        <div className='services-pages hong-kong-company-reg'>
           <Head>
                <title>Company Registration in Hong Kong | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/hong-kong-company-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Company Registration in Hong Kong | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero />
            <h1 className='main-heading'>Why choose Hong Kong for incorporation?</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>Features</h1>
            <div className='heading-line'></div>
            <Features/>
            <h1 className='main-heading'>Governing Body in Hong Kong</h1>
            <div className='heading-line'></div>
            <Governing/>
            <h1 className='main-heading'>Types of companies incorporated in Hong Kong</h1>
            <div className='heading-line'></div>
            <Types/>
            <h1 className='main-heading'>Process of incorporation in Hong Kong</h1>
            <div className='heading-line'></div>
            <Incorporation/>
            <h1 className='main-heading'>How does Register Karo help?</h1>
            <div className='heading-line'></div>
            <How/>
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