import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { CancellationValid } from '../../components/static/pro-authorization/CancellationValid'
import { Eligibility } from '../../components/static/pro-authorization/Eligibility'
import { Hero } from '../../components/static/pro-authorization/Hero'
import { LegalFramework } from '../../components/static/pro-authorization/LegalFramework'
import { MandatoryCompliance } from '../../components/static/pro-authorization/MandatoryCompliance'
import { ProcedureObtaining } from '../../components/static/pro-authorization/ProcedureObtaining'
import { Process } from '../../components/static/pro-authorization/Process'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'
import { CustomDefault } from '../../components/child_components/CustomDefault'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const faq = [
    {
        "question": "What is pro authorization?",
        "answer": "Pro authorization refers to the advanced level of access granted to authorized users, allowing them to utilize premium features or perform privileged actions within a system."
    },
    {
        "question": "How is pro authorization different from regular authorization?",
        "answer": "This authorization provides extended permissions beyond standard access, offering users more advanced functionalities and control within a given platform or application."
    },
    {
        "question": "Who typically needs pro authorization?",
        "answer": "Pro authorization is designed for users with specific roles, responsibilities, or requirements that demand elevated access levels, such as administrators, managers, or power users."
    },
    {
        "question": "What are the key benefits of pro authorization?",
        "answer": "Pro authorization offers enhanced capabilities, increased control over settings, and access to premium features, enabling users to make more significant contributions or manage advanced aspects of a system."
    },
    {
        "question": "How is pro authorization managed?",
        "answer": "Pro authorization is usually managed through an administrative interface or a designated access control system, where authorized personnel can assign, modify, or revoke pro-level permissions."
    },
    {
        "question": "Can pro authorization be customized for different user roles?",
        "answer": "Yes, pro authorization is often configurable, allowing administrators to tailor access levels based on specific user roles, ensuring a finely tuned security and functionality balance."
    },
    {
        "question": "Are there security considerations with the authorization?",
        "answer": "Security is paramount with the authorization. It’s crucial to implement robust authentication measures, regularly audit permissions, and employ encryption to safeguard sensitive data accessed through pro-level accounts."
    },
    {
        "question": "How is pro authorization granted or revoked?",
        "answer": "Pro authorization is typically granted by administrators or through an approval process. Likewise, revocation can be done by administrators based on changes in user roles or security requirements."
    },
    {
        "question": "Can pro authorization be time-limited?",
        "answer": "Yes, some systems allow administrators to set time-limited pro authorization, providing temporary elevated access for specific tasks or projects."
    },
    {
        "question": "Is training required for users with authorization?",
        "answer": "Training is often recommended for users with pro authorization to ensure they understand the extended functionalities and responsibilities associated with their elevated access."
    },
    {
        "question": "What happens if there’s a breach involving a pro-authorized account?",
        "answer": "In the event of a breach, immediate action is essential. This may involve suspending the pro authorization, investigating the breach, and implementing additional security measures to prevent further unauthorized access."
    },
    {
        "question": "Can pro authorization be integrated with single sign-on (SSO) systems?",
        "answer": "Yes, many systems support integration with SSO solutions, streamlining the authentication process and ensuring a consistent and secure user experience across platforms."
    },
    {
        "question": "Are there compliance considerations with pro authorization?",
        "answer": "Absolutely. Depending on the industry and regulatory environment, pro authorization processes must align with compliance standards to safeguard sensitive information and maintain data integrity."
    },
    {
        "question": "Can authorization be monitored in real-time?",
        "answer": "Monitoring tools are often in place to track and log pro authorization activities in real-time, allowing administrators to promptly detect and respond to any unusual or unauthorized actions."
    },
    {
        "question": "Are there scalability options for the authorization systems?",
        "answer": "Pro authorization systems are designed with scalability in mind, allowing them to accommodate the growing needs of an organization by easily adding or adjusting pro-level access for new users or expanding functionalities."
    },
    {
        "question": "How does authorization enhance user productivity?",
        "answer": "This authorization empowers users with advanced tools and features, streamlining workflows and enabling them to accomplish tasks more efficiently, ultimately contributing to increased productivity and effectiveness."
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

    const cityFromQuery = query?.replace('pro-authorization-in-', '');
    const cityString = cityFromQuery ? cityFromQuery.slice(0) : '';
    const cityName = formatString(cityString)
    const isCityValid = city.includes(cityString) || state.includes(cityString)
    if (!isCityValid) {
        return <CustomDefault />;
    }

    return (
        <div className='services-pages pro-authorization-reg'>
           <Head>
                <title>PRO Authorization | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/pro-authorization" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="PRO Authorization | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero cityName={cityName} />
            <h1 className='main-heading'>Get Online PRO Authorization in {cityName}</h1>
            <div className='heading-line'></div>
            <Process cityName={cityName}  />
            <h2 className='main-heading'>Legal Framework for PRO Authorization </h2>
            <div className='heading-line'></div>
            <LegalFramework cityName={cityName} />
            <h2 className='main-heading'>Eligibility/ Pre-Licensing/ Mandatory Prerequisites</h2>
            <div className='heading-line'></div>
            <Eligibility cityName={cityName} />
            <h2 className='main-heading'>Procedure for Obtaining PRO Authorization</h2>
            <div className='heading-line'></div>
            <ProcedureObtaining cityName={cityName} />
            <h2 className='main-heading'>Cancellation/Validity/Renewal of the PRO Authorization</h2>
            <div className='heading-line'></div>
            <CancellationValid cityName={cityName} />
            <h2 className='main-heading'>Mandatory Compliance after getting PRO Authorization</h2>
            <div className='heading-line'></div>
            <MandatoryCompliance cityName={cityName} />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <RegistrationLinks formattedQuery={'PRO Authorization'} state={state} Query={'pro-authorization'} city={city} />
        </div>
    )
}
export default Home