import React from 'react'
import Head from 'next/head'
import { Hero } from '../../components/static//bis-fmcs-certification/Hero'
import { Process } from '../../components/static/bis-fmcs-certification/Process'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { EventBased } from '../../components/static/bis-fmcs-certification/EventBased'
import { DocsREquired } from '../../components/static/bis-fmcs-certification/DocsRequired'
import { KeyInitiatives } from '../../components/static/bis-fmcs-certification/KeyInitiatives'
import { ObjectivesChecklist } from '../../components/static/bis-fmcs-certification/ObjectivesChecklist'
import { AdvantagesBIS } from '../../components/static/bis-fmcs-certification/AdvantagesBIS'
import { ProcedureObtaining } from '../../components/static/bis-fmcs-certification/ProcedureObtaining'
import { DocRequiredBIS } from '../../components/static/bis-fmcs-certification/DocRequiredBIS'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'

const faq=[
    {
      "question": "What is BIS FMCS Certification, and why is it important?",
      "answer": "BIS FMCS Certification, short for Bureau of Indian Standards Foreign Manufacturers Certification Scheme, ensures that foreign manufacturers meet Indian standards, promoting quality and safety. It's crucial for accessing the Indian market and building consumer trust."
    },
    {
      "question": "How can a foreign manufacturer apply for BIS FMCS Certification?",
      "answer": "Foreign manufacturers can apply for BIS FMCS Certification through the online portal of the Bureau of Indian Standards. The application process involves submitting necessary documents, product samples, and complying with relevant standards."
    },
    {
      "question": "What types of products require BIS FMCS Certification?",
      "answer": "Various electronic and IT products, such as mobile phones, laptops, and electronic components, fall under the scope of BIS FMCS Certification. The list is regularly updated by the Bureau of Indian Standards."
    },
    {
      "question": "What are the key benefits of obtaining BIS FMCS Certification for a foreign manufacturer?",
      "answer": "BIS FMCS Certification enhances market access to India, builds consumer confidence, and ensures compliance with Indian regulatory standards. It also establishes credibility and competitiveness in the Indian market."
    },
    {
      "question": "How long does the BIS FMCS Certification process typically take?",
      "answer": "The duration varies based on factors like the type of product and the completeness of the application. Generally, it can take a few weeks to a few months. Engaging with a BIS-accredited agency can help expedite the process."
    },
    {
      "question": "Are there specific labeling requirements for products with BIS FMCS Certification?",
      "answer": "Yes, products with BIS FMCS Certification must display the standard mark in a specified format. The labeling ensures that consumers can easily identify certified products and trust their compliance with Indian quality standards."
    },
    {
      "question": "Can a foreign manufacturer renew their BIS FMCS Certification?",
      "answer": "Yes, BIS FMCS Certification is typically valid for one or two years, and it can be renewed by submitting a renewal application before the expiration date. Ensuring ongoing compliance with standards is essential for successful renewal."
    },
    {
      "question": "Are there penalties for non-compliance with BIS FMCS Certification requirements?",
      "answer": "Non-compliance may result in penalties, including fines and legal consequences. It's crucial for foreign manufacturers to adhere to BIS FMCS Certification requirements to avoid disruptions to their business in the Indian market."
    },
    {
      "question": "Can a local representative handle BIS FMCS Certification on behalf of a foreign manufacturer?",
      "answer": "Yes, a local authorized representative can assist in the BIS FMCS Certification process on behalf of a foreign manufacturer. This representative should be knowledgeable about the certification requirements and processes."
    },
    {
      "question": "How can a foreign manufacturer stay informed about updates and changes to BIS FMCS Certification standards?",
      "answer": "Regularly checking the official website of the Bureau of Indian Standards, subscribing to newsletters, and staying in touch with BIS-accredited agencies can help foreign manufacturers stay informed about updates, changes, and new requirements for BIS FMCS Certification."
    }
  ]

  
let state = [
  "maharashtra",
  "jharkhand",
  "kashmir",
  "puducherry",
  "karnataka",
  "madhya-pradesh",
  "andhra-pradesh",
  "himachal-pradesh",
  "tamil-nadu",
  "odisha",
  "assam",
  "arunachal-pradesh",
  "gujarat",
  "chandigarh",
  "jammu-and-kashmir",
  "manipur",
  "andaman-and-nicobar-islands",
  "bihar",
  "chhattisgarh",
  "dadra-and-nagar-haveli",
  "daman-and-diu",
  "goa",
  "haryana",
  "kerala",
  "ladakh",
  "lakshadweep",
  "meghalaya",
  "mizoram",
  "nagaland",
  "punjab",
  "rajasthan",
  "sikkim",
  "telangana",
  "tripura",
  "uttar-pradesh",
  "uttarakhand",
  "west-bengal"
]

let city = [
  "mumbai",
  "firozabad",
  "new-delhi",
  "srinagar",
  "bangalore",
  "ghaziabad",
  "hyderabad",
  "thiruvananthapuram",
  "ahmedabad",
  "chennai",
  "gorakhpur",
  "kolkata",
  "thrissur",
  "gulbarga",
  "lucknow",
  "tiruchirappalli",
  "agartala",
  "agra",
  "ahmednagar",
  "aizawl",
  "ajmer",
  "akola",
  "aligarh",
  "alwar",
  "ambala",
  "ambarnath",
  "ambattur",
  "amravati",
  "amritsar",
  "amroha",
  "anand",
  "anantapur",
  "anantapuram",
  "arrah",
  "asansol",
  "avadi",
  "bahraich",
  "bally",
  "baranagar",
  "barasat",
  "bardhaman",
  "bareilly",
  "bathinda",
  "begusarai",
  "belgaum",
  "bellary",
  "berhampore",
  "berhampur",
  "bhagalpur",
  "bhalswa-jahangir-pur",
  "bharatpur",
  "bhatpara",
  "bhavnagar",
  "bhilai",
  "bhilwara",
  "bhind",
  "bhiwandi",
  "bhiwani",
  "bhopal",
  "bhubaneswar",
  "bhusawal",
  "bidar",
  "bidhannagar",
  "bihar-sharif",
  "bikaner",
  "bilaspur",
  "bokaro",
  "bulandshahr",
  "burhanpur",
  "chandigarh",
  "chapra",
  "chittoor",
  "coimbatore",
  "cuttack",
  "darbhanga",
  "davanagere",
  "dehradun",
  "delhi",
  "deoghar",
  "dewas",
  "dhanbad",
  "dhule",
  "dindigul",
  "durg",
  "durgapur",
  "eluru",
  "erode",
  "etawah",
  "faridabad",
  "farrukhabad",
  "fatehpur",
  "gandhidham",
  "gandhinagar",
  "gaya",
  "gopalpur",
  "guntur",
  "gurgaon",
  "guwahati",
  "gwalior",
  "haldia",
  "hapur",
  "haridwar",
  "hospet",
  "gulbargahowrah",
  "hubli-dharwad",
  "ichalkaranji",
  "imphal",
  "indore",
  "jabalpur",
  "jaipur",
  "jalandhar",
  "jalgaon",
  "jalna",
  "jammu",
  "jamnagar",
  "jamshedpur",
  "jhansi",
  "jodhpur",
  "junagadh",
  "kadapa",
  "kakinada",
  "kalyan-dombivli",
  "kamarhati",
  "kanpur",
  "karawal-nagar",
  "karimnagar",
  "karnal",
  "katni",
  "khammam",
  "khandwa",
  "kharagpur",
  "khora-ghaziabad",
  "kirari-suleman-nagar",
  "kochi",
  "kolhapur",
  "kollam",
  "korba",
  "kota",
  "kozhikode",
  "kulti",
  "kurnool",
  "latur",
  "loni",
  "ludhiana",
  "madhyamgram",
  "madurai",
  "maheshtala",
  "malda",
  "malegaon",
  "mangalore",
  "mango",
  "mathura",
  "mau",
  "meerut",
  "mira-bhayandar",
  "mirzapur",
  "moradabad",
  "morbi",
  "morena",
  "munger",
  "muzaffarnagar",
  "muzaffarpur",
  "mysore",
  "nadiad",
  "nagercoil",
  "nagpur",
  "naihati",
  "nanded",
  "nandyal",
  "nangloi-jat",
  "nashik",
  "navi-mumbai",
  "nellore",
  "new-delhi",
  "nizamabad",
  "noida",
  "north-dumdum",
  "ongole",
  "orai",
  "pali",
  "pallavaram",
  "panchkula",
  "panihati",
  "panipat",
  "parbhani",
  "patiala",
  "patna",
  "pimpri-chinchwad",
  "pondicherry",
  "pune",
  "puri",
  "purnia",
  "raebareli",
  "raichur",
  "raipur",
  "rajahmundry",
  "rajkot",
  "rajpur-sonarpur",
  "ramagundam",
  "rampur",
  "ranchi",
  "ratlam",
  "rewa",
  "rohtak",
  "rourkela",
  "sagar",
  "saharanpur",
  "salem",
  "sambalpur",
  "sambhal",
  "satara",
  "satna",
  "secunderabad",
  "shahjahanpur",
  "shimoga",
  "sikar",
  "silchar",
  "siliguri",
  "singrauli",
  "solapur",
  "sonipat",
  "south-dumdum",
  "sri-ganganagar",
  "surat",
  "tenali",
  "thane",
  "thanjavur",
  "thoothukudi",
  "tirunelveli",
  "tirupati",
  "tiruppur",
  "tiruvottiyur",
  "tumkur",
  "udaipur",
  "ujjain",
  "ulhasnagar",
  "uluberia",
  "uzhavarkarai",
  "vadodara",
  "varanasi",
  "vasai-virar",
  "vijayanagaram",
  "vijayawada",
  "visakhapatnam",
  "warangal",
  "yamunanagar"
]

const Home = () => {
    return (
        <div className='services-pages bis-fmcs-certification-reg'>
            <Head>
                
              <title>BIS FMCS Certification | RegisterKaro</title>
              <meta name="description" content="The Official RegisterKaro" />
              <link rel="canonical" href="https://www.registerkaro.in/bis-fmcs-certification" />
              <link rel="icon" href="/favicon.ico" />
              <meta property="og:title" content="BIS FMCS Certification  | RegisterKaro" />
              <meta property="og:description" content="The Official RegisterKaro" />
            
            </Head>
            <Hero cityName={'India'} />
            <h1 className='main-heading'>An Overview of BIS FMCS Certification</h1>
            <div className='heading-line'></div>
            <Process cityName={'India'} />
            <h1 className='main-heading'>What is BIS Standard Mark?</h1>
            <div className='heading-line'></div>
            <KeyInitiatives cityName={'India'}/>
            <h1 className='main-heading'>Importance of BIS FMCS Certification in India</h1>
            <div className='heading-line'></div>
            <ObjectivesChecklist cityName={'India'}/>
            <h1 className='main-heading'>List of Products Which Require BIS FMCS Certification</h1>
            <div className='heading-line'></div>
            <DocsREquired cityName={'India'}/>
            <h1 className='main-heading'>Requirements for BIS FMCS Certification</h1>
            <div className='heading-line'></div>
            <EventBased cityName={'India'}/>
            <h1 className='main-heading'>Required Documents for BIS FMCS Certification</h1>
            <div className='heading-line'></div>
            <DocRequiredBIS cityName={'India'}/>
            <h1 className='main-heading'>Procedure for Obtaining BIS FMCS Certification</h1>
            <div className='heading-line'></div>
            <ProcedureObtaining cityName={'India'}/>
            <h1 className='main-heading'>Key Guidelines for Nomination of AIR (Authorized Indian Representative) for Foreign Manufacturers</h1>
            <div className='heading-line'></div>
            <AdvantagesBIS cityName={'India'}/>
            <h1 className="main-heading">Why RegisterKaro?</h1>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h1 className="main-heading">FAQs</h1>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'BIS FMCS Certification'} state={state} Query={'bis-fmcs-certification'} city={city} />
            
        </div>
    )
}
export default Home