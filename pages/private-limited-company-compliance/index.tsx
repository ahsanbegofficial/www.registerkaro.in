import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Benefits } from '../../components/static/private-limited-company-compliance/Benefits'
import { Compilance } from '../../components/static/private-limited-company-compliance/Compilance'
import { EventBased } from '../../components/static/private-limited-company-compliance/EventBased'
import { Hero } from '../../components/static/private-limited-company-compliance/Hero'
import { MandatoryCompilance } from '../../components/static/private-limited-company-compliance/MandatoryCompilance'
import { OtherAnnual } from '../../components/static/private-limited-company-compliance/OtherAnnual'
import { PartnershipDeed } from '../../components/static/private-limited-company-compliance/PartnershipDeed'
import { Process } from '../../components/static/private-limited-company-compliance/Process'
import { TypeOfComp } from '../../components/static/private-limited-company-compliance/TypeOfComp'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'

const faq = [
    {
        "question": "What is annual compliance for a private limited company?",
        "answer": "Annual compliance refers to the set of legal requirements and filings that a private limited company must complete every year."
    },
    {
        "question": "What are the key components of annual compliance?",
        "answer": "Key components include filing annual financial statements, annual returns, and conducting an annual general meeting (AGM)."
    },
    {
        "question": "When should the annual general meeting (AGM) be held?",
        "answer": "The AGM should be held within six months from the end of the financial year."
    },
    {
        "question": "What is the deadline for filing annual financial statements?",
        "answer": "The annual financial statements must be filed within 30 days of the AGM."
    },
    {
        "question": "What is the deadline for filing the annual return?",
        "answer": "The annual return must be filed within 60 days from the AGM."
    },
    {
        "question": "Can the AGM date be extended beyond six months from the end of the financial year?",
        "answer": "Yes, but approval from the Registrar of Companies (RoC) is required for an extension."
    },
    {
        "question": "Are there penalties for late filing of annual returns?",
        "answer": "Yes, late filing attracts penalties, which increase with the delay."
    },
    {
        "question": "Who is responsible for ensuring annual compliance?",
        "answer": "The board of directors and company secretary are responsible for ensuring annual compliance."
    },
    {
        "question": "Can a private limited company hold its AGM outside the country?",
        "answer": "Yes, with approval from the RoC, the AGM can be held overseas."
    },
    {
        "question": "Is it mandatory for a private limited company to appoint an auditor for annual compliance?",
        "answer": "Yes, every private limited company must appoint an auditor."
    },
    {
        "question": "Can a private limited company apply for an extension for filing annual financial statements?",
        "answer": "No, there is no provision for an extension in filing financial statements."
    },
    {
        "question": "What information is required in the annual financial statements?",
        "answer": "The financial statements should include balance sheets, profit and loss accounts, and cash flow statements."
    },
    {
        "question": "Can the AGM be held virtually?",
        "answer": "Yes, as per recent guidelines, AGMs can be conducted virtually."
    },
    {
        "question": "Can a private limited company change its financial year-end?",
        "answer": "Yes, it is possible to change the financial year-end, but it requires approval from the RoC."
    },
    {
        "question": "Is it mandatory for a private limited company to have a company secretary?",
        "answer": "Yes, a private limited company must have a company secretary."
    },
    {
        "question": "Can the AGM date be postponed due to unforeseen circumstances?",
        "answer": "In certain exceptional situations, the RoC may grant an extension for holding the AGM."
    },
    {
        "question": "What are the consequences of non-compliance with annual filing requirements?",
        "answer": "Non-compliance can result in fines, penalties, and even the striking off of the company from the register."
    },
    {
        "question": "Can a private limited company apply for an exemption from certain compliance requirements?",
        "answer": "Some exemptions may be available to small companies, subject to meeting specific criteria."
    },
    {
        "question": "What records must be maintained for annual compliance purposes?",
        "answer": "The company must maintain books of accounts, resolutions, and other relevant documents."
    },
    {
        "question": "How can I ensure smooth annual compliance for my private limited company?",
        "answer": "Engage a qualified company secretary or seek professional guidance to navigate the compliance process effectively."
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
        <div className='services-pages private-limited-company-compliance-reg '>
            <Head>
                <title>Private Limited Company Compliance | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/private-limited-company-compliance" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Private Limited Company Compliance | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero cityName={'India'}/>
            <h1 className='main-heading'>An Overview of Annual Private Limited Company Compliance</h1>
            <div className='heading-line'></div>
            <Process cityName={'India'}/>
            <h2 className='main-heading'>What are the Benefits of Private Limited Company Compliance in India?</h2>
            <div className='heading-line'></div>
            <Benefits cityName={'India'}/>
             <h2 className='main-heading'>Types of Compliance for a Company Registered in India</h2>
            <div className='heading-line'></div>
            <TypeOfComp cityName={'India'}/>
            <h2 className='main-heading'>External Compliance</h2>
            <div className='heading-line'></div>
            <PartnershipDeed cityName={'India'}/>
             <h2 className='main-heading'>Internal Compliance</h2>
            <div className='heading-line'></div>
            <Compilance cityName={'India'}/>
            <h2 className='main-heading'>Mandatory Private Limited Company Compliance</h2>
            <div className='heading-line'></div>
            <MandatoryCompilance cityName={'India'}/>
            <h2 className='main-heading'>Other Annual Compliance for Private Limited Company in India</h2>
            <div className='heading-line'></div>
            <OtherAnnual cityName={'India'}/>
            <h2 className='main-heading'>Event-Based Compliance for Private Limited Company</h2>
            <div className='heading-line'></div>
            <EventBased cityName={'India'}/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'Private Limited Company Compliance'} state={state} Query={'private-limited-company-compliance'} city={city} />
        </div>
    )
}
export default Home