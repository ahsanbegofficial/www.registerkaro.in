import Head from 'next/head'
import { FaqTemplatePVT } from '../../components/child_components/FaqTemplatePVT'
import { WhyRegisterkaro } from '../../components/static/WhyRegisterkaro'
import { Benefits } from '../../components/static/fssai-registration/Benefits'
import { DocsREquired } from '../../components/static/fssai-registration/DocsRequired'
import { EventBased } from '../../components/static/fssai-registration/EventBased'
import { Hero } from '../../components/static/fssai-registration/Hero'
import { MandatoryCompilance } from '../../components/static/fssai-registration/MandatoryCompilance'
import { OtherAnnual } from '../../components/static/fssai-registration/OtherAnnual'
import { PartnershipDeed } from '../../components/static/fssai-registration/PartnershipDeed'
import { Process } from '../../components/static/fssai-registration/Process'
import { WhoReq } from '../../components/static/fssai-registration/WhoReq'
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

const faq = [
    {
        "question": "What is FSSAI registration?",
        "answer": "It is the process of obtaining a registration certificate from the Food Safety and Standards Authority of India (FSSAI), which is mandatory for all food business operators in India."
    },
    {
        "question": "Who needs to obtain FSSAI registration?",
        "answer": "Any individual or entity involved in the manufacturing, processing, storage, distribution, and sale of food products in India needs to obtain this registration."
    },
    {
        "question": "Why is FSSAI registration important?",
        "answer": "FSSAI registration ensures that food business operators comply with the food safety and hygiene standards set by the FSSAI, promoting consumer safety and trust."
    },
    {
        "question": "How can I apply for FSSAI registration?",
        "answer": "You can apply for the registration online through the FSSAI website or seek assistance from a registered food consultant."
    },
    {
        "question": "What documents are required for FSSAI registration?",
        "answer": "The documents required for the registration include identification proof, address proof, proof of possession of premises, and a self-declaration form."
    },
    {
        "question": "What are the different types of registration under FSSAI?",
        "answer": "FSSAI offers three types of registration: Basic Registration for small-scale food businesses, State License for medium-sized businesses, and Central License for large-scale businesses."
    },
    {
        "question": "How long does it take to obtain registration from FSSAI?",
        "answer": "The time required for the registration depends on the completeness of the application and the category of registration. It usually takes around 15 to 60 days."
    },
    {
        "question": "Is FSSAI registration valid nationwide?",
        "answer": "Yes, this registration is valid across India, allowing you to operate your food business anywhere in the country."
    },
    {
        "question": "Can I start my food business without FSSAI?",
        "answer": "No, it is illegal to operate a food business without obtaining the necessary registration or licence for FSSAI."
    },
    {
        "question": "Can I transfer my FSSAI to a new location?",
        "answer": "Yes, you can transfer your registration to a new location by submitting an application to the FSSAI along with the required documents."
    },
    {
        "question": "Do I need to renew my registration?",
        "answer": "Yes, FSSAI registration needs to be renewed annually, and the renewal application should be submitted 30 days before the expiry of the current registration."
    },
    {
        "question": "Can I modify my FSSAI registration details?",
        "answer": "Yes, you can modify your FSSAI registration details, such as changes in the business name, address, or contact information, by submitting an application to the FSSAI."
    },
    {
        "question": "Is there any penalty for not obtaining FSSAI registration?",
        "answer": "Operating a food business without FSSAI registration or licence can lead to penalties, fines, and even imprisonment under the Food Safety and Standards Act."
    },
    {
        "question": "Can I display the FSSAI logo after obtaining registration?",
        "answer": "Yes, after obtaining registration, you are allowed to display the FSSAI logo on your food product labels or premises, which assures consumers of your compliance with food safety standards."
    },
    {
        "question": "Can I sell homemade food products without FSSAI?",
        "answer": "If you are selling homemade food products that are not covered under the FSSAI regulations, such as small-scale catering for a limited audience, you may not require FSSAI registration. However, it is advisable to check with local authorities for any specific regulations."
    },
    {
        "question": "Can I apply for FSSAI registration if my business is still under construction?",
        "answer": "No, this registration can only be obtained for fully constructed and operational food businesses. You need to ensure that your premises are ready before applying for registration."
    }
]

const Home = () => {
    return (
        <div className='services-pages fssai-registration-reg'>
            <Head>
                <title>FSSAI Registration | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="canonical" href="https://www.registerkaro.in/fssai-registration" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="FSSAI Registration | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <Hero cityName={'India'}/>
            <h1 className='main-heading'>FSSAI Registration Online in India</h1>
            <div className='heading-line'></div>
            <Process cityName={'India'}/>
            <h2 className='main-heading'>Who are Food Business Operators in India?</h2>
            <div className='heading-line'></div>
            <OtherAnnual cityName={'India'}/>
            <h2 className='main-heading'>Benefits of FSSAI Registration in India</h2>
            <div className='heading-line'></div>
            <EventBased cityName={'India'}/>
            <h2 className='main-heading'>What are the Different Types of FSSAI Licenses in India?</h2>
            <div className='heading-line'></div>
            <Benefits cityName={'India'}/>
            <h2 className='main-heading'>Who Requires FSSAI Registration/License in India?</h2>
            <div className='heading-line'></div>
            <WhoReq cityName={'India'}/>
            <h2 className='main-heading'>Eligibility Criteria for FSSAI Registration</h2>
            <div className='heading-line'></div>
            <PartnershipDeed cityName={'India'}/>
            <h2 className='main-heading'>Documents Required for FSSAI Registration in India</h2>
            <div className='heading-line'></div>
            <DocsREquired cityName={'India'}/>
            <h2 className='main-heading'>Step-by-Step Procedure for FSSAI Registration in India</h2>
            <div className='heading-line'></div>
            <MandatoryCompilance cityName={'India'}/>
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'Fssai Registration'} state={state} Query={'fssai-registration'} city={city} />
        </div>
    )
}
export default Home