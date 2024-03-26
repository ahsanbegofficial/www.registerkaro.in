import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { DocumentRequired } from '../components/static/germany-company-registration/DocumentRequired'
import { Hero } from '../components/static/germany-company-registration/Hero'
import { Process } from '../components/static/germany-company-registration/Process'
import { ProcessCompany } from '../components/static/germany-company-registration/ProcessCompany'
import { Types } from '../components/static/germany-company-registration/Types'
import { WhyChoose } from '../components/static/germany-company-registration/WhyChoose'
import { WhyStart } from '../components/static/germany-company-registration/WhyStart'

const faq = [
    {
        "question": "How much does it cost to register a company in Germany?",
        "answer": "Establishing a legal organization in Germany requires paying a company formation fee of about 1,800 euros, with additional costs such as virtual office packages running about 208 euros a month, and accounting fees starting at 100 euros a month."
    },
    {
        "question": "Can I register a company in Germany from India?",
        "answer": "Yes, you can register your company in Germany from India. The registration process depends on the nature of your company, and it typically involves contacting the local trade office, Tax Office (Finanzamt), or Commercial Register, depending on the type of business."
    },
    {
        "question": "Can a foreigner own a company in Germany?",
        "answer": "Yes, foreigners can start a company in Germany. Citizens of non-EU and non-EFTA nations need to apply for a residency visa at the relevant foreign mission in their home country to engage in self-employed commercial activity in Germany."
    },
    {
        "question": "Is it good to start a company in Germany?",
        "answer": "Starting a business in Germany offers investors robust legal protections for their rights and intellectual property, as well as a strong economy that provides a safe environment for business development and expansion."
    },
    {
        "question": "How much money is required to start a business in Germany?",
        "answer": "Registering a business in Germany typically costs €400, and investors must provide €25,000 in startup capital to establish a GmbH (private limited company)."
    },
    {
        "question": "What is the minimum capital for a company in Germany?",
        "answer": "According to German legislation, a private limited company (GmbH) must have a minimum capital of €25,000, half of which must be available prior to the company's registration in the Company Register."
    },
    {
        "question": "How much is corporate tax in Germany?",
        "answer": "The corporate income tax (CIT) rate in Germany is 15%, with a 5.5% solidarity surcharge, raising it to 15.825%. Municipal business (trade) tax (MBT) is also imposed."
    },
    {
        "question": "How long does it take to register a company in Germany?",
        "answer": "The estimated time for company registration in Germany is typically between 2 to 6 weeks. This includes a waiting period for inclusion in the business register following the payment of the share capital, during which business activities are not yet permitted."
    }
]


const Home = () => {
    return (
        <div className='services-pages germany-reg'>
            <Head>
                <title>Company Registration in Germany | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/germany-company-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Company Registration in Germany | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero />
            <h1 className='main-heading'>An Overview of Company Registration in Germany</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>Why to start a business in Germany?</h1>
            <div className='heading-line'></div>
            <WhyStart />
            <h1 className='main-heading'>Types of Companies in Germany</h1>
            <div className='heading-line'></div>
            <Types />
            <h1 className='main-heading'>Documents you might need</h1>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h1 className='main-heading'>Process for Company Registration in Germany</h1>
            <div className='heading-line'></div>
            <ProcessCompany />
            <h1 className='main-heading'>Why Choose RegisterKaro for Company Registration in Germany?</h1>
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