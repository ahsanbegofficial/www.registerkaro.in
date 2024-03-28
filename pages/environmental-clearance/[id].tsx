import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { DocumentRequired } from '../../components/static/environmental-clearance/DocumentRequired'
import { Hero } from '../../components/static/environmental-clearance/Hero'
import { Process } from '../../components/static/environmental-clearance/Process'
import { Types } from '../../components/static/environmental-clearance/Types'
import { Prerequisites } from '../../components/static/environmental-clearance/Prerequisites'
import Procedure from '../../components/static/environmental-clearance/Procedure'
import Certificate from '../../components/static/environmental-clearance/Certificate'
import Applicable from '../../components/static/environmental-clearance/Applicable'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { CustomDefault } from '../../components/child_components/CustomDefault'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const faq = [
    {
        "question": "What is environmental clearance?",
        "answer": "Environmental clearance is a regulatory process that assesses the potential environmental impact of a proposed project before it is approved, ensuring compliance with environmental regulations."
    },
    {
        "question": "Why is environmental clearance necessary for projects?",
        "answer": "Environmental clearance is crucial to identify and mitigate potential adverse environmental effects, promoting sustainable development and minimizing ecological harm."
    },
    {
        "question": "Who grants environmental clearance for projects?",
        "answer": "Environmental clearances are typically granted by designated regulatory bodies or environmental agencies at the national or local level, depending on the jurisdiction."
    },
    {
        "question": "When should the application for environmental clearance be submitted?",
        "answer": "The application for environmental clearance should be submitted at the early stages of project planning to integrate environmental considerations into the decision-making process."
    },
    {
        "question": "What factors are considered during the environmental clearance process?",
        "answer": "The environmental clearance process evaluates factors such as the project’s impact on air and water quality, biodiversity, soil health, and the overall ecosystem, among other environmental aspects."
    },
    {
        "question": "How long does it take to obtain environmental clearance?",
        "answer": "The time frame for obtaining environmental clearance varies, but it generally involves a thorough review process, including public consultations, and may take several months depending on the complexity of the project."
    },
    {
        "question": "Is public participation a part of the environmental clearance process?",
        "answer": "Yes, public participation is often a crucial component of the environmental clearance process, allowing stakeholders and the community to express their concerns and opinions."
    },
    {
        "question": "What happens if a project is initiated without obtaining environmental clearance?",
        "answer": "Initiating a project without environmental clearance is a violation of regulations and may lead to legal consequences, fines, or even project suspension until proper clearance is obtained."
    },
    {
        "question": "Can conditions be attached to the environmental clearance?",
        "answer": "Yes, environmental clearances often come with conditions and safeguards to ensure that the project adheres to specified environmental standards and minimizes its impact on the ecosystem."
    },
    {
        "question": "Is environmental clearance a one-time process for a project?",
        "answer": "Environmental clearance may be required at different stages of a project, especially if there are significant modifications or expansions. Regular compliance checks may also be conducted during and after project implementation to ensure ongoing adherence to environmental standards."
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

    const cityFromQuery = query?.replace('environmental-clearance-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages environmental-clearance-reg'>
           <Head>
                <title>Expert Environmental Clearance Solutions | Registerkaro</title>
                <meta name="description" content="Unlock the pathway to project success with our comprehensive environmental clearance services. Ensure compliance, mitigate risks, and foster sustainability." />
                <link rel="canonical" href="https://www.registerkaro.in/environmental-clearance" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Expert Environmental Clearance Solutions | Registerkaro" />
                <meta property="og:description" content="Unlock the pathway to project success with our comprehensive environmental clearance services. Ensure compliance, mitigate risks, and foster sustainability." />
            </Head>
            <Hero cityName={cityName} />
            <h1 className='main-heading'>Get Online Environmental Clearance in {cityName}</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName} />
            <h2 className='main-heading'>Applicable Rules/Acts/Regulations</h2>
            <div className='heading-line'></div>
            <Applicable cityName={cityName} />
            <h2 className='main-heading'>Eligibility/Pre-Licensing/Mandatory Pre-Requisites</h2>
            <div className='heading-line'></div>
            <Prerequisites cityName={cityName} />
            <h2 className='main-heading'>Different types of Environmental Clearance services we offer</h2>
            <div className='heading-line'></div>
            <Types cityName={cityName} />
            <h2 className='main-heading'>Documents Required for Environmental Clearance</h2>
            <div className='heading-line'></div>
            <DocumentRequired cityName={cityName} />
            <h2 className='main-heading'>Procedure to get Environmental Clearance</h2>
            <div className='heading-line'></div>
            <Procedure cityName={cityName} />
            <h2 className='main-heading'>Cancellation/Validity/ Renewal of the Environment Clearance Certificate</h2>
            <div className='heading-line'></div>
            <Certificate cityName={cityName} />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro  />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'Environmental Clearance Solutions'} state={state} Query={'environmental-clearance'} city={city} />
        </div>
    )
}
export default Home