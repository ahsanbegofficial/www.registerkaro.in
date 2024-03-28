import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { DocumentRequired } from '../components/static/netherlands-company-registration/DocumentRequired'
import { Hero } from '../components/static/netherlands-company-registration/Hero'
import { Process } from '../components/static/netherlands-company-registration/Process'
import { ProcessCompany } from '../components/static/netherlands-company-registration/ProcessCompany'
import { Registration } from '../components/static/netherlands-company-registration/Registration'
import { Types } from '../components/static/netherlands-company-registration/Types'
import { WhyChoose } from '../components/static/netherlands-company-registration/WhyChoose'
import { WhyStart } from '../components/static/netherlands-company-registration/WhyStart'

const faq = [
    {
        "question": "How much does it cost to register a company in the Netherlands?",
        "answer": "The cost for registering a company in the Netherlands falls between 1500 euros to 2200 euros depending on the type, size, and nature of the business registered under the law."
    },
    {
        "question": "Can a foreigner register a company in the Netherlands?",
        "answer": "Yes, foreigners can register a company in the Netherlands. They may use their private foreign address as their business address if they reside in a border region of the country and can demonstrate that they conduct structural physical business activities there."
    },
    {
        "question": "How do I register my company in the Netherlands?",
        "answer": "You can register your company in the Netherlands on your own by selecting the business structure, choosing a company name, preparing the required documents, and submitting the application through the official website for company registration. Alternatively, you can seek expert assistance."
    },
    {
        "question": "Do companies pay tax in the Netherlands?",
        "answer": "Yes, all companies based in the Netherlands or formed under Dutch law are required to pay tax in the Netherlands on their international revenue. Income earned outside of the Netherlands is included in the worldwide income."
    },
    {
        "question": "What are the benefits of registering a company in the Netherlands?",
        "answer": "Benefits of registering a company in the Netherlands include its strategic geographical location connecting it with other parts of Europe, stable economy, advanced infrastructure, and strong financial market."
    },
    {
        "question": "How much money is required to start a business in the Netherlands?",
        "answer": "You should budget between 1,500 and 2,200 EUR to register a company in The Netherlands. The precise expenses may vary depending on various factors."
    },
    {
        "question": "How long does it take to open a company in the Netherlands?",
        "answer": "The average timeline for the company registration process in the Netherlands is around 3 weeks, but it might vary in case of application rejection or requests for changes."
    },
    {
        "question": "Is the Netherlands a high tax country?",
        "answer": "The tax-to-GDP ratio in the Netherlands grew from 36.9% in 2000 to 38.0% in 2022, which is higher than the 2000 OECD average. The tax-to-GDP ratio in the Netherlands ranged from 34.8% in 2003 to 40.0% in 2020 within that time period."
    },
    {
        "question": "Do foreigners pay tax in the Netherlands?",
        "answer": "Yes, foreign nationals may be subject to Dutch income tax if they receive revenue from work actually performed in the Netherlands. They may also be eligible for the 30% facility, which exempts thirty percent of specific work income from tax."
    }
]

  
const Home = () => {
    return (
        <div className='services-pages  netherlands-comp-reg'>
            <Head>
                <title>Get Started with Company Registration in Netherlands</title>
                <meta name="description" content="Get your business up and running smoothly with our Netherlands company registration services. This quick guide tells you which steps to take." />
                <link rel="canonical" href="https://www.registerkaro.in/netherlands-company-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Get Started with Company Registration in Netherlands" />
                <meta property="og:description" content="Get your business up and running smoothly with our Netherlands company registration services. This quick guide tells you which steps to take. " />
            </Head>
            <Hero />
            <h1 className='main-heading'>An Overview of Company Registration in Netherlands</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Why start a business in the Netherlands?</h2>
            <div className='heading-line'></div>
            <WhyStart/>
            <h2 className='main-heading'>Types of companies for Company Registration in Netherlands</h2>
            <div className='heading-line'></div>
            <Types />
            <h2 className='main-heading'>Documents to carry for registration process</h2>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h2 className='main-heading'>Step-by-step process for Company Registration in Netherlands</h2>
            <div className='heading-line'></div>
            <ProcessCompany />
            <h2 className='main-heading'>Post-Registration Compliances</h2>
            <div className='heading-line'></div>
            <Registration />
            <h2 className='main-heading'>Why Choose RegisterKaro for Company Registration in the Netherlands?</h2>
            <div className='heading-line'></div>
            <WhyChoose/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
        </div>
    )
}
export default Home