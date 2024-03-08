import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/startup-india/Hero'
import { HowToRegister } from '../../components/static/startup-india/HowToRegister'
import { Process } from '../../components/static/startup-india/Process'
import { Benefits } from '../../components/static/startup-india/Benefits'
import { Checklist } from '../../components/static/startup-india/Checklist'
import { DocRequired } from '../../components/static/startup-india/DocRequired'
import { Eligibility } from '../../components/static/startup-india/Eligibility'
import { Objectives } from '../../components/static/startup-india/Objectives'
import { Procedure } from '../../components/static/startup-india/Procedure'
import { Startup } from '../../components/static/startup-india/Startup'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { CustomDefault } from '../../components/child_components/CustomDefault'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

let faq = [
    {
        "question": "What is Startup India registration?",
        "answer": "Startup India registration is a government initiative that offers various benefits and incentives to startups in India. It provides recognition and support to innovative and budding entrepreneurs."
    },
    {
        "question": "Who is eligible to register as a startup in India?",
        "answer": "Any business entity, including a private limited company, LLP, or partnership firm, can register as a startup if it meets the eligibility criteria defined by the government."
    },
    {
        "question": "What are the eligibility criteria for Startup India registration?",
        "answer": "To be eligible, a startup must be incorporated in India, be less than 10 years old, and have an annual turnover below a specified limit."
    },
    {
        "question": "How do I register my startup with Startup India?",
        "answer": "You can register your startup on the official Startup India portal by providing necessary details and documents. It’s a simple online process."
    },
    {
        "question": "Is there a fee for registering with Startup India?",
        "answer": "No, there is no fee for registering your startup with Startup India. The registration process is free of cost."
    },
    {
        "question": "What benefits do startups get after registration?",
        "answer": "Registered startups can access various benefits, including tax exemptions, funding opportunities, intellectual property support, and more."
    },
    {
        "question": "How long does it take to complete the Startup India registration process?",
        "answer": "The registration process typically takes around 15-20 minutes to complete online."
    },
    {
        "question": "What documents are required for registration?",
        "answer": "You’ll need documents like Certificate of Incorporation, PAN card, and a brief description of your business for registration."
    },
    {
        "question": "Do I need a unique idea or innovation to register as a startup?",
        "answer": "While innovation is encouraged, having a unique idea is not mandatory for registration. Your business should aim to provide a solution to an existing problem."
    },
    {
        "question": "Is there any age limit to register as a startup founder?",
        "answer": "No, there is no specific age limit to register as a founder of a startup in India."
    },
    {
        "question": "Can foreign nationals or non-resident Indians (NRIs) register a startup in India?",
        "answer": "Yes, foreign nationals and NRIs can register a startup in India. However, they must comply with certain guidelines."
    },
    {
        "question": "What are the tax benefits for registered startups?",
        "answer": "Registered startups can avail of income tax exemptions for a specified number of years under Section 80IAC of the Income Tax Act."
    },
    {
        "question": "Are there any restrictions on the type of business that can register as a startup?",
        "answer": "Most business types are eligible to register, except those involved in gambling, tobacco, or illegal activities."
    },
    {
        "question": "Can I register my existing business as a startup?",
        "answer": "Yes, you can register an existing business as a startup, as long as it meets the eligibility criteria."
    },
    {
        "question": "Is there a time limit for availing benefits after registration?",
        "answer": "Startups can avail of benefits for a period of 10 years from the date of incorporation or registration, whichever is earlier."
    },
    {
        "question": "What support does Startup India provide for intellectual property rights (IPR)?",
        "answer": "Startup India offers fast-track examination and an 80% reduction in patent filing fees for startups to promote and protect their innovations."
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

    const cityFromQuery = query?.replace('startup-india-registration-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages startup-reg'>
            <Head>
                <title>Startup India Registration | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
                {/* <link rel="canonical" href="https://www.registerkaro.in/ads/public-limited-company-registration" /> */}
            </Head>
            <Hero cityName={cityName}  />
            <h1 className='main-heading'>A Complete Analysis of Startup {cityName} Registration</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName}  />
            <h1 className="main-heading">What is a Startup?</h1>
            <div className='heading-line'></div>
            <Startup cityName={cityName} />
            <h1 className="main-heading">Objectives of Startup {cityName} Movement</h1>
            <div className='heading-line'></div>
            <Objectives cityName={cityName} />
            <h1 className="main-heading">Benefits of Startup {cityName} Registration </h1>
            <div className='heading-line'></div>
            <Benefits cityName={cityName} />
            <h1 className="main-heading">Eligibility Criteria for the Registration</h1>
            <div className='heading-line'></div>
            <Eligibility cityName={cityName}/>
            <h1 className="main-heading">Who is not eligible for Startup {cityName} Registration or Startup {cityName} Recognition?</h1>
            <div className='heading-line'></div>
            <Checklist cityName={cityName} />
            <h1 className="main-heading">Documents required for Startup {cityName} Company Registration</h1>
            <div className='heading-line'></div>
            <DocRequired cityName={cityName} />
            <h1 className="main-heading">Procedure for Indian Subsidiary Registration</h1>
            <div className='heading-line'></div>
            <Procedure cityName={cityName} />
            <h1 className="main-heading">How can RegisterKaro help you?</h1>
            <div className='heading-line'></div>
            <HowToRegister cityName={cityName} />
            <h1 className="main-heading">Why RegisterKaro?</h1>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h1 className="main-heading">FAQs</h1>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'Startup India Registration'} state={state} Query={'startup-india-registration'} city={city} />
        </div>
    )
}
export default Home