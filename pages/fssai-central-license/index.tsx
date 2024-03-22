import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { AdvantagesAcquiring } from '../../components/static/fssai-central-license/AdvantagesAcquiring'
import { BusinessesRequiring } from '../../components/static/fssai-central-license/BusinessesRequiring'
import { FundamentalDuties } from '../../components/static/fssai-central-license/FundamentalDuties'
import { Hero } from '../../components/static/fssai-central-license/Hero'
import { ProceduresObtaining } from '../../components/static/fssai-central-license/ProceduresObtaining'
import { Process } from '../../components/static/fssai-central-license/Process'
import { RequiredDocuments } from '../../components/static/fssai-central-license/RequiredDocuments'
import { RequirementsObtaining } from '../../components/static/fssai-central-license/RequirementsObtaining'
import { ValidityRenewal } from '../../components/static/fssai-central-license/ValidityRenewal'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'

const faq =
[
    {
        "question": "What is the FSSAI Central License, and who needs to obtain it?",
        "answer": "The FSSAI Central License is a mandatory license issued by the Food Safety and Standards Authority of India (FSSAI). It is required for businesses involved in food manufacturing, processing, packaging, storage, distribution, and wholesale with an annual turnover exceeding Rs. 20 crores."
    },
    {
        "question": "How long is the FSSAI Central License valid, and how can it be renewed?",
        "answer": "The FSSAI Central License is typically issued for a period ranging from 1 to 5 years. To renew the license, businesses must submit the necessary documents and fees to the FSSAI before the expiration date."
    },
    {
        "question": "What are the key activities covered under the FSSAI Central License?",
        "answer": "The license covers a broad spectrum of food-related activities, including manufacturing, processing, packaging, storage, transportation, distribution, and wholesale. It ensures that businesses at various stages of the food supply chain adhere to prescribed standards."
    },
    {
        "question": "What are the compliance requirements for obtaining an FSSAI Central License?",
        "answer": "Businesses must comply with Good Manufacturing Practices (GMP), Good Hygienic Practices (GHP), and implement a Food Safety Management System (FSMS). Adherence to these standards is crucial for obtaining and maintaining the license."
    },
    {
        "question": "How does the FSSAI Central License contribute to food safety and quality control?",
        "answer": "The license mandates regular inspections, audits, and quality control measures to ensure that food products meet the specified standards. It also requires the implementation of traceability systems for quick recall in case of safety concerns."
    },
    {
        "question": "Is the FSSAI Central License applicable to all businesses in the food industry?",
        "answer": "No, the FSSAI Central License is specifically applicable to businesses with an annual turnover exceeding Rs. 20 crores. Smaller businesses may need to obtain the FSSAI State License or the Basic Registration, depending on their scale of operations."
    },
    {
        "question": "What are the consequences of not obtaining or renewing the FSSAI Central License?",
        "answer": "Non-compliance with the FSSAI regulations, including failure to obtain or renew the FSSAI Central License, can result in severe penalties, including fines and closure of the business. It is essential for businesses to adhere to the regulatory requirements to avoid legal complications."
    },
    {
        "question": "How does having an FSSAI Central License benefit businesses in the food industry?",
        "answer": "Holding an FSSAI Central License enhances consumer confidence, facilitates market access and expansion, ensures legal compliance, and is often a prerequisite for international trade. It serves as a mark of credibility and reliability in the food industry."
    },
    {
        "question": "What role does labeling play in FSSAI Central License compliance?",
        "answer": "The license mandates strict adherence to labeling requirements, including providing accurate information about ingredients, nutritional content, allergens, and other essential details on the food packaging. Clear and comprehensive labeling contributes to informed consumer choices."
    },
    {
        "question": "Can businesses engaged in food export benefit from the FSSAI Central License?",
        "answer": "Yes, businesses involved in the export of food products can benefit from the FSSAI Central License, as it enhances the acceptability of Indian food products in the global market. It demonstrates compliance with international standards and regulations."
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

const Home = () => {
    return (
        <div className='services-pages fssai-central-license-reg'>
           <Head>
                <title>FSSAI Central License | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/fssai-central-license" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="FSSAI Central License | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero  cityName={'India'}/>
            <h1 className='main-heading'>FSSAI Central License</h1>
            <div className='heading-line'></div>
            <Process cityName={'India'} />
            <h2 className='main-heading'>Fundamental Duties and Functions performed by FSSAI</h2>
            <div className='heading-line'></div>
            <FundamentalDuties cityName={'India'}/>
            <h2 className='main-heading'>Businesses Requiring Mandatory FSSAI License</h2>
            <div className='heading-line'></div>
            <BusinessesRequiring cityName={'India'}/>  
            <h2 className='main-heading'>Advantages of Acquiring an FSSAI Central License</h2>
            <div className='heading-line'></div>
            <AdvantagesAcquiring cityName={'India'}/>
            <h2 className='main-heading'>Requirements for Obtaining FSSAI Central License</h2>
            <div className='heading-line'></div>
            <RequirementsObtaining cityName={'India'}/>
            <h2 className='main-heading'>Required Documents for Obtaining FSSAI Central License</h2>
            <div className='heading-line'></div>
            <RequiredDocuments cityName={'India'}/>
            <h2 className='main-heading'>Procedures for Obtaining FSSAI Central License</h2>
            <div className='heading-line'></div>
            <ProceduresObtaining cityName={'India'}/>
            <h2 className='main-heading'>Validity and Renewal of FSSAI Central License</h2>
            <div className='heading-line'></div>
            <ValidityRenewal cityName={'India'}/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'FSSAI Central License'} state={state} Query={'fssai-central-license'} city={city} />
        </div>
    )
}
export default Home