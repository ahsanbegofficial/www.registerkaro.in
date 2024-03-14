import React, { useEffect } from 'react'
import Head from 'next/head'
import { Hero } from '../../components/static/llp-compilance/Hero'
import { Process } from '../../components/static/llp-compilance/Process'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Benefits } from '../../components/static/llp-compilance/Benefits'
import { Compilance } from '../../components/static/llp-compilance/Compilance'
import { PartnershipDeed } from '../../components/static/llp-compilance/PartnershipDeed'
import { WhatConseq } from '../../components/static/llp-compilance/WhatConseq'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { useRouter } from 'next/router'
import { CustomDefault } from '../../components/child_components/CustomDefault'

const faq = [
    {
        "question": "What is annual compliance for an LLP?",
        "answer": "Annual compliance for an LLP involves filing various forms and documents with regulatory authorities to meet legal requirements."
    },
    {
        "question": "When is the due date for filing annual compliance forms?",
        "answer": "The due date for filing annual compliance forms typically depends on the LLP’s financial year-end. It’s usually within 30 days from the end of the financial year."
    },
    {
        "question": "What forms need to be filed for annual compliance?",
        "answer": "Commonly, Form 8 (Statement of Account & Solvency) and Form 11 (Annual Return) need to be filed for annual compliance."
    },
    {
        "question": "Can the due date for annual compliance filing be extended?",
        "answer": "In some cases, you can apply for an extension of the due date, but this may attract additional fees and penalties."
    },
    {
        "question": "What is Form 8?",
        "answer": "Form 8 is the Statement of Account & Solvency that provides details about the financial position and solvency of the LLP."
    },
    {
        "question": "What is Form 11?",
        "answer": "Form 11 is the Annual Return that contains information about the LLP’s partners, address, and capital structure."
    },
    {
        "question": "Are there any penalties for the late filing of annual compliance forms?",
        "answer": "Yes, late filing can result in penalties. The amount of the penalty increases the longer the forms are delayed."
    },
    {
        "question": "Can LLPs apply for an exemption from filing annual compliance forms?",
        "answer": "LLPs with a turnover below a certain threshold may be eligible for exemption from filing these forms."
    },
    {
        "question": "What is the consequence of not filing annual compliance forms?",
        "answer": "Non-filing of annual compliance forms can lead to fines, penalties, and even the potential for the LLP to be struck off the register."
    },
    {
        "question": "Can changes to LLP details be made while filing annual compliance forms?",
        "answer": "Yes, you can update changes to partner details, registered office address, and other relevant information while filing these forms."
    },
    {
        "question": "Can annual compliance forms be revised after submission?",
        "answer": "No, once submitted, the forms cannot be revised. Accurate information must be provided during the initial submission."
    },
    {
        "question": "Are there any documents that need to be attached along with the annual compliance forms?",
        "answer": "Generally, documents such as financial statements, bank statements, and partner details are required as attachments."
    },
    {
        "question": "Can a designated partner sign the annual compliance forms digitally?",
        "answer": "Yes, the forms can be digitally signed by the designated partner or authorized signatory."
    },
    {
        "question": "What is the LLP Identification Number (LLPIN) and where can it be found?",
        "answer": "The LLPIN is a unique identification number assigned to an LLP. It can be found on the LLP registration certificate."
    },
    {
        "question": "Is an LLP required to hold an Annual General Meeting (AGM)?",
        "answer": "LLPs are not required to hold an AGM. However, they must file annual compliance forms."
    },
    {
        "question": "Are there any changes in annual compliance requirements due to recent regulatory updates?",
        "answer": "It’s important to stay updated with the latest regulations as compliance requirements can change over time. Always consult a professional for accurate information."
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

    const cityFromQuery = query?.replace('llp-compliance-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages llp-compilance-reg '>
            <Head>
                <title>LLP Compliance | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/llp-compliance" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="LLP Compliance | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero cityName={cityName} />
            <h1 className='main-heading'>LLP Compliance in {cityName}</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName} />
            <h1 className='main-heading'>What are LLP (Second Amendment) Rules, 2022?</h1>
            <div className='heading-line'></div>
            <Compilance />
            <h1 className='main-heading'>Benefits of LLP Compliance in {cityName}</h1>
            <div className='heading-line'></div>
            <Benefits cityName={cityName}/>
            <h1 className='main-heading'>Mandatory Compliance for LLP in {cityName}</h1>
            <div className='heading-line'></div>
            <PartnershipDeed cityName={cityName}/>
            <h1 className='main-heading'>What are the Consequences of Non-Compliance for LLPs?</h1>
            <div className='heading-line'></div>
            <WhatConseq />
            <h1 className="main-heading">Why RegisterKaro?</h1>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h1 className="main-heading">FAQs</h1>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'LLP Compliance'} state={state} Query={'llp-compliance'} city={city} />
        </div>
    )
}
export default Home