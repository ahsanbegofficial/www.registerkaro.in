import Head from 'next/head'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { Hero } from '../../components/static/section-8/Hero'
import { Process } from '../../components/static/section-8/Process'
import { ImportantPoints } from '../../components/static/section-8/ImportantPoints'
import { Advantages } from '../../components/static/section-8/Advantages'
import { Eligibility } from '../../components/static/section-8/Eligibility'
import { Requirements } from '../../components/static/section-8/Requirements'
import { DocumentRequired } from '../../components/static/section-8/DocumentRequired'
import { Procedure } from '../../components/static/section-8/Procedure'
import { AnnualCompliance } from '../../components/static/section-8/AnnualCompliance'
import { Penalties } from '../../components/static/section-8/Penalties'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { CustomDefault } from '../../components/child_components/CustomDefault'

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

let faq = [
    {
        "question": "What is a Section 8 Company?",
        "answer": "A Section 8 Company is a non-profit organisation established for promoting charitable or not-for-profit objectives."
    },
    {
        "question": "What are the key objectives of a Section 8 Company?",
        "answer": "The primary objectives include promoting arts, science, commerce, education, social welfare, religion, charity, or any other useful public purpose."
    },
    {
        "question": "Can a Section 8 Company distribute its profits to members?",
        "answer": "No, a Section 8 Company cannot distribute its profits to members. All income must be utilised for its objectives."
    },
    {
        "question": "Is it necessary to add “Limited” or “Private Limited” to the company’s name?",
        "answer": "Yes, the company’s name must include “Limited” or “Private Limited” as per the type of Section 8 Company."
    },
    {
        "question": "How many directors are required for registration?",
        "answer": "A minimum of two directors is required for a Section 8 Company."
    },
    {
        "question": "Is there a minimum capital requirement for Section 8 Company registration?",
        "answer": "No, there is no minimum capital requirement."
    },
    {
        "question": "How long does it take to register a Section 8 Company?",
        "answer": "Registration typically takes 20-60 days, depending on the processing time of government authorities."
    },
    {
        "question": "What documents are needed for registration?",
        "answer": "Documents include identity proof, address proof, PAN card, and No Objection Certificate from the landlord for the registered office."
    },
    {
        "question": "Can foreign nationals be directors in a Section 8 Company?",
        "answer": "Yes, foreign nationals can be directors, but at least one director must be an Indian resident."
    },
    {
        "question": "Is there an age limit for directors in a Section 8 Company?",
        "answer": "There is no age limit for directors in Section 8 Companies."
    },
    {
        "question": "What are the compliance requirements after registration?",
        "answer": "Section 8 Companies must file annual returns, financial statements, and comply with tax regulations."
    },
    {
        "question": "Can a Section 8 Company be converted into a for-profit company?",
        "answer": "No, a Section 8 Company cannot be converted into a for-profit company."
    },
    {
        "question": "Can a Section 8 Company own property and assets?",
        "answer": "Yes, it can own property and assets in its name."
    },
    {
        "question": "Is it mandatory to conduct an annual general meeting (AGM)?",
        "answer": "Yes, an AGM must be held within six months from the end of the financial year."
    },
    {
        "question": "Can a Section 8 Company be dissolved voluntarily?",
        "answer": "Yes, it can be dissolved voluntarily by following the legal procedures."
    },
    {
        "question": "What is the penalty for non-compliance with Section 8 Company regulations?",
        "answer": "Non-compliance can lead to penalties, fines, or even cancellation of registration, so it’s crucial to adhere to the rules."
    },
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

    const cityFromQuery = query?.replace('section-8-company-registration-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages section-8-reg'>
            <Head>
                <title>Section 8 Company Registration | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/section-8-company-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Section 8 Company Registration | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero cityName={cityName}/>
            <h1 className='main-heading'>An Overview of Section 8 Company Registration</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName}/>
            <h2 className="main-heading">Important Points Regarding Section 8 Company in India</h2>
            <div className='heading-line'></div>
            <ImportantPoints cityName={cityName}/>
            <h2 className="main-heading">Advantages of Section 8 Company Registration in India</h2>
            <div className='heading-line'></div>
            <Advantages cityName={cityName}/>
            <h2 className="main-heading">Eligibility Criteria for Section 8 Company Registration in India</h2>
            <div className='heading-line'></div>
            <Eligibility cityName={cityName}/>
            <h2 className="main-heading">Requirements for Section 8 Company Registration</h2>
            <div className='heading-line'></div>
            <Requirements cityName={cityName}/>
            <h2 className="main-heading">Documents Required for Section 8 Company Registration</h2>
            <div className='heading-line'></div>
            <DocumentRequired cityName={cityName}/>
            <h2 className="main-heading">Procedure for Section 8 Company Registration</h2>
            <div className='heading-line'></div>
            <Procedure cityName={cityName}/>
            <h2 className="main-heading">What are the Annual Compliances for Section 8 Companies in India?</h2>
            <div className='heading-line'></div>
            <AnnualCompliance cityName={cityName}/>
            <h2 className="main-heading">Penalties for Non-Compliance</h2>
            <div className='heading-line'></div>
            <Penalties cityName={cityName}/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'Section 8 Company Registration'} state={state} Query={'section-8-company-registration'} city={city} />
        </div>
    )
}
export default Home