import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Benefits } from '../../components/static/fssai-registration/Benefits'
import { DocsREquired } from '../../components/static/fssai-registration/DocsRequired'
import { EventBased } from '../../components/static/fssai-registration/EventBased'
import { Hero } from '../../components/static/fssai-registration/Hero'
import { MandatoryCompilance } from '../../components/static/fssai-registration/MandatoryCompilance'
import { OtherAnnual } from '../../components/static/fssai-registration/OtherAnnual'
import { PartnershipDeed } from '../../components/static/fssai-registration/PartnershipDeed'
import { Process } from '../../components/static/fssai-registration/Process'
import { WhoReq } from '../../components/static/fssai-registration/WhoReq'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
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

const faq = [
    {
        "question": "What is FSSAI registration?",
        "answer": "It is the process of obtaining a registration certificate from the Food Safety and Standards Authority of {cityName} (FSSAI), which is mandatory for all food business operators in {cityName}."
    },
    {
        "question": "Who needs to obtain FSSAI registration?",
        "answer": "Any individual or entity involved in the manufacturing, processing, storage, distribution, and sale of food products in {cityName} needs to obtain this registration."
    },
    {
        "question": "Why is FSSAI registration important?",
        "answer": "FSSAI registration ensures that food business operators comply with the food safety and hygiene standards set by the FSSAI, promoting consumer safety and trust."
    },
    {
        "question": "How can I apply for FSSAI registration?",
        "answer": "You can apply for the registration online through the FSSAI website or seek assistance from a registered food consultant."
    },
    {
        "question": "What documents are required for FSSAI registration?",
        "answer": "The documents required for the registration include identification proof, address proof, proof of possession of premises, and a self-declaration form."
    },
    {
        "question": "What are the different types of registration under FSSAI?",
        "answer": "FSSAI offers three types of registration: Basic Registration for small-scale food businesses, State License for medium-sized businesses, and Central License for large-scale businesses."
    },
    {
        "question": "How long does it take to obtain registration from FSSAI?",
        "answer": "The time required for the registration depends on the completeness of the application and the category of registration. It usually takes around 15 to 60 days."
    },
    {
        "question": "Is FSSAI registration valid nationwide?",
        "answer": "Yes, this registration is valid across {cityName}, allowing you to operate your food business anywhere in the country."
    },
    {
        "question": "Can I start my food business without FSSAI?",
        "answer": "No, it is illegal to operate a food business without obtaining the necessary registration or licence for FSSAI."
    },
    {
        "question": "Can I transfer my FSSAI to a new location?",
        "answer": "Yes, you can transfer your registration to a new location by submitting an application to the FSSAI along with the required documents."
    },
    {
        "question": "Do I need to renew my registration?",
        "answer": "Yes, FSSAI registration needs to be renewed annually, and the renewal application should be submitted 30 days before the expiry of the current registration."
    },
    {
        "question": "Can I modify my FSSAI registration details?",
        "answer": "Yes, you can modify your FSSAI registration details, such as changes in the business name, address, or contact information, by submitting an application to the FSSAI."
    },
    {
        "question": "Is there any penalty for not obtaining FSSAI registration?",
        "answer": "Operating a food business without FSSAI registration or licence can lead to penalties, fines, and even imprisonment under the Food Safety and Standards Act."
    },
    {
        "question": "Can I display the FSSAI logo after obtaining registration?",
        "answer": "Yes, after obtaining registration, you are allowed to display the FSSAI logo on your food product labels or premises, which assures consumers of your compliance with food safety standards."
    },
    {
        "question": "Can I sell homemade food products without FSSAI?",
        "answer": "If you are selling homemade food products that are not covered under the FSSAI regulations, such as small-scale catering for a limited audience, you may not require FSSAI registration. However, it is advisable to check with local authorities for any specific regulations."
    },
    {
        "question": "Can I apply for FSSAI registration if my business is still under construction?",
        "answer": "No, this registration can only be obtained for fully constructed and operational food businesses. You need to ensure that your premises are ready before applying for registration."
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

    const cityFromQuery = query?.replace('fssai-registration-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages fssai-registration-reg'>
            <Head>
                <title>FSSAI Registration | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/fssai-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="FSSAI Registration | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero cityName={cityName} />
            <h1 className='main-heading'>FSSAI Registration Online in {cityName}</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName} />
            <h2 className='main-heading'>Who are Food Business Operators in {cityName}?</h2>
            <div className='heading-line'></div>
            <OtherAnnual cityName={cityName} />
            <h2 className='main-heading'>Benefits of FSSAI Registration in {cityName}</h2>
            <div className='heading-line'></div>
            <EventBased cityName={cityName} />
            <h2 className='main-heading'>What are the Different Types of FSSAI Licenses in {cityName}?</h2>
            <div className='heading-line'></div>
            <Benefits cityName={cityName} />
            <h2 className='main-heading'>Who Requires FSSAI Registration/License in {cityName}?</h2>
            <div className='heading-line'></div>
            <WhoReq cityName={cityName} />
            <h2 className='main-heading'>Eligibility Criteria for FSSAI Registration</h2>
            <div className='heading-line'></div>
            <PartnershipDeed cityName={cityName} />
            <h2 className='main-heading'>Documents Required for FSSAI Registration in {cityName}</h2>
            <div className='heading-line'></div>
            <DocsREquired cityName={cityName} />
            <h2 className='main-heading'>Step-by-Step Procedure for FSSAI Registration in {cityName}</h2>
            <div className='heading-line'></div>
            <MandatoryCompilance cityName={cityName} />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'Fssai Registration'} state={state} Query={'fssai-registration'} city={city} />
        </div>
    )
}
export default Home