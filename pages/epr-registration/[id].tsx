import Head from 'next/head'
import { FaqTemplatePVT } from '../..//components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../..//components/static/WhyRegisterkaro'
import { ApplicableRules } from '../..//components/static/epr-registration/ApplicableRules'
import { CancellationValid } from '../..//components/static/epr-registration/CancellationValid'
import { DocumentsRequired } from '../..//components/static/epr-registration/DocumentsRequired'
import { Eligibility } from '../..//components/static/epr-registration/Eligibility'
import { Hero } from '../..//components/static/epr-registration/Hero'
import { HowEPRRegistration } from '../..//components/static/epr-registration/HowEPRRegistration'
import { MandatoryCompliance } from '../..//components/static/epr-registration/MandatoryCompliance'
import { Process } from '../..//components/static/epr-registration/Process'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { CustomDefault } from '../../components/child_components/CustomDefault'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
const faq = [
    {
        "question": "What is the purpose of registering for EPR?",
        "answer": "Registering for EPR enables users to access enhanced features and services within the system, optimizing their experience."
    },
    {
        "question": "Who is eligible to complete the registration process for enhanced access?",
        "answer": "Individuals with specific roles or responsibilities can undergo the registration process to gain enhanced access, tailored to their needs."
    },
    {
        "question": "Can I modify my registration details after the initial sign-up?",
        "answer": "Yes, users have the flexibility to update their registration details as needed, ensuring accuracy and relevance over time."
    },
    {
        "question": "Is there a cost associated with the EPR registration process?",
        "answer": "No, the EPR registration process is typically free of charge, allowing eligible users to benefit from enhanced features without incurring additional expenses."
    },
    {
        "question": "What kind of information is required during the EPR registration?",
        "answer": "The registration process gathers essential information to establish user profiles, focusing on details relevant to their roles and the functionalities they need."
    },
    {
        "question": "Can organizations register multiple users simultaneously for EPR access?",
        "answer": "Yes, organizations often have the option to register multiple users in a batch, streamlining the onboarding process for teams or departments."
    },
    {
        "question": "How long does the EPR registration process usually take?",
        "answer": "The registration process is designed to be efficient, taking a short amount of time to complete and ensuring users can quickly access enhanced features."
    },
    {
        "question": "Are there training resources available after EPR registration?",
        "answer": "Yes, post-registration, users may have access to training resources that help them maximize the benefits of their enhanced access and navigate the system effectively."
    },
    {
        "question": "Can I transfer my EPR registration to another user?",
        "answer": "In certain cases, EPR registrations may be transferable, allowing for seamless transitions when responsibilities or roles within an organization change."
    },
    {
        "question": "What happens if I forget my login credentials after EPR registration?",
        "answer": "If you forget your login credentials, there are typically secure processes in place to help you recover or reset your password, ensuring uninterrupted access to the EPR system."
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

    const cityFromQuery = query?.replace('epr-registration-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages epr-registration-reg'>
            <Head>
                <title>EPR Registration | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/epr-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="EPR Registration | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero cityName={cityName}  />
            <h1 className='main-heading'>Get Online EPR Registration Now!</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName}  />
            <h1 className='main-heading'>Applicable Rules/ Acts/ Regulations for EPR </h1>
            <div className='heading-line'></div>
            <ApplicableRules cityName={cityName} />
            <h1 className='main-heading'>Eligibility/ Pre-Licensing/ Mandatory Prerequisites</h1>
            <div className='heading-line'></div>
            <Eligibility cityName={cityName} />
            <h1 className='main-heading'>Documents Required for EPR Registration</h1>
            <div className='heading-line'></div>
            <DocumentsRequired cityName={cityName} />
            <h1 className='main-heading'>How to apply for EPR Registration online in {cityName}?</h1>
            <div className='heading-line'></div>
            <HowEPRRegistration cityName={cityName} />
            <h1 className='main-heading'>Cancellation/Validity/ Renewal of EPR</h1>
            <div className='heading-line'></div>
            <CancellationValid cityName={cityName} />
            <h1 className='main-heading'>Mandatory Compliance</h1>
            <div className='heading-line'></div>
            <MandatoryCompliance cityName={cityName} />
            <h1 className="main-heading">Why RegisterKaro?</h1>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h1 className="main-heading">FAQs</h1>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'EPR Registratio'} state={state} Query={'epr-registration'} city={city} />
        </div>
    )
}
export default Home