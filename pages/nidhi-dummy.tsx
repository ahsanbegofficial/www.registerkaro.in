import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Benefits } from '../components/static/nidhi/Benefits'
import { DocumentRequired } from '../components/static/nidhi/DocumentRequired'
import { EventBased } from '../components/static/nidhi/EventBased'
import { Hero } from '../components/static/nidhi/Hero'
import { Penalties } from '../components/static/nidhi/Penalties'
import { Procedure } from '../components/static/nidhi/Procedure'
import { Process } from '../components/static/nidhi/Process'
import { Requirement } from '../components/static/nidhi/Requirement'
import { WhatDocument } from '../components/static/nidhi/WhatDocument'
import { RegistrationLinks } from '../components/child_components/RegistrationLinks'

let state = [
    "Maharashtra",
    "Jharkhand",
    "Kashmir",
    "Puducherry",
    "Karnataka",
    "Madhya Pradesh",
    "Andhra Pradesh",
    "Himachal Pradesh",
    "Tamil Nadu",
    "Odisha",
    "Assam",
    "Arunachal Pradesh",
    "Gujarat",
    "Chandigarh",
    "Jammu And Kashmir",
    "Manipur",
    "Andaman And Nicobar Islands",
    "Bihar",
    "Chhattisgarh",
    "Dadra And Nagar Haveli",
    "Daman And Diu",
    "Goa",
    "Haryana",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
]

let city = [
    "Mumbai",
    "Firozabad",
    "New Delhi",
    "Srinagar",
    "Bangalore",
    "Ghaziabad",
    "Hyderabad",
    "Thiruvananthapuram",
    "Ahmedabad",
    "Chennai",
    "Gorakhpur",
    "Kolkata",
    "Thrissur",
    "Gulbarga",
    "Lucknow",
    "Tiruchirappalli",
    "Agartala",
    "Agra",
    "Ahmednagar",
    "Aizawl",
    "Ajmer",
    "Akola",
    "Aligarh",
    "Alwar",
    "Ambala",
    "Ambarnath",
    "Ambattur",
    "Amravati",
    "Amritsar",
    "Amroha",
    "Anand",
    "Anantapur",
    "Anantapuram",
    "Arrah",
    "Asansol",
    "Avadi",
    "Bahraich",
    "Bally",
    "Baranagar",
    "Barasat",
    "Bardhaman",
    "Bareilly",
    "Bathinda",
    "Begusarai",
    "Belgaum",
    "Bellary",
    "Berhampore",
    "Berhampur",
    "Bhagalpur",
    "Bhalswa-jahangir-pur",
    "Bharatpur",
    "Bhatpara",
    "Bhavnagar",
    "Bhilai",
    "Bhilwara",
    "Bhind",
    "Bhiwandi",
    "Bhiwani",
    "Bhopal",
    "Bhubaneswar",
    "Bhusawal",
    "Bidar",
    "Bidhannagar",
    "Bihar-sharif",
    "Bikaner",
    "Bilaspur",
    "Bokaro",
    "Bulandshahr",
    "Burhanpur",
    "Chandigarh",
    "Chapra",
    "Chittoor",
    "Coimbatore",
    "Cuttack",
    "Darbhanga",
    "Davanagere",
    "Dehradun",
    "Delhi",
    "Deoghar",
    "Dewas",
    "Dhanbad",
    "Dhule",
    "Dindigul",
    "Durg",
    "Durgapur",
    "Eluru",
    "Erode",
    "Etawah",
    "Faridabad",
    "Farrukhabad",
    "Fatehpur",
    "Gandhidham",
    "Gandhinagar",
    "Gaya",
    "Gopalpur",
    "Guntur",
    "Gurgaon",
    "Guwahati",
    "Gwalior",
    "Haldia",
    "Hapur",
    "Haridwar",
    "Hospet",
    "Gulbargahowrah",
    "Hubli-dharwad",
    "Ichalkaranji",
    "Imphal",
    "Indore",
    "Jabalpur",
    "Jaipur",
    "Jalandhar",
    "Jalgaon",
    "Jalna",
    "Jammu",
    "Jamnagar",
    "Jamshedpur",
    "Jhansi",
    "Jodhpur",
    "Junagadh",
    "Kadapa",
    "Kakinada",
    "Kalyan-dombivli",
    "Kamarhati",
    "Kanpur",
    "Karawal-nagar",
    "Karimnagar",
    "Karnal",
    "Katni",
    "Khammam",
    "Khandwa",
    "Kharagpur",
    "Khora-ghaziabad",
    "Kirari-suleman-nagar",
    "Kochi",
    "Kolhapur",
    "Kollam",
    "Korba",
    "Kota",
    "Kozhikode",
    "Kulti",
    "Kurnool",
    "Latur",
    "Loni",
    "Ludhiana",
    "Madhyamgram",
    "Madurai",
    "Maheshtala",
    "Malda",
    "Malegaon",
    "Mangalore",
    "Mathura",
    "Mau",
    "Meerut",
    "Mira-bhayandar",
    "Mirzapur",
    "Moradabad",
    "Morbi",
    "Morena",
    "Munger",
    "Muzaffarnagar",
    "Muzaffarpur",
    "Mysore",
    "Nadiad",
    "Nagercoil",
    "Nagpur",
    "Naihati",
    "Nanded",
    "Nandyal",
    "Nangloi-jat",
    "Nashik",
    "Navi-mumbai",
    "Nellore",
    "New-delhi",
    "Nizamabad",
    "Noida",
    "North-dumdum",
    "Ongole",
    "Orai",
    "Pali",
    "Pallavaram",
    "Panchkula",
    "Panihati",
    "Panipat",
    "Parbhani",
    "Patiala",
    "Patna",
    "Pimpri-chinchwad",
    "Pondicherry",
    "Pune",
    "Puri",
    "Purnia",
    "Raebareli",
    "Raichur",
    "Raipur",
    "Rajahmundry",
    "Rajkot",
    "Rajpur-sonarpur",
    "Ramagundam",
    "Rampur",
    "Ranchi",
    "Ratlam",
    "Rewa",
    "Rohtak",
    "Rourkela",
    "Sagar",
    "Saharanpur",
    "Salem",
    "Sambalpur",
    "Sambhal",
    "Sangli-miraj-%26-kupwad",
    "Satara",
    "Satna",
    "Secunderabad",
    "Shahjahanpur",
    "Shimoga",
    "Sikar",
    "Silchar",
    "Siliguri",
    "Singrauli",
    "Solapur",
    "Sonipat",
    "South-dumdum",
    "Sri-ganganagar",
    "Surat",
    "Tenali",
    "Thane",
    "Thanjavur",
    "Thoothukudi",
    "Tirunelveli",
    "Tirupati",
    "Tiruppur",
    "Tiruvottiyur",
    "Tumkur",
    "Udaipur",
    "Ujjain",
    "Ulhasnagar",
    "Uluberia",
    "Uzhavarkarai",
    "Vadodara",
    "Varanasi",
    "Vasai-virar",
    "Vijayanagaram",
    "Vijayawada",
    "Visakhapatnam",
    "Warangal",
    "Yamunanagar"
]

let faq = [
    {
        "question": "What is a Nidhi company?",
        "answer": "A Nidhi company is a type of non-banking financial institution (NBFC) recognized under the Companies Act in India. Its primary objective is to promote thrift and savings among its members and provide them with loans and other financial services."
    },
    {
        "question": "Who can register a Nidhi company?",
        "answer": "Any Indian citizen or legal entity, such as a company or partnership firm, can register a Nidhi company as long as they meet the eligibility criteria."
    },
    {
        "question": "What are the minimum requirements to register a Nidhi company?",
        "answer": "The minimum requirements include having at least seven members, three directors, a minimum paid-up equity share capital of Rs. 5 lakhs, and an address for the registered office."
    },
    {
        "question": "How long does it take to register a Nidhi company?",
        "answer": "The registration process usually takes around 30-45 days, depending on the submission of the required documents and the processing time by the Registrar of Companies (ROC)."
    },
    {
        "question": "Can a Nidhi company accept deposits from the public?",
        "answer": "No, Nidhi companies can only accept deposits from their members. They are not allowed to accept deposits or loans from the general public."
    },
    {
        "question": "Is it mandatory to have the word “Nidhi” in the company name?",
        "answer": "Yes, as per the rules, it is mandatory for a Nidhi company to have the word “Nidhi” as part of its name."
    },
    {
        "question": "Are Nidhi companies regulated by any authority?",
        "answer": "Yes, Nidhi companies are regulated by the Ministry of Corporate Affairs (MCA) and the Reserve Bank of India (RBI)."
    },
    {
        "question": "Can a Nidhi company provide loans to non-members?",
        "answer": "No, Nidhi companies can only provide loans or advances to their members. They cannot extend loans to non-members."
    },
    {
        "question": "Can a Nidhi company operate in multiple states?",
        "answer": "Yes, a Nidhi company can operate in multiple states, but it needs to have at least one branch within the district of its registered office."
    },
    {
        "question": "Can a Nidhi company engage in any other business activities?",
        "answer": "No, Nidhi companies are restricted to carrying out activities related to borrowing and lending within their member base. They cannot engage in any other business activities."
    },
    {
        "question": "What is the maximum interest rate that a Nidhi company can charge on loans?",
        "answer": "As per RBI guidelines, Nidhi companies cannot charge an interest rate higher than 7.5% above the highest rate offered on deposits."
    },
    {
        "question": "Is it necessary for the directors of a Nidhi company to be members as well?",
        "answer": "Yes, all directors of a Nidhi company must also be members."
    },
    {
        "question": "Can a Nidhi company issue preference shares?",
        "answer": "No, Nidhi companies are not allowed to issue preference shares. They can only issue equity shares."
    },
    {
        "question": "Is it possible to convert an existing company into a Nidhi company?",
        "answer": "Yes, an existing company can be converted into a Nidhi company by fulfilling the necessary requirements and obtaining approval from the Registrar of Companies."
    },
    {
        "question": "What are the compliance requirements for Nidhi companies?",
        "answer": "Nidhi companies need to comply with various regulations related to filing of annual returns, conducting annual general meetings, maintaining proper books of accounts, etc."
    },
    {
        "question": "Can a Nidhi company be voluntarily liquidated?",
        "answer": "Yes"
    },
]

const Home = () => {
    return (
        <div className='services-pages nidhi-reg'>
            <Head>
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <h1 className='main-heading'>An Overview of Nidhi Company Registration in India</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className="main-heading">Benefits of Nidhi Company Registration</h2>
            <div className='heading-line'></div>
            <Benefits />
            <h2 className="main-heading">Requirements for Nidhi Company Registration in India</h2>
            <div className='heading-line'></div>
            <Requirement />
            <h2 className="main-heading">Documents Required for the Registration of Nidhi Company in India</h2>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h2 className="main-heading">Procedure for Nidhi Company Registration in India</h2>
            <div className='heading-line'></div>
            <Procedure />
            <h2 className="main-heading">Annual Compliance of a Nidhi Company</h2>
            <div className='heading-line'></div>
            <WhatDocument />
            <h2 className="main-heading">Event-Based Compliances of a Nidhi Company in India</h2>
            <div className='heading-line'></div>
            <EventBased />
            <h2 className="main-heading">What are the Penalties for Non-Compliance?</h2>
            <div className='heading-line'></div>
            <Penalties />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'Nidhi Company Registration'} state={state} Query={'nidhi-company-registration'} city={city} />
        </div>
    )
}
export default Home