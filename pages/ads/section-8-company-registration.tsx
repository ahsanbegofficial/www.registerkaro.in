import Head from "next/head";
import Image from "next/image";
import cb from "../../assets/images/services/checkbox.svg";
import CompanyRegistrations from "../../components/child_components/CompanyRegistrations";
import Faq from "../../components/child_components/Faq";
import FlipCard from "../../components/child_components/FlipCard";
import { FormAds } from "../../components/child_components/FormAds";
import GstModal from "../../components/child_components/GstModal";
import Members from "../../components/child_components/Members";
import OtherServices from "../../components/child_components/OtherServices";
import TrustedPartner from "../../components/child_components/TrustedPartner";
import Whatsapp from "../../components/child_components/Whatsapp";
import WhyChooseUs from "../../components/child_components/WhyChooseUs";
import Testimonial from "../../components/landing/Testimonial";
import Section8 from "../../assets/images/ads/Section8.png";
import { SwiperSlider } from "../../components/child_components/SwiperSlider";

let registrationName = "Section 8 Company Registration"
let Query = "section-8-company-registration"
let hero = {
    "pack_includes": [
        "2 DIN and DSC",
        "Drafting of MoA & AoA",
        "Government Stamp duty",
        "Company Incorporation Certificate",
        "Company PAN and TAN",
        "ZohoBooks subscription",
        "Certificate of commencement of business",
        "Section 8 approval letter"
    ],
    "companyDes": "Register your Section 8 company online",
    "price": "Rs.9,999/-",
    "days": "10-15 days",
    "companyName": "Section 8 Company Registration In",
    "subtitle": " of Section 8 Company Registration",
    "subtitle2": " required For Section 8 Company Registration"
}
let faq = {
    "subtitle": "Frequently asked questions",
    "title": "We turn potential customers into leads.",
    "description": "Over points before unpleasant lady attending considered nearer projecting noisy praise listening. Sister principle delicate this reached attempted companions husband what unwilling regular departure suppose excuse.",
    "faqItem": [
        {
            "id": 1,
            "title": "How many people are required to register a section 8 company?",
            "description": "A minimum of two people are required to register a section 8 company in India."
        },
        {
            "id": 2,
            "title": "Is an office required for starting a section 8 company?",
            "description": "An address in India where the registered office of the company will be situated is required. The premises can be Commercial/ Industrial/ Residential where communication from MCA will be received"
        },
        {
            "id": 3,
            "title": "Is physical presence required to start a section 8 company?",
            "description": "No, you will not have to be present at our office or appear at any office for the registration of a Section 8 Company. All the documents can be scanned and sent through email to our office. Some documents will also have to be couriered to our office."
        },
        {
            "id": 4,
            "title": "How long will it take to register a Sec 8 Co?",
            "description": "RegisterKaro can incorporate a Section 8 Company for in 15-20 days. The time taken for registration will depend on submission of relevant documents by the client and speed of Government Approvals. To ensure speedy registration, please ensure you have all the required documents prior to starting the registration process."
        },
        {
            "id": 5,
            "title": "How long is the registration of the Section 8 Company valid?",
            "description": "Once a Company is incorporated, it will be active and in-existence as long as the annual compliances are met with regularly. In case, annual compliances are not complied with, the Company will become a Dormant Company and maybe struck off from the register after a period of time. A struck-off Company can be revived for a period of upto 20 years."
        },
        {
            "id": 6,
            "title": "What is a Digital Signature Certificate?",
            "description": "A Digital Signature establishes the identity of the sender or signee electronically while filing documents through the Internet. The Ministry of Corporate Affairs (MCA) mandates that the Directors sign some of the application documents using their Digital Signature. Hence, a Digital Signature is required for all Directors and shareholders of a proposed Section 8 Company."
        },
        {
            "id": 7,
            "title": "What is a DIN?",
            "description": "Director Identification Number is a unique identification number assigned to all existing and proposed Directors of a Company. It is mandatory for all present or proposed Directors to have a Director Identification Number. Director Identification Number never expires and a person can have only one Director Identification Number."
        },
        {
            "id": 8,
            "title": "Can NRI's / Foreign Nationals be directors in a Section 8 company?",
            "description": "Yes, a NRI or Foreign National can be a Director in a Section 8 Company after obtaining Director Identification Number. However, atleast one Director on the Board of Directors must be a Resident India."
        },
        {
            "id": 9,
            "title": "What is SPICe Form 32?",
            "description": "In Feb 2020, MCA, i.e. Ministry of Corporate Affairs, came up with an e-form, viz SPICe form, that aims to simplify the incorporation process significantly. This Form has overcome the intricacy of the erstwhile incorporation process that also entails massive paperwork."
        },
        {
            "id": 10,
            "title": "Is Section 8 a small business company?",
            "description": "Section 2 (85) proviso (B) clearly states that the Section-8 company cannot be treated as a small company."
        },
        {
            "id": 11,
            "title": "Is it possible for LLP or a Partnership firm to be a member of Section 8 Company?",
            "description": "Companies Act, 2013 allows the LLP or a Partnership firm to be a member of a Section 8 Company."
        },
        {
            "id": 12,
            "title": "What is the difference between NGO and Section 8 companies?",
            "description": "An NGO intending to serve a charitable purpose in India could be registered under society, trust, and section 8 company. A charitable purpose is defined u/s 2 (15) of the IT Act."
        },
        {
            "id": 13,
            "title": "What's better, trust society or Section 8 company?",
            "description": "The cost factor involved in trusts is considerably minimal when contrasted with entity u/s 8 of the company Act. Section 8 companies have limited access to government-driven subsidies."
        },
        {
            "id": 14,
            "title": "Do Section 8 companies pay tax?",
            "description": "The tax obligations addressed by the section 8 company is more or less similar to the other registered organization (except NGOs). The profit is subjected to the tax slab rate of 30 %. If section 8 company is registered u/s 12AA of the IT Act, then its profits shall remain isolated from taxes."
        },
        {
            "id": 15,
            "title": "Is tax audit applicable to Section 8 companies?",
            "description": "The auditor is appointed in the purview of Section 139 of the Companies Act. Every first auditor of Section 8 entity is to be appointed within thirty days from the incorporation date. The auditor can be a person or a company. The auditors also dig down the financial filings of the company."
        },
        {
            "id": 16,
            "title": "Is AGM mandatory for Section 8 Company?",
            "description": "According to the Company Act, 2013, it is mandatory for the section 8 entities to conduct AGM in accordance with prescribed guidelines."
        }
    ]
}
let benefits = [
    {
        "name": "Lesser Regulation",
        "color": "#ffa229",
        "content": "Many privileges and exemptions are available to section 8 company under Company Law.",
        "image": "assets/images/privatebenefit/liability.png"
    },
    {
        "name": "No minimum Paid-up Capital",
        "color": "#164760",
        "content": "Exemption from requirement of Minimum Paid-up capital.",
        "image": "assets/images/privatebenefit/businessman.png"
    },
    {
        "name": "No goverment charges",
        "color": "#ffa229",
        "content": "Exemption of Stamp duty for registration",
        "image": "assets/images/privatebenefit/funding.png"
    },
    {
        "name": "Tax Deductions",
        "color": "#164760",
        "content": "Tax deductions to the donors of the Company u/s. 80G of the Income Tax.",
        "image": "assets/images/privatebenefit/sell.png"
    }
]
let documents = [
    {
        "name": "ID CARD",
        "color": "#ffa229",
        "content": "All the directors/shareholders are required to provide their PAN at the time of registering their section 8 company. PAN card acts as a primary ID proof.",
        "image": "assets/images/documents/PANCARD.png"
    },
    {
        "name": "PHOTOGRAPH",
        "color": "#164760",
        "content": "Latest Passport size photograph of Shareholders and Directors Is required for the further process",
        "image": "assets/images/documents/CAMERA.png"
    },
    {
        "name": "RESIDENCE PROOF",
        "color": "#ffa229",
        "content": "Latest bank statement, telephone bill, mobile bill, electricity bill or gas bill should be submitted as a residence proof. Such bill or statement shouldn’t be more than 2 months old and must contain the name of partner as mentioned in PAN card.",
        "image": "assets/images/documents/IDCARD.png"
    },
    {
        "name": "DIRECTOR’S ADDRESS PROOF",
        "color": "#164760",
        "content": "Latest Telephone Bill /Electricity Bill/ Bank Account Statement of Shareholders and Directors.",
        "image": "assets/images/documents/dir-add.png"
    },
    {
        "name": "BUSINESS ADDRESS PROOF",
        "color": "#ffa229",
        "content": "Latest Electricity Bill/ Telephone Bill of the registered office address.",
        "image": "assets/images/documents/map.png"
    },
    {
        "name": "NOTE",
        "color": "#164760",
        "content": "In case of NRI or Foreign National, documents of director (s) must be notarized or apostilled.",
        "image": "assets/images/documents/notes.png"
    }
]
let member = {
    "h1": "What to keep in mind while Registering a",
    "pfirst": "As defined by the Companies Act 2013, we must guarantee",
    "psecond": "that the checklist requirements are met.",
    "firstContent": {
        "h2": "Two Directors",
        "p": "Section 8 company must have at least two directors, with a maximum of fifteen. A minimum of one of the company's directors must be a resident of India."
    },
    "secondContent": {
        "h2": "Unique Name",
        "p": "The name of your business must be unique. The suggested name should not match with any existing companies or trademarks in India."
    },
    "thirdContent": {
        "h2": "Minimum Capital Contribution",
        "p": "There is no minimum capital amount for a company. A company should have an authorized capital of at least ₹1 lakh."
    },
    "fourthContent": {
        "h2": "Registered Office",
        "p": "The registered office of a company does not have to be commercial space. Even a rented home can be the registered office, so long as an NOC is obtained from the landlord."
    },
    "memberformobile": [
        {
            "id": 1,
            "title": "Two Directors",
            "text": "Section 8 company must have at least two directors, with a maximum of fifteen. A minimum of one of the company's directors must be a resident of India."
        },
        {
            "id": 2,
            "title": "Unique Name",
            "text": "The name of your business must be unique. The suggested name should not match with any existing companies or trademarks in India."
        },
        {
            "id": 3,
            "title": "Minimum Capital Contribution",
            "text": "There is no minimum capital amount for a company. A company should have an authorized capital of at least ₹1 lakh."
        },
        {
            "id": 4,
            "title": "Registered Office",
            "text": "The registered office of a company does not have to be commercial space. Even a rented home can be the registered office, so long as an NOC is obtained from the landlord."
        }
    ]
}

export default function Home() {
    return (
        <div className="business-registration-parent">
            <Head>
                <title>{registrationName} | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="robots" content="all" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta name="google" content="notranslate" key="notranslate" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href="https://www.registerkaro.in/ads/section-8-company-registration" />
            </Head>
            <GstModal Query={Query} />
            <div className="heroes">
                <section id="hero" className={`pt-50 ${"yes" === "yes" ? "bg-one" : ""} `}>
                    <div className="container d-lg-flex">
                        <div className="left-from-content">
                            <div className="img-container-desktop">
                                <Image priority={true} src={Section8} height={450} width={550} alt='page-hero' className="img-width" />
                            </div>
                            <div className="img-container-mobile">
                                <Image priority={true} src={Section8} height={310} alt='page-hero' className="img-width" />
                            </div>
                            <div>
                                <h2 className="text-secondary text-center text-md-start display-6 fw-bold  mb-3 hero-banner-container">{registrationName}</h2>
                                <h5 className="fw-bold fs-4 mt-3 mt-md-0 text-center text-md-start">{hero.companyDes} <br />
                                    <span className="text-green">in just <span className="days-color">{hero.days}</span></span> at
                                    <span className="price-color"> {hero.price}</span> only.
                                </h5>
                                <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1 mt-3">
                                    {hero.pack_includes?.map((i: any, n: number) => {
                                        return (
                                            <div className="col" key={n}>
                                                <label className="d-flex d-grid gap-2">
                                                    <Image src={cb.src} alt="data" height={18} width={18} className="checkSvg mb-2" />
                                                    {i}
                                                </label>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <FormAds Query={Query} />
                    </div>
                </section>
            </div>
            <CompanyRegistrations data={hero} />
            <FlipCard isBg="" cardData={benefits} idName="benefits" title="Benefits " subtitle={hero?.subtitle} isAlternate />
            <Members registrationName={registrationName} member={member} />
            <FlipCard isBg="" cardData={documents} idName="Documents" title="Documents" subtitle={hero?.subtitle2} isAlternate={false} />
            <Testimonial isBg="" />
            <WhyChooseUs />
            <TrustedPartner />
            <div className="partners">
                <h2>Trusted by 400,000 clients and counting, including …</h2>
                <SwiperSlider />
            </div>
            <Faq isBg="" faqData={faq} Query={Query} />
            <OtherServices />
            <Whatsapp Query={Query} />
        </div>
    )
}