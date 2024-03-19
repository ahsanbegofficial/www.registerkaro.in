import Head from "next/head";
import { FaqTemplatePVT } from "../../components/child_components/FaqTemplatePVT";
import { WhyRegisterkaro } from "../../components/static/WhyRegisterkaro";
import { ApplicableRegulations } from "../../components/static/medical-device-registration/ApplicableRegulations";
import { Cancellation } from "../../components/static/medical-device-registration/Cancellation";
import { DescriptionServices } from "../../components/static/medical-device-registration/DescriptionServices";
import { EligibilyMandatory } from "../../components/static/medical-device-registration/EligibilyMandatory";
import { Hero } from "../../components/static/medical-device-registration/Hero";
import { MandatoryCom } from "../../components/static/medical-device-registration/MandatoryCom";
import { MedicalDevice } from "../../components/static/medical-device-registration/MedicalDevice";
import { MedicalDeviceRegistration } from "../../components/static/medical-device-registration/MedicalDeviceRegistration";
import { Process } from "../../components/static/medical-device-registration/Process";
import { RenewalService } from "../../components/static/medical-device-registration/RenewalService";
import { WhatDocument } from "../../components/static/medical-device-registration/WhatDocument";
import { RegistrationLinks } from "../../components/child_components/RegistrationLinks";

const faq = [
  {
    question: "Who regulates medical device registration in India?",
    answer: "CDSCO under the Medical Device Rules, 2017.",
  },
  {
    question: "Who can apply for medical device registration?",
    answer: "Manufacturers or authorized representatives.",
  },
  {
    question: "What are the mandatory prerequisites for registration?",
    answer: "Compliance with quality standards and relevant testing data.",
  },
  {
    question: "What products fall under medical devices?",
    answer: "Diagnostic, surgical, imaging, and related healthcare equipment.",
  },
  {
    question: "What types of licenses are involved?",
    answer: "Mainly the Registration Certificate (RC).",
  },
  {
    question: "What documents are required?",
    answer:
      "Technical details, manufacturing info, certifications, clinical data, conformity evidence, and labeling.",
  },
  {
    question: "What’s the general procedural timeline?",
    answer:
      "Submission, evaluation, potential queries, review, and approval/rejection.",
  },
  {
    question: "How long is the Registration Certificate valid?",
    answer: "Usually 1 to 5 years, subject to renewal.",
  },
  {
    question: "Under what circumstances can it be canceled?",
    answer: "Non-compliance, safety issues, or insufficient surveillance.",
  },
  {
    question: "What mandatory compliances are required?",
    answer:
      "Post-market surveillance, adverse event reporting, labeling adherence, manufacturing conformity, and QMS maintenance.",
  },
  {
    question: "Why is post-market surveillance crucial?",
    answer: "To monitor device performance and report adverse events.",
  },
  {
    question: "How important is adherence to labeling regulations?",
    answer: "Critical for consumer safety and understanding device usage.",
  },
  {
    question: "What happens if a manufacturer fails to maintain a QMS?",
    answer: "Risk of non-compliance and potential certificate revocation.",
  },
  {
    question: "How significant is clinical data in the registration process?",
    answer: "Essential for establishing safety and efficacy.",
  },
  {
    question:
      "Are registration procedures different based on device risk classification?",
    answer: "Yes, they vary based on the device’s risk level.",
  },
  {
    question: "What actions can CDSCO take if a device poses safety risks?",
    answer: "It can cancel, suspend, or revoke the Registration Certificate.",
  },
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
    <div className="services-pages medical-device-registration-reg">
      <Head>
        <title>Medical Device Registration | RegisterKaro</title>
        <meta name="description" content="The Official RegisterKaro" />
        <link rel="canonical" href="https://www.registerkaro.in/medical-device-registration" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Medical Device Registration | RegisterKaro" />
        <meta property="og:description" content="The Official RegisterKaro" />
      </Head>
      <Hero  cityName={'India'} />
      <h1 className="main-heading">Get Online Medical Device Registration in India</h1>
      <div className="heading-line"></div>
      <Process  cityName={'India'} />
      <h1 className="main-heading">Applicable Rules/Acts/ Regulations</h1>
      <div className="heading-line"></div>
      <ApplicableRegulations  cityName={'India'}/>
      <h1 className="main-heading">What is the Eligibility/Pre-Licensing/Mandatory Pre-Requisites for Medical Device Registration?</h1>
      <div className="heading-line"></div>
      <EligibilyMandatory  cityName={'India'} />
      <h1 className="main-heading">A description of products/services involved</h1>
      <div className="heading-line"></div>
      <DescriptionServices  cityName={'India'} />
      <h1 className="main-heading">What are the Documents or Paperwork required for Medical Device Registration?</h1>
      <div className="heading-line"></div>
      <WhatDocument  cityName={'India'} />
      <h1 className="main-heading">
      Medical Device Registration Process in India
      </h1>
      <div className="heading-line"></div>
      <MedicalDevice  cityName={'India'} />
      <h1 className="main-heading">What is the Medical Device Registration procedural timeline of the service involved?</h1>
      <div className="heading-line"></div>
      <MedicalDeviceRegistration  cityName={'India'}/> 
      <h1 className="main-heading">Validity/Renewal of Service</h1>
      <div className="heading-line"></div>
      <RenewalService  cityName={'India'}/> 
      <h1 className="main-heading">Cancellation/Suspension/Revocation of Service</h1>
      <div className="heading-line"></div>
      <Cancellation  cityName={'India'}/>
       <h1 className="main-heading">Mandatory Compliance Attached with Service</h1>
      <div className="heading-line"></div>
      <MandatoryCom  cityName={'India'}/>
      <h1 className="main-heading">Why RegisterKaro?</h1>
      <div className="heading-line"></div>
      <WhyRegisterkaro />
      <h1 className="main-heading">FAQs</h1>
      <div className="heading-line"></div>
      <FaqTemplatePVT faqItems={faq} />
      <RegistrationLinks formattedQuery={'Medical Device Registration'} state={state} Query={'medical-device-registration'} city={city} />
    </div>
  );
};
export default Home;
