import Head from 'next/head'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Hero } from '../components/static/dubai-company-registration/Hero'
import { Process } from '../components/static/dubai-company-registration/Process'
import { Types } from '../components/static/dubai-company-registration/Types'
import { Why } from '../components/static/dubai-company-registration/Why'
import { DocumentRequired } from '../components/static/dubai-company-registration/DocumentRequired'
import { WhyChoose } from '../components/static/dubai-company-registration/WhyChoose'
import { ProcessCompany } from '../components/static/dubai-company-registration/ProcessCompany'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'

const faq = [
  {
    "question": "Can an Indian register a company in Dubai?",
    "answer": "Yes, foreigners are welcome to establish businesses in Dubai or a free zone outside of Dubai."
  },
  {
    "question": "Why do companies register in Dubai?",
    "answer": "Apart from its advantageous location, Dubai provides other tax breaks to companies. With no personal income tax and a competitive corporate tax rate of just 9% (effective as of June 2023), from which many enterprises are still exempt, the city boasts a low tax regime."
  },
  {
    "question": "Can I open a company in Dubai without a residence visa?",
    "answer": "It is possible to establish a business in Dubai without a residency permit. The governments of the United Arab Emirates (UAE) and the Emirate of Dubai have taken major steps to establish a friendly, open, and transparent business climate."
  },
  {
    "question": "Which is the cheapest Free Zone in the UAE?",
    "answer": "With beginning prices as low as AED 5,750, Sharjah Media City (SHAMS) is the most affordable free zone in the United Arab Emirates. IFZA (International Free Zone Authority) is another expensive free zone in Dubai. For AED 12,900, IFZA provides a cheap company license in Dubai that doesn't require a visa. This is 2023's greatest and most affordable offer for a Dubai free zone license."
  },
  {
    "question": "Is Dubai expensive for business?",
    "answer": "Dubai is still regarded as one of the most inexpensive locations to launch a business, despite the substantial early setup expenses."
  },
  {
    "question": "Is Dubai a good place to start a company?",
    "answer": "Due to its advantageous location, first-rate infrastructure, and welcoming business environment, Dubai has drawn investors and entrepreneurs from all over the world. Dubai also offers many tax benefits, 100% foreign ownership is allowed, and a large number of free zones."
  },
  {
    "question": "What is the minimum investment to start a business in Dubai?",
    "answer": "Depending on the kind of business and its location, different minimum investments are needed to launch one in Dubai. For the majority of firms, the Dubai Department of Economic Development (DED) has established a minimum capital requirement of AED 300,000, or roughly $82,000."
  },
  {
    "question": "Is it hard to open a business in Dubai?",
    "answer": "No matter where you establish up shop, you'll typically just need a few standard documents: copies of the shareholder's passport and an application that has been filled out. You could also be required to submit a business plan in certain free zones."
  }
]

const Home = () => {
  return (
    <div className='services-pages dubai-reg'>
      <Head>
        <title>Dubai Company Registration | RegisterKaro</title>
        <meta name="description" content="The Official RegisterKaro" />
        <link rel="canonical" href="https://www.registerkaro.in/dubai-company-registration" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Dubai Company Registration | RegisterKaro" />
        <meta property="og:description" content="The Official RegisterKaro" />
      </Head>
      <Hero />
      <h1 className='main-heading'>An Overview of Company Registration in Dubai</h1>
      <div className='heading-line'></div>
      <Process />
      <h1 className='main-heading'>Types of Companies in Dubai</h1>
      <div className='heading-line'></div>
      <Types />
      <h1 className='main-heading'>Why register your company in Dubai?</h1>
      <div className='heading-line'></div>
      <Why />
      <h1 className='main-heading'>Documents you would need</h1>
      <div className='heading-line'></div>
      <DocumentRequired />
      <h1 className='main-heading'>Process of Company Registration in Dubai</h1>
      <div className='heading-line'></div>
      <ProcessCompany />
      <h1 className='main-heading'>Why Choose RegisterKaro for Company Registration in Dubai?</h1>
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