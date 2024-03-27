import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Checklist } from '../../components/static/opc/Checklist'
import { DocumentRequired } from '../../components/static/opc/DocumentRequired'
import { Hero } from '../../components/static/opc/Hero'
import { OPCReg } from '../../components/static/opc/OPCReg'
import { Procedure } from '../../components/static/opc/Procedure'
import { Process } from '../../components/static/opc/Process'
import { Restrictions } from '../../components/static/opc/Restrictions'
import { TableCom } from '../../components/static/opc/TableCom'
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

    const cityFromQuery = query?.replace('one-person-company-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages opc-reg'>
            <Head>
                <title>One Person Company | RegisterKaro</title>
                <meta name="description" content="Streamline your business with hassle-free MSME registration online. Unlock benefits and incentives for your enterprise with RegisterKaro.in. Get started today!" />
                <link rel="canonical" href="https://www.registerkaro.in/one-person-company" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="One Person Company | RegisterKaro" />
                <meta property="og:description" content="Streamline your business with hassle-free MSME registration online. Unlock benefits and incentives for your enterprise with RegisterKaro.in. Get started today!" />
            </Head>
            <Hero cityName={cityName} />
            <h1 className='main-heading'>What is One Person Company Registration in India?</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName} />
            <h2 className="main-heading">Features of One Person Company in India</h2>
            <div className='heading-line'></div>
            <OPCReg cityName={cityName} />
            <h2 className="main-heading">Checklist for One Person Company Registration in India</h2>
            <div className='heading-line'></div>
            <Checklist cityName={cityName} />
            <h2 className="main-heading">Documents Required for OPC Registration in India</h2>
            <div className='heading-line'></div>
            <DocumentRequired cityName={cityName} />
            <h2 className="main-heading">Procedure for One Person Company Registration</h2>
            <div className='heading-line'></div>
            <Procedure cityName={cityName} />
            <h2 className="main-heading">Restrictions on One Person Company</h2>
            <div className='heading-line'></div>
            <Restrictions cityName={cityName} />
            <h2 className="main-heading">LLP Compliance</h2>
            <div className='heading-line'></div>
            <TableCom cityName={cityName} />
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