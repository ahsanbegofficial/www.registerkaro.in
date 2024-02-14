import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { Hero } from '../components/static/section-8/Hero'
import { Process } from '../components/static/section-8/Process'
import { ImportantPoints } from '../components/static/section-8/ImportantPoints'
import { Advantages } from '../components/static/section-8/Advantages'
import { Eligibility } from '../components/static/section-8/Eligibility'
import { Requirements } from '../components/static/section-8/Requirements'
import { DocumentRequired } from '../components/static/section-8/DocumentRequired'
import { Procedure } from '../components/static/section-8/Procedure'
import { AnnualCompliance } from '../components/static/section-8/AnnualCompliance'
import { Penalties } from '../components/static/section-8/Penalties'

let faq = [
    {
        "question": "What is a Section 8 Company?",
        "answer": "A Section 8 Company is a non-profit organisation established for promoting charitable or not-for-profit objectives."
    },
    {
        "question": "What are the key objectives of a Section 8 Company?",
        "answer": "The primary objectives include promoting arts, science, commerce, education, social welfare, religion, charity, or any other useful public purpose."
    },
    {
        "question": "Can a Section 8 Company distribute its profits to members?",
        "answer": "No, a Section 8 Company cannot distribute its profits to members. All income must be utilised for its objectives."
    },
    {
        "question": "Is it necessary to add “Limited” or “Private Limited” to the company’s name?",
        "answer": "Yes, the company’s name must include “Limited” or “Private Limited” as per the type of Section 8 Company."
    },
    {
        "question": "How many directors are required for registration?",
        "answer": "A minimum of two directors is required for a Section 8 Company."
    },
    {
        "question": "Is there a minimum capital requirement for Section 8 Company registration?",
        "answer": "No, there is no minimum capital requirement."
    },
    {
        "question": "How long does it take to register a Section 8 Company?",
        "answer": "Registration typically takes 20-60 days, depending on the processing time of government authorities."
    },
    {
        "question": "What documents are needed for registration?",
        "answer": "Documents include identity proof, address proof, PAN card, and No Objection Certificate from the landlord for the registered office."
    },
    {
        "question": "Can foreign nationals be directors in a Section 8 Company?",
        "answer": "Yes, foreign nationals can be directors, but at least one director must be an Indian resident."
    },
    {
        "question": "Is there an age limit for directors in a Section 8 Company?",
        "answer": "There is no age limit for directors in Section 8 Companies."
    },
    {
        "question": "What are the compliance requirements after registration?",
        "answer": "Section 8 Companies must file annual returns, financial statements, and comply with tax regulations."
    },
    {
        "question": "Can a Section 8 Company be converted into a for-profit company?",
        "answer": "No, a Section 8 Company cannot be converted into a for-profit company."
    },
    {
        "question": "Can a Section 8 Company own property and assets?",
        "answer": "Yes, it can own property and assets in its name."
    },
    {
        "question": "Is it mandatory to conduct an annual general meeting (AGM)?",
        "answer": "Yes, an AGM must be held within six months from the end of the financial year."
    },
    {
        "question": "Can a Section 8 Company be dissolved voluntarily?",
        "answer": "Yes, it can be dissolved voluntarily by following the legal procedures."
    },
    {
        "question": "What is the penalty for non-compliance with Section 8 Company regulations?",
        "answer": "Non-compliance can lead to penalties, fines, or even cancellation of registration, so it’s crucial to adhere to the rules."
    },
]

const Home = () => {
    return (
        <div className='services-pages section-8-reg'>
            <Head>
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <h1 className='main-heading'>An Overview of Section 8 Company Registration</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className="main-heading">Important Points Regarding Section 8 Company in India</h1>
            <div className='heading-line'></div>
            <ImportantPoints />
            <h1 className="main-heading">Advantages of Section 8 Company Registration in India</h1>
            <div className='heading-line'></div>
            <Advantages />
            <h1 className="main-heading">Eligibility Criteria for Section 8 Company Registration in India</h1>
            <div className='heading-line'></div>
            <Eligibility />
            <h1 className="main-heading">Requirements for Section 8 Company Registration</h1>
            <div className='heading-line'></div>
            <Requirements />
            <h1 className="main-heading">Documents Required for Section 8 Company Registration</h1>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h1 className="main-heading">Procedure for Section 8 Company Registration</h1>
            <div className='heading-line'></div>
            <Procedure />
            <h1 className="main-heading">What are the Annual Compliances for Section 8 Companies in India?</h1>
            <div className='heading-line'></div>
            <AnnualCompliance />
            <h1 className="main-heading">Penalties for Non-Compliance</h1>
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