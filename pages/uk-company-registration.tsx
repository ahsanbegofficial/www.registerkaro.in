import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { DocumentRequired } from '../components/static/u-k-company-registration/DocumentRequired'
import { Hero } from '../components/static/u-k-company-registration/Hero'
import { Process } from '../components/static/u-k-company-registration/Process'
import { ProcessCompany } from '../components/static/u-k-company-registration/ProcessCompany'
import { Types } from '../components/static/u-k-company-registration/Types'
import { WhyChoose } from '../components/static/u-k-company-registration/WhyChoose'
import { Benefits } from '../components/static/u-k-company-registration/Benefits'
import { Prerequisites } from '../components/static/u-k-company-registration/Prerequisites'

const faq = [
    {
        "question": "Can a foreigner register a company in UK?",
        "answer": "It is not necessary to be a UK resident in order to establish a limited company with Companies House, hence yes, a non-resident can form a UK company. A UK-registered office address, which can be a friend's or relative's address or a virtual office address, is all that is required to register a UK company."
    },
    {
        "question": "How are companies registered in the UK?",
        "answer": "Form IN01 can be used for postal registration. Applications submitted by mail require eight to ten days and are £40 (payable by check made payable to 'Companies House'). Apply via mail to the address provided on the application."
    },
    {
        "question": "Can I open a company in UK from India?",
        "answer": "In the UK, forming a company is simple and quick. The primary benefit of incorporating in the UK is that entrepreneurs do not need to be citizens of the country. Furthermore, neither the shareholders' nor the directors' nationality is restricted."
    },
    {
        "question": "How much does it cost to register a company in England?",
        "answer": "Although forming a limited company doesn't really cost much, if you go through Companies House directly, you will need to pay them a business filing charge of £12."
    },
    {
        "question": "Can I get visa if I open company in UK?",
        "answer": "You might be able to apply for an Innovator Founder visa if you wish to open a business in the United Kingdom."
    },
    {
        "question": "Who is eligible to open a company in UK?",
        "answer": "A UK limited company can be owned and operated by almost anybody, but it always needs to have one actual person appointed who is at least 16 years old. Directors' addresses must be PO Boxes. In many nations, PO Boxes are the norm; hence, a street name needs to be provided as well."
    },
    {
        "question": "Can I live in the UK if I buy a business?",
        "answer": "After you purchase a business, you will require a visa if you are not a citizen of the United Kingdom in order to immigrate. The conditions for obtaining a UK visa are quite stringent, and there are numerous varieties available."
    },
    {
        "question": "Can I open a business in UK without visa?",
        "answer": "Make sure you are able to legally launch a business in the United Kingdom. Depending on your proposed business operations and country of citizenship, different visa requirements apply. Normally, foreign nationals require a visa in order to open a business in the UK."
    },
    {
        "question": "What are the benefits of registering a company in UK?",
        "answer": "There are various types of benefits available for those who register their business in the UK including tax benefits, low cost registration process, fast and simple registration process, 100% foreign ownership, single director company, etc."
    },
    {
        "question": "How long does company registration take UK?",
        "answer": "It generally takes 7 days to register a company in the UK. However, the days may extend if any doubt or error occurs in the application made for the registration. In such scenario, the time can extend up to 2-3 weeks."
    }
]


const Home = () => {
    return (
        <div className='services-pages u-k-reg'>
            <Head>
                <title>UK Company Registration | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/uk-company-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="IEC Registration | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero />
            <h1 className='main-heading'>An Overview of Company Registration in United Kingdom</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>Benefits of company registration in United Kingdom</h1>
            <div className='heading-line'></div>
            <Benefits />
            <h1 className='main-heading'>Types of Company Structures in UK</h1>
            <div className='heading-line'></div>
            <Types />
            <h1 className='main-heading'>Prerequisites of Company Registration in UK</h1>
            <div className='heading-line'></div>
            <Prerequisites />
            <h1 className='main-heading'>Documents required for Company registration</h1>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h1 className='main-heading'>Process of Company Registration in United Kingdom</h1>
            <div className='heading-line'></div>
            <ProcessCompany />
            <h1 className='main-heading'>Why Choose RegisterKaro for Company Registration in the United Kingdom?</h1>
            <div className='heading-line'></div>
            <WhyChoose />
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