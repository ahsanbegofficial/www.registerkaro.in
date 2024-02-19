import React from 'react'
import { Hero } from '../components/static/pvt/Hero'
import { Process } from '../components/static/pvt/Process'
import { DifferentTypes } from '../components/static/pvt/DifferentTypes'
import { Benefits } from '../components/static/pvt/Benefits'
import { Checklist } from '../components/static/pvt/Checklist'
import { HowToRegister } from '../components/static/pvt/HowToRegister'
import { FaqTemplatePVT } from '../components/child_components/FaqTemplatePVT'
import { RegisterPvt } from '../components/static/pvt/RegisterPvt'
import Head from 'next/head'
import { TimeRequired } from '../components/static/pvt/TimeRequired'
import { WhyRegisterkaro } from '../components/static/WhyRegisterkaro'
import { DocumentRequired } from '../components/static/pvt/DocumentRequired'
import { WhatDocument } from '../components/static/pvt/WhatDocument'
import { TableCom } from '../components/static/pvt/TableCom'
import { PvtReg } from '../components/static/producer/PvtReg'
import { RegistrationLinks } from '../components/child_components/RegistrationLinks'

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
        "question": "What are the documents required for a private limited company?",
        "answer": "To register a private limited company, you will need a Permanent Account Number, Governmental Identity Proof [Adhar Card, PAN Card, Passport], Bank Statement, Utility Bills such as Electricity Bills, Passport Size Photographs, a Director’s Specimen Signature, a Memorandum of Association, Article of Association, Resolution passed by Board or letter of consent."
    },
    {
        "question": "How to do the private limited company registration?",
        "answer": "To register a private limited company, follow the given steps: select the name <get the approval from MCA < obtain DSC < submission of MoA & AoA < apply for DIN using SPICe+ Form (INC-32) < apply for PAN & TAN < fee payment."
    },
    {
        "question": "What are the private limited company requirements?",
        "answer": "To register your business as a private limited company, you will need to have a minimum of one director, a Memorandum of Association, an Article of Association, paid-up capital of a minimum of 1,00,000 INR, PAN, TAN, office address, etc."
    },
    {
        "question": "What are the private limited company registration fees?",
        "answer": "Fees for private limited companies depend upon the paid-up capital of the company, varying from 1000 INR to 16,000 INR."
    },
    {
        "question": "Who is eligible for Pvt Ltd?",
        "answer": "Any individual who is running or intending to run a business in India along with an Indian Individual is eligible to register for a private limited."
    },
    {
        "question": "Can I start a Pvt Ltd company from home?",
        "answer": "Yes, you may start a private limited company from home. However, for the company registration process, you will need an office address."
    },
    {
        "question": "Can I register the Pvt Ltd company myself?",
        "answer": "Yes, you may register a private limited company yourself. However, due to the technicalities and complexities of the process, it is suggested to avail of the company registration services."
    },
    {
        "question": "Can one person open a Pvt Ltd company?",
        "answer": "One person cannot open a private limited company as there shall be a minimum of two directors on board."
    },
    {
        "question": "What is the minimum amount to start a Private Limited Company?",
        "answer": "The minimum amount to start a private limited company is 1 lakh for paid-up capital, and 25000 INR for the company registration process. There can be another cost as well, depending on the size and nature of the business along with the paid-up capital amount."
    },
    {
        "question": "Is it compulsory to write Pvt Ltd company?",
        "answer": "It is compulsory to write Pvt. Ltd. after a company name that is registered as a private limited company under Indian Legislation."
    },
    {
        "question": "What is the benefit of Pvt Ltd?",
        "answer": "There are quite a lot number of benefits for registering a private limited company including limited liability, uninterrupted existence, wide pool of investors, confidentiality, separate identity, etc."
    }
]

const Home = () => {
    return (
        <div className='services-pages pvt-reg'>
            <Head>
                {/* <title>Private Limited Company Registration | RegisterKaro</title> */}
                {/* <meta name="description" content="The Official RegisterKaro" /> */}
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
                {/* <link rel="canonical" href="https://www.registerkaro.in/ads/public-limited-company-registration" /> */}
            </Head>
            <Hero />
            <h1 className='main-heading'>Online Private Limited Company Registration in India – Meaning, Documents and Procedure</h1>
            <div className='heading-line'></div>
            <Process />
            <h2 className='main-heading'>What is a Private Limited Company?</h2>
            <div className='heading-line'></div>
            <PvtReg />
            <h2 className="main-heading">Different types of Business Structures in India</h2>
            <div className='heading-line'></div>
            <DifferentTypes />
            <h2 className="main-heading">Benefits of Private Limited Company Registration in India</h2>
            <div className='heading-line'></div>
            <Benefits />
            <h2 className="main-heading">Checklist for Private Limited Company Registration in India</h2>
            <div className='heading-line'></div>
            <Checklist />
            <h2 className="main-heading">Documents Required for Private Limited Company Registration in India</h2>
            <div className='heading-line'></div>
            <DocumentRequired />
            <h2 className="main-heading">Procedure for Private Limited Company Registration?</h2>
            <div className='heading-line'></div>
            <HowToRegister />
            <h2 className="main-heading">Time Required for Private Limited Company Registration in India</h2>
            <div className='heading-line'></div>
            <TimeRequired />
            <h2 className="main-heading">How to Register Your Private Limited Company in India with RegisterKaro?</h2>
            <div className='heading-line'></div>
            <RegisterPvt />
            <h2 className="main-heading">What Documents will you get after Online Private Limited Company Registration in India?</h2>
            <div className='heading-line'></div>
            <WhatDocument />
            <h2 className="main-heading">Comparative List of Different Business Structures in India</h2>
            <div className='heading-line'></div>
            <TableCom />
            <h2 className="main-heading">Why RegisterKaro?</h2>
            <div className='heading-line'></div>
            <WhyRegisterkaro />
            <h2 className="main-heading">FAQs</h2>
            <div className='heading-line'></div>
            <FaqTemplatePVT faqItems={faq} />
            <div className='mb-4'></div>
            <RegistrationLinks formattedQuery={'Private Limited Company Registration'} state={state} Query={'private-limited-company-registration'} city={city} />
        </div>
    )
}
export default Home