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
import Public from "../../assets/images/ads/Public.png";
import { SwiperSlider } from "../../components/child_components/SwiperSlider";

let registrationName = "Public Limited Company Registration"
let Query = "public-limited-company-registration"
let hero = {
    "pack_includes": [
        "3 DIN and DSC",
        "Drafting of MoA & AoA",
        "Government Stamp duty",
        "Company Incorporation Certificate",
        "Company PAN and TAN",
        "ZohoBooks subscription",
        "Approval letter from Central Govt",
        "PF and ESIC Registration",
        "PT registration in Maharashtra and Karnataka",
        "Business Commencement certificate of the Company"
    ],
    "companyDes": "Register your company online",
    "price": "Rs.9,999/-",
    "days": "10-14 days",
    "companyName": "Public Limited Company Registration In",
    "subtitle": " of Public Limited Company Registration",
    "subtitle2": " required For Public Limited Company Registration"
}
let faq = {
    "subtitle": "Frequently asked questions",
    "title": "We turn potential customers into leads.",
    "description": "Over points before unpleasant lady attending considered nearer projecting noisy praise listening. Sister principle delicate this reached attempted companions husband what unwilling regular departure suppose excuse.",
    "faqItem": [
        {
            "id": 1,
            "title": "Do I have to physically visit ROC Office while Setting up company?",
            "description": "No. RegisterKaro provides a completely online Company Incorporation process. All legal documentation and visits are done by RegisterKaro."
        },
        {
            "id": 2,
            "title": "Is Public Limited Incorporation to be renewed every year?",
            "description": "No. Once the company is formed, it will be valid till it is officially closed down by the owners. No renewal or fees is required. However, every year companies have to file very basic returns with ROC office."
        },
        {
            "id": 3,
            "title": "What is a DIN?",
            "description": "Director Identification Number (DIN) is a unique identification number required for a person to become a director of a company. DIN is issued by ROC office (Ministry of Corporate Affairs) It is similar to a PAN Card number.DIN is to be mentioned in documents while appointing a person as a director of a company."
        },
        {
            "id": 4,
            "title": "What is a DSC?",
            "description": "A digital signature is electronic signature, which is in the form of codes. It is used for signing the electronic forms, filed with ROC for incorporation of Company. Digital Signature cannot be used in physical documents."
        },
        {
            "id": 5,
            "title": "What is Company name search? Why it is important for new company registration?",
            "description": "Company name is very important part in registration of company. The company name is divided into 3 Parts: 1) Keyword (brand name like TATA or Flipkart) 2) Activity word (i.e. showing nature of business like Software) 3) Business Type word (i.e. Pvt. Ltd. or LLP). For Incorporation of company, the suggested name should not match with existing companies or trademark."
        },
        {
            "id": 6,
            "title": "What is MOA & AOA of company?",
            "description": "MOA means Memorandum of Association and AOA means Articles of Association. These are the byelaws or rules based on which important matters like main business of the company or meetings is decided. These are standard legal documents prepared by Company Secretaries during registration of the Company."
        },
        {
            "id": 7,
            "title": "Can we change office address of the company after Incorporation?",
            "description": "Yes, company office address can be changed anytime after incorporation."
        },
        {
            "id": 8,
            "title": "What is capital of the Company?",
            "description": "Capital means investment made by shareholders into the company. Authorised capital is an amount up to which company can issue shares. This capital is mentioned during incorporation of the company based on which ROC registration fees and stamp duty is paid. Paid up capital is an actual investment which goes from shareholders into company bank account, against which share certificate is issue by the company."
        },
        {
            "id": 9,
            "title": "Do we have to deposit Share Capital in a Bank at the time of Incorporation?",
            "description": "No. After company is registered, it needs to open a company bank account and then, capital can be deposited into Company bank account."
        },
        {
            "id": 10,
            "title": "Does my business have to have some level of turnover to start Public Limited?",
            "description": "This is not true, a Public limited company is one of the mode of doing business, which means it can be started from scratch. For that matter even after incorporating a Public limited there is no obligation that the company must have sales or turnover."
        },
        {
            "id": 11,
            "title": "Does PF, GST is automatically applicable to Public Limited?",
            "description": "There is no automatic applicability. Provident Fund (PF), GST law applicability is same for all types of businesses like sole proprietorship, partnership firms and companies. These laws are applicable only after crossing certain threshold limits."
        }
    ]
}
let benefits = [
    {
        "name": "Limited Liability Protection to Directors personal assets",
        "color": "#ffa229",
        "content": "Many times startups need to borrow money and take things on credit. In case of normal Partnerships, Partners personal savings and property would be at risk incase business is not able to repay its loans. In a private limited company, only investment in business is lost, personal assets of the directors are safe.",
        "image": "assets/images/privatebenefit/liability.png"
    },
    {
        "name": "Better Image & Credibility in Market",
        "color": "#164760",
        "content": "Public limited company is popular and well known business structure. Corporate Customers, Vendors and Govt. Agencies prefer to deal with Public Limited Company instead of proprietorship or normal partnerships.",
        "image": "assets/images/privatebenefit/businessman.png"
    },
    {
        "name": "Easy to raise Funds & Loans",
        "color": "#ffa229",
        "content": "Public Limited company can list itself in various stock exchanges in India and raise capital from stock market. Limited company also enjoys wide options to raise funds through bank loans, general public and Institutional investors.",
        "image": "assets/images/privatebenefit/funding.png"
    },
    {
        "name": "Favorite Business structure for Investors",
        "color": "#164760",
        "content": "Investors love to invest in Public Limited companies as it is well structured and transparent business structure.",
        "image": "assets/images/privatebenefit/favo.png"
    },
    {
        "name": "Easy Transfer of shares",
        "color": "#ffa229",
        "content": "Most important it is very easy to exit from a Public limited company, only shares of the company need to be handed over to the purchaser along with the signed share transfer forms.",
        "image": "assets/images/privatebenefit/easytoattract.png"
    },
    {
        "name": "Most Suitable for Heavy Investment",
        "color": "#164760",
        "content": "Public Company is the best choice for businesses involving heavy investment.",
        "image": "assets/images/privatebenefit/sell.png"
    }
]
let documents = [
    {
        "name": "ID CARD",
        "color": "#ffa229",
        "content": "All the director/shareholders are required to provide their PAN at the time of registering LLP. PAN card acts as a primary ID proof.",
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
        "h2": "Three Directors",
        "p": "A private limited company must have at least three directors, with a maximum of fifteen. A minimum of one of the company's directors must be a resident of India."
    },
    "secondContent": {
        "h2": "Unique Name",
        "p": "The name of your business must be unique. The suggested name should not match with any existing companies or trademarks in India."
    },
    "thirdContent": {
        "h2": "Minimum Capital Contribution",
        "p": "The minimum paid up capital for a public capital is Rs. ₹5 lakh. An Public company should have an authorized capital of at least ₹5 lakh."
    },
    "fourthContent": {
        "h2": "Registered Office",
        "p": "The registered office of a company does not have to be commercial space. Even a rented home can be the registered office, so long as an NOC is obtained from the landlord."
    },
    "memberformobile": [
        {
            "id": 1,
            "title": "Three Directors",
            "text": "A private limited company must have at least three directors, with a maximum of fifteen. A minimum of one of the company's directors must be a resident of India."
        },
        {
            "id": 2,
            "title": "Unique Name",
            "text": "The name of your business must be unique. The suggested name should not match with any existing companies or trademarks in India."
        },
        {
            "id": 3,
            "title": "Minimum Capital Contribution",
            "text": "The minimum paid up capital for a public capital is Rs. ₹5 lakh. An Public company should have an authorized capital of at least ₹5 lakh."
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
                <link rel="canonical" href="https://www.registerkaro.in/ads/public-limited-company-registration" />
            </Head>
            <GstModal Query={Query} />
            <div className="heroes">
                <section id="hero" className={`pt-50 ${"yes" === "yes" ? "bg-one" : ""} `}>
                    <div className="container d-lg-flex">
                        <div className="left-from-content">
                            <div className="img-container-desktop">
                                <Image priority={true} src={Public} height={450} width={550} alt='page-hero' className="img-width" />
                            </div>
                            <div className="img-container-mobile">
                                <Image priority={true} src={Public} height={310} alt='page-hero' className="img-width" />
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