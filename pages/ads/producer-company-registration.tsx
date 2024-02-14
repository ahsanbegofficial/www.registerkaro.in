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
import Producer from "../../assets/images/ads/Producer.png";
import { SwiperSlider } from "../../components/child_components/SwiperSlider";

let registrationName = "Producer Company Registration"
let Query = "producer-company-registration"
let hero = {
    "pack_includes": [
        "DIN and DSC for 5 directors",
        "Drafting of MoA & AoA",
        "Government Stamp duty",
        "Company Incorporation Certificate",
        "Company PAN and TAN",
        "ZohoBooks subscription"
    ],
    "companyDes": "Register your company online",
    "price": "Rs.9,999/-",
    "days": "10-14 days",
    "companyName": "Producer Company Registration In",
    "subtitle": " of Producer Company Registration",
    "subtitle2": " required For Producer Company Registration"
}
let faq = {
    "subtitle": "Frequently asked questions",
    "title": "We turn potential customers into leads.",
    "description": "Over points before unpleasant lady attending considered nearer projecting noisy praise listening. Sister principle delicate this reached attempted companions husband what unwilling regular departure suppose excuse.",
    "faqItem": [
        {
            "id": 1,
            "title": "How much time is needed for setting up a producer company in India?",
            "description": "Expect it to take 15 days to complete the entire procedure. This will, however, depend on whether you have all your papers in order and the workload of the RoC."
        },
        {
            "id": 2,
            "title": "What are the rules for picking a name for a producer company?",
            "description": "Every company has two parts to its name. The first part is unique. For example, 'WIPRO' or 'MERCEDES-BENZ'. The second part describes the business activity of the company. For example, 'Legal Solutions' or 'Technologies'. This second part must be as descriptive as possible. The name of the company must end with 'Producer Company Limited'"
        },
        {
            "id": 3,
            "title": "What documents need to be submitted to start a producer company?",
            "description": "Most importantly, all directors must have an identity and address proof and rights to practice on the property they are operating on. The owner of the registered office will also need to submit an NoC, stating that the company may operate from that location."
        },
        {
            "id": 4,
            "title": "Will my producer company have a continuous existence?",
            "description": "All companies are legal entities by themselves. Therefore, they have a continuous existence. The only way a producer company can cease to exist (other than shutting it down voluntarily) is if the annual compliances are not met or if the creditors/courts force its closure."
        },
        {
            "id": 5,
            "title": "Will the books of a producer company need auditing?",
            "description": "Yes, a producer company must have its books audited from its very first year. And in case turnover crosses Rs. 5 crore, it must employ a full-time company secretary to manage its affairs."
        },
        {
            "id": 6,
            "title": "Is office required for starting a producer company?",
            "description": "An address in India where the registered office of the Company will be situated is required. The premises can be a commercial / agricultural / residential where communication from the MCA will be received."
        }
    ]
}
let benefits = [
    {
        "name": "Seperate Legal Entity",
        "color": "#ffa229",
        "content": "Many times business need to borrow money and take high investment decisions. Public Ltd. Company is the best option for entrepreneurs with larger investment requirements. In case of normal Partnerships, Partners personal savings and property would be at risk incase business is not able to repay its loans or business goes into loss. In a Public limited company, only investment in shares of the business is lost, personal assets of the directors are safe.",
        "image": "assets/images/privatebenefit/liability.png"
    },
    {
        "name": "Loans & Investments",
        "color": "#164760",
        "content": "Public limited company is popular and well known business structure. Corporate Customers, Vendors and Govt. Agencies prefer to deal with Public Limited Company instead of proprietorship or normal partnerships.",
        "image": "assets/images/privatebenefit/businessman.png"
    },
    {
        "name": "Limited Liability",
        "color": "#ffa229",
        "content": "Public Limited company can list itself in various stock exchanges in India and raise capital from stock market. Limited company also enjoys wide options to raise funds through bank loans, general public and Institutional investors.",
        "image": "assets/images/privatebenefit/funding.png"
    },
    {
        "name": "Acceptance of Deposit",
        "color": "#164760",
        "content": "Investors love to invest in Public Limited companies as it is well structured and transparent business structure.",
        "image": "assets/images/privatebenefit/favo.png"
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
        "h2": "Five Directors",
        "p": "A Producer company must have at least five directors at the time of incorporation."
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
            "title": "Five Directors",
            "text": "A Producer company must have at least five directors at the time of incorporation."
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
                <link rel="canonical" href="https://www.registerkaro.in/ads/producer-company-registration" />
            </Head>
            <GstModal Query={Query} />
            <div className="heroes">
                <section id="hero" className={`pt-50 ${"yes" === "yes" ? "bg-one" : ""} `}>
                    <div className="container d-lg-flex">
                        <div className="left-from-content">
                            <div className="img-container-desktop">
                                <Image priority={true} src={Producer} height={450} width={550} alt='page-hero' className="img-width" />
                            </div>
                            <div className="img-container-mobile">
                                <Image priority={true} src={Producer} height={310} alt='page-hero' className="img-width" />
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