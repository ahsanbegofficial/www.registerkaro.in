import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Benefits } from '../components/static/france-company-registration/Benefits'
import { DocumentRequired } from '../components/static/france-company-registration/DocumentRequired'
import { Hero } from '../components/static/france-company-registration/Hero'
import { Process } from '../components/static/france-company-registration/Process'
import { ProcessCompany } from '../components/static/france-company-registration/ProcessCompany'
import { Types } from '../components/static/france-company-registration/Types'
import { WhyChoose } from '../components/static/france-company-registration/WhyChoose'

const faq = [
    {
        "question": "How much does it cost to register a company in France?",
        "answer": "Microenterprises are generally free to register in France. However, businesses that engage in trading or commerce must register with the Chambre de Commerce et d'Industrie (CCI), which entails a fee of approximately 100 euros."
    },
    {
        "question": "Can foreigners set up a company in France?",
        "answer": "If you are a non-European citizen of foreign nationality and want to work in France in a commercial, industrial, craft, or other self-employed capacity, you need to obtain a temporary residence permission, which is also known as a residence permit, which allows you to engage in professional activities."
    },
    {
        "question": "What is LLC called in France?",
        "answer": "LLC in France is known as SARL standing for société à responsabilité limitée."
    },
    {
        "question": "How much is company tax in France?",
        "answer": "In France, the corporate tax rate is twenty-five percent. From 1981 to 2023, the French corporate tax rate was an average of 36.87 percent; it peaked in 1982 at 50.00 percent and fell to a record low of 25.00 percent in 2022."
    },
    {
        "question": "How much tax do companies pay in France?",
        "answer": "In France, the corporate tax rate has been progressively declining. The standard rate in 2021 was 26.5%; enterprises that made more than €500,000 were subject to a higher rate of 27.5%. Regardless of their income, corporations have been required to pay a basic corporate tax rate of 25% since 2022."
    },
    {
        "question": "Is it difficult to start a business in France?",
        "answer": "The type of structure you choose will determine the specifics of how you launch your firm. In France, establishing a sole proprietorship is not too difficult. You don't have to invest any money or submit any accounting; all you have to do is register your activities (typically with the chamber of commerce in your community)."
    },
    {
        "question": "What is the minimum share capital in France?",
        "answer": "The minimum share capital is €1, however banks prefer that a firm have a minimum of €4,000,000."
    },
    {
        "question": "Why start a business in France?",
        "answer": "One of France's most alluring selling advantages for businesses looking to operate there is the size of its consumer base. The economic figures of France are impressive: The third-biggest economy in Europe is France's. There are 67.3 million domestic consumers in the buying force."
    },
    {
        "question": "How long does it take to open a company in France?",
        "answer": "The standard time for company registration in France tends to fall between 2 weeks to 4 weeks depending on the type and city of company registration."
    },
    {
        "question": "What is a EURL in France?",
        "answer": "A limited liability company (sometimes referred to as a SARL in France) with only one associate is called a EURL. It is also known as a 'SARL unipersonnelle,' and it is one of the two categories of single-associate firms in France, along with the SASU."
    }
]



  
const Home = () => {
    return (
        <div className='services-pages france-reg'>
           <Head>
                <title>Company Registration Services in France - Documents | Process</title>
                <meta name="description" content="Get your business up and running in France swiftly with our professional company registration services. Start your venture today with RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/france-company-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Company Registration Services in France - Documents | Process" />
                <meta property="og:description" content="Get your business up and running in France swiftly with our professional company registration services. Start your venture today with RegisterKaro" />
            </Head>
            <Hero />
            <h1 className='main-heading'>An Overview of Company Registration in France</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>Benefits of Company Registration in France</h2>
            <div className='heading-line'></div>
            <Benefits />
            <h2 className='main-heading'>Types of Company Structures in France</h2>
            <div className='heading-line'></div>
            <Types />
            <h2 className='main-heading'>Documents required for Company registration in France</h2>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h2 className='main-heading'>Process of Company Registration in France</h2>
            <div className='heading-line'></div>
            <ProcessCompany />
            <h2 className='main-heading'>Why Choose RegisterKaro for Company Registration in France?</h2>
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