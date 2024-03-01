import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { BenefitsISO } from '../../components/static/iso-certification/BenefitsISO'
import { DifferentTypes } from '../../components/static/iso-certification/DifferentTypes'
import { DocumentsRequired } from '../../components/static/iso-certification/DocumentsRequired'
import { Hero } from '../../components/static/iso-certification/Hero'
import { ISOFramework } from '../../components/static/iso-certification/ISOFramework'
import { Procedure } from '../../components/static/iso-certification/Procedure'
import { Process } from '../../components/static/iso-certification/Process'
import { WhatISO } from '../../components/static/iso-certification/WhatISO'
import { WhichISO } from '../../components/static/iso-certification/WhichISO'

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
  

  const faq = [
    {
        "question": "What is ISO certification?",
        "answer": "ISO certification is a formal recognition that a company or organization meets specific international standards for quality, safety, environmental management, or other criteria."
    },
    {
        "question": "Why should my company consider ISO certification?",
        "answer": "ISO certification can enhance your company’s reputation, improve efficiency, increase customer trust, and open up new business opportunities."
    },
    {
        "question": "How do I get ISO certified?",
        "answer": "To get ISO certified, you must select the relevant ISO standard, implement its requirements, undergo an audit by a certification body, and meet their criteria."
    },
    {
        "question": "Which ISO standard is right for my business?",
        "answer": "The choice of ISO standard depends on your industry and objectives. Common ones include ISO 9001 (quality management) and ISO 14001 (environmental management)."
    },
    {
        "question": "How long does it take to become ISO certified?",
        "answer": "The time required for ISO certification varies depending on your organization’s size, complexity, and existing processes. It typically takes several months to a year or more."
    },
    {
        "question": "What is the cost of ISO certification?",
        "answer": "The cost varies depending on factors like the chosen standard, the certification body, and the size of your organization. Costs include consulting, audit fees, and ongoing maintenance."
    },
    {
        "question": "Do I need to hire a consultant for ISO certification?",
        "answer": "While it’s not mandatory, many organizations find hiring a consultant helpful for guidance through the certification process."
    },
    {
        "question": "How long is an ISO certificate valid?",
        "answer": "ISO certificates are typically valid for three years, subject to regular surveillance audits to ensure ongoing compliance."
    },
    {
        "question": "What happens during an ISO audit?",
        "answer": "During an ISO audit, a certification body reviews your processes, documentation, and compliance with the ISO standard’s requirements."
    },
    {
        "question": "Can a small business get ISO certified?",
        "answer": "Yes, ISO certification is applicable to businesses of all sizes, including small and medium-sized enterprises (SMEs)."
    },
    {
        "question": "What are the benefits of ISO certification for my customers?",
        "answer": "ISO certification demonstrates your commitment to quality, safety, and environmental responsibility, which can boost customer confidence."
    },
    {
        "question": "What is the difference between ISO certification and accreditation?",
        "answer": "ISO certification is a recognition of compliance with ISO standards. Accreditation is a formal acknowledgment that a certification body is competent to perform certification."
    },
    {
        "question": "What happens if my organization fails an ISO audit?",
        "answer": "If your organization fails an ISO audit, you will receive a non-conformance report and will need to address the identified issues before obtaining certification."
    },
    {
        "question": "Can I use ISO certification to bid for government contracts?",
        "answer": "Yes, ISO certification is often a requirement for bidding on government contracts, as it demonstrates your commitment to quality and compliance."
    },
    {
        "question": "How can I maintain ISO certification once obtained?",
        "answer": "To maintain ISO certification, you must continually follow the ISO standard’s requirements, undergo surveillance audits, and update your processes as needed."
    },
    {
        "question": "Can ISO certification be transferred to other countries?",
        "answer": "ISO certification is internationally recognized, but you may need to work with local certification bodies in different countries for compliance with local regulations."
    }
];


const Home = () => {
    return (
        <div className='services-pages iso-certification-reg'>
            <Head>
                <title>ISO Certification | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
                {/* <link rel="canonical" href="https://www.registerkaro.in/ads/public-limited-company-registration" /> */}
            </Head>
            <Hero cityName={'India'}  />
            <h1 className='main-heading'>Online ISO Certification in India</h1>
            <div className='heading-line'></div>
            <Process cityName={'India'}  />
            <h1 className='main-heading'>ISO Framework & Controls</h1>
            <div className='heading-line'></div>
            <ISOFramework cityName={'India'} />
            <h1 className='main-heading'>What are the Different Types of ISO Standards in India?</h1>
            <div className='heading-line'></div>
            <DifferentTypes cityName={'India'} />
            <h1 className='main-heading'>Benefits of ISO Certification In India</h1>
            <div className='heading-line'></div>
            <BenefitsISO cityName={'India'} />
            <h1 className='main-heading'>Which ISO Certification is good for any business?</h1>
            <div className='heading-line'></div>
            <WhichISO cityName={'India'} />
            <h1 className='main-heading'>Documents Required for ISO Certification in India</h1>
            <div className='heading-line'></div>
            <DocumentsRequired cityName={'India'} />
            <h1 className='main-heading'>Procedure for Obtaining ISO Certification in India</h1>
            <div className='heading-line'></div>
            <Procedure cityName={'India'} />
            <h1 className='main-heading'>What is an ISO Audit and its types?</h1>
            <div className='heading-line'></div>
            <WhatISO cityName={'India'} />
            <h1 className="main-heading">Why RegisterKaro?</h1>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h1 className="main-heading">FAQs</h1>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'ISO Certification in India'} state={state} Query={'iso-certification'} city={city} />
        </div>
    )
}
export default Home