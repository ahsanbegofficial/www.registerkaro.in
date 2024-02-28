import React from 'react'
import { Hero } from '../components/static/indian-subsidiary/Hero'
import { Process } from '../components/static/indian-subsidiary/Process'
import { HowToRegister } from '../components/static/indian-subsidiary/HowToRegister'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { TypeOfSubs } from '../components/static/indian-subsidiary/TypeOfSubs'
import { Classification } from '../components/static/indian-subsidiary/Classification'

import { Advantages } from '../components/static/indian-subsidiary/Advantages'
import { Requirement } from '../components/static/indian-subsidiary/Requirement'
import { Procedure } from '../components/static/indian-subsidiary/Procedure'
import { Compilance } from '../components/static/indian-subsidiary/Compilance'
import { Taxation } from '../components/static/indian-subsidiary/Taxation'


let faq = [
    {
        "question": "What is an Indian Subsidiary Company?",
        "answer": "An Indian subsidiary company is a locally registered business entity that is controlled and majority-owned by a foreign parent company. It operates as a separate legal entity, subject to Indian laws and regulations."
    },
    {
        "question": "What are the Key Steps in Registering an Indian Subsidiary?",
        "answer": "The key steps include selecting a unique name, obtaining Director Identification Numbers (DIN) and Digital Signature Certificates (DSC), filing incorporation documents, and ensuring compliance with regulatory requirements."
    },
    {
        "question": "Is There a Minimum Capital Requirement for Indian Subsidiary Registration?",
        "answer": "No, India does not impose a minimum capital requirement for the registration of subsidiary companies, providing flexibility for businesses to determine their capital structure."
    },
    {
        "question": "Can a Foreign Company Hold 100% Ownership in an Indian Subsidiary?",
        "answer": "Yes, a foreign company can hold 100% ownership in an Indian subsidiary. Alternatively, a combination of two foreign nationals can also be shareholders, and it is not mandatory to have an Indian resident as a shareholder."
    },
    {
        "question": "What Compliance Regulations Apply to Indian Subsidiary Companies?",
        "answer": "Indian subsidiary companies must comply with various regulations, including the Companies Act, 2013, Foreign Exchange Management Act (FEMA), Reserve Bank of India (RBI) compliances, and the Income Tax Act, 1961."
    },
    {
        "question": "Are There Concessional Tax Rates for Specific Sectors in India?",
        "answer": "Yes, specific sectors such as oil exploration, air transportation, and shipping businesses may benefit from concessional tax rates in India."
    },
    {
        "question": "What Documents are Required for Annual Compliance Filing?",
        "answer": "Annual compliance filing typically requires documents such as financial statements, auditor reports, and other relevant records. The specific requirements may vary based on the regulatory framework."
    },
    {
        "question": "Can Registering a Subsidiary in India be Done Entirely Online?",
        "answer": "Yes, the registration process for an Indian subsidiary can be conducted online. This includes obtaining digital signatures, filing incorporation documents, and interacting with regulatory authorities through online portals."
    },
    {
        "question": "Is It Necessary for the Subsidiary to Have an Indian Resident Director?",
        "answer": "Yes, as per the Companies Act, 2013, a minimum of two directors is mandatory for a subsidiary company, and at least one director must be an Indian resident. Nominee directorship services can be utilized if needed."
    },
    {
        "question": "Can Registerkaro Assist with Indian Subsidiary Registration?",
        "answer": "Yes, Registerkaro provides comprehensive support for Indian subsidiary company registration, including assistance with name selection, obtaining necessary certificates, and ensuring compliance with regulatory requirements."
    }
];



const Home = () => {
    return (
        <div className='services-pages indian-subsidiary-reg'>
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
            <h1 className='main-heading'>Get Online Indian Subsidiary Registration Now!</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className="main-heading">Types of Subsidiaries in India</h1>
            <div className='heading-line'></div>
            <TypeOfSubs/>
            <h1 className="main-heading">Advantages of Indian Subsidiary Registration</h1>
            <div className='heading-line'></div>
            <Advantages/>
            <h1 className='main-heading'>Regulatory Authorities for Indian Subsidiary Registration</h1>
            <div className='heading-line'></div>
            <Classification />
            <h1 className="main-heading">Requirements and Key Facts about Company Registration in India</h1>
            <div className='heading-line'></div>
            <Requirement/>
            <h1 className="main-heading">Procedure for Indian Subsidiary Registration</h1>
            <div className='heading-line'></div>
            <Procedure/>
            <h1 className="main-heading">Compliance Requirements for Indian Subsidiary Registration</h1>
            <div className='heading-line'></div>
            <Compilance/>
            <h1 className="main-heading">Taxation of Indian Subsidiary Companies</h1>
            <div className='heading-line'></div>
            <Taxation />
            <h1 className="main-heading">How Registerkaro Can Assist with Indian Subsidiary Registration?</h1>
            <div className='heading-line'></div>
            <HowToRegister/>
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