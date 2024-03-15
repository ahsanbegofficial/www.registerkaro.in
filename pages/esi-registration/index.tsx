import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { AdvantagesBIS } from '../../components/static/esi-registration/AdvantagesBIS'
import { DocsREquired } from '../../components/static/esi-registration/DocsRequired'
import { EventBased } from '../../components/static/esi-registration/EventBased'
import { Hero } from '../../components/static/esi-registration/Hero'
import { KeyInitiatives } from '../../components/static/esi-registration/KeyInitiatives'
import { ObjectivesChecklist } from '../../components/static/esi-registration/ObjectivesChecklist'
import { OtherAnnual } from '../../components/static/esi-registration/OtherAnnual'
import { Process } from '../../components/static/esi-registration/Process'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'




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
        "question": "What is ESI registration?",
        "answer": "It is the process of registering a business entity under the Employee State Insurance Act, of 1948, to provide medical and social security benefits to employees."
    },
    {
        "question": "Who needs to register for ESI?",
        "answer": "Any establishment or business entity having 10 or more employees (20 or more in certain states) must register for ESI."
    },
    {
        "question": "Can establishments with fewer employees voluntarily register for ESI?",
        "answer": "Yes, establishments with less than the prescribed number of employees can voluntarily register for ESI."
    },
    {
        "question": "What benefits do employees receive under ESI?",
        "answer": "Employees covered under ESI are entitled to medical benefits, sickness benefits, maternity benefits, disablement benefits, dependent benefits, and funeral expenses."
    },
    {
        "question": "How can I apply for ESI registration?",
        "answer": "You can apply for the same online through the ESIC (Employee State Insurance Corporation) portal or by visiting the nearest ESIC office."
    },
    {
        "question": "What documents are required for the registration?",
        "answer": "The documents required for the registration include the registration certificate of the establishment, address proof, PAN card, salary details of employees, and bank account details."
    },
    {
        "question": "What is the time limit for the registration of ESI after the establishment becomes eligible?",
        "answer": "This registration must be done within 15 days from the date the establishment becomes eligible for registration."
    },
    {
        "question": "Is it mandatory for employees to contribute to ESI?",
        "answer": "Yes, both the employer and employees are required to contribute to ESI. The contribution rates are shared between them."
    },
    {
        "question": "How is the ESI contribution calculated?",
        "answer": "The contribution towards ESI is calculated as a percentage of the employee’s wages, where the employee’s contribution is deducted from their wages and the employer contributes the remaining portion."
    },
    {
        "question": "What is the due date for the ESI contribution payment?",
        "answer": "ESI contributions must be paid by the 15th of every month for the previous month’s wages."
    },
    {
        "question": "Can the ESI registration be canceled?",
        "answer": "Yes, if an establishment ceases to exist or no longer falls within the purview of ESI, the registration can be canceled."
    },
    {
        "question": "Can a registered establishment change its address?",
        "answer": "Yes, a registered establishment can request a change in address by submitting the required documents to the appropriate ESIC office."
    },
    {
        "question": "What are the consequences of non-compliance with ESI regulations?",
        "answer": "Non-compliance with ESI regulations may lead to penalties, fines, or legal actions imposed by the authorities."
    },
    {
        "question": "Is ESI registration applicable to all states in India?",
        "answer": "Yes, ESI registration is applicable to all states and union territories of India."
    },
    {
        "question": "Can an establishment with branches in multiple locations have a single ESI registration?",
        "answer": "Yes, an establishment with branches in multiple locations can have a single ESI registration if the branches are covered under the same registration."
    },
    {
        "question": "Is it mandatory to renew the ESI registration?",
        "answer": "No, this registration does not require renewal. Once registered, it is valid until the establishment is eligible and compliant with ESI regulations."
    }
]

const Home = () => {
    return (
        <div className='services-pages esi-registration-reg'>
            <Head>
                <title>ESI Registration | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/esi-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="ESI Registration | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero cityName={'India'} />
            <h1 className='main-heading'>Get Online ESI Registration Now!</h1>
            <div className='heading-line'></div>
            <Process cityName={'India'} />
            <h1 className='main-heading'>Benefits of ESI Registration in India</h1>
            <div className='heading-line'></div>
            <EventBased cityName={'India'}/>
            <h1 className='main-heading'>Various Entities covered under ESIC</h1>
            <div className='heading-line'></div>
            <ObjectivesChecklist cityName={'India'}/>
            <h1 className='main-heading'>What is the Eligibility for ESI Registration in India?Various Entities covered under ESIC</h1>
            <div className='heading-line'></div>
            <OtherAnnual cityName={'India'}/>
            <h1 className='main-heading'>What are the vital documents required for online ESI Registration in India?</h1>
            <div className='heading-line'></div>
            <KeyInitiatives cityName={'India'}/>
            <h1 className='main-heading'>Procedure for Online ESI Registration</h1>
            <div className='heading-line'></div>
            <AdvantagesBIS cityName={'India'}/>           
            <h1 className='main-heading'>Compliance and Returns after ESI Registration in India</h1>
            <div className='heading-line'></div>
            <DocsREquired cityName={'India'}/>
            <h1 className="main-heading">Why RegisterKaro?</h1>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h1 className="main-heading">FAQs</h1>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'ESI Registration'} state={state} Query={'esi-registration'} city={city} />
        </div>
    )
}
export default Home