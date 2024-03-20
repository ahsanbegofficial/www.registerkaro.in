import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { DocumentRequired } from '../components/static/singapore-company-registration/DocumentRequired'
import { Hero } from '../components/static/singapore-company-registration/Hero'
import { Process } from '../components/static/singapore-company-registration/Process'
import { ProcessCompany } from '../components/static/singapore-company-registration/ProcessCompany'
import { Types } from '../components/static/singapore-company-registration/Types'
import { WhyChoose } from '../components/static/singapore-company-registration/WhyChoose'
import { Benefits } from '../components/static/singapore-company-registration/Benefits'
import { Prerequisites } from '../components/static/singapore-company-registration/Prerequisites'

const faq = [
    {
        "question": "How much does it cost to register a company in Singapore?",
        "answer": "The cost of registering a business name with the ACRA is $15. Following the registration of the name, the company must be registered, which incurs a $300 fee. While the amount varies depending on the type of application, the normal registration fee is $315."
    },
    {
        "question": "Can a foreigner register a company in Singapore?",
        "answer": "Yes, foreigners can easily create a corporation and possess 100% of its shares, just like any other Singaporean citizen. In actuality, anyone in Singapore who is at least eighteen years old may form a business, assuming he hasn't been found guilty of any crimes or filed for bankruptcy."
    },
    {
        "question": "Can an Indian register a company in Singapore?",
        "answer": "Indeed, an Indian corporation can be registered in Singapore. You must submit an application to the Accounting and Corporate Regulatory Authority (ACRA) entity known as the Company Registrar. Both domestic and international company owners are required to follow the same procedures and finish the same incorporation process."
    },
    {
        "question": "What is required to register a company in Singapore?",
        "answer": "You would require certain documents for company registration in Singapore which includes Director’s details, company activities brief, registered address proof, company secretary particulars, shareholders’ details, etc."
    },
    {
        "question": "What is Singapore income tax?",
        "answer": "The income tax rate in Singapore starts from 0% ending up to 22% which should be above than $ 320,000."
    },
    {
        "question": "How can foreigners start business in Singapore?",
        "answer": "Yes, a foreigner can start a business in Singapore just like a Singaporean citizen. One must have to follow the same process for the registration except for the identification where the foreigner director has to provide the passport details in the list of information required for the director."
    },
    {
        "question": "Can a foreigner own 100% of a business in Singapore?",
        "answer": "Yes. A Foreign Company can own 100% of the business in the Singapore Market. In such scenarios, the business must be registered in one of the following categories: Subsidiary, Branch Office, and Representative Office."
    },
    {
        "question": "How much is company tax in Singapore?",
        "answer": "In Singapore, corporate income tax is calculated based on the year prior. The corporate income tax rate in Singapore is 17%."
    },
    {
        "question": "How can I set up a company in Singapore from India?",
        "answer": "You can avail services from RegisterKaro if you are looking forward to starting a business in Singapore while sitting in India."
    },
    {
        "question": "Who can open a company in Singapore?",
        "answer": "First you need to register your company with ACRA. Once registered, prepare your application to align with the documents required such as MoA, AoA, Director’s list and particulars, Form of Incorporation, Registered Address and its proof, etc. Then file the application with the ACRA and then wait for scrutiny. Once scrutinized, the ACRA will approve the application and grant you the certificate of procurement."
    }
]

  
const Home = () => {
    return (
        <div className='services-pages singapore-regi'>
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
            <h1 className='main-heading'>An Overview of Company Registration in Singapore</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>Benefits of Company Registration in Singapore</h1>
            <div className='heading-line'></div>
            <Benefits />
            <h1 className='main-heading'>Types of Company Structures in Singapore</h1>
            <div className='heading-line'></div>
            <Types />
            <h1 className='main-heading'>Prerequisites of Company Registration in Singapore</h1>
            <div className='heading-line'></div>
            <Prerequisites />
            <h1 className='main-heading'>Documents required for Company registration</h1>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h1 className='main-heading'>Process of Company Registration in Singapore</h1>
            <div className='heading-line'></div>
            <ProcessCompany />
            <h1 className='main-heading'>Why Choose RegisterKaro for Company Registration in Singapore?</h1>
            <div className='heading-line'></div>
            <WhyChoose/>
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