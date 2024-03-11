import React from 'react'
import Head from 'next/head'
import { Hero } from '../../components/static/bis-crs-certification/Hero'
import { Process } from '../../components/static/bis-crs-certification/Process'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { OtherAnnual } from '../../components/static/bis-crs-certification/OtherAnnual'
import { EventBased } from '../../components/static/bis-crs-certification/EventBased'
import { MandatoryCompilance } from '../../components/static/bis-crs-certification/MandatoryCompilance'
import { DocsREquired } from '../../components/static/bis-crs-certification/DocsRequired'
import { Evaolution } from '../../components/static/bis-crs-certification/Evaolution'
import { Decoding } from '../../components/static/bis-crs-certification/Decoding'
import { Product } from '../../components/static/bis-crs-certification/Product'
import { Eligibility } from '../../components/static/bis-crs-certification/Eligibility'
import { Documents } from '../../components/static/bis-crs-certification/Documents'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'

const faq = [
    {
      "question": "What is BIS CRS Certification, and why is it essential for manufacturers?",
      "answer": "BIS CRS Certification, or Bureau of Indian Standards Compulsory Registration Scheme, is a mandatory certification for certain electronic goods in India. It ensures products meet safety and quality standards, enhancing consumer protection."
    },
    {
      "question": "Which electronic products require BIS CRS Certification?",
      "answer": "Various electronic goods, including IT equipment, audio/video products, and power adaptors, fall under the scope of BIS CRS Certification. The list is regularly updated by the Bureau of Indian Standards."
    },
    {
      "question": "How can a manufacturer apply for BIS CRS Certification?",
      "answer": "Manufacturers can apply for BIS CRS Certification by submitting the necessary documentation and product samples through the BIS online portal. Engaging with a BIS-approved certification body can streamline the application process."
    },
    {
      "question": "What are the consequences of selling products without BIS CRS Certification in India?",
      "answer": "Selling uncertified products in India can lead to legal consequences, including fines and product recalls. BIS CRS Certification is a legal requirement to ensure product compliance with Indian safety and quality standards."
    },
    {
      "question": "How long does it take to obtain BIS CRS Certification for electronic products?",
      "answer": "The certification timeline varies based on factors like the type of product and the completeness of the application. Generally, it can take a few weeks to a few months. Engaging with a BIS-approved certification body can expedite the process."
    },
    {
      "question": "Is BIS CRS Certification a one-time process, or does it require periodic renewal?",
      "answer": "BIS CRS Certification is typically valid for two years, after which manufacturers need to renew it. Renewal involves a similar process of documentation submission and testing to ensure ongoing compliance."
    },
    {
      "question": "Can a manufacturer apply for BIS CRS Certification without a physical presence in India?",
      "answer": "Yes, foreign manufacturers can apply for BIS CRS Certification without a physical presence in India. However, they may need to appoint an authorized Indian representative to facilitate the certification process."
    },
    {
      "question": "Are there specific labeling requirements for products with BIS CRS Certification?",
      "answer": "Yes, products with BIS CRS Certification must display the standard mark in a specified format. This labeling ensures that consumers can easily identify certified products, fostering trust in their safety and quality."
    },
    {
      "question": "What is the role of a BIS-approved certification body in the CRS Certification process?",
      "answer": "BIS-approved certification bodies conduct product testing, factory audits, and certification assessments to verify compliance with BIS standards. Engaging with such bodies is essential for a smooth and successful certification process."
    },
    {
      "question": "How can manufacturers stay updated on changes and additions to BIS CRS Certification requirements?",
      "answer": "Regularly monitoring the official website of the Bureau of Indian Standards, subscribing to newsletters, and maintaining communication with BIS-approved certification bodies can help manufacturers stay informed about updates, changes, and new requirements for BIS CRS Certification."
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
        <div className='services-pages bis-crs-certification-reg'>
           <Head>
              <title>BIS CRS Certification | RegisterKaro</title>
              <meta name="description" content="The Official RegisterKaro" />
              <link rel="canonical" href="https://www.registerkaro.in/bis-crs-certification" />
              <link rel="icon" href="/favicon.ico" />
              <meta property="og:title" content="BIS CRS Certification | RegisterKaro" />
              <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero cityName={'India'}/>
            <h1 className='main-heading'>Get BIS CRS Certification Online in India</h1>
            <div className='heading-line'></div>
            <Process  cityName={'India'}/>
            <h1 className='main-heading'>Evolution of CRS and Product Expansion: A Regulatory Timeline</h1>
            <div className='heading-line'></div>
            <Evaolution cityName={'India'}/>
            <h1 className='main-heading'>Decoding CRS: Compulsory Registration Scheme Unveiled</h1>
            <div className='heading-line'></div>
            <Decoding cityName={'India'}/>
            <h1 className='main-heading'>Product Catalog under Compulsory Registration Scheme</h1>
            <div className='heading-line'></div>
            <Product cityName={'India'}/>
            <h1 className='main-heading'>Eligibility for BIS CRS Certification: Unveiling the Criteria</h1>
            <div className='heading-line'></div>
            <Eligibility cityName={'India'}/>
            <h1 className='main-heading'>Documents Crucial for BIS CRS Certification</h1>
            <div className='heading-line'></div>
            <Documents cityName={'India'}/>
            <h1 className='main-heading'>BIS CRS Certification Process: A Step-by-Step Guide</h1>
            <div className='heading-line'></div>
            <EventBased cityName={'India'}/>
            <h1 className='main-heading'>Guidelines for Electronic Labeling within the BIS CRS Certification Scheme</h1>
            <div className='heading-line'></div>
            <DocsREquired cityName={'India'}/>
            <h1 className='main-heading'>Market Surveillance within the BIS CRS Certification Scheme: Ensuring Quality Compliance</h1>
            <div className='heading-line'></div>
            <MandatoryCompilance cityName={'India'}/>
            <h1 className='main-heading'>Implementation Steps for Surveillance Process</h1>
            <div className='heading-line'></div>
            <OtherAnnual cityName={'India'}/>
            <h1 className="main-heading">Why RegisterKaro?</h1>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h1 className="main-heading">FAQs</h1>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className='mb-4'></div>
             <RegistrationLinks formattedQuery={'BIS CRS Certification'} state={state} Query={'bis-crs-certification'} city={city} />
  
        </div>
    )
}
export default Home