import React, { useEffect } from 'react'
import Head from 'next/head'
import { Hero } from '../../components/static/cdsco-registration/Hero'
import { Process } from '../../components/static/cdsco-registration/Process'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { PartnershipDeed } from '../../components/static/cdsco-registration/PartnershipDeed'
import { EventBased } from '../../components/static/cdsco-registration/EventBased'
import { DocsREquired } from '../../components/static/cdsco-registration/DocsRequired'
import { KeyInitiatives } from '../../components/static/cdsco-registration/KeyInitiatives'
import { ObjectivesChecklist } from '../../components/static/cdsco-registration/ObjectivesChecklist'
import { AdvantagesBIS } from '../../components/static/cdsco-registration/AdvantagesBIS'
import { Renewal } from '../../components/static/cdsco-registration/Renewal'
import { Revocation } from '../../components/static/cdsco-registration/Revocation'
import { Mandatory } from '../../components/static/cdsco-registration/Mandatory'
import { Paperwork } from '../../components/static/cdsco-registration/Paperwork'
import { Services } from '../../components/static/cdsco-registration/Services'
import { Rules } from '../../components/static/cdsco-registration/Rules'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { useRouter } from 'next/router'
import { CustomDefault } from '../../components/child_components/CustomDefault'

const faq = [
    {
        "question": "What does CDSCO stand for?",
        "answer": "CDSCO stands for Central Drugs Standard Control Organization, responsible for regulating pharmaceuticals, medical devices, cosmetics, and diagnostics in India."
    },
    {
        "question": "Who needs CDSCO registration?",
        "answer": "Manufacturers or their representatives intending to market pharmaceuticals, medical devices, cosmetics, or diagnostics in India require CDSCO registration."
    },
    {
        "question": "What are the key prerequisites for CDSCO registration?",
        "answer": "Compliance with quality standards, necessary testing data, adherence to regulatory norms, and submission of essential documents are prerequisites."
    },
    {
        "question": "What types of products does CDSCO regulate?",
        "answer": "CDSCO regulates various products, including pharmaceuticals, medical devices, cosmetics, and diagnostics."
    },
    {
        "question": "What types of licenses or services are involved in CDSCO registration?",
        "answer": "The primary requirement is the Registration Certificate (RC), alongside import licenses, manufacturing licenses, and approvals for clinical trials based on product classification."
    },
    {
        "question": "What documents are typically required for CDSCO registration?",
        "answer": "Technical details, manufacturing information, quality management system certifications, clinical data (if applicable), conformity evidence, and labeling details are commonly required documents."
    },
    {
        "question": "How long is the validity of the Registration Certificate?",
        "answer": "The Registration Certificate’s validity typically ranges from 1 to 5 years and requires renewal before expiration to maintain market access."
    },
    {
        "question": "Under what circumstances can CDSCO cancel a Registration Certificate?",
        "answer": "CDSCO can cancel, suspend, or revoke a Registration Certificate due to non-compliance, safety concerns, or inadequate surveillance."
    },
    {
        "question": "What mandatory compliances are linked with CDSCO registration?",
        "answer": "Mandatory compliances include post-market surveillance, adverse event reporting, adherence to labeling regulations, conformity with manufacturing standards, and maintaining an effective quality management system."
    },
    {
        "question": "Why is post-market surveillance crucial in CDSCO registration?",
        "answer": "Post-market surveillance ensures continued monitoring of the product’s safety and performance after it enters the market, identifying and addressing potential risks."
    },
    {
        "question": "How significant is adherence to labeling regulations in CDSCO registration?",
        "answer": "Strict adherence to labeling regulations is critical as it provides essential information for safe product use, including instructions, warnings, and precautions."
    },
    {
        "question": "What happens if a manufacturer fails to maintain a quality management system (QMS)?",
        "answer": "Failure to maintain a QMS can result in non-compliance issues, potentially leading to the cancellation or revocation of the Registration Certificate."
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

    const cityFromQuery = query?.replace('cdsco-registration-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages cdsco-registration-reg'>
           <Head>
                <title>CDSCO Registration | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/cdsco-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="CDSCO Registration | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero cityName={cityName} />
            <h1 className='main-heading'>An Overview of CDSCO Registration</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName} />
            <h1 className='main-heading'>Types of CDSCO Registration</h1>
            <div className='heading-line'></div>
            <KeyInitiatives cityName={cityName}/>
            <h1 className='main-heading'>Applicable Rules/Acts/ Regulations</h1>
            <div className='heading-line'></div>
            <Rules cityName={cityName}/>
            <h1 className='main-heading'>What is the Eligibility/Pre-Licensing/Mandatory Pre-Requisites</h1>
            <div className='heading-line'></div>
            <AdvantagesBIS cityName={cityName}/>
            <h1 className='main-heading'>A description of products/services Involved</h1>
            <div className='heading-line'></div>
            <DocsREquired cityName={cityName}/>
            <h1 className='main-heading'>Types and Distinctions of Licenses/Services Involved</h1>
            <div className='heading-line'></div>
            <Services cityName={cityName}/>
            <h1 className='main-heading'>Who can apply for CDSCO Registration in {cityName}?</h1>
            <div className='heading-line'></div>
            <ObjectivesChecklist cityName={cityName}/>
            <h1 className='main-heading'>Documents Required/Paperwork from the Client for CDSCO Registration</h1>
            <div className='heading-line'></div>
            <Paperwork cityName={cityName}/>
            <h1 className='main-heading'>CDSCO Registration Process</h1>
            <div className='heading-line'></div>
            <EventBased cityName={cityName}/>
            <h1 className='main-heading'>What is the procedural timeline of the service involved?</h1>
            <div className='heading-line'></div>
            <PartnershipDeed cityName={cityName}/>
            <h1 className='main-heading'>Cancellation/Validity/Renewal of Service</h1>
            <div className='heading-line'></div>
            <Renewal cityName={cityName}/>
            <h1 className='main-heading'>Cancellation/Suspension/Revocation of Service</h1>
            <div className='heading-line'></div>
            <Revocation cityName={cityName}/>
            <h1 className='main-heading'>Mandatory Compliance Attached with Service</h1>
            <div className='heading-line'></div>
            <Mandatory cityName={cityName}/>
            <h1 className="main-heading">Why RegisterKaro?</h1>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h1 className="main-heading">FAQs</h1>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'CDSCO Registration'} state={state} Query={'cdsco-registration'} city={city} />
        </div>
    )
}
export default Home