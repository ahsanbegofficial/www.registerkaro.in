import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Benefits } from '../components/static/nidhi/Benefits'
import { DocumentRequired } from '../components/static/nidhi/DocumentRequired'
import { EventBased } from '../components/static/nidhi/EventBased'
import { Hero } from '../components/static/nidhi/Hero'
import { Penalties } from '../components/static/nidhi/Penalties'
import { Procedure } from '../components/static/nidhi/Procedure'
import { Process } from '../components/static/nidhi/Process'
import { Requirement } from '../components/static/nidhi/Requirement'
import { WhatDocument } from '../components/static/nidhi/WhatDocument'


let faq = [
    {
        "question": "What is a Nidhi company?",
        "answer": "A Nidhi company is a type of non-banking financial institution (NBFC) recognized under the Companies Act in India. Its primary objective is to promote thrift and savings among its members and provide them with loans and other financial services."
    },
    {
        "question": "Who can register a Nidhi company?",
        "answer": "Any Indian citizen or legal entity, such as a company or partnership firm, can register a Nidhi company as long as they meet the eligibility criteria."
    },
    {
        "question": "What are the minimum requirements to register a Nidhi company?",
        "answer": "The minimum requirements include having at least seven members, three directors, a minimum paid-up equity share capital of Rs. 5 lakhs, and an address for the registered office."
    },
    {
        "question": "How long does it take to register a Nidhi company?",
        "answer": "The registration process usually takes around 30-45 days, depending on the submission of the required documents and the processing time by the Registrar of Companies (ROC)."
    },
    {
        "question": "Can a Nidhi company accept deposits from the public?",
        "answer": "No, Nidhi companies can only accept deposits from their members. They are not allowed to accept deposits or loans from the general public."
    },
    {
        "question": "Is it mandatory to have the word “Nidhi” in the company name?",
        "answer": "Yes, as per the rules, it is mandatory for a Nidhi company to have the word “Nidhi” as part of its name."
    },
    {
        "question": "Are Nidhi companies regulated by any authority?",
        "answer": "Yes, Nidhi companies are regulated by the Ministry of Corporate Affairs (MCA) and the Reserve Bank of India (RBI)."
    },
    {
        "question": "Can a Nidhi company provide loans to non-members?",
        "answer": "No, Nidhi companies can only provide loans or advances to their members. They cannot extend loans to non-members."
    },
    {
        "question": "Can a Nidhi company operate in multiple states?",
        "answer": "Yes, a Nidhi company can operate in multiple states, but it needs to have at least one branch within the district of its registered office."
    },
    {
        "question": "Can a Nidhi company engage in any other business activities?",
        "answer": "No, Nidhi companies are restricted to carrying out activities related to borrowing and lending within their member base. They cannot engage in any other business activities."
    },
    {
        "question": "What is the maximum interest rate that a Nidhi company can charge on loans?",
        "answer": "As per RBI guidelines, Nidhi companies cannot charge an interest rate higher than 7.5% above the highest rate offered on deposits."
    },
    {
        "question": "Is it necessary for the directors of a Nidhi company to be members as well?",
        "answer": "Yes, all directors of a Nidhi company must also be members."
    },
    {
        "question": "Can a Nidhi company issue preference shares?",
        "answer": "No, Nidhi companies are not allowed to issue preference shares. They can only issue equity shares."
    },
    {
        "question": "Is it possible to convert an existing company into a Nidhi company?",
        "answer": "Yes, an existing company can be converted into a Nidhi company by fulfilling the necessary requirements and obtaining approval from the Registrar of Companies."
    },
    {
        "question": "What are the compliance requirements for Nidhi companies?",
        "answer": "Nidhi companies need to comply with various regulations related to filing of annual returns, conducting annual general meetings, maintaining proper books of accounts, etc."
    },
    {
        "question": "Can a Nidhi company be voluntarily liquidated?",
        "answer": "Yes"
    },
]

const Home = () => {
    return (
        <div className='services-pages nidhi-reg'>
            <Head>
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <h1 className='main-heading'>An Overview of Nidhi Company Registration in India</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className="main-heading">Benefits of Nidhi Company Registration</h1>
            <div className='heading-line'></div>
            <Benefits />
            <h1 className="main-heading">Requirements for Nidhi Company Registration in India</h1>
            <div className='heading-line'></div>
            <Requirement />
            <h1 className="main-heading">Documents Required for the Registration of Nidhi Company in India</h1>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h1 className="main-heading">Procedure for Nidhi Company Registration in India</h1>
            <div className='heading-line'></div>
            <Procedure />
            <h1 className="main-heading">Annual Compliance of a Nidhi Company</h1>
            <div className='heading-line'></div>
            <WhatDocument />
            <h1 className="main-heading">Event-Based Compliances of a Nidhi Company in India</h1>
            <div className='heading-line'></div>
            <EventBased />
            <h1 className="main-heading">What are the Penalties for Non-Compliance?</h1>
            <div className='heading-line'></div>
            <Penalties />
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