import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/australia-company-registration/Hero'
import { Process } from '../components/static/australia-company-registration/Process'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import Types from '../components/static/australia-company-registration/Types'
import Establish from '../components/static/australia-company-registration/Establish'
import DocumentReq from '../components/static/australia-company-registration/DocumentReq'
import { ProcessStep } from '../components/static/australia-company-registration/ProcessStep'
import Facts from '../components/static/australia-company-registration/Facts'


const faq = [
    {
        "question": "What’s Australian Company Number (ACN)?",
        "answer": "When a company in Australia is registered, they are given a distinctive nine-digit number known as the Australian Company Number (ACN), which must be included on all official company paperwork."
    },
    {
        "question": "What’s the role of ASIC?",
        "answer": "ASIC oversees Australian businesses, financial markets, financial service providers (such as banks, insurers, and superannuation funds), and investment, superannuation, insurance, deposit, and credit professionals."
    },
    {
        "question": "Can a Foreigner register a company in Australia?",
        "answer": "A person who is not a resident of Australia can establish a business in the country, but they must have at least one Australian resident as a director for any company, and for a public company, two out of a minimum of three directors must be Australian residents."
    },
    {
        "question": "Can I get PR by Opening a business in Australia?",
        "answer": "Business Visas in Australia such as the Business Innovation and Investment Visa are available for individuals planning to start a new business, manage an existing one, or invest in the country, with the possibility of obtaining permanent residency."
    },
    {
        "question": "How much money is required to set-up a business in Australia?",
        "answer": "This temporary visa necessitates a minimum investment of AUD2.5 million in Australian assets that fulfill specific criteria and continued business or investment ventures in Australia for a maximum of 5 years. To get an idea of how long it takes to process this visa, utilize the visa processing time guide tool."
    }
]



const Home = () => {
    return (
        <div className='services-pages australia-company-reg'>
            <Head>
                <title>Australia Company Registration | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/australia-company-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Australia Company Registration | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero />
            <h1 className='main-heading'>An overview of Company Registration in Australia</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>Types of Company in Australia</h1>
            <div className='heading-line'></div>
            <Types />
            <h1 className='main-heading'>why to establish a business in australia?</h1>
            <div className='heading-line'></div>
            <Establish />
            <h1 className='main-heading'>Document Required</h1>
            <div className='heading-line'></div>
            <DocumentReq />
            <h1 className='main-heading'>Process of Registering Your Company in Australia </h1>
            <div className='heading-line'></div>
            <ProcessStep />
            <h1 className='main-heading'>Facts to Know </h1>
            <div className='heading-line'></div>
            <Facts />
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