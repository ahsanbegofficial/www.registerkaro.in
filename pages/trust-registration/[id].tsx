import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Advantages } from '../../components/static/trust/Advantages'
import { Categories } from '../../components/static/trust/Categories'
import { Dissolution } from '../../components/static/trust/Dissolution'
import { Documentation } from '../../components/static/trust/Documentation'
import { Hero } from '../../components/static/trust/Hero'
import { PartiesInvolved } from '../../components/static/trust/PartiesInvolved'
import { Prerequisite } from '../../components/static/trust/Prerequisite'
import { Procedure } from '../../components/static/trust/Procedure'
import { Process } from '../../components/static/trust/Process'
import { RegiFee } from '../../components/static/trust/RegiFee'
import { Regularity } from '../../components/static/trust/Regularity'
import { TrustsComp } from '../../components/static/trust/TrustsComp'
import { ImportanceTrust } from '../../components/static/trust/WhyNGO'
import { Components } from '../../components/static/trust/components'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { CustomDefault } from '../../components/child_components/CustomDefault'

const faq = [
    {
        "question": "What is Trust Registration?",
        "answer": "Trust registration is the legal process of formally establishing a trust under the relevant laws and regulations, providing it with legal recognition and a distinct identity."
    },
    {
        "question": "Who Can Establish a Trust?",
        "answer": "Any individual or group of individuals, known as settlers, can establish trust. A minimum of two trustees is typically required."
    },
    {
        "question": "What is the Purpose of Trust Registration?",
        "answer": "Trust registration serves to legally recognize the trust, ensuring compliance with laws, and providing a framework for its activities."
    },
    {
        "question": "What Documents are Required for Trust Registration?",
        "answer": "Essential documents include the Trust Deed, photographs of parties involved, PAN cards, address and identity proofs, and certificates like 12A and 80G, if applicable."
    },
    {
        "question": "Can a Trust Have Both Public and Private Objectives?",
        "answer": "Yes, a trust can have both public and private objectives, known as a public cum-private trust, where its activities benefit both the public and specific individuals."
    },
    {
        "question": "How Long Does Trust Registration Take?",
        "answer": "The timeframe for trust registration can vary, but the process typically takes a few weeks, subject to the completion of necessary documentation and approvals."
    },
    {
        "question": "What Are the Tax Benefits of Trust Registration?",
        "answer": "Registered trusts can avail themselves of tax benefits under sections 12A and 80G of the Income Tax Act, encouraging donations and support."
    },
    {
        "question": "Can a Trust Be Dissolved?",
        "answer": "Yes, a trust can be dissolved through a process known as winding up, where its properties/assets are distributed to beneficiaries or a similar entity, adhering to legal procedures."
    },
    {
        "question": "Is Approval from Authorities Necessary for Trust Registration?",
        "answer": "Yes, approval from the relevant authorities, such as the charity commissioner or court, may be required during the trust registration process to ensure compliance with applicable laws."
    },
    {
        "question": "How Can RegisterKaro Assist in Trust Registration?",
        "answer": "RegisterKaro, with its team of experts, provides essential support for trust registration, guiding individuals through the intricate legal implications and ensuring compliance with governing provisions in India."
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

    const cityFromQuery = query?.replace('trust-registration-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages trust-reg'>
            <Head>
                <title>Trust Registration | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
                {/* <link rel="canonical" href="https://www.registerkaro.in/ads/public-limited-company-registration" /> */}
            </Head>
            <Hero cityName={cityName} />
            <h1 className='main-heading'>Get Online Trust Registration in {cityName}</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName}/>
            <h1 className="main-heading">Trusts – A Comprehensive Overview</h1>
            <div className='heading-line'></div>
            <TrustsComp cityName={cityName}/>
            <h1 className='main-heading'>Parties Involved in the Trust Registration Process</h1>
            <div className='heading-line'></div>
            <PartiesInvolved cityName={cityName} />
            <h1 className='main-heading'>Categories of Trusts in {cityName}</h1>
            <div className='heading-line'></div>
            <Categories cityName={cityName} />
            <h1 className='main-heading'>Regulatory Oversight and Legislation for Trust Registration</h1>
            <div className='heading-line'></div>
            <Regularity cityName={cityName}/>
            <h1 className="main-heading">Importance of Trust Registration</h1>
            <div className='heading-line'></div>
            <ImportanceTrust cityName={cityName}/>
            <h1 className="main-heading">Advantages of Trust Registration</h1>
            <div className='heading-line'></div>
            <Advantages  cityName={cityName}/>
            <h1 className="main-heading">Prerequisites for Trust Registration</h1>
            <div className='heading-line'></div>
            <Prerequisite  cityName={cityName}/>
            <h1 className="main-heading">Components of a Trust Deed</h1>
            <div className='heading-line'></div>
            <Components  cityName={cityName}/>
            <h1 className="main-heading">Documentation for Trust Registration</h1>
            <div className='heading-line'></div>
            <Documentation cityName={cityName}/>   
            <h1 className="main-heading">Procedure for Trust Registration</h1>
            <div className='heading-line'></div>
            <Procedure cityName={cityName}/>   
            <h1 className="main-heading">Dissolution of a Trust</h1>
            <div className='heading-line'></div>
            <Dissolution cityName={cityName}/>
            <h1 className="main-heading">How RegisterKaro Can Assist in Securing Trust Registration?</h1>
            <div className='heading-line'></div>
            <RegiFee  cityName={cityName}/> 
            <h1 className="main-heading">Why RegisterKaro?</h1>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h1 className="main-heading">FAQs</h1>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'Trust Registration'} state={state} Query={'trust-registration'} city={city} />
        </div>
    )
}
export default Home