import Head from 'next/head'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { Hero } from '../../components/static/section-8/Hero'
import { Process } from '../../components/static/section-8/Process'
import { ImportantPoints } from '../../components/static/section-8/ImportantPoints'
import { Advantages } from '../../components/static/section-8/Advantages'
import { Eligibility } from '../../components/static/section-8/Eligibility'
import { Requirements } from '../../components/static/section-8/Requirements'
import { DocumentRequired } from '../../components/static/section-8/DocumentRequired'
import { Procedure } from '../../components/static/section-8/Procedure'
import { AnnualCompliance } from '../../components/static/section-8/AnnualCompliance'
import { Penalties } from '../../components/static/section-8/Penalties'
import { RegistrationLinks } from '../../components/child_components/RegistrationLinks'

let state = [
    "Maharashtra",
    "Jharkhand",
    "Kashmir",
    "Puducherry",
    "Karnataka",
    "Madhya Pradesh",
    "Andhra Pradesh",
    "Himachal Pradesh",
    "Tamil Nadu",
    "Odisha",
    "Assam",
    "Arunachal Pradesh",
    "Gujarat",
    "Chandigarh",
    "Jammu And Kashmir",
    "Manipur",
    "Andaman And Nicobar Islands",
    "Bihar",
    "Chhattisgarh",
    "Dadra And Nagar Haveli",
    "Daman And Diu",
    "Goa",
    "Haryana",
    "Kerala",
    "Ladakh",
    "Lakshadweep",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
]

let city = [
    "Mumbai",
    "Firozabad",
    "New Delhi",
    "Srinagar",
    "Bangalore",
    "Ghaziabad",
    "Hyderabad",
    "Thiruvananthapuram",
    "Ahmedabad",
    "Chennai",
    "Gorakhpur",
    "Kolkata",
    "Thrissur",
    "Gulbarga",
    "Lucknow",
    "Tiruchirappalli",
    "Agartala",
    "Agra",
    "Ahmednagar",
    "Aizawl",
    "Ajmer",
    "Akola",
    "Aligarh",
    "Alwar",
    "Ambala",
    "Ambarnath",
    "Ambattur",
    "Amravati",
    "Amritsar",
    "Amroha",
    "Anand",
    "Anantapur",
    "Anantapuram",
    "Arrah",
    "Asansol",
    "Avadi",
    "Bahraich",
    "Bally",
    "Baranagar",
    "Barasat",
    "Bardhaman",
    "Bareilly",
    "Bathinda",
    "Begusarai",
    "Belgaum",
    "Bellary",
    "Berhampore",
    "Berhampur",
    "Bhagalpur",
    "Bhalswa-jahangir-pur",
    "Bharatpur",
    "Bhatpara",
    "Bhavnagar",
    "Bhilai",
    "Bhilwara",
    "Bhind",
    "Bhiwandi",
    "Bhiwani",
    "Bhopal",
    "Bhubaneswar",
    "Bhusawal",
    "Bidar",
    "Bidhannagar",
    "Bihar-sharif",
    "Bikaner",
    "Bilaspur",
    "Bokaro",
    "Bulandshahr",
    "Burhanpur",
    "Chandigarh",
    "Chapra",
    "Chittoor",
    "Coimbatore",
    "Cuttack",
    "Darbhanga",
    "Davanagere",
    "Dehradun",
    "Delhi",
    "Deoghar",
    "Dewas",
    "Dhanbad",
    "Dhule",
    "Dindigul",
    "Durg",
    "Durgapur",
    "Eluru",
    "Erode",
    "Etawah",
    "Faridabad",
    "Farrukhabad",
    "Fatehpur",
    "Gandhidham",
    "Gandhinagar",
    "Gaya",
    "Gopalpur",
    "Guntur",
    "Gurgaon",
    "Guwahati",
    "Gwalior",
    "Haldia",
    "Hapur",
    "Haridwar",
    "Hospet",
    "Gulbargahowrah",
    "Hubli-dharwad",
    "Ichalkaranji",
    "Imphal",
    "Indore",
    "Jabalpur",
    "Jaipur",
    "Jalandhar",
    "Jalgaon",
    "Jalna",
    "Jammu",
    "Jamnagar",
    "Jamshedpur",
    "Jhansi",
    "Jodhpur",
    "Junagadh",
    "Kadapa",
    "Kakinada",
    "Kalyan-dombivli",
    "Kamarhati",
    "Kanpur",
    "Karawal-nagar",
    "Karimnagar",
    "Karnal",
    "Katni",
    "Khammam",
    "Khandwa",
    "Kharagpur",
    "Khora-ghaziabad",
    "Kirari-suleman-nagar",
    "Kochi",
    "Kolhapur",
    "Kollam",
    "Korba",
    "Kota",
    "Kozhikode",
    "Kulti",
    "Kurnool",
    "Latur",
    "Loni",
    "Ludhiana",
    "Madhyamgram",
    "Madurai",
    "Maheshtala",
    "Malda",
    "Malegaon",
    "Mangalore",
    "Mathura",
    "Mau",
    "Meerut",
    "Mira-bhayandar",
    "Mirzapur",
    "Moradabad",
    "Morbi",
    "Morena",
    "Munger",
    "Muzaffarnagar",
    "Muzaffarpur",
    "Mysore",
    "Nadiad",
    "Nagercoil",
    "Nagpur",
    "Naihati",
    "Nanded",
    "Nandyal",
    "Nangloi-jat",
    "Nashik",
    "Navi-mumbai",
    "Nellore",
    "New-delhi",
    "Nizamabad",
    "Noida",
    "North-dumdum",
    "Ongole",
    "Orai",
    "Pali",
    "Pallavaram",
    "Panchkula",
    "Panihati",
    "Panipat",
    "Parbhani",
    "Patiala",
    "Patna",
    "Pimpri-chinchwad",
    "Pondicherry",
    "Pune",
    "Puri",
    "Purnia",
    "Raebareli",
    "Raichur",
    "Raipur",
    "Rajahmundry",
    "Rajkot",
    "Rajpur-sonarpur",
    "Ramagundam",
    "Rampur",
    "Ranchi",
    "Ratlam",
    "Rewa",
    "Rohtak",
    "Rourkela",
    "Sagar",
    "Saharanpur",
    "Salem",
    "Sambalpur",
    "Sambhal",
    "Sangli-miraj-%26-kupwad",
    "Satara",
    "Satna",
    "Secunderabad",
    "Shahjahanpur",
    "Shimoga",
    "Sikar",
    "Silchar",
    "Siliguri",
    "Singrauli",
    "Solapur",
    "Sonipat",
    "South-dumdum",
    "Sri-ganganagar",
    "Surat",
    "Tenali",
    "Thane",
    "Thanjavur",
    "Thoothukudi",
    "Tirunelveli",
    "Tirupati",
    "Tiruppur",
    "Tiruvottiyur",
    "Tumkur",
    "Udaipur",
    "Ujjain",
    "Ulhasnagar",
    "Uluberia",
    "Uzhavarkarai",
    "Vadodara",
    "Varanasi",
    "Vasai-virar",
    "Vijayanagaram",
    "Vijayawada",
    "Visakhapatnam",
    "Warangal",
    "Yamunanagar"
]

let faq = [
    {
        "question": "What is a Section 8 Company?",
        "answer": "A Section 8 Company is a non-profit organisation established for promoting charitable or not-for-profit objectives."
    },
    {
        "question": "What are the key objectives of a Section 8 Company?",
        "answer": "The primary objectives include promoting arts, science, commerce, education, social welfare, religion, charity, or any other useful public purpose."
    },
    {
        "question": "Can a Section 8 Company distribute its profits to members?",
        "answer": "No, a Section 8 Company cannot distribute its profits to members. All income must be utilised for its objectives."
    },
    {
        "question": "Is it necessary to add “Limited” or “Private Limited” to the company’s name?",
        "answer": "Yes, the company’s name must include “Limited” or “Private Limited” as per the type of Section 8 Company."
    },
    {
        "question": "How many directors are required for registration?",
        "answer": "A minimum of two directors is required for a Section 8 Company."
    },
    {
        "question": "Is there a minimum capital requirement for Section 8 Company registration?",
        "answer": "No, there is no minimum capital requirement."
    },
    {
        "question": "How long does it take to register a Section 8 Company?",
        "answer": "Registration typically takes 20-60 days, depending on the processing time of government authorities."
    },
    {
        "question": "What documents are needed for registration?",
        "answer": "Documents include identity proof, address proof, PAN card, and No Objection Certificate from the landlord for the registered office."
    },
    {
        "question": "Can foreign nationals be directors in a Section 8 Company?",
        "answer": "Yes, foreign nationals can be directors, but at least one director must be an Indian resident."
    },
    {
        "question": "Is there an age limit for directors in a Section 8 Company?",
        "answer": "There is no age limit for directors in Section 8 Companies."
    },
    {
        "question": "What are the compliance requirements after registration?",
        "answer": "Section 8 Companies must file annual returns, financial statements, and comply with tax regulations."
    },
    {
        "question": "Can a Section 8 Company be converted into a for-profit company?",
        "answer": "No, a Section 8 Company cannot be converted into a for-profit company."
    },
    {
        "question": "Can a Section 8 Company own property and assets?",
        "answer": "Yes, it can own property and assets in its name."
    },
    {
        "question": "Is it mandatory to conduct an annual general meeting (AGM)?",
        "answer": "Yes, an AGM must be held within six months from the end of the financial year."
    },
    {
        "question": "Can a Section 8 Company be dissolved voluntarily?",
        "answer": "Yes, it can be dissolved voluntarily by following the legal procedures."
    },
    {
        "question": "What is the penalty for non-compliance with Section 8 Company regulations?",
        "answer": "Non-compliance can lead to penalties, fines, or even cancellation of registration, so it’s crucial to adhere to the rules."
    },
]

const Home = () => {
    return (
        <div className='services-pages section-8-reg'>
            <Head>
                <title>Section 8 Registration | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/section-8-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Section 8 Registration | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero cityName={'India'}/>
            <h1 className='main-heading'>An Overview of Section 8 Company Registration</h1>
            <div className='heading-line'></div>
            <Process cityName={'India'}/>
            <h2 className="main-heading">Important Points Regarding Section 8 Company in India</h2>
            <div className='heading-line'></div>
            <ImportantPoints cityName={'India'}/>
            <h2 className="main-heading">Advantages of Section 8 Company Registration in India</h2>
            <div className='heading-line'></div>
            <Advantages cityName={'India'}/>
            <h2 className="main-heading">Eligibility Criteria for Section 8 Company Registration in India</h2>
            <div className='heading-line'></div>
            <Eligibility cityName={'India'}/>
            <h2 className="main-heading">Requirements for Section 8 Company Registration</h2>
            <div className='heading-line'></div>
            <Requirements cityName={'India'}/>
            <h2 className="main-heading">Documents Required for Section 8 Company Registration</h2>
            <div className='heading-line'></div>
            <DocumentRequired cityName={'India'}/>
            <h2 className="main-heading">Procedure for Section 8 Company Registration</h2>
            <div className='heading-line'></div>
            <Procedure cityName={'India'}/>
            <h2 className="main-heading">What are the Annual Compliances for Section 8 Companies in India?</h2>
            <div className='heading-line'></div>
            <AnnualCompliance cityName={'India'}/>
            <h2 className="main-heading">Penalties for Non-Compliance</h2>
            <div className='heading-line'></div>
            <Penalties cityName={'India'}/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'Section 8 Company Registration'} state={state} Query={'section-8-company-registration'} city={city} />
        </div>
    )
}
export default Home