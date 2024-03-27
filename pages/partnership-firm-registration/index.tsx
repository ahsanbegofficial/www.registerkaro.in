import React from 'react'
import Head from 'next/head'
import { Hero } from '../../components/static/partner-firm/Hero'
import { Process } from '../../components/static/partner-firm/Process'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Checklist } from '../../components/static/partner-firm/Checklist'
import { Benefits } from '../../components/static/partner-firm/Benefits'
import { Advantages } from '../../components/static/partner-firm/Advantages'
import { Disdvantages } from '../../components/static/partner-firm/Disdvantages'
import { WhatIs } from '../../components/static/partner-firm/WhatIs'
import { TimeLine } from '../../components/static/partner-firm/TimeLine'
import { Compilance } from '../../components/static/partner-firm/Compilance'
import { ProcedureForPartnership } from '../../components/static/partner-firm/ProcedureForPartnership'
import { PartnershipDeed } from '../../components/static/partner-firm/PartnershipDeed'
import { DocumentsForPartnership } from '../../components/static/partner-firm/DocumentsForPartnership'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'

let faq = [
    {
        "question": "What is a partnership firm?",
        "answer": "A partnership firm is a business structure in India where two or more individuals come together to carry out a business with a shared goal and profits."
    },
    {
        "question": "How many partners are required to form a partnership firm?",
        "answer": "A minimum of two partners is required to form a partnership firm in India, while the maximum limit is 20 for non-banking businesses and 10 for banking businesses."
    },
    {
        "question": "Is there a requirement for written partnership agreement?",
        "answer": "While a written partnership agreement is not legally required, it is highly recommended to have one. The agreement helps define the terms and conditions, roles and responsibilities, profit sharing, and other important aspects of the partnership."
    },
    {
        "question": "Can a partnership firm have a different name from the partners’ names?",
        "answer": "Yes, a partnership firm can have a different name known as the “Firm Name.” It is commonly chosen to reflect the nature of the business or any other desired name."
    },
    {
        "question": "What are the documents required for partnership firm registration?",
        "answer": "The following documents are generally required for partnership firm registration: partnership deed, address proof of the principal place of business, identity and address proof of partners, and photographs of partners."
    },
    {
        "question": "Can a partnership firm have a registered office address?",
        "answer": "Yes, a partnership firm can have a registered office address. The address proof of the principal place of business is required during the registration process."
    },
    {
        "question": "Can a partnership firm be registered online?",
        "answer": "Yes, partnership firm registration can be done online through the Ministry of Corporate Affairs (MCA) portal."
    },
    {
        "question": "How long does it take to register a partnership firm in India?",
        "answer": "The registration process typically takes around 2-3 weeks, depending on the completion and accuracy of the documents submitted."
    },
    {
        "question": "What are the advantages of registering a partnership firm?",
        "answer": "Some advantages of registering a partnership firm include easy formation, shared decision-making, combined resources and expertise, flexible profit sharing, and tax benefits."
    },
    {
        "question": "Are partners personally liable for the firm’s debts and liabilities?",
        "answer": "Yes, in a partnership firm, partners have unlimited liability, meaning they are personally liable for the debts and liabilities of the firm."
    },
    {
        "question": "Can a partnership firm convert into a different business structure later?",
        "answer": "Yes, a partnership firm can be converted into a Limited Liability Partnership (LLP) or a Private Limited Company, subject to compliance with the respective laws and procedures."
    },
    {
        "question": "Do partnership firms need to file annual tax returns?",
        "answer": "Yes, partnership firms are required to file annual tax returns with the Income Tax Department, providing details of their income, expenses, and profit distribution."
    },
    {
        "question": "Can a partnership firm have foreign partners?",
        "answer": "Yes, a partnership firm can have foreign partners, subject to compliance with the Foreign Exchange Management Act (FEMA) regulations and other applicable laws."
    },
    {
        "question": "Is it necessary to have a PAN card for partnership firm registration?",
        "answer": "Yes, a PAN card (Permanent Account Number) is required for partnership firm registration as it serves as a unique identification number for taxation purposes."
    },
    {
        "question": "Can a minor be a partner in a partnership firm?",
        "answer": "No, a minor cannot be a partner in a partnership firm. Only individuals who have attained the age of majority (18 years) can become partners."
    },
    {
        "question": "Can a partnership firm hold properties in its name?",
        "answer": "No, a partnership firm is not a separate legal entity, so it cannot hold properties or assets in its own name. However, the partners can hold the properties in their individual names and use them for the firm’s business."
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
        <div className='services-pages partnership-firm-reg'>
             <Head>
                <title>Partnership Firm Registration | RegisterKaro</title>
                <meta name="description" content="Get your partnership firm registered hassle-free with our experts, who ensure seamless processing. Register now to embark on your entrepreneurial journey effortlessly!" />
                <link rel="canonical" href="https://www.registerkaro.in/partnership-firm-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Partnership Firm Registration | RegisterKaro" />
                <meta property="og:description" content="Get your partnership firm registered hassle-free with our experts, who ensure seamless processing. Register now to embark on your entrepreneurial journey effortlessly!" />
            </Head>
            <Hero cityName={'India'}/>
            <h1 className='main-heading'>Online Partnership Firm Registration in India</h1>
            <div className='heading-line'></div>
            <Process  cityName={'India'}/>
            <h2 className='main-heading'>What is a Partnership?</h2>
            <div className='heading-line'></div>
            <WhatIs cityName={'India'}/>
            <h2 className='main-heading'>Importance of Registering a Partnership Firm in India</h2>
            <div className='heading-line'></div>
            <Benefits cityName={'India'}/>
            <h2 className='main-heading'>Advantages of Partnership Firm Registration</h2>
            <div className='heading-line'></div>
            <Advantages cityName={'India'}/>
            <h2 className='main-heading'>Disadvantages of Partnership Firm Registration</h2>
            <div className='heading-line'></div>
            <Disdvantages cityName={'India'}/>
            <h2 className='main-heading'>Checklist for Partnership Firm Registration in India</h2>
            <div className='heading-line'></div>
            <Checklist cityName={'India'}/>
            <h2 className='main-heading'>Documents for Partnership Firm Registration in India</h2>
            <div className='heading-line'></div>
            <DocumentsForPartnership cityName={'India'}/>
            <h2 className='main-heading'>What is a Partnership Deed?</h2>
            <div className='heading-line'></div>
            <PartnershipDeed cityName={'India'}/>
            <h2 className='main-heading'>Procedure for Partnership Firm Registration in India</h2>
            <div className='heading-line'></div>
            <ProcedureForPartnership cityName={'India'}/>
            <h2 className='main-heading'>Timeline for Partnership Firm Registration</h2>
            <div className='heading-line'></div>
            <TimeLine cityName={'India'}/>
            <h2 className='main-heading'>Compliance after getting Partnership Firm Registration Online</h2>
            <div className='heading-line'></div>
            <Compilance cityName={'India'}/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro  />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'Partnership Firm Registration'} state={state} Query={'partnership-firm-registration'} city={city} />
        </div>
    )
}
export default Home