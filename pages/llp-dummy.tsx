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
            <h2 className='main-heading'>What is a “Limited Liability Partnership” or “LLP”?</h2>
            <div className='heading-line'></div>
            <LLPReg />
            <h2 className="main-heading">What are the Features of an LLP in India?</h2>
            <div className='heading-line'></div>
            <Characteristics />
            <h2 className="main-heading">Benefits of LLP Registration in India</h2>
            <div className='heading-line'></div>
            <Benefits />
            <h2 className="main-heading">What are the Different Types of LLP Forms in India?</h2>
            <div className='heading-line'></div>
            <DifferentTypes />
            <h2 className="main-heading">Checklist for the LLP Registration</h2>
            <div className='heading-line'></div>
            <Checklist />
            <h2 className="main-heading">What are the vital documents required for LLP Registration in India?</h2>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h2 className="main-heading">Know the LLP Registration Process</h2>
            <div className='heading-line'></div>
            <HowToRegister />
            <h2 className="main-heading">LLP Compliance</h2>
            <div className='heading-line'></div>
            <TableCom />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'LLP Registration'} state={state} Query={'llp-registration'} city={city} />
        </div>
    )
}
export default Home