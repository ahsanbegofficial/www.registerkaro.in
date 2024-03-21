import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { DocumentRequired } from '../components/static/thailand-company-registration/DocumentRequired'
import { Hero } from '../components/static/thailand-company-registration/Hero'
import { Process } from '../components/static/thailand-company-registration/Process'
import { ProcessCompany } from '../components/static/thailand-company-registration/ProcessCompany'
import { Registration } from '../components/static/thailand-company-registration/Registration'
import { Types } from '../components/static/thailand-company-registration/Types'
import { WhyChoose } from '../components/static/thailand-company-registration/WhyChoose'
import { WhyStart } from '../components/static/thailand-company-registration/WhyStart'

const faq = [
    {
        "question": "How much does it cost to register a company in Thailand?",
        "answer": "For a Thai business with a registered capital of THB 2 million, the government charges about THB 12,000, and for each additional million, the taxes are about THB 6,000. Additionally, an entrepreneur must pay about 500 THB for a corporate stamp."
    },
    {
        "question": "Can a foreigner own a company in Thailand?",
        "answer": "Yes, foreigners are allowed to own a limited company in Thailand. However, Thai law generally requires that at least 51% of the shares of a Thai limited company be held by Thai nationals, subject to certain limits and laws."
    },
    {
        "question": "What are the types of company registration in Thailand?",
        "answer": "In Thailand, there are three main kinds of business structures: Joint Ventures, Limited Companies, and Partnerships."
    },
    {
        "question": "Can a foreigner own 100% of a Thai company?",
        "answer": "Yes, foreigners may register 100% foreign ownership of a firm in Thailand, subject to the nature of the enterprise and the issuance of an FBL Foreign Firm License or certificate."
    },
    {
        "question": "How can an Indian start a business in Thailand?",
        "answer": "To start a business in Thailand, an Indian citizen will need a non-immigrant \"B\" (business visa) to enter the country for business purposes. Once obtained, they can establish their business in Thailand like any other Thai citizen."
    },
    {
        "question": "Is Thailand a good country to start a business?",
        "answer": "Yes, Thailand ranks 2nd in the world to start a business as per US reports of 2023. It offers various benefits such as tax benefits, government schemes, a skilled workforce, etc."
    },
    {
        "question": "What is the tax rate in Thailand for companies?",
        "answer": "The corporate income tax (CIT) rate in Thailand is 20%. Additionally, final withholding tax (WHT) is imposed on certain categories of assessable income received from or in Thailand to a foreign corporation that is not conducting business there."
    },
    {
        "question": "How much money is required to start a business in Thailand?",
        "answer": "The average cost to incorporate a company and launch a new venture in Thailand ranges between 80,000 and 100,000 Baht. A capital payment of one million Baht is required when creating a corporation, along with a government charge of 7,000 Baht."
    }
]



const Home = () => {
    return (
        <div className='services-pages thailand-regi'>
            <Head>
                <title>Company Registration in Thailand | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/thailand-company-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="IEC Registration | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero />
            <h1 className='main-heading'>An Overview of Company Registration in Thailand</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Why to start a business in Thailand?</h2>
            <div className='heading-line'></div>
            <WhyStart />
            <h2 className='main-heading'>Types of Companies in Thailand</h2>
            <div className='heading-line'></div>
            <Types />
            <h2 className='main-heading'>Documents you might need</h2>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h2 className='main-heading'>Process for Company Registration in Thailand</h2>
            <div className='heading-line'></div>
            <ProcessCompany />
            <h2 className='main-heading'>Post Registration To-dos</h2>
            <div className='heading-line'></div>
            <Registration />
            <h2 className='main-heading'>Why Choose RegisterKaro for Company Registration in Thailand?</h2>
            <div className='heading-line'></div>
            <WhyChoose />
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