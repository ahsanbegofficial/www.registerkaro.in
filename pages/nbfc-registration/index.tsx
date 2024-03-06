import Head from "next/head";
import { FaqTemplatePVT } from "../../components/child_components/FaqTemplatePVT";
import { WhyRegisterkaro } from "../../components/static/WhyRegisterkaro";
import { RegistrationLinks } from "../../components/child_components/RegistrationLinks";
import { Benefits } from "../../components/static/nbfc-registration/Benefits";
import { BusinessModel } from "../../components/static/nbfc-registration/BusinessModel";
import { Challenges } from "../../components/static/nbfc-registration/Challenges";
import { DocumentsRequired } from "../../components/static/nbfc-registration/DocumentsRequired";
import { Hero } from "../../components/static/nbfc-registration/Hero";
import { NBFCbased } from "../../components/static/nbfc-registration/NBFCbased";
import { NBFCsBasedAsset } from "../../components/static/nbfc-registration/NBFCsBasedAsset";
import { Prerequisites } from "../../components/static/nbfc-registration/Prerequisites";
import { Process } from "../../components/static/nbfc-registration/Process";
import { ProcessNbfc } from "../../components/static/nbfc-registration/ProcessNbfc";
import { Activities } from "../../components/static/nbfc-registration/Activities";

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
      "question": "How do I register as an NBFC?",
      "answer": "You may register the NBFC through the official website of the RBI. First and foremost, you will have to register your company under the Companies Act, and then you can move forward with the application through the RBI Portal."
  },
  {
      "question": "What is the cost of NBFC registration?",
      "answer": "NBFC Registration costs fall between the slab of Rs 3,50,000 to Rs. 15,00,000 depending upon the nature of the company, and the professional fee charged to register."
  },
  {
      "question": "What is the minimum capital for NBFC?",
      "answer": "The minimum capital for the NBFC is required to be minimum Rs 2 Crores under the company’s name."
  },
  {
      "question": "What is the eligibility of NBFC?",
      "answer": "For being eligible for the NBFC Registration, you must have a board with one third of directors possessing the expertise in the said domain, at least Rs 2 Crore of capital under the company’s name."
  },
  {
      "question": "Is it easy to start NBFC?",
      "answer": "The process of NBFC to begin is not easy if one is doing everything on his own. However, the process does become easier with the help of professionals or experts dealing in the same market."
  },
  {
      "question": "What are the types of NBFC?",
      "answer": "On the base level, there are NBFCs categorized on the basis of Size, Liabilities, and activities. One the basis of Activities, there are two forms of NBFCs called NBFC-SI & NBFC-ND. On the basis of Liabilities, there are two types: Deposit Taking NBFCs & Non-Deposit Taking NBFCs. At last, on the basis of size, there are eight types of NBFCs such as Asset Finance Company (AFC), Investment Company (IC), Loan Company (LC), Systemically Important Core Investment Company (CIC-ND-SI), Infrastructure Debt Fund: Non- Banking Financial Company, Non-Banking Financial Company – Micro Finance Institution (NBFC-MFI), Infrastructure Finance Company (IFC), and Non-Banking Financial Company – Factors (NBFC-Factors)."
  },
  {
      "question": "What are the documents required for NBFC Registration?",
      "answer": "The list of documents includes MoA, AoA, Directors’ details like PAN, TAN, Affidavits, Company PAN & Tan, Utility Bills, Board Resolution, Bank statements, Tax Return Filing documents, financial documents like balance sheets, etc."
  }
];


const Home = () => {
  return (
    <div className="services-pages nbfc-reg">
      <Head>
        <title>NBFC Registration| RegisterKaro</title>
        <meta name="description" content="The Official RegisterKaro" />
        <link rel="canonical" href="https://www.registerkaro.in/trademark-registration" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Trademark Registration | RegisterKaro" />
        <meta property="og:description" content="The Official RegisterKaro" />
      </Head>
      <Hero cityName={'India'} />
      <h1 className="main-heading">Understanding the NBFCs</h1>
      <div className="heading-line"></div>
      <Process cityName={'India'} />
      <h2 className="main-heading">Right Business Model to choose for NBFC Registration</h2>
      <div className="heading-line"></div>
      <BusinessModel cityName={'India'} />
      <h2 className="main-heading">NBFCs based on Liabilities</h2>
      <div className="heading-line"></div>
      <NBFCbased cityName={'India'} />
      <h2 className="main-heading">NBFCs based on Asset Size</h2>
      <div className="heading-line"></div>
      <NBFCsBasedAsset cityName={'India'} />
      <h2 className="main-heading">NBFCs based on Activities</h2>
      <div className="heading-line"></div>
      <Activities cityName={'India'} />
      <h2 className="main-heading">Benefits of NBFCs</h2>
      <div className="heading-line"></div>
      <Benefits cityName={'India'} />
      <h2 className="main-heading">Challenges faced in NBFC Registration</h2>
      <div className="heading-line"></div>
      <Challenges cityName={'India'} />
      <h2 className="main-heading">Prerequisites for NBFC Registration</h2>
      <div className="heading-line"></div>
      <Prerequisites cityName={'India'} />
      <h2 className="main-heading">Documents required for NBFC Registration</h2>
      <div className="heading-line"></div>
      <DocumentsRequired cityName={'India'} />
      <h2 className="main-heading">Process for NBFC Registration</h2>
      <div className="heading-line"></div>
      <ProcessNbfc cityName={'India'} />
      <h2 className="main-heading">Why RegisterKaro?</h2>
      <div className="heading-line"></div>
      <WhyRegisterkaro />
      <h2 className="main-heading">FAQs</h2>
      <div className="heading-line"></div>
      <FaqTemplatePVT faqItems={faq} />
      <div className='mb-4'></div>
      <RegistrationLinks formattedQuery={'NBFC Registration'} state={state} Query={'nbfc-registration'} city={city} />
    </div>
  );
};
export default Home;
