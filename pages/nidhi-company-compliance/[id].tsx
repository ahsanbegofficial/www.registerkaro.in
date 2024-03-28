import Head from 'next/head'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Hero } from '../../components/static/nidhi-company-compliance/Hero'
import { Process } from '../../components/static/nidhi-company-compliance/Process'
import What from '../../components/static/nidhi-company-compliance/What'
import Advantages from '../../components/static/nidhi-company-compliance/Advantages'
import Vital from '../../components/static/nidhi-company-compliance/Vital'
import Incorporation from '../../components/static/nidhi-company-compliance/Incorporation'
import PostIncorporation from '../../components/static/nidhi-company-compliance/PostIncorporation'
import ListofAnnual from '../../components/static/nidhi-company-compliance/ListofAnnual'
import Penalties from '../../components/static/nidhi-company-compliance/Penalties'
import Event from '../../components/static/nidhi-company-compliance/Event'
import NewComplianceRules from '../../components/static/nidhi-company-compliance/NewComplianceRules'
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

    const cityFromQuery = query?.replace('nidhi-company-compliance-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages nidhi-comp-compliance-reg'>
            <Head>
                <title>Ensure Nidhi Company Compliance | Registerkaro</title>
                <meta name="description" content="Partner with Rergisterkaro for Nidhi Company compliance mastery. Click here to know Benefits, Requirements, Documents, and Process." />
                <link rel="canonical" href="https://www.registerkaro.in/nidhi-company-compliance" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Ensure Nidhi Company Compliance | Registerkaro" />
                <meta property="og:description" content="Partner with Rergisterkaro for Nidhi Company compliance mastery. Click here to know Benefits, Requirements, Documents, and Process." />
            </Head>
            <Hero cityName={cityName} />
            <h1 className='main-heading'>Nidhi Company Compliance – A Complete Analysis</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName} />
            <h2 className='main-heading'>What are Nidhi Companies?</h2>
            <div className='heading-line'></div>
            <What cityName={cityName} />
            <h2 className='main-heading'>Key Advantages of a Nidhi Company in {cityName}</h2>
            <div className='heading-line'></div>
            <Advantages cityName={cityName} />
            <h2 className='main-heading'>Some Vital Nidhi Company Compliance</h2>
            <div className='heading-line'></div>
            <Vital cityName={cityName} />
            <h2 className='main-heading'>Pre-Incorporation Compliance</h2>
            <div className='heading-line'></div>
            <Incorporation cityName={cityName} />
            <h2 className='main-heading'>Post-Incorporation Nidhi Company Compliance</h2>
            <div className='heading-line'></div>
            <PostIncorporation cityName={cityName} />
            <h2 className='main-heading'>List of Annual Nidhi Company Compliance</h2>
            <div className='heading-line'></div>
            <ListofAnnual cityName={cityName} />
            <h2 className='main-heading'>Penalties</h2>
            <div className='heading-line'></div>
            <Penalties cityName={cityName} />
            <h2 className='main-heading'>Event-Based Compliance</h2>
            <div className='heading-line'></div>
            <Event cityName={cityName} />
            <h2 className='main-heading'>New Compliance Rules for Nidhi Companies</h2>
            <div className='heading-line'></div>
            <NewComplianceRules cityName={cityName} />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <RegistrationLinks formattedQuery={'Nidhi Company Compliance '} state={state} Query={'nidhi-company-compliance'} city={city} />
        </div>
    )
}
export default Home