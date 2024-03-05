import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Benefits } from '../../components/static/firm-registration/Benefits'
import { Documents } from '../../components/static/firm-registration/Documents'
import { Hero } from '../../components/static/firm-registration/Hero'
import { Process } from '../../components/static/firm-registration/Process'
import { StepsForRegistering } from '../../components/static/firm-registration/StepsForRegistering'
import { Structure } from '../../components/static/firm-registration/Structure'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'

const faq = [
    {
        "question": "What is the first step in registering a firm?",
        "answer": "The first step in registering a firm is the choice of business structure- LLP, Partnership or Sole Proprietorship and checking the availability of the desired name."
    },
    {
        "question": "How do I check the availability of a business name?",
        "answer": "Availability of names can be checked via the online portal that is the MCA website or through the business office in the jurisdiction. One needs to ensure that the name chosen is unique and complies with the regulations of choosing the name."
    },
    {
        "question": "Documents required for firm registration?",
        "answer": "Documents required may vary from the business structure but common documents that are required are an Adhar Card, proof of address, LLP Agreement/ Partnership."
    },
    {
        "question": "Can I register a firm online?",
        "answer": "Yes, a firm can be registered online depending on the jurisdiction if it is allowed Registering online is a better choice and helps to streamline the process."
    },
    {
        "question": "How long does it take to register a firm?",
        "answer": "The time taken for registration depends upon the jurisdiction and the complexity of the application. It may range from a few days to a few weeks. It can be done faster if the right approach and guidance are taken."
    },
    {
        "question": "Can I register my firm without any professional assistance?",
        "answer": "Yes, a firm may be registered without any professional assistance. However, it is always advisable to seek professional help to make the process faster and make sure the process is properly complied with."
    },
    {
        "question": "Do I need to obtain a separate bank account for my firm?",
        "answer": "Though not compulsory, it is always advisable to obtain a separate bank account for the firm, doing this would maintain a clear separation between personal and professional finances."
    },
    {
        "question": "How do I renew my firm's registration?",
        "answer": "Renewal is subject to the jurisdiction of the firm, in some jurisdictions, periodic renewal is necessary whereas, in some jurisdictions, once registration is done there is no need for renewal unless significant changes are made in the business."
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

const Home = () => {
    return (
        <div className='services-pages firm-reg'>
            <Head>
                <title>Firm Registration | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/firm-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Firm Registration | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero cityName={'India'} />
            <h1 className='main-heading'>An Overview of Firm Registration</h1>
            <div className='heading-line'></div>
            <Process cityName={'India'} />
            <h1 className='main-heading'>Structure of Business</h1>
            <div className='heading-line'></div>
            <Structure cityName={'India'} />
            <h1 className='main-heading'>Documents needed for Registering a firm</h1>
            <div className='heading-line'></div>
            <Documents cityName={'India'} />
            <h1 className='main-heading'>Steps for Registering a Firm:</h1>
            <div className='heading-line'></div>
            <StepsForRegistering cityName={'India'} />
            <h1 className='main-heading'>Benefits of Registering a Firm</h1>
            <div className='heading-line'></div>
            <Benefits cityName={'India'} />
            <h1 className="main-heading">Why RegisterKaro?</h1>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h1 className="main-heading">FAQs</h1>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'Firm Registration'} state={state} Query={'firm-registration'} city={city} />
        </div>
    )
}
export default Home