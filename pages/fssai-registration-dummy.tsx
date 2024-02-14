import React from 'react'
import Head from 'next/head'
import { Hero } from '../components/static/fssai-registration/Hero'
import { Process } from '../components/static/fssai-registration/Process'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Benefits } from '../components/static/fssai-registration/Benefits'
import { PartnershipDeed } from '../components/static/fssai-registration/PartnershipDeed'
import { OtherAnnual } from '../components/static/fssai-registration/OtherAnnual'
import { EventBased } from '../components/static/fssai-registration/EventBased'
import { MandatoryCompilance } from '../components/static/fssai-registration/MandatoryCompilance'
import { DocsREquired } from '../components/static/fssai-registration/DocsRequired'
import { WhoReq } from '../components/static/fssai-registration/WhoReq'

const faq = [
    {
        "question": "What is FSSAI registration?",
        "answer": "It is the process of obtaining a registration certificate from the Food Safety and Standards Authority of India (FSSAI), which is mandatory for all food business operators in India."
    },
    {
        "question": "Who needs to obtain FSSAI registration?",
        "answer": "Any individual or entity involved in the manufacturing, processing, storage, distribution, and sale of food products in India needs to obtain this registration."
    },
    {
        "question": "Why is FSSAI registration important?",
        "answer": "FSSAI registration ensures that food business operators comply with the food safety and hygiene standards set by the FSSAI, promoting consumer safety and trust."
    },
    {
        "question": "How can I apply for FSSAI registration?",
        "answer": "You can apply for the registration online through the FSSAI website or seek assistance from a registered food consultant."
    },
    {
        "question": "What documents are required for FSSAI registration?",
        "answer": "The documents required for the registration include identification proof, address proof, proof of possession of premises, and a self-declaration form."
    },
    {
        "question": "What are the different types of registration under FSSAI?",
        "answer": "FSSAI offers three types of registration: Basic Registration for small-scale food businesses, State License for medium-sized businesses, and Central License for large-scale businesses."
    },
    {
        "question": "How long does it take to obtain registration from FSSAI?",
        "answer": "The time required for the registration depends on the completeness of the application and the category of registration. It usually takes around 15 to 60 days."
    },
    {
        "question": "Is FSSAI registration valid nationwide?",
        "answer": "Yes, this registration is valid across India, allowing you to operate your food business anywhere in the country."
    },
    {
        "question": "Can I start my food business without FSSAI?",
        "answer": "No, it is illegal to operate a food business without obtaining the necessary registration or licence for FSSAI."
    },
    {
        "question": "Can I transfer my FSSAI to a new location?",
        "answer": "Yes, you can transfer your registration to a new location by submitting an application to the FSSAI along with the required documents."
    },
    {
        "question": "Do I need to renew my registration?",
        "answer": "Yes, FSSAI registration needs to be renewed annually, and the renewal application should be submitted 30 days before the expiry of the current registration."
    },
    {
        "question": "Can I modify my FSSAI registration details?",
        "answer": "Yes, you can modify your FSSAI registration details, such as changes in the business name, address, or contact information, by submitting an application to the FSSAI."
    },
    {
        "question": "Is there any penalty for not obtaining FSSAI registration?",
        "answer": "Operating a food business without FSSAI registration or licence can lead to penalties, fines, and even imprisonment under the Food Safety and Standards Act."
    },
    {
        "question": "Can I display the FSSAI logo after obtaining registration?",
        "answer": "Yes, after obtaining registration, you are allowed to display the FSSAI logo on your food product labels or premises, which assures consumers of your compliance with food safety standards."
    },
    {
        "question": "Can I sell homemade food products without FSSAI?",
        "answer": "If you are selling homemade food products that are not covered under the FSSAI regulations, such as small-scale catering for a limited audience, you may not require FSSAI registration. However, it is advisable to check with local authorities for any specific regulations."
    },
    {
        "question": "Can I apply for FSSAI registration if my business is still under construction?",
        "answer": "No, this registration can only be obtained for fully constructed and operational food businesses. You need to ensure that your premises are ready before applying for registration."
    }
]





const Home = () => {
    return (
        <div className='services-pages fssai-registration-reg'>
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
            <h1 className='main-heading'>FSSAI Registration Online in India</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>Who are Food Business Operators in India?</h1>
            <div className='heading-line'></div>
            <OtherAnnual/>
            <h1 className='main-heading'>Benefits of FSSAI Registration in India</h1>
            <div className='heading-line'></div>
            <EventBased/>
            <h1 className='main-heading'>What are the Different Types of FSSAI Licenses in India?</h1>
            <div className='heading-line'></div>
            <Benefits/>
            <h1 className='main-heading'>Who Requires FSSAI Registration/License in India?</h1>
            <div className='heading-line'></div>
            <WhoReq/>
            <h1 className='main-heading'>Eligibility Criteria for FSSAI Registration</h1>
            <div className='heading-line'></div>
            <PartnershipDeed/>
            <h1 className='main-heading'>Documents Required for FSSAI Registration in India</h1>
            <div className='heading-line'></div>
            <DocsREquired/>
            <h1 className='main-heading'>Step-by-Step Procedure for FSSAI Registration in India</h1>
            <div className='heading-line'></div>
            <MandatoryCompilance/>
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