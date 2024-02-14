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
import opcDesktop from "../../assets/images/ads/opc-desktop.jpg";
import { SwiperSlider } from "../../components/child_components/SwiperSlider";

let registrationName = "OPC Registration"
let Query = "one-person-company"
let hero = {
    "pack_includes": [
        "DIN and DSC",
        "MoA & AoA",
        "Fees & Stamp duty",
        "Company Incorporation Certificate",
        "OPC PAN and TAN",
        "PF & ESIC Registration",
        "Business Commencement Certificate",
        "ZohoBooks Subscription"
    ],
    "companyDes": "Get your OPC Registered",
    "price": "Rs.1,999/-",
    "days": "15 days",
    "companyName": "OPC Registration In",
    "subtitle": " of OPC Registration",
    "subtitle2": " required For OPC Registration"
}
let faq = {
    "subtitle": "Frequently asked questions",
    "title": "We turn potential customers into leads.",
    "description": "Over points before unpleasant lady attending considered nearer projecting noisy praise listening. Sister principle delicate this reached attempted companions husband what unwilling regular departure suppose excuse.",
    "faqItem": [
        {
            "id": 1,
            "title": "What is Directors Identification Number (DIN)?",
            "description": "Directors Identification Number (DIN) is an identification number issued by the Ministry of Corporate Affairs, Government of India, to Directors of a company or Designated Partners of an LLP."
        },
        {
            "id": 2,
            "title": "How to Obtain a DIN?",
            "description": "New DIN will be allotted to a Director / Designated Partner while registeting a Company or LLP. Also, an Company / LLP can apply for a DIN for a proposed Director / Designated Partner."
        },
        {
            "id": 3,
            "title": "How many Persons required for registering an OPC?",
            "description": "ONE Person who is an Indian National and resident in India can register an OPC. Also it requires another person as Nominee Shareholder. So, in effect you need TWO People for registering an OPC. The Primary Shareholer can also be a Director."
        },
        {
            "id": 4,
            "title": "Who can become a Shareholder or Nominee Shareholder in an OPC ?",
            "description": "An India National (Individal), who is resident in India can only become a Shareholder or Nominee Shareholde in an OPC. Foreign Nationals, Non Resident Indians, Companies and LLPs cannot become a Shareholder or Nominee Shareholde in an OPC."
        },
        {
            "id": 5,
            "title": "Who can become a Director in an OPC?",
            "description": "Only individuals can become directors of the company. There is no restrictions for Foreign Nationals or Non Resident Indians to become a director of an OPC."
        },
        {
            "id": 6,
            "title": "How Many OPC's a person can register or become Nominee?",
            "description": "A Person can register only ONE OPC. Also a person can not become nominee in more than one OPC."
        },
        {
            "id": 7,
            "title": "What is Memorandum of Association (MOA)?",
            "description": "MOA is the charter document of a company. A company is created by registering a memorandum. MOA contains the name of a company, the state in which the registered office of the company is located, objectives, and its authorised capital. The MOA will be subscribed by the initial promoters of the company in their own handwriting. They will also have to write their name, father's name, residential address, occupation and the number of shares they agree to subscribe in the company. The MOA should also bear the signature of the witness who knows the subscribers."
        },
        {
            "id": 8,
            "title": "What is Articles of Association (AOA)?",
            "description": "AOA contains rules and regulations for the management of a company's internal affairs and conduct of its business. It defines the relationship of company between its members and directors and relation between members and directors. It also describes powers of directors. Further, the AOA describes the rights and duties of its members as well as the duties and responsibilities of its directors. In case of a private limited company, the AOA will contain the restrictions of transfer of shares, if any. Also, AOA usually contains the names of first directors of a company. The AOA will be subscribed by the initial promoters of the company in their own handwriting. Promoters will have to write their names, father's name, residential address, and occupation. The AOA should also bear the signature of the witness who knows the subscribers."
        },
        {
            "id": 9,
            "title": "Can the details of subscribers to the MOA & AOA can be amended?",
            "description": "The details of subscribers to the MOA & AOA cannot be amended or changed at any point of time during the life of the company, as it constitutes the document giving birth to a company. Subsequent changes in the shareholding or directorship of the company should be reflected in its internal records and will not affect the subscriber details in the MOA & AOA"
        },
        {
            "id": 10,
            "title": "What is Digital Signature Certificate (DSC)?",
            "description": "A digital signature is a type of asymmetric cryptography used to simulate the security properties of a handwritten signature on paper. Digital signature schemes normally give two algorithms, one for signing that involves the user's secret or private key, and one for verifying signatures that involves the user's public key. Digital signatures have often confused with scanned copies of a physical written signature, which do not have any legal backing for authentication of electronic documents."
        },
        {
            "id": 11,
            "title": "What is Registered Office?",
            "description": "Registered Office refers to the official correspondence address of a company or its principal place of business. The address of the Registered Office will be used for all official communications of the company. The company shall affix the name and address of its registered office outside every office or place of business in a prominent position. Also, the name and address of its registered office should be mentioned in its business letters, bills and other official publications."
        },
        {
            "id": 12,
            "title": "Whether the Registered Office can be changed?",
            "description": "Registered Office of the company can be shifted from one place to another in the same state or from one state to another after complying with legal requirements."
        },
        {
            "id": 13,
            "title": "What is Authorised Capital?",
            "description": "Authorised Capital or Registered Capital of a company is the upper limit of capital that a company can issue shares and collect money from shareholders. Company registration fee is payable to ROC and will be calculated on the basis of Authorised Capital. There is no requirement as to minimum Authorised Capital for registration of Company."
        },
        {
            "id": 14,
            "title": "What is subscribed capital?",
            "description": "Subscribed capital refers to the amount of capital agreed to be brought in by the shareholders to the company."
        },
        {
            "id": 15,
            "title": "What is paid up capital?",
            "description": "Paid up capital of a company refers to the amount of capital actually brought in by the shareholders to the company. Subscribers to the It is not necessary that subscribers should bring in the subscribed capital immediately after ncorporation. However, at the time of closing accounts for the first financial year, there should be a mimimum paid up capital of Rs.1,00,000."
        },
        {
            "id": 16,
            "title": "What is Corporate Identification Number (CIN)?",
            "description": "CIN is the number allotted to a company registered in India by the Ministry of Corporate Affairs, Government of India. CIN is a 21-digit number that contains the information such as status (listed / unlisted), NIC code of business activity, state of registration, year of registration, private or public and the sequential registration number in the respective state. For example - U74999KA2021PTC147303"
        },
        {
            "id": 17,
            "title": "Can a Minor be a Shareholder or Nomiee?",
            "description": "No. A minor can not become member or nominee of the One Person Company. Also a Minor cannot hold share with beneficial interest in an OPC."
        },
        {
            "id": 18,
            "title": "Whether OPC can do Non-Banking Financial and Investement?",
            "description": "An OPC is prohibited from carrying Non-Banking Financial activites ad and Investment in securities of other body corporates."
        },
        {
            "id": 19,
            "title": "When an OPC can be converted to Private Limited Company?",
            "description": "An OPC can be converted voluntarily into any other kind of company (Private Limited or Public Limited) only after 2 years from the date of incorporation. An OPC can be converted to any other kind of company with in 2 years of IncorporationIn only if the the Paid up Capital of OPC exceeds Rupees Fifty Lakhs of or its average annual turnover during a period of three consecutive financial years exceeds Rupees Two Crore."
        },
        {
            "id": 20,
            "title": "Why a Nominee is required in OPC?",
            "description": "The subscriber to the memorandum shall nominate another person as nominee after obtaining a written consent from such person. In the event of the shareholder death or incapacity to contract, the Nominee shall become the member of that OPC."
        },
        {
            "id": 21,
            "title": "Can the shareholder OPC change Nominee?",
            "description": "Yes. The sharehodder can change the nominee with an intimation in writing to the company at any time for any reason and can and nominate another person after obtaining the prior consent of new nominee."
        },
        {
            "id": 22,
            "title": "Can the Nominee withdraw his consent from OPC?",
            "description": "Yes. The Nominee can withdraw his consent by giving a notice in writing to the sole member and to the One Person Company. In such case, the sole member shall nominate another person as nominee within fifteen days of the receipt of the notice of withdrawal."
        }
    ]
}
let benefits = [
    {
        "name": "No Minimum Capital",
        "color": "#ffa229",
        "content": "There is No minimum capital is required to form a One Person Company.  It can be registered even with Rs. 10,000 as total Authorized Share capital.",
        "image": "assets/images/privatebenefit/liability.png"
    },
    {
        "name": "Separate Legal Entity",
        "color": "#164760",
        "content": "An OPC enjoys the benefit of Separate Legal Identity which clearly states that assets and liabilities of the business are not the assets and liabilities of the Directors or shareholders.",
        "image": "assets/images/privatebenefit/businessman.png"
    },
    {
        "name": "Limited Liability",
        "color": "#ffa229",
        "content": "A shareholder or the owner of a Company has a limited liability towards the company. His/her liability is limited up to the shares subscribed by him/her.",
        "image": "assets/images/privatebenefit/funding.png"
    },
    {
        "name": "Minimum compliances",
        "color": "#164760",
        "content": "For the purpose of Annual filing and other compliances, One Person Company is treated as a Private Limited Company. However, it is exempted from many compliances. It does not have to hold AGM every year.",
        "image": "assets/images/privatebenefit/favo.png"
    },
    {
        "name": "Builds Credibility",
        "color": "#ffa229",
        "content": "All the information relating to the one person company are made available in a public database. This feature makes it easy to authenticate the existence of the business that ultimately helps in improving business credibility.",
        "image": "assets/images/privatebenefit/easytoattract.png"
    },
    {
        "name": "Perpetual succession",
        "color": "#164760",
        "content": "The company keeps on existing in the eyes of law even in the case of death, insolvency, the bankruptcy of any of its member or shareholder. It continues as a legal person until it is legally dissolved.",
        "image": "assets/images/privatebenefit/sell.png"
    }
]
let documents =  [
    {
        "name": "ID CARD",
        "color": "#ffa229",
        "content": "The director/shareholder is required to provide their PAN at the time of registering one person company. PAN card acts as a primary ID proof.",
        "image": "assets/images/documents/PANCARD.png"
    },
    {
        "name": "PHOTOGRAPH",
        "color": "#164760",
        "content": "Latest Passport size photograph of Shareholder and Director Is required for the further process",
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
        "content": "Latest Telephone Bill /Electricity Bill/ Bank Account Statement of Shareholder and Director.",
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
        "h2": "One Director",
        "p": "A one person company must have at least one director. The director must be resident of India."
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
            "title": "One Director",
            "text": "A one person company must have at least one director. The director must be resident of India."
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
                <link rel="canonical" href="https://www.registerkaro.in/ads/one-person-company" />
            </Head>
            <GstModal Query={Query} />
            <div className="heroes">
                <section id="hero" className={`pt-50 ${"yes" === "yes" ? "bg-one" : ""} `}>
                    <div className="container d-lg-flex">
                        <div className="left-from-content">
                            <div className="img-container-desktop">
                                <Image priority={true} src={opcDesktop} height={450} width={550} alt='page-hero' className="img-width" />
                            </div>
                            <div className="img-container-mobile">
                                <Image priority={true} src={opcDesktop} height={310} alt='page-hero' className="img-width" />
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