import React from 'react'
import Head from 'next/head'
import { Hero } from '../components/static/partner-firm/Hero'
import { Process } from '../components/static/partner-firm/Process'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Checklist } from '../components/static/partner-firm/Checklist'
import { Benefits } from '../components/static/partner-firm/Benefits'
import { Advantages } from '../components/static/partner-firm/Advantages'
import { Disdvantages } from '../components/static/partner-firm/Disdvantages'
import { WhatIs } from '../components/static/partner-firm/WhatIs'
import { TimeLine } from '../components/static/partner-firm/TimeLine'
import { Compilance } from '../components/static/partner-firm/Compilance'
import { ProcedureForPartnership } from '../components/static/partner-firm/ProcedureForPartnership'
import { PartnershipDeed } from '../components/static/partner-firm/PartnershipDeed'
import { DocumentsForPartnership } from '../components/static/partner-firm/DocumentsForPartnership'

let faq = [
    {
        "question": "What is a partnership firm?",
        "answer": "A partnership firm is a business structure in India where two or more individuals come together to carry out a business with a shared goal and profits."
    },
    {
        "question": "How many partners are required to form a partnership firm?",
        "answer": "A minimum of two partners is required to form a partnership firm in India, while the maximum limit is 20 for non-banking businesses and 10 for banking businesses."
    },
    {
        "question": "Is there a requirement for written partnership agreement?",
        "answer": "While a written partnership agreement is not legally required, it is highly recommended to have one. The agreement helps define the terms and conditions, roles and responsibilities, profit sharing, and other important aspects of the partnership."
    },
    {
        "question": "Can a partnership firm have a different name from the partners’ names?",
        "answer": "Yes, a partnership firm can have a different name known as the “Firm Name.” It is commonly chosen to reflect the nature of the business or any other desired name."
    },
    {
        "question": "What are the documents required for partnership firm registration?",
        "answer": "The following documents are generally required for partnership firm registration: partnership deed, address proof of the principal place of business, identity and address proof of partners, and photographs of partners."
    },
    {
        "question": "Can a partnership firm have a registered office address?",
        "answer": "Yes, a partnership firm can have a registered office address. The address proof of the principal place of business is required during the registration process."
    },
    {
        "question": "Can a partnership firm be registered online?",
        "answer": "Yes, partnership firm registration can be done online through the Ministry of Corporate Affairs (MCA) portal."
    },
    {
        "question": "How long does it take to register a partnership firm in India?",
        "answer": "The registration process typically takes around 2-3 weeks, depending on the completion and accuracy of the documents submitted."
    },
    {
        "question": "What are the advantages of registering a partnership firm?",
        "answer": "Some advantages of registering a partnership firm include easy formation, shared decision-making, combined resources and expertise, flexible profit sharing, and tax benefits."
    },
    {
        "question": "Are partners personally liable for the firm’s debts and liabilities?",
        "answer": "Yes, in a partnership firm, partners have unlimited liability, meaning they are personally liable for the debts and liabilities of the firm."
    },
    {
        "question": "Can a partnership firm convert into a different business structure later?",
        "answer": "Yes, a partnership firm can be converted into a Limited Liability Partnership (LLP) or a Private Limited Company, subject to compliance with the respective laws and procedures."
    },
    {
        "question": "Do partnership firms need to file annual tax returns?",
        "answer": "Yes, partnership firms are required to file annual tax returns with the Income Tax Department, providing details of their income, expenses, and profit distribution."
    },
    {
        "question": "Can a partnership firm have foreign partners?",
        "answer": "Yes, a partnership firm can have foreign partners, subject to compliance with the Foreign Exchange Management Act (FEMA) regulations and other applicable laws."
    },
    {
        "question": "Is it necessary to have a PAN card for partnership firm registration?",
        "answer": "Yes, a PAN card (Permanent Account Number) is required for partnership firm registration as it serves as a unique identification number for taxation purposes."
    },
    {
        "question": "Can a minor be a partner in a partnership firm?",
        "answer": "No, a minor cannot be a partner in a partnership firm. Only individuals who have attained the age of majority (18 years) can become partners."
    },
    {
        "question": "Can a partnership firm hold properties in its name?",
        "answer": "No, a partnership firm is not a separate legal entity, so it cannot hold properties or assets in its own name. However, the partners can hold the properties in their individual names and use them for the firm’s business."
    }
]


const Home = () => {
    return (
        <div className='services-pages partnership-firm-reg'>
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
            <h1 className='main-heading'>Online Partnership Firm Registration in India</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>What is a Partnership?</h1>
            <div className='heading-line'></div>
            <WhatIs/>
            <h1 className='main-heading'>Importance of Registering a Partnership Firm in India</h1>
            <div className='heading-line'></div>
            <Benefits/>
            <h1 className='main-heading'>Advantages of Partnership Firm Registration</h1>
            <div className='heading-line'></div>
            <Advantages/>
            <h1 className='main-heading'>Disadvantages of Partnership Firm Registration</h1>
            <div className='heading-line'></div>
            <Disdvantages/>
            <h1 className='main-heading'>Checklist for Partnership Firm Registration in India</h1>
            <div className='heading-line'></div>
            <Checklist/>
            <h1 className='main-heading'>Documents for Partnership Firm Registration in India</h1>
            <div className='heading-line'></div>
            <DocumentsForPartnership/>
            <h1 className='main-heading'>What is a Partnership Deed?</h1>
            <div className='heading-line'></div>
            <PartnershipDeed/>
            <h1 className='main-heading'>Procedure for Partnership Firm Registration in India</h1>
            <div className='heading-line'></div>
            <ProcedureForPartnership/>
            <h1 className='main-heading'>Timeline for Partnership Firm Registration</h1>
            <div className='heading-line'></div>
            <TimeLine/>
            <h1 className='main-heading'>Compliance after getting Partnership Firm Registration Online</h1>
            <div className='heading-line'></div>
            <Compilance/>
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