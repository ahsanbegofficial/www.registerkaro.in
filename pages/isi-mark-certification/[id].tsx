import React, { useEffect } from 'react'
import Head from 'next/head'
import { Hero } from '../../components/static/isi-mark-certification/Hero'
import { Process } from '../../components/static/isi-mark-certification/Process'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Benefits } from '../../components/static/isi-mark-certification/Benefits'
import { PartnershipDeed } from '../../components/static/isi-mark-certification/PartnershipDeed'
import { OtherAnnual } from '../../components/static/isi-mark-certification/OtherAnnual'
import { EventBased } from '../../components/static/isi-mark-certification/EventBased'
import { KeyInitiatives } from '../../components/static/isi-mark-certification/KeyInitiatives'
import { ObjectivesChecklist } from '../../components/static/isi-mark-certification/ObjectivesChecklist'
import { AdvantagesBIS } from '../../components/static/isi-mark-certification/AdvantagesBIS'
import  Checklist  from '../../components/static/isi-mark-certification/Checklist'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { CustomDefault } from '../../components/child_components/CustomDefault'
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

    const cityFromQuery = query?.replace('isi-mark-certification-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages isi-mark-certification-reg'>
           <Head>
                <title>ISI mark certification- Fees, Process & Documents</title>
                <meta name="description" content="Get ISI Mark Certification hassle-free with RegisterKaro. Our expert team ensures your products meet stringent quality standards. Boost consumer trust and compliance effortlessly. Register now!" />
                <link rel="canonical" href="https://www.registerkaro.in/isi-mark-certification" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="ISI mark certification- Fees, Process & Documents" />
                <meta property="og:description" content="Get ISI Mark Certification hassle-free with RegisterKaro. Our expert team ensures your products meet stringent quality standards. Boost consumer trust and compliance effortlessly. Register now!" />
            </Head>
            <Hero cityName={cityName}  />
            <h1 className='main-heading'>Get ISI Mark Certification Online in {cityName}</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName}  />
            <h2 className='main-heading'>Primary Objectives of ISI Certification</h2>
            <div className='heading-line'></div>
            <EventBased cityName={cityName} />
            <h2 className='main-heading'>Key Points to Consider for ISI Mark Certification</h2>
            <div className='heading-line'></div>
            <Checklist cityName={cityName} />
            <h2 className='main-heading'>Benefits of Obtaining ISI Mark Certification</h2>
            <div className='heading-line'></div>
            <Benefits cityName={cityName} />
            <h2 className='main-heading'>List of Products under ISI Certification</h2>
            <div className='heading-line'></div>
            <ObjectivesChecklist cityName={cityName} />
            <h2 className='main-heading'>Documents Required for ISI Mark Certification</h2>
            <div className='heading-line'></div>
            <KeyInitiatives cityName={cityName} />
            <h2 className='main-heading'>Procedure for ISI Mark Certification in {cityName}</h2>
            <div className='heading-line'></div>
            <AdvantagesBIS cityName={cityName} />
            <h2 className='main-heading'>Validity and Renewal of ISI Certificate</h2>
            <div className='heading-line'></div>
            <PartnershipDeed cityName={cityName} />
            <h2 className='main-heading'>Reasons for ISI Application Rejection</h2>
            <div className='heading-line'></div>
            <OtherAnnual/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <RegistrationLinks formattedQuery={'ISI Mark Certification'} state={state} Query={'isi-mark-certification'} city={city} />
        </div>
    )
}
export default Home