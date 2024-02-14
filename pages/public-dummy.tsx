import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Benefits } from '../components/static/pubc/Benefits'
import { DocumentRequired } from '../components/static/pubc/DocumentRequired'
import { Eligibility } from '../components/static/pubc/Eligibility'
import { Hero } from '../components/static/pubc/Hero'
import { MandatoryCompliance } from '../components/static/pubc/MandatoryCompliance'
import { Procedure } from '../components/static/pubc/Procedure'
import { Process } from '../components/static/pubc/Process'
import { Suspension } from '../components/static/pubc/Suspension'
import { Types } from '../components/static/pubc/Types'
import { Validity } from '../components/static/pubc/Validity'

let faq = [
    {
        "question": "What is a Public Limited Company, and why should I consider registering as one?",
        "answer": "A Public Limited Company is a business entity that offers shares to the public and provides limited liability protection. Registering as a Public Limited Company can grant you access to capital markets, enhance credibility, and offer potential for growth and expansion."
    },
    {
        "question": "How many directors are required to form a Public Limited Company, and what role do they play?",
        "answer": "A Public Limited Company requires a minimum of three directors. Directors play a crucial role in managing the company and making key decisions."
    },
    {
        "question": "What are the benefits of registering a Public Limited Company compared to other business structures?",
        "answer": "Registering as a Public Limited Company offers advantages such as limited liability protection, the ability to raise capital from the public through share offerings, increased credibility, and opportunities for business growth."
    },
    {
        "question": "Can a foreign national be a director in a Public Limited Company?",
        "answer": "Yes, foreign nationals can serve as directors in a Public Limited Company, provided they meet the eligibility criteria and comply with relevant regulations."
    },
    {
        "question": "How do I reserve a unique and appealing name for my Public Limited Company?",
        "answer": "To reserve a name, you need to submit an application to the Ministry of Corporate Affairs (MCA) adhering to the naming guidelines to ensure uniqueness and attractiveness."
    },
    {
        "question": "How long does it typically take to register a Public Limited Company, and what is the process involved?",
        "answer": "The registration process usually takes a few weeks, depending on document completion and government processing times. It involves submitting necessary documents to the Registrar of Companies (ROC) and obtaining the Certificate of Incorporation."
    },
    {
        "question": "What are the key compliance requirements after registering a Public Limited Company?",
        "answer": "Compliance requirements include conducting Annual General Meetings (AGMs), maintaining statutory registers, filing annual financial statements, appointing auditors, and adhering to applicable laws and regulations."
    },
    {
        "question": "Can a Public Limited Company raise capital by offering shares to the public?",
        "answer": "Yes, a Public Limited Company can raise capital by issuing shares to the public through an initial public offering (IPO) or subsequent public offerings, attracting investments from a wide range of investors."
    },
    {
        "question": "What are the advantages of listing a Public Limited Company on stock exchanges?",
        "answer": "Listing a Public Limited Company on stock exchanges provides benefits such as increased liquidity for shares, enhanced visibility among investors, potential valuation growth, and access to a broader pool of potential shareholders."
    },
    {
        "question": "Are there any restrictions on transferring shares in a Public Limited Company?",
        "answer": "Generally, there are no restrictions on the transfer of shares in a Public Limited Company, unless specified in the Articles of Association or subject to regulatory requirements."
    },
    {
        "question": "What are the tax implications for a Public Limited Company, and how can I optimize my tax obligations?",
        "answer": "A Public Limited Company is subject to corporate tax rates and must comply with tax filing and payment requirements. Optimizing tax obligations can be achieved through effective tax planning and utilizing applicable tax incentives."
    },
    {
        "question": "Can a Public Limited Company be converted into a Private Limited Company, and what are the considerations involved?",
        "answer": "Yes, a Public Limited Company can be converted into a Private Limited Company, subject to compliance with the Companies Act, 2013, and specific regulatory requirements. Considerations include obtaining shareholder consent, meeting eligibility criteria, and completing necessary filings with the ROC."
    },
    {
        "question": "Is it mandatory to have a company secretary for a Public Limited Company, and what are their responsibilities?",
        "answer": "Yes, it is mandatory to appoint a qualified company secretary for a Public Limited Company. The company secretary ensures compliance with legal and regulatory requirements, maintains company records, and facilitates communication with shareholders and regulatory authorities."
    },
    {
        "question": "Can I form a Public Limited Company with a single shareholder, or do I need multiple shareholders?",
        "answer": "No, a Public Limited Company requires a minimum of seven shareholders to be formed."
    },
    {
        "question": "What are the key responsibilities of directors in a Public Limited Company?",
        "answer": "Directors in a Public Limited Company are responsible for strategic decision-making, ensuring compliance with legal and regulatory requirements, safeguarding shareholder interests, and overseeing the company’s overall operations."
    },
    {
        "question": "Is it possible to change the registered office address of a Public Limited Company?",
        "answer": "Yes, it is possible to change the registered office address of a Public Limited Company by following the prescribed procedure, which includes obtaining shareholder approval, filing necessary forms with the Registrar of Companies (ROC), and updating company records."
    },
]

const Home = () => {
    return (
        <div className='services-pages public-reg'>
            <Head>
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <h1 className='main-heading'>An Overview of Public Limited Company Registration</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className="main-heading">What are the Benefits of Public Limited Company Registration in India?</h1>
            <div className='heading-line'></div>
            <Benefits />
            <h1 className="main-heading">Eligibility for Public Limited Company Registration</h1>
            <div className='heading-line'></div>
            <Eligibility />
            <h1 className="main-heading">Types and distinctions of Licenses/Services involved</h1>
            <div className='heading-line'></div>
            <Types/>
            <h1 className="main-heading">Documents Required for Public Limited Company Registration in India</h1>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h1 className="main-heading">Procedure for Public Limited Company Registration</h1>
            <div className='heading-line'></div>
            <Procedure />
            <h1 className="main-heading">Validity and Renewal of Public Limited Company</h1>
            <div className='heading-line'></div>
            <Validity />
            <h1 className="main-heading">Suspension/Revocation of Service</h1>
            <div className='heading-line'></div>
            <Suspension />
            <h1 className="main-heading">Mandatory Compliance</h1>
            <div className='heading-line'></div>
            <MandatoryCompliance />
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