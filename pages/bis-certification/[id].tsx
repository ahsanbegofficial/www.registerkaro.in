import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { AdvantagesBIS } from '../../components/static/bis-certification/AdvantagesBIS'
import { DocsREquired } from '../../components/static/bis-certification/DocsRequired'
import { EventBased } from '../../components/static/bis-certification/EventBased'
import { Hero } from '../../components/static/bis-certification/Hero'
import { KeyInitiatives } from '../../components/static/bis-certification/KeyInitiatives'
import { MandatoryCompilance } from '../../components/static/bis-certification/MandatoryCompilance'
import { ObjectivesChecklist } from '../../components/static/bis-certification/ObjectivesChecklist'
import { OtherAnnual } from '../../components/static/bis-certification/OtherAnnual'
import { PartnershipDeed } from '../../components/static/bis-certification/PartnershipDeed'
import { Process } from '../../components/static/bis-certification/Process'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { CustomDefault } from '../../components/child_components/CustomDefault'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

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
  

const faq = [
    {
        "question": "What is BIS certification?",
        "answer": "BIS certification is a quality mark issued by the Bureau of Indian Standards (BIS) to ensure the quality and safety of products sold in India."
    },
    {
        "question": "Why is BIS certification important?",
        "answer": "BIS certification is essential to confirm that products meet Indian standards, ensuring consumer safety and product quality."
    },
    {
        "question": "Which products require BIS certification?",
        "answer": "Products like electronics, appliances, automotive components, and many others require BIS certification before they can be sold in India."
    },
    {
        "question": "How can I apply for BIS certification?",
        "answer": "You can apply for BIS certification online through the BIS website or at a BIS branch office."
    },
    {
        "question": "What are the documents required for BIS certification?",
        "answer": "Required documents may include product specifications, test reports, manufacturing process details, and more, depending on the product category."
    },
    {
        "question": "How long does it take to obtain BIS certification?",
        "answer": "The time frame varies depending on the complexity of the product and the certification process, but it typically takes several months."
    },
    {
        "question": "What is the validity period of a BIS certificate?",
        "answer": "BIS certificates are typically valid for two years, after which they need to be renewed."
    },
    {
        "question": "What is the BIS mark, and where should it be placed on the product?",
        "answer": "The BIS mark is the certification mark that should be placed on the product, packaging, or accompanying documents, as specified by BIS."
    },
    {
        "question": "Can imported products be sold in India without BIS certification?",
        "answer": "No, imported products must also comply with BIS standards and obtain BIS certification before being sold in India."
    },
    {
        "question": "What are the consequences of selling uncertified products in India?",
        "answer": "Selling uncertified products in India can result in legal penalties, product seizure, and damage to your brand’s reputation. It is essential to adhere to BIS certification requirements."
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

    const cityFromQuery = query?.replace('bis-certification-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages bis-certification-reg'>
            <Head>
                <title>BIS Certification | RegisterKaro</title>
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
            <h1 className='main-heading'>Get Online BIS Certification in { cityName }</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName}  />
            <h1 className='main-heading'>Key Initiatives by BIS</h1>
            <div className='heading-line'></div>
            <KeyInitiatives cityName={cityName} />
            <h1 className='main-heading'>Objectives of BIS</h1>
            <div className='heading-line'></div>
            <ObjectivesChecklist cityName={cityName} />
            <h1 className='main-heading'>Quality Control Orders</h1>
            <div className='heading-line'></div>
            <PartnershipDeed cityName={cityName} />
            <h1 className='main-heading'>Advantages of Obtaining BIS Certification</h1>
            <div className='heading-line'></div>
            <AdvantagesBIS cityName={cityName} />
            <h1 className='main-heading'>Types of BIS Certification</h1>
            <div className='heading-line'></div>
            <EventBased cityName={cityName} />
            <h1 className='main-heading'>Products Covered Under BIS Certification</h1>
            <div className='heading-line'></div>
            <DocsREquired cityName={cityName} />
            <h1 className='main-heading'>Documentation Required for BIS Certification</h1>
            <div className='heading-line'></div>
            <OtherAnnual cityName={cityName} />
            <h1 className='main-heading'>Procedure for BIS Certification</h1>
            <div className='heading-line'></div>
            <MandatoryCompilance cityName={cityName} />
            <h1 className="main-heading">Why RegisterKaro?</h1>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h1 className="main-heading">FAQs</h1>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'BIS Certification in India'} state={state} Query={'bis-certification'} city={city} />
        </div>
    )
}
export default Home