import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Benefits } from '../components/static/llp/Benefits'
import { Characteristics } from '../components/static/llp/Characteristics'
import { Checklist } from '../components/static/llp/Checklist'
import { DifferentTypes } from '../components/static/llp/DifferentTypes'
import { DocumentRequired } from '../components/static/llp/DocumentRequired'
import { Hero } from '../components/static/llp/Hero'
import { HowToRegister } from '../components/static/llp/HowToRegister'
import { LLPReg } from '../components/static/llp/LLPReg'
import { Process } from '../components/static/llp/Process'
import { TableCom } from '../components/static/llp/TableCom'

let faq = [
    {
        "question": "How do I register for LLP?",
        "answer": "To register for the LLP, you may follow the given steps: apply for the DSC < apply for the DIN < draft the LLP Agreement for the partners to sign it < Fill Form-2, Form-3, and Form-4 along with attaching the LLP agreement < pay the LLP registration fee < application verification process will take place < once verified, you will receive the certificate for incorporation."
    },
    {
        "question": "Who are eligible for LLP?",
        "answer": "Individual eligible to conduct business in Indian Region is eligible for LLP registration if that individual is accompanied by another eligible partner with Indian Citizenship"
    },
    {
        "question": "What LLP means?",
        "answer": "It is one of the eight forms of company structures available for business registration under Companies Act 2013. It stands for Limited Liability Partnership."
    },
    {
        "question": "Is it compulsory to register LLP?",
        "answer": "Any business needs to be registered in order to avail benefits offered by the government. In order to register, it is important to check is the business nature and operation is matching the eligibility frame for registering as LLP. Important to note that any business can only be called as an LLP, if it is registered."
    },
    {
        "question": "Is LLP better than Pvt Ltd?",
        "answer": "LLP has distinctive features and benefits than that of a Pvt. Ltd. Such as that of registration process asking for MoA and AoA, where there is no such requirement in LLP registration. Moreover, the LLP registration process is quite convenient to be followed than that of a Pvt. Ltd. However, Pvt. Ltd. Is the most sorted and organized form of company."
    },
    {
        "question": "Is LLP better than partnership?",
        "answer": "LLP is a form of partnership which is based on the partnership deed signed between the partners who are intending to work together in a business. It is basically a bridge between the private limited company and a partnership firm with perks of a private limited and functioning of a partnership firm."
    },
    {
        "question": "What are the disadvantages of LLP?",
        "answer": "LLP is not allowed to raise equity investment which eventually narrow down the capital investment options. Moreover, the income tax rate is bit higher for the LLP in comparison to that of a private limited company."
    },
    {
        "question": "What is the advantage of LLP?",
        "answer": "You may proceed ahead with LLP registration owing to its wide range of benefits such as no capital requirement, minimum two directors, less registration cost, less complex process, etc."
    },
    {
        "question": "What is the tax slab for LLP?",
        "answer": "In case the turnover is up to Rs. 250 Cores, the tax slab for the LLP raises to 30%."
    },
    {
        "question": "Who pays the debts of a LLP?",
        "answer": "The partners of the LLP are responsible for the payment of the debts. However, the personal debts of the partners cannot be touched upon for the debt recovery unless the case is of the fraud or cheating. The recovery is only done from the capital contribution of the partners."
    },
    {
        "question": "Is LLP public or private?",
        "answer": "LLP is a private entity which is regulated under the Companies Act 2013."
    },
    {
        "question": "What is the minimum capital requirement for LLP?",
        "answer": "There is no minimum capital requirement for LLP registration, meaning that the LLP can be registered at capital contribution."
    },
    {
        "question": "What are the documents required for LLP registration?",
        "answer": "Partner's Identity proof, Partner’s Address proof, Registered address proof, Partnership Deed, For foreign nationals [Passport, residence card, bank statement, or government-issued identity with the address], DSC for each Partner."
    }
]

const Home = () => {
    return (
        <div className='services-pages llp-reg'>
            <Head>
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <h1 className='main-heading'>Limited Liability Registration (LLP) Registration in India</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>What is a “Limited Liability Partnership” or “LLP”?</h1>
            <div className='heading-line'></div>
            <LLPReg />
            <h1 className="main-heading">What are the Features of an LLP in India?</h1>
            <div className='heading-line'></div>
            <Characteristics />
            <h1 className="main-heading">Benefits of LLP Registration in India</h1>
            <div className='heading-line'></div>
            <Benefits />
            <h1 className="main-heading">What are the Different Types of LLP Forms in India?</h1>
            <div className='heading-line'></div>
            <DifferentTypes />
            <h1 className="main-heading">Checklist for the LLP Registration</h1>
            <div className='heading-line'></div>
            <Checklist />
            <h1 className="main-heading">What are the vital documents required for LLP Registration in India?</h1>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h1 className="main-heading">Know the LLP Registration Process</h1>
            <div className='heading-line'></div>
            <HowToRegister />
            <h1 className="main-heading">LLP Compliance</h1>
            <div className='heading-line'></div>
            <TableCom />
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