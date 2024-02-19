import Head from 'next/head'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { Checklist } from '../components/static/opc/Checklist'
import { DocumentRequired } from '../components/static/opc/DocumentRequired'
import { Hero } from '../components/static/opc/Hero'
import { OPCReg } from '../components/static/opc/OPCReg'
import { Procedure } from '../components/static/opc/Procedure'
import { Process } from '../components/static/opc/Process'
import { Restrictions } from '../components/static/opc/Restrictions'
import { TableCom } from '../components/static/opc/TableCom'
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
        "question": "What is an OPC?",
        "answer": "OPC stands for One Person Company, which is a type of business entity that can be formed with just one shareholder."
    },
    {
        "question": "Who can form an OPC?",
        "answer": "Only an Indian resident who is a natural person can form an OPC. Non-residents or corporate entities cannot form an OPC."
    },
    {
        "question": "What is the minimum capital requirement for OPC registration?",
        "answer": "There is no minimum capital requirement for OPC registration. You can start with any amount of capital."
    },
    {
        "question": "Can an OPC have more than one director?",
        "answer": "No, an OPC can have only one director who is also the sole shareholder of the company."
    },
    {
        "question": "Is it mandatory to have a nominee for an OPC?",
        "answer": "Yes, every OPC must nominate a person who will become the owner of the company in case of the director’s death or incapacity."
    },
    {
        "question": "Can an OPC be converted into a private limited company?",
        "answer": "Yes, an OPC can be converted into a private limited company after two years of its incorporation, subject to certain conditions."
    },
    {
        "question": "Are there any tax benefits for OPCs?",
        "answer": "OPCs are eligible for the same tax benefits as other types of companies, such as deductions on business expenses and tax rates applicable to companies."
    },
    {
        "question": "Can an OPC be involved in multiple business activities?",
        "answer": "Yes, an OPC can engage in any lawful business activities, unless specifically restricted by the laws or regulations."
    },
    {
        "question": "How long does it take to register an OPC?",
        "answer": "The registration process for an OPC typically takes around 10 to 15 working days, subject to the availability of all necessary documents and information."
    },
    {
        "question": "Can an OPC have branches in multiple locations?",
        "answer": "Yes, an OPC can have multiple branches across India or even internationally, subject to compliance with relevant laws and regulations."
    },
    {
        "question": "Is it necessary to have a physical office for an OPC?",
        "answer": "Yes, an OPC must have a registered office address in India. It can be a residential or commercial address."
    },
    {
        "question": "What are the annual compliance requirements for an OPC?",
        "answer": "OPCs have to file annual financial statements and income tax returns with the Registrar of Companies (ROC) each year."
    },
    {
        "question": "Can an OPC be converted into a partnership or sole proprietorship?",
        "answer": "No, an OPC cannot be converted into a partnership or sole proprietorship. It can only be converted into a private limited company."
    },
    {
        "question": "Is it mandatory to appoint an auditor for an OPC?",
        "answer": "An OPC is required to appoint an auditor within 30 days of its incorporation. The auditor must be a qualified chartered accountant."
    },
    {
        "question": "Can an OPC be used for raising funds from investors?",
        "answer": "Yes, an OPC can raise funds through various means such as equity funding, venture capital, or borrowing, subject to compliance with relevant laws."
    },
    {
        "question": "Can an OPC have a foreign director?",
        "answer": "No, an OPC can have only an Indian resident as a director. Non-residents cannot be directors in an OPC."
    }
]

const Home = () => {
    return (
        <div className='services-pages opc-reg'>
            <Head>
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <h1 className='main-heading'>What is One Person Company Registration in India?</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className="main-heading">Features of One Person Company in India</h2>
            <div className='heading-line'></div>
            <OPCReg />
            <h2 className="main-heading">Checklist for One Person Company Registration in India</h2>
            <div className='heading-line'></div>
            <Checklist />
            <h2 className="main-heading">Documents Required for OPC Registration in India</h2>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h2 className="main-heading">Procedure for One Person Company Registration</h2>
            <div className='heading-line'></div>
            <Procedure />
            <h2 className="main-heading">Restrictions on One Person Company</h2>
            <div className='heading-line'></div>
            <Restrictions />
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
            <RegistrationLinks formattedQuery={'One Person Company Registration'} state={state} Query={'one-person-company'} city={city} />
        </div>
    )
}
export default Home