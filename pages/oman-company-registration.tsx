import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/oman-company-registration/Hero'
import { Process } from '../components/static/oman-company-registration/Process'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import Types from '../components/static/oman-company-registration/Types'
import Post from '../components/static/oman-company-registration/Post'
import WhyChooseReg from '../components/static/oman-company-registration/WhyChooseReg'
import DocumentsReq from '../components/static/oman-company-registration/DocumentsReq'
import { ProcessStep } from '../components/static/oman-company-registration/ProcessStep'


const faq = [
    {
        "question": "How much does it cost to register a company in Oman?",
        "answer": "The following fees are associated with registering a company in Oman: LLC: about 350 OMR, SAOG/SAOC: approximately 1,500 OMR, Foreign firm branch: around 1,500 OMR."
    },
    {
        "question": "How can I register a company in Oman?",
        "answer": "In Oman, a company seal issued by the company's authorized signatory is mandatory for all businesses. A certificate of initial capital deposit, an authorized signatory form, and an affiliation certificate from the Chamber of Commerce and Industry must first be obtained and submitted."
    },
    {
        "question": "Can Indians start a business in Oman?",
        "answer": "Yes, it is possible to launch your own company in Oman. However, the Ministry of Commerce and Industry will need to provide you with a business registration if you are a foreign national."
    },
    {
        "question": "How can a company be formed in Oman?",
        "answer": "In Oman, a private joint-stock company needs to have a minimum of three shareholders and a minimum share capital of OR 50,000, or roughly $130,000 USD. One of the owners must be an Omani citizen and hold at least 30% of the total shares."
    },
    {
        "question": "What is the business tax rate in Oman?",
        "answer": "The corporate tax rate in Oman is 15% for domestic businesses, permanent establishments (PEs), and international company branches."
    },
    {
        "question": "Is it a good idea to start a business in Oman?",
        "answer": "With its strong economy, advantageous location, and business-friendly atmosphere, Oman offers special benefits to individuals thinking about starting or growing their businesses."
    },
    {
        "question": "What is a Grade 4 company in Oman?",
        "answer": "In Oman's company rating system, the lowest rating is Grade 4, with the highest being Excellent. Each transaction in a Grade 4 company is limited to 20,000 Omani Rials."
    },
    {
        "question": "How much does it cost to register a company?",
        "answer": "The fees associated with registering a Private Limited Company (Pvt Ltd) in India range from INR 6,000 to INR 30,000, depending on factors such as the number of directors, authorized share capital, and professional expenses."
    },
    {
        "question": "Can foreigners own a business in Oman?",
        "answer": "Yes, foreigners can establish a firm with 100% ownership in Oman, but there are rules and prerequisites that need to be met, including obtaining a commercial registration (CR) from the Ministry of Commerce and Industry."
    },
    {
        "question": "What is the minimum capital requirement in Oman?",
        "answer": "For an LLC with foreign involvement, the minimum capital requirement is OR 150,000; for a SAOC, it is OR 500,000; and for a SAOG, it is OR 2 million. The minimum capital requirements may vary based on the type of business or projects the company plans to undertake."
    }
];



const Home = () => {
    return (
        <div className='services-pages oman-company-reg'>
            <Head>
                <title>Oman Company Registration | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/oman-company-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Oman Company Registration | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero />
            <h1 className='main-heading'>An overview of Company Registration in Oman</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>Types of Companies in Oman</h1>
            <div className='heading-line'></div>
            <Types />
            <h1 className='main-heading'>Post Registration Compliances</h1>
            <div className='heading-line'></div>
            <Post />
            <h1 className='main-heading'>Documents you would need</h1>
            <div className='heading-line'></div>
            <DocumentsReq />
            <h1 className='main-heading'>Process of Company Registration in Oman</h1>
            <div className='heading-line'></div>
            <ProcessStep />
            <h1 className='main-heading'>Why Choose RegisterKaro for Company Registration in Oman?</h1>
            <div className='heading-line'></div>
            <WhyChooseReg />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h1 className="main-heading">FAQs</h1>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
        </div>
    )
}
export default Home