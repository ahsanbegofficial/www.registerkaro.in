import Head from "next/head";
import { FaqTemplatePVT } from "../../components/child_components/FaqTemplatePVT";
import { WhyRegisterkaro } from "../../components/static/WhyRegisterkaro";
import { Benefits } from "../../components/static/trademark/Benefits";
import { Checklist } from "../../components/static/trademark/Checklist";
import { Compilance } from "../../components/static/trademark/Compilance";
import { DocRequirement } from "../../components/static/trademark/DocRequirement";
import { Hero } from "../../components/static/trademark/Hero";
import { ListOfDiff } from "../../components/static/trademark/ListOfDiff";
import { Process } from "../../components/static/trademark/Process";
import { RoleOfTrad } from "../../components/static/trademark/RoleOfTrad";
import { ValidityOfTrad } from "../../components/static/trademark/ValidityOfTrad";
import { WhyRegist } from "../../components/static/trademark/WhyRegist";
import { RegistrationLinks } from "../../components/child_components/RegistrationLinks";

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
      question: "What is a trademark?",
      answer:
          "A trademark is a symbol, word, or phrase that uniquely identifies and distinguishes goods or services of one business from those of others.",
  },
  {
      question: "Why should I register a trademark?",
      answer:
          "Registering a trademark provides legal protection, exclusive rights to use the mark, and helps prevent others from using a similar mark for similar goods or services.",
  },
  {
      question: "How long does trademark registration online last?",
      answer:
          "Trademark registration online can last indefinitely if you continue to use the mark and renew it periodically.",
  },
  {
      question: "What can be trademarked?",
      answer:
          "Logos, brand names, slogans, and even sounds or scents associated with products or services can be trademarked.",
  },
  {
      question: "What’s the difference between ™ and ®?",
      answer:
          "™ indicates common-law trademark rights, while ® signifies a federally registered trademark.",
  },
  {
      question: "Do I need an attorney to register a trademark?",
      answer:
          "No, but hiring a trademark attorney can ensure proper filing and increase the chances of successful registration.",
  },
  {
      question: "How long does the trademark registration online process take?",
      answer:
          "It can take anywhere from several months to a year or more, depending on the complexity of your application.",
  },
  {
      question: "What’s the cost of trademark registration online?",
      answer:
          "The cost varies, but filing fees with the USPTO typically range from $250 to $400 per class of goods or services.",
  },
  {
      question: "Can I trademark a name or logo internationally?",
      answer:
          "Yes, you can apply for international trademark protection through the Madrid System or individual country registrations.",
  },
  {
      question: "What happens if someone infringes on my trademark?",
      answer:
          "You can take legal action to protect your trademark, including sending cease-and-desist letters or filing a lawsuit for damages.",
  },
  {
      question: "Can I trademark a generic word?",
      answer:
          "No, trademarks cannot be granted for generic terms, but they can be registered if they acquire secondary meaning.",
  },
  {
      question: "What is a specimen of use?",
      answer:
          "A specimen of use is evidence that your trademark is being used in commerce, such as product labels or advertising materials.",
  },
  {
      question: "Can I transfer my trademark to someone else?",
      answer:
          "Yes, trademarks can be transferred through an assignment, sale, or licensing agreement.",
  },
  {
      question: "What happens if I don’t renew my trademark registration?",
      answer:
          "If you don’t renew your trademark, it may expire, and you could lose the exclusive rights to use it.",
  },
];

const Home = () => {
  return (
    <div className="services-pages trademark-registration-reg">
      <Head>
        <title>Trademark Registration | RegisterKaro</title>
        <meta name="description" content="The Official RegisterKaro" />
        <link rel="canonical" href="https://www.registerkaro.in/trademark-registration" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Trademark Registration | RegisterKaro" />
        <meta property="og:description" content="The Official RegisterKaro" />
      </Head>
      <Hero cityName={'India'} />
      <h1 className="main-heading">An Overview of Trademark Registration Online</h1>
      <div className="heading-line"></div>
      <Process cityName={'India'} />
      <h2 className="main-heading">List of Different Trademark Classes in India</h2>
      <div className="heading-line"></div>
      <ListOfDiff cityName={'India'} />
      <h2 className="main-heading">What is the Role of Trademark Registry?</h2>
      <div className="heading-line"></div>
      <RoleOfTrad cityName={'India'} />
      <h2 className="main-heading">Benefits of Trademark Registration Online in India</h2>
      <div className="heading-line"></div>
      <Benefits cityName={'India'} />
      <h2 className="main-heading">Who can apply for Trademark Registration Online in India?</h2>
      <div className="heading-line"></div>
      <Checklist cityName={'India'} />
      <h2 className="main-heading">Documents required for Trademark Registration Online in India</h2>
      <div className="heading-line"></div>
      <DocRequirement cityName={'India'} />
      <h2 className="main-heading">
        Apply for Trademark Registration Online with RegisterKaro
      </h2>
      <div className="heading-line"></div>
      <Compilance cityName={'India'} />
      <h2 className="main-heading">
        Validity of Trademark Registration Online in India
      </h2>
      <div className="heading-line"></div>
      <ValidityOfTrad cityName={'India'} />
      <h2 className="main-heading">
        Why RegisterKaro for Trademark Registration?
      </h2>
      <div className="heading-line"></div>
      <WhyRegist cityName={'India'} />
      <h2 className="main-heading">Why RegisterKaro?</h2>
      <div className="heading-line"></div>
      <WhyRegisterkaro />
      <h2 className="main-heading">FAQs</h2>
      <div className="heading-line"></div>
      <FaqTemplatePVT faqItems={faq} />
      <div className='mb-4'></div>
      <RegistrationLinks formattedQuery={'Trademark Registration'} state={state} Query={'trademark-registration'} city={city} />
    </div>
  );
};
export default Home;
