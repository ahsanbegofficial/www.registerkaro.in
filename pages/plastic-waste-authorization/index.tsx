import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Cancellation } from '../../components/static/plastic-waste-authorization/Cancellation'
import { DocumentsRequired } from '../../components/static/plastic-waste-authorization/DocumentsRequired'
import { Hero } from '../../components/static/plastic-waste-authorization/Hero'
import { MandatoryCompliance } from '../../components/static/plastic-waste-authorization/MandatoryCompliance'
import { Procedure } from '../../components/static/plastic-waste-authorization/Procedure'
import { Process } from '../../components/static/plastic-waste-authorization/Process'
import { RequirementsAuthorizationRules } from '../../components/static/plastic-waste-authorization/RequirementsAuthorizationRules'
import { ValidityRenewal } from '../../components/static/plastic-waste-authorization/ValidityRenewal'
import  WhoCan  from '../../components/static/plastic-waste-authorization/WhoCan'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
const faq = [
    {
        "question": "What is plastic waste authorization?",
        "answer": "It is a certification that allows businesses to legally collect, store, transport, process, or recycle plastic waste in India. Plastic waste refers to any discarded plastic material that has no further use or value. Plastic waste can pose serious threats to human health and the environment, as it can leach toxic chemicals, clog drains, choke animals, and pollute water bodies. Therefore, proper management and disposal of plastic waste is essential to prevent its adverse impacts."
    },
    {
        "question": "Who needs to obtain authorization?",
        "answer": "Any entity that is involved in the collection, storage, transport, processing, or recycling of plastic waste needs to obtain plastic waste authorization. The entity can be a company, a partnership firm, a society, a trust, an association, or an individual. The entity can be a producer, a consumer, a bulk consumer, a collection center, a processor, or a recycler of plastic waste."
    },
    {
        "question": "How to apply?",
        "answer": "The entity has to submit an online application form along with the necessary documents, such as the certificate of incorporation, the proof of ownership or lease of the premises, the details of the machinery and equipment, the environmental management plan, the consent to establish and operate, etc. The application has to be submitted to the concerned State Pollution Control Board (SPCB) or Union Territory Pollution Control Committee (UTPCC), if the entity is operational in one or two Indian States, or to the Central Pollution Control Board (CPCB), if the entity is operational in more than two Indian States."
    },
    {
        "question": "What are the fees and validity of authorization?",
        "answer": "The fees and validity of plastic waste authorization vary from state to state and depend on the type and capacity of the plastic waste activities undertaken by the entity. However, some sources indicate that there is no need to pay any fees along with the application, but only for the field inspection. Another source suggests that the plastic waste authorization is valid for a period of five years from the date of issue and can be renewed for another five years by submitting a renewal application at least 120 days before the expiry of the authorization."
    },
    {
        "question": "What are the compliance and reporting requirements for plastic waste authorization?",
        "answer": "The plastic waste authorization holder has to comply with the standards and guidelines issued by the CPCB and the MoEFCC for plastic waste management, such as the collection, storage, transport, processing, recycling, disposal, etc. The authorization holder also has to maintain records and registers of the plastic waste generated, processed, or recycled by them, such as the quantity, category, source, destination, mode of transportation, etc. The authorization holder also has to submit annual returns to the SPCB or UTPCC and the CPCB by the 31st day of January every year, containing the details of the plastic waste generated, processed, or recycled by them in the previous calendar year."
    },
    {
        "question": "What are the consequences of non-compliance with the authorization?",
        "answer": "The SPCB or UTPCC can cancel, suspend, or revoke the authorization if the authorization holder fails to comply with the conditions and terms of the authorization, fails to submit the annual returns or the renewal application, provides false or misleading information or documents, causes or is likely to cause environmental damage or harm to human health, or violates any provision of the Plastic Waste Management Rules, 2016 and 2018 or any other applicable law. The SPCB or UTPCC will issue a notice to the authorization holder, giving them an opportunity to show cause why the authorization should not be cancelled, suspended, or revoked. The SPCB or UTPCC will communicate the decision to the authorization holder and the CPCB within 15 days of the decision."
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


const Home = () => {
    return (
        <div className='services-pages plastic-waste-authorization-reg'>
           <Head>
                <title>Plastic Waste Authorization | RegisterKaro</title>
                <meta name="description" content="Plastic waste authorization allows businesses to legally collect, store, transport, process, or recycle plastic waste in India." />
                <link rel="canonical" href="https://www.registerkaro.in/plastic-waste-authorization" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Plastic Waste Authorization | RegisterKaro" />
                <meta property="og:description" content="Plastic waste authorization allows businesses to legally collect, store, transport, process, or recycle plastic waste in India." />
            </Head>
            <Hero cityName={'India'} />
            <h1 className='main-heading'>Get Plastic Waste Authorization in India</h1>
            <div className='heading-line'></div>
            <Process cityName={'India'}  />
            <h2 className='main-heading'>Who can apply?</h2>
            <div className='heading-line'></div>
            <WhoCan cityName={'India'} />
            <h2 className='main-heading'>Requirements for Authorization</h2>
            <div className='heading-line'></div>
            <RequirementsAuthorizationRules cityName={'India'} />
            <h2 className='main-heading'>What are the documents required for Plastic Waste Authorization?</h2>
            <div className='heading-line'></div>
            <DocumentsRequired cityName={'India'} />
            <h2 className='main-heading'>What is the procedure for Plastic Waste Authorization?</h2>
            <div className='heading-line'></div>
            <Procedure cityName={'India'} />
            <h2 className='main-heading'>What is the validity and renewal of Authorization?</h2>
            <div className='heading-line'></div>
            <ValidityRenewal cityName={'India'} />
            <h2 className='main-heading'>Cancellation, suspension, or revocation</h2>
            <div className='heading-line'></div>
            <Cancellation cityName={'India'} />
            <h2 className='main-heading'>What are the mandatory compliance?</h2>
            <div className='heading-line'></div>
            <MandatoryCompliance cityName={'India'} />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'Plastic Waste Authorization'} state={state} Query={'plastic-waste-authorization'} city={city} />
        </div>
    )
}
export default Home