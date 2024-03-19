import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Application } from '../../components/static/drug-liecense/Application'
import { Basic } from '../../components/static/drug-liecense/Basic'
import { DocumentsRequired } from '../../components/static/drug-liecense/DocumentsRequired'
import { Fees } from '../../components/static/drug-liecense/Fees'
import { Hero } from '../../components/static/drug-liecense/Hero'
import { HowRegisterKaro } from '../../components/static/drug-liecense/HowRegisterKaro'
import { Process } from '../../components/static/drug-liecense/Process'
import { ProcessCompany } from '../../components/static/drug-liecense/ProcessCompany'
import { Types } from '../../components/static/drug-liecense/Types'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { CustomDefault } from '../../components/child_components/CustomDefault'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


const faq = [
    {
        "question": "What is a drug license?",
        "answer": "A drug license gives you the ability to operate a drug, medicine, or cosmetic business in accordance with the Drugs and Cosmetic Act. Such a license is granted by the Central or State Drug Standard Control Organization in accordance with the Drugs and Cosmetics Act of 1940."
    },
    {
        "question": "Who needs a drug license in India?",
        "answer": "All manufacturers as defined by the Drugs and Cosmetics Act 1940 that deal with ayurvedic, allopathic, cosmetics, pharmaceuticals, etc."
    },
    {
        "question": "What are the qualifications for obtaining a drug license?",
        "answer": "With a focus on clinical pharmacology or microbiology, a graduate degree in pharmacy, pharmaceutical sciences, or medicine from an Indian institution founded by law is required. Additionally, two years of experience in the production, testing, regulation, or design of medical devices are required."
    },
    {
        "question": "How long is a drug license valid for?",
        "answer": "The cost of a license to manufacture pharmaceuticals is now set at Rs 6,000 for a duration of five years. A fee of Rs 1,500 will also be applied for the examination of the premises before a license is granted or renewed."
    },
    {
        "question": "Who controls drugs in India?",
        "answer": "The National Regulatory Authority (NRA) of India is the Central Drugs Standard Control Organization (CDSCO), which is housed inside the Directorate General of Health Services, Ministry of Health & Family Welfare."
    },
    {
        "question": "What is Form 21B for drug license?",
        "answer": "Permission to sell and distribute medications listed in Schedule C & C (1) of the medications & Cosmetics Act and Rules is granted to wholesalers via Form 21B."
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
  
    const cityFromQuery = query?.replace('drug-license-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }
  
    return (
        <div className='services-pages drug-license-reg'>
            <Head>
             <title>Drug License | RegisterKaro</title>
             <meta name="description" content="The Official RegisterKaro" />
             <link rel="canonical" href="https://www.registerkaro.in/drug-license" />
             <link rel="icon" href="/favicon.ico" />
             <meta property="og:title" content="Drug License | RegisterKaro" />
             <meta property="og:description" content="The Official RegisterKaro" />
           </Head>
            <Hero cityName={cityName} />
            <h1 className='main-heading'>A quick overview on Drug License</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName} />
            <h1 className='main-heading'>Basic pre-requisites for a drug license</h1>
            <div className='heading-line'></div>
            <Basic cityName={cityName} />
            <h1 className='main-heading'>Who may submit a drug license application?</h1>
            <div className='heading-line'></div>
            <Application cityName={cityName} />
            <h1 className='main-heading'>Types of Drug License Registration</h1>
            <div className='heading-line'></div>
            <Types cityName={cityName}/>
            <h1 className='main-heading'>Documents requirement for Drug License in {cityName}</h1>
            <div className='heading-line'></div>
            <DocumentsRequired cityName={cityName}/>
            <h1 className='main-heading'>Drug License Registration process in {cityName}</h1>
            <div className='heading-line'></div>
            <ProcessCompany cityName={cityName} />
            <h1 className='main-heading'>Fees for drug license registration</h1>
            <div className='heading-line'></div>
            <Fees cityName={cityName} />
            <h1 className='main-heading'>How RegisterKaro helps you in getting Drug License?</h1>
            <div className='heading-line'></div>
            <HowRegisterKaro cityName={cityName}/>
            <h1 className="main-heading">Why RegisterKaro?</h1>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h1 className="main-heading">FAQs</h1>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'Drug License'} state={state} Query={'drug-license'} city={city} />
        </div>
    )
}
export default Home