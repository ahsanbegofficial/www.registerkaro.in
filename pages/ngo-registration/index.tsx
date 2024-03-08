import React from 'react'
import { Hero } from '../../components/static/ngo/Hero'
import { Process } from '../../components/static/ngo/Process'
import { Benefits } from '../../components/static/ngo/Benefits'
import { Checklist } from '../../components/static/ngo/Checklist'
import { HowToRegister } from '../../components/static/ngo/HowToRegister'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import Head from 'next/head'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { TableCom } from '../../components/static/ngo/TableCom'
import { TypeOfNgo } from '../../components/static/ngo/TypeOfNgo'
import { Classification } from '../../components/static/ngo/Classification'
import { WhyNGO } from '../../components/static/ngo/WhyNGO'
import { RegiFee } from '../../components/static/ngo/RegiFee'
import { HowToRaise } from '../../components/static/ngo/HowToRaise'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'

const faq = [
    {
        "question": "What is NGO registration, and why is it necessary?",
        "answer": "NGO registration is the legal process of officially establishing a Non-Governmental Organization. It is necessary for credibility, transparency, and access to various benefits, including tax exemptions. Registered NGOs are better positioned to attract donors, collaborate with stakeholders, and carry out philanthropic activities effectively."
    },
    {
        "question": "What are the types of NGO registration structures in India?",
        "answer": "In India, NGOs can be registered under three main structures:",
        "list": [
            "Trust",
            "Society",
            "Section 8 Company"
        ]
    },
    {
        "question": "How is a Trust registered?",
        "answer": "To register a Trust:",
        "list": [
            "Draft a Trust Deed adhering to the Indian Trusts Act, 1882.",
            "Appoint trustees and form a governing body.",
            "Submit registration documents to the Registrar of Trusts.",
            "Obtain tax exemptions under Section 12A and 80G."
        ]
    },
    {
        "question": "What is the process for Society registration?",
        "answer": "Society registration involves:",
        "list": [
            "Drafting a Memorandum of Association (MoA) and By-laws in compliance with the Societies Registration Act, 1860.",
            "Forming a Governing Council.",
            "Submitting registration documents to the Registrar of Societies.",
            "Obtaining tax exemptions under Section 12A and 80G."
        ]
    },
    {
        "question": "How is a Section 8 Company registered?",
        "answer": "To register a Section 8 Company:",
        "list": [
            "Draft the Memorandum and Articles of Association in accordance with the Companies Act of 2013.",
            "Form a Board of Directors.",
            "Submit registration documents to the Registrar of Companies (ROC).",
            "Obtain tax exemptions under Section 8(1) and 12A."
        ]
    },
    {
        "question": "What is the difference between Trust, Society, and Section 8 Company?",
        "answer": "The main differences lie in the legal framework, main objectives, membership, governing body, governing rules, registration authority, and tax exemptions. For example, a Trust is governed by the Indian Trust Act of 1882, focuses on charitable activities, has trustees, and is registered with the Registrar of Trusts."
    },
    {
        "question": "Can NGOs be classified based on their orientation and level of operation?",
        "answer": "Yes, NGOs can be classified:",
        "list": [
            "By the Level of Orientation: Charitable, Service, Participatory, Empowering.",
            "By the Level of Operation: Community-Based Organisation, City-Wide Organisation, National NGOs, International NGOs."
        ]
    },
    {
        "question": "Why is NGO registration required?",
        "answer": "NGO registration is required for credibility, operational development, resource expansion, tax benefits, asset and liability management, stamp duty exemption, and overall organizational stability."
    },
    {
        "question": "What are the benefits of NGO registration?",
        "answer": "Benefits include tax exemption, asset ownership, transparent financial operations, enhanced credibility, stability, and succession provisions, access to credit, name preservation, and the necessity to open a bank account."
    },
    {
        "question": "What is the eligibility to start an NGO?",
        "answer": "Eligibility criteria include a minimum of two directors for private limited companies, a minimum of three directors for public limited companies, and specific member limits. There is no registration fee for NGOs."
    },
    {
        "question": "What is the NGO registration process?",
        "answer": "The NGO registration process involves type determination, name selection, drafting MoA and AoA, governing body formation, designation of a registered office, documentation preparation, submission of the registration application, review and approval, registration certificate obtention, tax exemption application, and ongoing compliance."
    },
    {
        "question": "How long does it take to register an NGO?",
        "answer": "The timeline varies:",
        "list": [
            "Section 8 Company: 10-14 days.",
            "Trust: Approximately 20 days.",
            "Society: About 25 days."
        ]
    },
    {
        "question": "Are there fees associated with NGO registration?",
        "answer": "Yes, registration fees vary based on the type of NGO, country, and governing body requirements. Additional expenses may include documentation, legal compliance, and regulatory requirements."
    },
    {
        "question": "How can NGOs raise funds?",
        "answer": "NGOs can raise funds through crowdfunding, grants, corporate partnerships, fundraising events, individual appeals, and social media outreach."
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
        <div className='services-pages ngo-reg'>
            <Head>
                <title>NGO Registration | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/ngo-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="NGO Registration | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero cityName={'India'} />
            <h1 className='main-heading'>Online NGO Registration in India</h1>
            <div className='heading-line'></div>
            <Process cityName={'India'} />
            <h1 className="main-heading">Types of NGO Registration in India</h1>
            <div className='heading-line'></div>
            <TypeOfNgo cityName={'India'} />
            <h1 className="main-heading">Difference Between Trust, Society, and Section 8 Company</h1>
            <div className='heading-line'></div>
            <TableCom cityName={'India'} />
            <h1 className='main-heading'>Classification of NGOs in India</h1>
            <div className='heading-line'></div>
            <Classification cityName={'India'} />
            <h1 className="main-heading">Why Is NGO Registration Required?</h1>
            <div className='heading-line'></div>
            <WhyNGO cityName={'India'} />
            <h1 className="main-heading">Benefits of NGO Registration</h1>
            <div className='heading-line'></div>
            <Benefits cityName={'India'} />
            <h1 className="main-heading">Eligibility to Start an NGO</h1>
            <div className='heading-line'></div>
            <Checklist cityName={'India'} />
            <h1 className="main-heading">NGO Registration Process</h1>
            <div className='heading-line'></div>
            <HowToRegister cityName={'India'} />
            <h1 className="main-heading">Registration Fees</h1>
            <div className='heading-line'></div>
            <RegiFee cityName={'India'} />
            <h1 className="main-heading">How to Raise Funds for NGOs?</h1>
            <div className='heading-line'></div>
            <HowToRaise cityName={'India'} />
            <h1 className="main-heading">Why RegisterKaro?</h1>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h1 className="main-heading">FAQs</h1>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'NGO Registration'} state={state} Query={'ngo-registration'} city={city} />
        </div>
    )
}
export default Home