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
import nidhi from "../../assets/images/ads/nidhi.png";
import { SwiperSlider } from "../../components/child_components/SwiperSlider";

let registrationName = "Nidhi Company Registration"
let Query = "nidhi-company-registration"
let hero = {
    "pack_includes": [
        "3 DIN and DSC",
        "Drafting of MoA & AoA",
        "Government Stamp duty",
        "Company Incorporation Certificate",
        "Company PAN and TAN",
        "ZohoBooks subscription",
        "Approval letter from Central Govt"
    ],
    "companyDes": "Register your company online",
    "price": "Rs.9,999/-",
    "days": "15 days",
    "companyName": "Nidhi Company Registration In",
    "subtitle": " of Nidhi Registration",
    "subtitle2": " required For Nidhi Registration"
}
let faq = {
    "subtitle": "Frequently asked questions",
    "title": "We turn potential customers into leads.",
    "description": "Over points before unpleasant lady attending considered nearer projecting noisy praise listening. Sister principle delicate this reached attempted companions husband what unwilling regular departure suppose excuse.",
    "faqItem": [
        {
            "id": 1,
            "title": "What is Nidhi Company?",
            "description": "A Nidhi Company falls in the category of “Non-Banking Financial Companies (NBFCs)”, which does not require any license from the Reserve Bank of India (RBI). It is formed for the sole purpose of accepting deposits and lending loans to it’s members only. It works through it’s members only."
        },
        {
            "id": 2,
            "title": "What is the time period taken for setting up of a Nidhi Company?",
            "description": "Approximately, a time period of 15 business working days is needed for incorporating a Nidhi Company."
        },
        {
            "id": 3,
            "title": "Is it mandatory to use the word 'Nidhi Limited” at the end of the company name?",
            "description": "Yes, it is mandatory to use the word 'Nidhi Limited” in the company name. Nevertheless, the term 'Mutual Benefit” can also be used."
        },
        {
            "id": 4,
            "title": "What is the least number of individuals required to start a Nidhi Company?",
            "description": "At least three directors and seven shareholders are required for a Nidhi Company registration."
        },
        {
            "id": 5,
            "title": "Can a minor person become the director of a Nidhi Company?",
            "description": "No, a minor person is not allowed to become the director of a Nidhi Company. Only an individual who is 18 years old or more can become the Director of a Nidhi Company."
        },
        {
            "id": 6,
            "title": "Is it mandatory for the promoters to be there before the Authority for the purpose of Registration?",
            "description": "No, there is no need for the promoters to be there or to visit our office personally, as the registration process of Nidhi Company is completely online."
        },
        {
            "id": 7,
            "title": "Is there any restriction on the maximum number of members in a Nidhi Company?",
            "description": "No, there is no restriction on the maximum number of members. However, it is compulsory for a Nidhi Company to have a minimum of two hundred members within one year of commencement."
        }
    ]
}
let benefits = [
    {
        "name": "No RBI Requirement",
        "color": "#ffa229",
        "content": "Nidhi Company do not require RBI registration to do loan business in India",
        "image": "assets/images/privatebenefit/liability.png"
    },
    {
        "name": "Branches for Nidhi",
        "color": "#164760",
        "content": "Nidhi Company can open 3 branches after 3 years within the district.",
        "image": "assets/images/privatebenefit/businessman.png"
    },
    {
        "name": "Loan against security",
        "color": "#ffa229",
        "content": "Nidhi Company can lend only against gold, property, FD, Govt securities.",
        "image": "assets/images/privatebenefit/funding.png"
    },
    {
        "name": "Interest on loan",
        "color": "#164760",
        "content": "Nidhi Company can earn max 20% interest on loan on reducing balance method.",
        "image": "assets/images/privatebenefit/favo.png"
    },
    {
        "name": "Interest on deposits",
        "color": "#ffa229",
        "content": "Nidhi Company can accept FD, RD & savings and can earn 12% rate of interest",
        "image": "assets/images/privatebenefit/easytoattract.png"
    },
    {
        "name": "Lowest Price",
        "color": "#164760",
        "content": "Nidhi Company Registration at just ₹16,899/- (lowest price across web)",
        "image": "assets/images/privatebenefit/sell.png"
    }
]
let documents = [
    {
        "name": "ID CARD",
        "color": "#ffa229",
        "content": "All the directors/shareholders are required to provide their PAN at the time of registering their nidhi company. PAN card acts as a primary ID proof.",
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
        "p": "A nidhi company must have at least three directors, with a maximum of fifteen. A minimum of one of the company's directors must be a resident of India."
    },
    "secondContent": {
        "h2": "Unique Name",
        "p": "The name of your business must be unique. The suggested name should not match with any existing companies or trademarks in India."
    },
    "thirdContent": {
        "h2": "Minimum Capital Contribution",
        "p": "There is no minimum capital amount for a company. A company should have an authorized capital of at least ₹10 lakhs."
    },
    "fourthContent": {
        "h2": "Registered Office",
        "p": "The registered office of a company does not have to be commercial space. Even a rented home can be the registered office, so long as an NOC is obtained from the landlord."
    },
    "memberformobile": [
        {
            "id": 1,
            "title": "Three Directors",
            "text": "A nidhi company must have at least three directors, with a maximum of fifteen. A minimum of one of the company's directors must be a resident of India."
        },
        {
            "id": 2,
            "title": "Unique Name",
            "text": "The name of your business must be unique. The suggested name should not match with any existing companies or trademarks in India."
        },
        {
            "id": 3,
            "title": "Minimum Capital Contribution",
            "text": "There is no minimum capital amount for a company. A company should have an authorized capital of at least ₹10 lakhs."
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
                <link rel="canonical" href="https://www.registerkaro.in/ads/nidhi-company-registration" />
            </Head>
            <GstModal Query={Query} />
            <div className="heroes">
                <section id="hero" className={`pt-50 ${"yes" === "yes" ? "bg-one" : ""} `}>
                    <div className="container d-lg-flex">
                        <div className="left-from-content">
                            <div className="img-container-desktop">
                                <Image priority={true} src={nidhi} height={450} width={550} alt='page-hero' className="img-width" />
                            </div>
                            <div className="img-container-mobile">
                                <Image priority={true} src={nidhi} height={310} alt='page-hero' className="img-width" />
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