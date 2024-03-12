import Head from "next/head";
import Image from "next/image";
import cb from "../../../assets/images/services/checkbox.svg";
import CompanyRegistrations from "../../../components/child_components/CompanyRegistrations";
import Faq from "../../../components/child_components/Faq";
import FlipCard from "../../../components/child_components/FlipCard";
import { FormAds } from "../../../components/child_components/FormAds";
import GstModal from "../../../components/child_components/GstModal";
import Members from "../../../components/child_components/Members";
import OtherServices from "../../../components/child_components/OtherServices";
import TrustedPartner from "../../../components/child_components/TrustedPartner";
import Whatsapp from "../../../components/child_components/Whatsapp";
import WhyChooseUs from "../../../components/child_components/WhyChooseUs";
import Testimonial from "../../../components/landing/Testimonial";
import pvtD from "../../../assets/images/ads/pvt-desktop.jpg";
import { SwiperSlider } from "../../../components/child_components/SwiperSlider";

let registrationName = "Private Limited Company Registration"
let Query = "private-limited-company-registration"
let hero = {
    "pack_includes": [
        "2 DIN and DSC for two Directors",
        "Drafting of MoA & AoA",
        "Registration fees and stamp duty",
        "Company Incorporation Certificate",
        "Company PAN and TAN",
        "ZohoBooks subscription"
    ],
    "companyDes": "Get your Private Limited Company Registration",
    "price": "Rs.1,999/-",
    "days": "14 days",
    "companyName": "Private Limited Company Registration In",
    "subtitle": " of Private Limited Company Registration",
    "subtitle2": " required For Private Limited Company Registration"
}
let faq = {
    "subtitle": "Frequently asked questions",
    "title": "We turn potential customers into leads.",
    "description": "Over points before unpleasant lady attending considered nearer projecting noisy praise listening. Sister principle delicate this reached attempted companions husband what unwilling regular departure suppose excuse.",
    "faqItem": [
        {
            "id": 1,
            "title": "What are the rules for picking a name for a private limited company?",
            "description": "The registrar of companies (RoC) across India expect applicants to follow a few naming guidelines. Some of them are subjective, which means that approval can depend on the opinion of the officer handling your application. However, the more closely you follow the rules listed below, the better your chances of approval. First, however, do ensure that your name is available."
        },
        {
            "id": 2,
            "title": "How much time is needed for setting up a private limited company in India?",
            "description": "If you have all the documents in order, it will take no longer than 15 days. However, this is dependent on the workload of the registrar."
        },
        {
            "id": 3,
            "title": "Do I need to be physically present during this process?",
            "description": "No, new company registration is a fully online process. As all documents are filed electronically, you would not need to be physically present at all. You would need to send us scanned copies of all the required documents & forms."
        },
        {
            "id": 4,
            "title": "What documents are required to complete the process?",
            "description": "All directors must provide identity and address proof, as well as a copy of the PAN card (for Indian nationals) and passport (for foreign nationals). No-objection certificate must be submitted by the owner of the registered office premises."
        },
        {
            "id": 5,
            "title": "Does a private limited company have continuous existence?",
            "description": "Yes, so long as the annual compliances are met, the private limited company will continue to exist. If you do not comply with the requirements, it will go dormant, until it is struck off the register altogether."
        },
        {
            "id": 6,
            "title": "Is it necessary to have a company’s books audited?",
            "description": "Yes, a private limited company must hire an auditor, no matter what its revenues. In fact, an auditor must be appointed within 30 days of incorporation. Compliance is important with a private limited company, given that penalties for non-compliance can run into lakhs of rupees and even lead to the blacklisting of directors."
        },
        {
            "id": 7,
            "title": "What are articles of association and memorandum of association?",
            "description": "These documents contain the rules, vision and mission of your organisation, and define, among other things, the exact business and the roles and responsibilities of shareholders and directors."
        },
        {
            "id": 8,
            "title": "Are two directors necessary for a private limited company registration?",
            "description": "Yes, a minimum of two directors are needed for a private limited company. The maximum members can be 200. You can register as a one person company, if you are the sole owner of the company."
        },
        {
            "id": 9,
            "title": "What is the minimum capital needed to form a private limited company?",
            "description": "There is no minimum capital required for starting a private limited company."
        },
        {
            "id": 10,
            "title": "Can the director of a private limited company be a salaried person?",
            "description": "Yes, a salaried person can become the director in a private limited, LLP or OPC private limited company. One needs to check the employment agreement if that allows for such provisions. In a lot of cases, the employers are quite comfortable with the fact that their employee is a director in another company."
        },
        {
            "id": 11,
            "title": "Can a limited liability partnership (LLP) be converted to a private limited company?",
            "description": "No, one cannot convert an LLP into a private limited company as it is not a MCA. The LLP Act, 2008 and the Companies Act, 2013, both don’t have any provisions on conversion of the LLP in a private limited company. However, if one wants to expand their business they can register a new private limited company with the same name. The LLP company needs to just issue a no objection certificate."
        },
        {
            "id": 12,
            "title": "Can one register a private limited company on their home address?",
            "description": "Yes, the company can be registered at the owner's home address. A copy of the utility bill is required to be submitted."
        },
        {
            "id": 13,
            "title": "If there are no partners available, then can one register their family members in the company?",
            "description": "Yes, it is good to register a family member as a partner. At a later stage one can change this or transfer shares of the directors."
        },
        {
            "id": 14,
            "title": "Does one have to be present in person for the incorporation of a private limited company?",
            "description": "The entire procedure is done online and one does not have to be present at our office or any other place for the incorporation. A scanned copy of the documents has to be sent via mail. They get the company incorporation certificate from the MCA via courier at the business address."
        },
        {
            "id": 15,
            "title": "Can NRIs/foreign nationals become directors in a private limited company?",
            "description": "Yes, a NRI or a foreign national can become a director of a private limited company. He or she must obtain a DIN from the Indian RoC. They can also hold a controlling stake in the company. As long as at least one director on the board of directors is an Indian resident"
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
        "name": "Better image and credibility in Market",
        "color": "#164760",
        "content": "Private limited company is popular and well known business structure. Corporate Customers, Vendors and Govt. Agencies prefer to deal with Private Limited Company instead of proprietorship or normal partnerships.",
        "image": "assets/images/privatebenefit/businessman.png"
    },
    {
        "name": "Easy to raise fund,capital and loans",
        "color": "#ffa229",
        "content": "Private limited company enjoys wide options to raise funds through bank loans, Angel Investors, Venture Capitalists, in comparison to LLPs and OPCs. This wide ranges of options amke it more profitable to run a private limited company",
        "image": "assets/images/privatebenefit/funding.png"
    },
    {
        "name": "Favorite Business structure for Investors",
        "color": "#164760",
        "content": "Investors love to invest in Private Limited companies as it is well structured and less strings attached. Most important it is very easy to exit from a private limited company. Morover decision making authoriity is with limited people which reasults into less flutuactions..",
        "image": "assets/images/privatebenefit/favo.png"
    },
    {
        "name": "Easy to attract Employees and workers",
        "color": "#ffa229",
        "content": "For startups putting together a team and keeping them for long time is a challenge, due to confidence attached to private limited structure, it is easy to hire people as well as motivate them with corporate designations and stock options. More offerings make it more attractive",
        "image": "assets/images/privatebenefit/easytoattract.png"
    },
    {
        "name": "Quite easy to sell and deal with",
        "color": "#164760",
        "content": "Private Ltd. is easy to sell, very less documentation and cost is involved in selling a Private limited company . Therefore desolution of a private limited company is easier and cheaper as compared to other forms of company in the field . And so it is easy to deal with.",
        "image": "assets/images/privatebenefit/sell.png"
    }
]
let documents = [
    {
        "name": "PAN CARD",
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
        "name": "IDENTITY PROOF",
        "color": "#ffa229",
        "content": "Aadhar card and Voter ID/ Passport/ Driving License of Shareholders and Directors.",
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
        "p": "A private limited company must have at least two directors, with a maximum of fifteen. A minimum of one of the company's directors must be a resident of India."
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
            "text": "A private limited company must have at least two directors, with a maximum of fifteen. A minimum of one of the company's directors must be a resident of India."
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
                <link rel="canonical" href="https://www.registerkaro.in/ads/foreign/private-limited-company-registration" />
            </Head>
            <GstModal Query={Query} />
            <div className="heroes">
                <section id="hero" className={`pt-50 ${"yes" === "yes" ? "bg-one" : ""} `}>
                    <div className="container d-lg-flex">
                        <div className="left-from-content">
                            <div className="img-container-desktop">
                                <Image priority={true} src={pvtD} height={450} width={550} alt='page-hero' className="img-width" />
                            </div>
                            <div className="img-container-mobile">
                                <Image priority={true} src={pvtD} height={310} alt='page-hero' className="img-width" />
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
                        <FormAds Query={'Pvt - Foreign Lead'} />
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