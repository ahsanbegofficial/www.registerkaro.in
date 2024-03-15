import React, { useEffect } from 'react'
import Head from 'next/head'
import { Hero } from '../../components/static/ca-services/Hero'
import { Process } from '../../components/static/ca-services/Process'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import Challenges from '../../components/static/ca-services/Challenges'
import Included from '../../components/static/ca-services/Included'
import Benefits from '../../components/static/ca-services/Benefits'
import WhyChoose from '../../components/static/ca-services/WhyChoose'
import { useRouter } from 'next/router'
import { CustomDefault } from '../../components/child_components/CustomDefault'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'

const faq = [
    {
        "question": "What will happen if there is no accounting in business?",
        "answer": "This may result in unstable finances, issues with cash flow, and lost chances for development and expansion. Business owners risk missing out on possible tax credits and deductions if they don't have the assistance of an accountant. This could lead to greater tax payments and lower profitability."
    },
    {
        "question": "What is the importance of CA in business?",
        "answer": "In India, chartered accountants are the guardians of financial integrity and are essential to the nation's economic growth. For both individuals and corporations, their proficiency in auditing, taxation, financial planning, and business advice services is invaluable."
    },
    {
        "question": "Why do businesses need accounting services?",
        "answer": "For the purpose of making decisions, planning, and managing internal corporate processes, accounting gives crucial information about costs and earnings, profit and loss, obligations, and assets."
    },
    {
        "question": "Can a business run without CA?",
        "answer": "Many people believe that hiring an accountant is unnecessary when launching a business. However, many are ignorant of the fact that, upon the establishment of a business, an accountant will only be responsible for setting up the accounts and filing tax reports. Therefore, having a CA on staff from the very beginning of the business is crucial."
    },
    {
        "question": "Can I register company without Chartered Accountant?",
        "answer": "You must use the MCA Portal in order to register a corporation. To finish the registration process, you will need the help of a legal professional if you are neither a chartered accountant nor a legal expert. This is due to the fact that a practicing chartered accountant is required to verify a number of documents."
    },
    {
        "question": "Can we audit without CA?",
        "answer": "Becoming an auditor can be facilitated by taking the Chartered Accountant (CA) course. In India, a trained chartered accountant is the only qualification needed to become an auditor."
    },
    {
        "question": "Is it mandatory to have an accountant in a company?",
        "answer": "In the same way that having an accountant is not legally required, there is no legal restriction on anyone carrying out their job. Attempting to perform accounting chores for which you lack the necessary knowledge or expertise, however, can be dangerous."
    },
    {
        "question": "What are the disadvantages of CA?",
        "answer": "Because of their training and expertise, certified public accountants (CAs) are able to project fiscal estimations by examining the market for comparable products and the tax laws of the state. They can help their clients boost their profitability right away by utilizing the important actors and comprehensive insights."
    },
    {
        "question": "Why do businesses fail without proper accounting?",
        "answer": "It is simple to lose track of where the money is coming from and going out of a business without an efficient accounting system. An unstable financial cycle brought on by poor cash flow management can make it challenging for the company to pay its debts, pay its staff, or make investments in expansion prospects."
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

    const cityFromQuery = query?.replace('online-chartered-accountant-services-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }
    return (
        <div className='services-pages ca-services-reg'>
            <Head>
                <title>Online Chartered Accountant Services | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/online-chartered-accountant-services" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Online Chartered Accountant Services | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero />
            <h1 className='main-heading'>Understanding CA Services</h1>
            <div className='heading-line'></div>
            <Process />
            <h1 className='main-heading'>Challenges faced by Business without CA services</h1>
            <div className='heading-line'></div>
            <Challenges />
            <h1 className='main-heading'>What all is included in CA Services?</h1>
            <div className='heading-line'></div>
            <Included />
            <h1 className='main-heading'>Benefits of availing CA Services</h1>
            <div className='heading-line'></div>
            <Benefits cityName={cityName}/>
            <h1 className='main-heading'>Why Choose RegisterKaro for CA Services?</h1>
            <div className='heading-line'></div>
            <WhyChoose />
            <h1 className="main-heading">Why RegisterKaro?</h1>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h1 className="main-heading">FAQs</h1>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'online-chartered-accountant-services'} state={state} Query={'online-chartered-accountant-services'} city={city} />
        </div>
    )
}
export default Home