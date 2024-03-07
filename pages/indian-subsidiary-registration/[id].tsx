import React, { useEffect } from 'react'
import { Hero } from '../../components/static/indian-subsidiary/Hero'
import { Process } from '../../components/static/indian-subsidiary/Process'
import { HowToRegister } from '../../components/static/indian-subsidiary/HowToRegister'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import Head from 'next/head'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { TypeOfSubs } from '../../components/static/indian-subsidiary/TypeOfSubs'
import { Classification } from '../../components/static/indian-subsidiary/Classification'

import { Advantages } from '../../components/static/indian-subsidiary/Advantages'
import { Requirement } from '../../components/static/indian-subsidiary/Requirement'
import { Procedure } from '../../components/static/indian-subsidiary/Procedure'
import { Compilance } from '../../components/static/indian-subsidiary/Compilance'
import { Taxation } from '../../components/static/indian-subsidiary/Taxation'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { useRouter } from 'next/router'
import { CustomDefault } from '../../components/child_components/CustomDefault'


let faq = [
    {
        "question": "What is an Indian Subsidiary Company?",
        "answer": "An Indian subsidiary company is a locally registered business entity that is controlled and majority-owned by a foreign parent company. It operates as a separate legal entity, subject to Indian laws and regulations."
    },
    {
        "question": "What are the Key Steps in Registering an Indian Subsidiary?",
        "answer": "The key steps include selecting a unique name, obtaining Director Identification Numbers (DIN) and Digital Signature Certificates (DSC), filing incorporation documents, and ensuring compliance with regulatory requirements."
    },
    {
        "question": "Is There a Minimum Capital Requirement for Indian Subsidiary Registration?",
        "answer": "No, India does not impose a minimum capital requirement for the registration of subsidiary companies, providing flexibility for businesses to determine their capital structure."
    },
    {
        "question": "Can a Foreign Company Hold 100% Ownership in an Indian Subsidiary?",
        "answer": "Yes, a foreign company can hold 100% ownership in an Indian subsidiary. Alternatively, a combination of two foreign nationals can also be shareholders, and it is not mandatory to have an Indian resident as a shareholder."
    },
    {
        "question": "What Compliance Regulations Apply to Indian Subsidiary Companies?",
        "answer": "Indian subsidiary companies must comply with various regulations, including the Companies Act, 2013, Foreign Exchange Management Act (FEMA), Reserve Bank of India (RBI) compliances, and the Income Tax Act, 1961."
    },
    {
        "question": "Are There Concessional Tax Rates for Specific Sectors in India?",
        "answer": "Yes, specific sectors such as oil exploration, air transportation, and shipping businesses may benefit from concessional tax rates in India."
    },
    {
        "question": "What Documents are Required for Annual Compliance Filing?",
        "answer": "Annual compliance filing typically requires documents such as financial statements, auditor reports, and other relevant records. The specific requirements may vary based on the regulatory framework."
    },
    {
        "question": "Can Registering a Subsidiary in India be Done Entirely Online?",
        "answer": "Yes, the registration process for an Indian subsidiary can be conducted online. This includes obtaining digital signatures, filing incorporation documents, and interacting with regulatory authorities through online portals."
    },
    {
        "question": "Is It Necessary for the Subsidiary to Have an Indian Resident Director?",
        "answer": "Yes, as per the Companies Act, 2013, a minimum of two directors is mandatory for a subsidiary company, and at least one director must be an Indian resident. Nominee directorship services can be utilized if needed."
    },
    {
        "question": "Can Registerkaro Assist with Indian Subsidiary Registration?",
        "answer": "Yes, Registerkaro provides comprehensive support for Indian subsidiary company registration, including assistance with name selection, obtaining necessary certificates, and ensuring compliance with regulatory requirements."
    }
];
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





function formatString(input: string) {
    let words = input.split('-')
    let formattedString = words.map((word: string) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')
    return formattedString;
}

const Home = () => {
    const router = useRouter();
    const query = router.query.id as string;

    useEffect(() => {
        console.log('q', query);
    }, [query]);

    const cityFromQuery = query?.replace('indian-subsidiary-registration-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages indian-subsidiary-reg'>
            <Head>
                <title>Indian Subsidiary Certification | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/indian-subsidiary-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Indian Subsidiary Certification | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero cityName={cityName} />
            <h1 className='main-heading'>Get Online Indian Subsidiary Registration Now!</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName} />
            <h1 className="main-heading">Types of Subsidiaries in India</h1>
            <div className='heading-line'></div>
            <TypeOfSubs cityName={cityName} />
            <h1 className="main-heading">Advantages of Indian Subsidiary Registration</h1>
            <div className='heading-line'></div>
            <Advantages cityName={cityName} />
            <h1 className='main-heading'>Regulatory Authorities for Indian Subsidiary Registration</h1>
            <div className='heading-line'></div>
            <Classification cityName={cityName} />
            <h1 className="main-heading">Requirements and Key Facts about Company Registration in India</h1>
            <div className='heading-line'></div>
            <Requirement cityName={cityName} />
            <h1 className="main-heading">Procedure for Indian Subsidiary Registration</h1>
            <div className='heading-line'></div>
            <Procedure cityName={cityName} />
            <h1 className="main-heading">Compliance Requirements for Indian Subsidiary Registration</h1>
            <div className='heading-line'></div>
            <Compilance cityName={cityName} />
            <h1 className="main-heading">Taxation of Indian Subsidiary Companies</h1>
            <div className='heading-line'></div>
            <Taxation cityName={cityName} />
            <h1 className="main-heading">How Registerkaro Can Assist with Indian Subsidiary Registration?</h1>
            <div className='heading-line'></div>
            <HowToRegister cityName={cityName} />
            <h1 className="main-heading">Why RegisterKaro?</h1>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h1 className="main-heading">FAQs</h1>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'Indian Subsidiary Registration'} state={state} Query={'indian-subsidiary-registration'} city={city} />
        </div>
    )
}
export default Home