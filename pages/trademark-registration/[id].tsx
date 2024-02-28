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
import { CustomDefault } from "../../components/child_components/CustomDefault";
import { useRouter } from "next/router";
import { useEffect } from "react";

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

let stateUrl = [
    "Maharashtra",
    "Jharkhand",
    "Kashmir",
    "Puducherry",
    "Karnataka",
    "Madhya-pradesh",
    "Andhra-pradesh",
    "Himachal-pradesh",
    "tamil-nadu",
    "Odisha",
    "Assam",
    "Arunachal-pradesh",
    "Gujarat",
    "Chandigarh",
    "Jammu-and-kashmir",
    "Manipur",
    "Andaman-and-nicobar-islands",
    "Bihar",
    "Chhattisgarh",
    "Dadra-and-nagar-haveli",
    "Daman-and-Diu",
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
    "Uttar-pradesh",
    "Uttarakhand",
    "West-Bengal"
]

const Home = () => {
    const router = useRouter();
    const query = router.query.id as string;

    useEffect(() => {
        console.log('q', query);
    }, [query]);

    const cityFromQuery = query?.replace('trademark-registration-in-', '');
    const cityName = cityFromQuery ? cityFromQuery.charAt(0).toUpperCase() + cityFromQuery.slice(1) : '';    
    const isCityValid = city.includes(cityName) || stateUrl.includes(cityName)
    if (!isCityValid) {
        return <CustomDefault />;
    }

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
            <Hero cityName={cityName}/>
            <h1 className="main-heading">An Overview of Trademark Registration Online</h1>
            <div className="heading-line"></div>
            <Process cityName={cityName}/>
            <h2 className="main-heading">List of Different Trademark Classes in {cityName}</h2>
            <div className="heading-line"></div>
            <ListOfDiff cityName={cityName}/>
            <h2 className="main-heading">What is the Role of Trademark Registry?</h2>
            <div className="heading-line"></div>
            <RoleOfTrad cityName={cityName}/>
            <h2 className="main-heading">Benefits of Trademark Registration Online in {cityName}</h2>
            <div className="heading-line"></div>
            <Benefits cityName={cityName}/>
            <h2 className="main-heading">Who can apply for Trademark Registration Online in {cityName}?</h2>
            <div className="heading-line"></div>
            <Checklist cityName={cityName}/>
            <h2 className="main-heading">Documents required for Trademark Registration Online in {cityName}</h2>
            <div className="heading-line"></div>
            <DocRequirement cityName={cityName}/>
            <h2 className="main-heading">
                Apply for Trademark Registration Online with RegisterKaro
            </h2>
            <div className="heading-line"></div>
            <Compilance cityName={cityName}/>
            <h2 className="main-heading">
                Validity of Trademark Registration Online in {cityName}
            </h2>
            <div className="heading-line"></div>
            <ValidityOfTrad cityName={cityName}/>
            <h2 className="main-heading">
                Why RegisterKaro for Trademark Registration?
            </h2>
            <div className="heading-line"></div>
            <WhyRegist cityName={cityName}/>
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
