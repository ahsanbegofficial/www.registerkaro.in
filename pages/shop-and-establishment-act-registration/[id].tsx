import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { AdvantagesShop } from '../../components/static/shop-and-establishment-act-registration/AdvantagesShop'
import { ChecklistDocumentRequired } from '../../components/static/shop-and-establishment-act-registration/ChecklistDocumentRequired'
import { Hero } from '../../components/static/shop-and-establishment-act-registration/Hero'
import { ImportanceShop } from '../../components/static/shop-and-establishment-act-registration/ImportanceShop'
import { Penalities } from '../../components/static/shop-and-establishment-act-registration/Penalities'
import { ProcedureShop } from '../../components/static/shop-and-establishment-act-registration/ProcedureShop'
import { Process } from '../../components/static/shop-and-establishment-act-registration/Process'
import { WhatRegulations } from '../../components/static/shop-and-establishment-act-registration/WhatRegulations '
import { WhichEntities } from '../../components/static/shop-and-establishment-act-registration/WhichEntities'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { CustomDefault } from '../../components/child_components/CustomDefault'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const faq = [
    {
        "question": "What is the shop and establishment act?",
        "answer": "The shop and establishment act is a state-specific law that governs the working conditions, safety standards, and business registration requirements for shops, commercial establishments, and service providers."
    },
    {
        "question": "Who needs to register under the shop and establishment act?",
        "answer": "Registration under the shop and establishment act is required for all establishments involved in commercial activities, such as shops, hotels, restaurants, theatres, and offices."
    },
    {
        "question": "What are the benefits of registering under the shop and establishment act?",
        "answer": "By registering under the act, you can demonstrate compliance with legal requirements, protect the rights of your employees, and avail various social security benefits for your workforce."
    },
    {
        "question": "How do I register under the shop and establishment act?",
        "answer": "To register, you need to submit an application with the prescribed fees and required documents to the respective state’s labour department or the online portal, if available."
    },
    {
        "question": "What documents are required for shop and establishment act registration?",
        "answer": "The commonly required documents include identity proof, address proof, ownership proof or rental agreement, details of employees, and other relevant business documents."
    },
    {
        "question": "Is it mandatory to display the registration certificate?",
        "answer": "Yes, it is mandatory to display the registration certificate prominently at your establishment where it can be easily seen by employees and customers."
    },
    {
        "question": "What is the validity period of the shop and establishment registration certificate?",
        "answer": "The validity of the registration certificate varies from state to state, typically ranging from 1 to 5 years. After it expires, it needs to be renewed."
    },
    {
        "question": "What is the penalty for non-compliance with the shop and establishment act?",
        "answer": "The penalty for non-compliance may include fines, imprisonment, or even closure of the business in severe cases, depending on the severity of the offence and the respective state laws."
    },
    {
        "question": "Can I make changes in my registration details after obtaining the certificate?",
        "answer": "Yes, you can make changes in your registration details by submitting an application for amendment to the labour department within the specified time frame."
    },
    {
        "question": "Do I need to maintain any registers or records under the shop and establishment act?",
        "answer": "Yes, you are required to maintain registers and records related to attendance, wages, leave, holidays, and other relevant details of your employees."
    },
    {
        "question": "Am I required to provide employee benefits like leaves and holidays?",
        "answer": "Yes, the shop and establishment act mandates that certain employee benefits, such as weekly offs, annual leave, maternity leave, etc., should be provided as per the state-specific rules."
    },
    {
        "question": "What are the working hours prescribed under the shop and establishment act?",
        "answer": "The working hours and weekly offs prescribed under the act may vary by state, but in general, establishments are required to adhere to a maximum limit of working hours per day and provide employees with weekly rest periods."
    },
    {
        "question": "Do I need to renew my registration every year?",
        "answer": "The renewal period varies from state to state. Some states require annual renewal, while others may have longer renewal periods such as once in three or five years."
    },
    {
        "question": "Can I transfer my shop and establishment registration to another owner?",
        "answer": "Yes, you can transfer your registration to another owner in case of a change in ownership. It is necessary to inform the labour department and follow the prescribed procedure for transfer."
    },
    {
        "question": "Is there any provision for online registration under the shop and establishment act?",
        "answer": "Many states have introduced online registration portals to simplify the registration process. You can check the respective state’s labour department website for more information."
    },
    {
        "question": "What are the consequences of operating without a valid shop and establishment registration?",
        "answer": "Operating without a valid registration certificate can lead to legal consequences, including hefty fines, penalties, closure of the business, and other legal liabilities."
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

    const cityFromQuery = query?.replace('shop-and-establishment-act-registration-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages shop-and-establishment-act-reg'>
            <Head>
                <title>Shop and Establishment Act Registration | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/shop-and-establishment-act-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Shop and Establishment Act Registration | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero cityName={cityName} />
            <h1 className='main-heading'>Get Online Shop and Establishment Act Registration</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName}  />
            <h2 className='main-heading'>What are the various regulations under the Shop and Establishment Act?</h2>
            <div className='heading-line'></div>
            <WhatRegulations cityName={cityName} />
            <h2 className='main-heading'>Importance of Shop and Establishment Act License</h2>
            <div className='heading-line'></div>
            <ImportanceShop cityName={cityName} /> 
            <h2 className='main-heading'>Which entities have to register under the Shop and Establishment Act?</h2>
            <div className='heading-line'></div>
            <WhichEntities cityName={cityName} />
            <h2 className='main-heading'>Advantages of Shop and Establishment Act Registration</h2>
            <div className='heading-line'></div>
            <AdvantagesShop cityName={cityName} />  
            <h2 className='main-heading'>Documents Required for Shop and Establishment Act Registration</h2>
            <div className='heading-line'></div>
            <ChecklistDocumentRequired cityName={cityName} /> 
            <h2 className='main-heading'>Procedure for Shop and Establishment Act Registration</h2>
            <div className='heading-line'></div>
            <ProcedureShop cityName={cityName} /> 
            <h2 className='main-heading'>Penalties for not obtaining Shop and Establishment License in {cityName}</h2>
            <div className='heading-line'></div>
            <Penalities cityName={cityName} /> 
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'Shop and Establishment Act Registration'} state={state} Query={'shop-and-establishment-act-registration'} city={city} />
        </div>
    )
}
export default Home