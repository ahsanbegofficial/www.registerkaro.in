import React from 'react'
import { Hero } from '../components/static/trust/Hero'
import { Process } from '../components/static/trust/Process'
import { Benefits } from '../components/static/trust/Benefits'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Classification } from '../components/static/trust/Classification'
import { WhyNGO } from '../components/static/trust/WhyNGO'
import { RegiFee } from '../components/static/trust/RegiFee'
import { Dissolution } from '../components/static/trust/Dissolution'
import { TrustsComp } from '../components/static/trust/TrustsComp'
import { Categories } from '../components/static/trust/Categories'
import { Prerequisite } from '../components/static/trust/Prerequisite'
import { Components } from '../components/static/trust/components'
import { Procedure } from '../components/static/trust/Procedure'
import { Regularity } from '../components/static/trust/Regularity'
import { Documentation } from '../components/static/trust/Documentation'

const faq = [
    {
        "question": "What is Trust Registration?",
        "answer": "Trust registration is the legal process of formally establishing a trust under the relevant laws and regulations, providing it with legal recognition and a distinct identity."
    },
    {
        "question": "Who Can Establish a Trust?",
        "answer": "Any individual or group of individuals, known as settlers, can establish trust. A minimum of two trustees is typically required."
    },
    {
        "question": "What is the Purpose of Trust Registration?",
        "answer": "Trust registration serves to legally recognize the trust, ensuring compliance with laws, and providing a framework for its activities."
    },
    {
        "question": "What Documents are Required for Trust Registration?",
        "answer": "Essential documents include the Trust Deed, photographs of parties involved, PAN cards, address and identity proofs, and certificates like 12A and 80G, if applicable."
    },
    {
        "question": "Can a Trust Have Both Public and Private Objectives?",
        "answer": "Yes, a trust can have both public and private objectives, known as a public cum-private trust, where its activities benefit both the public and specific individuals."
    },
    {
        "question": "How Long Does Trust Registration Take?",
        "answer": "The timeframe for trust registration can vary, but the process typically takes a few weeks, subject to the completion of necessary documentation and approvals."
    },
    {
        "question": "What Are the Tax Benefits of Trust Registration?",
        "answer": "Registered trusts can avail themselves of tax benefits under sections 12A and 80G of the Income Tax Act, encouraging donations and support."
    },
    {
        "question": "Can a Trust Be Dissolved?",
        "answer": "Yes, a trust can be dissolved through a process known as winding up, where its properties/assets are distributed to beneficiaries or a similar entity, adhering to legal procedures."
    },
    {
        "question": "Is Approval from Authorities Necessary for Trust Registration?",
        "answer": "Yes, approval from the relevant authorities, such as the charity commissioner or court, may be required during the trust registration process to ensure compliance with applicable laws."
    },
    {
        "question": "How Can RegisterKaro Assist in Trust Registration?",
        "answer": "RegisterKaro, with its team of experts, provides essential support for trust registration, guiding individuals through the intricate legal implications and ensuring compliance with governing provisions in India."
    }
];



const Home = () => {
    return (
        <div className='services-pages trust-reg'>
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
            <h1 className='main-heading'>Get Online Trust Registration in India</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className="main-heading">Trusts – A Comprehensive Overview</h1>
            <div className='heading-line'></div>
            <TrustsComp/>
            <h1 className='main-heading'>Parties Involved in the Trust Registration Process</h1>
            <div className='heading-line'></div>
            <Classification />
            <h1 className='main-heading'>Categories of Trusts in India</h1>
            <div className='heading-line'></div>
            <Categories />
            <h1 className='main-heading'>Regulatory Oversight and Legislation for Trust Registration</h1>
            <div className='heading-line'></div>
            <Regularity />
            <h1 className="main-heading">Importance of Trust Registration</h1>
            <div className='heading-line'></div>
            <WhyNGO/>
            <h1 className="main-heading">Advantages of Trust Registration</h1>
            <div className='heading-line'></div>
            <Benefits />
            <h1 className="main-heading">Prerequisites for Trust Registration</h1>
            <div className='heading-line'></div>
            <Prerequisite />
            <h1 className="main-heading">Components of a Trust Deed</h1>
            <div className='heading-line'></div>
            <Components />
            <h1 className="main-heading">Documentation for Trust Registration</h1>
            <div className='heading-line'></div>
            <Documentation/>   
            <h1 className="main-heading">Procedure for Trust Registration</h1>
            <div className='heading-line'></div>
            <Procedure/>   
            <h1 className="main-heading">Dissolution of a Trust</h1>
            <div className='heading-line'></div>
            <Dissolution/>
            <h1 className="main-heading">How RegisterKaro Can Assist in Securing Trust Registration?</h1>
            <div className='heading-line'></div>
            <RegiFee /> 
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