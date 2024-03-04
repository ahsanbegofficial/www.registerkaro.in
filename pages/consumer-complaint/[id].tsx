import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Eligibility } from '../../components/static/consumer-complaints/Eligibility'
import { Challenges } from '../../components/static/consumer-complaints/Challenges'
import { Hero } from '../../components/static/consumer-complaints/Hero'
import { HowCanRegisterKaro } from '../../components/static/consumer-complaints/HowCanRegisterKaro'
import { Process } from '../../components/static/consumer-complaints/Process'
import { StepsForFilling } from '../../components/static/consumer-complaints/StepsForFilling'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { CustomDefault } from '../../components/child_components/CustomDefault'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ChooseRegisterKaro } from '../../components/static/consumer-complaints/ChooseRegisterKaro'


const faq = [
    {
        "question": "Who can file a Consumer complaint?",
        "answer": "Any individual, a group of individuals, relatives/legal heirs of a deceased consumer, company, registered volunteer organization, or central/state government rendering a service or purchasing a product from a vendor is eligible to file a consumer complaint."
    },
    {
        "question": "When can a consumer file a complaint?",
        "answer": "In the event of the purchase of a product or services rendered, a consumer can file a complaint if faced with any dissatisfaction, harm to self, body, image, etc."
    },
    {
        "question": "Does RegisterKaro also help file cases in consumer court?",
        "answer": "Yes, RegisterKaro helps in filing cases in consumer court. The filing of the case depends upon the matter, nature, and claim of the case, meaning to which court the case will be filed."
    },
    {
        "question": "Can a Consumer court decision be challenged?",
        "answer": "Yes, the decisions rendered by the consumer court can be challenged if any party feels dissatisfaction with the judgment rendered. The case may be challenged in the Supreme Court within thirty days of the order passed, which is the limitation period for the challenge of the judgment rendered by the consumer court."
    },
    {
        "question": "What are the punishments under the Consumer Protection Act?",
        "answer": "In case of a case filed against a vendor or supplier, and the court renders a judgment against the respective company or individual, then in such circumstances, then such party will be subject to imprisonment for one month, which can extend up to three years, varying as per the gravity of the case."
    },
    {
        "question": "Can a customer claim compensation from a company?",
        "answer": "Yes, a customer can claim compensation from a company in case the customer has availed their services of a purchased product and is dissatisfied with the quality of the same."
    },
    {
        "question": "Where to register consumer complaints?",
        "answer": "You can file your case in the consumer court or the forum. The selection of the forum for filing the complaint depends on the nature and claim of the consumer complaint."
    },
    {
        "question": "Do you need any proof to support your consumer complaint?",
        "answer": "Yes, there is a requirement of proof up to a certain level, which is used to substantiate your matter to be proven before the forum."
    },
    {
        "question": "Within how much time do I need to challenge the judgment passed by the consumer court?",
        "answer": "You have to file a challenge to the judgment passed by the consumer court in the supreme court within the limitation period, which is 30 days from the date of the judgment passed."
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

    const cityFromQuery = query?.replace('consumer-complaint-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages consumer-complaint-reg'>
            <Head>
                <title>Consumer Complaint | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/consumer-complaint" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Consumer Complaint | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero cityName={cityName} />
            <h1 className='main-heading'>Know a brief on Consumer Complaints</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName} />
            <h1 className='main-heading'>Eligibility to file a complaint</h1>
            <div className='heading-line'></div>
            <Eligibility cityName={cityName} />
            <h1 className='main-heading'>Challenges you might face in filing a Consumer complaint</h1>
            <div className='heading-line'></div>
            <Challenges cityName={cityName} />
            <h1 className='main-heading'>Steps for filing a Consumer Complaint</h1>
            <div className='heading-line'></div>
            <StepsForFilling cityName={cityName} />
            <h1 className='main-heading'>How can RegisterKaro assist you?</h1>
            <div className='heading-line'></div>
            <HowCanRegisterKaro cityName={cityName} />
            <h1 className='main-heading'>Why to choose RegisterKaro?</h1>
            <div className='heading-line'></div>
            <ChooseRegisterKaro cityName={cityName} />
            <h1 className="main-heading">Why RegisterKaro?</h1>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h1 className="main-heading">FAQs</h1>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'Consumer Complaints'} state={state} Query={'consumer-complaint'} city={city} />
        </div>
    )
}
export default Home