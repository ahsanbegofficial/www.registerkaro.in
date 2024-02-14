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
import llpDesktop from "../../assets/images/ads/llp-desktop.jpg";
import { SwiperSlider } from "../../components/child_components/SwiperSlider";

let registrationName = "LLP Registration"
let Query = "llp-registration"
let hero =  {
    "pack_includes": [
        "DPIN and DSC",
        "LLP Agreement",
        "Fees & Stamp duty",
        "LLP Incorporation Certificate",
        "LLP PAN and TAN",
        "ZohoBooks subscription",
        "Filing of Form -3"
    ],
    "companyDes": "Get your LLP Registered",
    "price": "Rs.1,999/-",
    "days": "15 days",
    "companyName": "LLP Company Registration In",
    "subtitle": " of LLP Registration",
    "subtitle2": " required For LLP Registration"
}
let faq = {
    "subtitle": "Frequently asked questions",
    "title": "We turn potential customers into leads.",
    "description": "Over points before unpleasant lady attending considered nearer projecting noisy praise listening. Sister principle delicate this reached attempted companions husband what unwilling regular departure suppose excuse.",
    "faqItem": [
        {
            "id": 1,
            "title": "What is the eligibility of designated partners/partners in an LLP?",
            "description": "Any individual, or even a company or an LLP, can become a partner. However, only an individual can become a ‘designated partner’ in an LLP."
        },
        {
            "id": 2,
            "title": "I am an NRI. Can I form an LLP in India?",
            "description": "Yes, non-resident Indians and foreign nationals who are willing to enter into an LLP partnership can do so, provided they submit the necessary documents after getting it notarized by the concerned authorities. Although, at least one of the designated partners in an LLP should be the Indian national."
        },
        {
            "id": 3,
            "title": "What is an LLP agreement?",
            "description": "An LLP agreement is one that is made between the partners and the LLP regarding the relationship between the individual partners in the LLP. An LLP agreement usually consists of management policies, admission of new partners, profit sharing ratio, remuneration to partners and so on."
        },
        {
            "id": 4,
            "title": "What is the minimum number of partners required to start LLP?",
            "description": "According to the LLP Act, a minimum of two designated partners are required to start an LLP. The designated partners are responsible for fulfilling all the essential requirements involved in starting and running an LLP."
        },
        {
            "id": 5,
            "title": "What kind of start-ups commonly register LLPs?",
            "description": "Typically, only start-ups that will not be looking for venture capital funding register LLPs. This is because venture capitalists only invest in private and public limited companies."
        },
        {
            "id": 6,
            "title": "What is Digital Signature Certificate (DSC)?",
            "description": "Digital Signature Certificate (DSC) is a legally recognised method of signing documents electronically. A digital signature is a type of asymmetric cryptography used to simulate the security properties of a handwritten signature on paper. Digital signature schemes normally give two algorithms, one for signing that involves the user's secret or private key, and one for verifying signatures that involves the user's public key. The output of the signature process is called digital signature. Digital signature certificates are used by programs on the Internet and local machines to confirm the identity of a third party. Digital signatures have often confused with scanned copies of a physical written signature, which do not have any legal backing for authentication of electronic documents."
        },
        {
            "id": 7,
            "title": "What are the steps to incorporate LLP?",
            "description": "Name reservation: The first step to incorporate Limited liability partnership (LLP) is reservation of name of LLP. Applicant has to file eForm 1, for ascertaining availability and reservation of the name of a LLP business. Incorporate LLP: After reserving a name, user has to file eForm 2 for incorporating a new Limited Liability Partnership (LLP). eForm 2 contains the details of LLP proposed to be incorporated, partners’/ designated partners’ details and consent of the partners/ designated partners to act as partners/ designated partners. LLP Agreement: Execution of LLP Agreement is mandatory as per Section 23 of the Act. LLP Agreement is required to be filed with the registrar in eForm 3 within 30 days of incorporation of LLP."
        },
        {
            "id": 8,
            "title": "How can I apply for reserving LLP Name?",
            "description": "File LLP Form No. 1 (Application for reservation or change of name) by logging on to the LLP portal along with the fee prescribed and attaching the digital signature of the designated partner proposing to incorporate a LLP. Also, refer the LLP name availability guidelines prescribed under section-15 read with Rule-18 of LLP Rules, 2009."
        },
        {
            "id": 9,
            "title": "What is a Registered Office?",
            "description": "A Registered Office refers to the official correspondence address of an LLP or its principal place of business. The address of the Registered Office will be used for all official communications of the LLP. Registered office of an LLP can be shifted from one place to another in the same state or from one state to another after complying with legal requirements. The LLP shall affix the name and address of its registered office outside every office or place of business in a prominent position. Also, the name, registration number, ‘Registered with Limited Liability’ and address of its registered office should be mentioned in its business letters, bills and other official publications."
        },
        {
            "id": 10,
            "title": "Who is a partner of an LLP?",
            "description": "A partner in relation to an LLP means any person who becomes a partner in the liability partnership in accordance with the LLP agreement."
        },
        {
            "id": 11,
            "title": "Who can become a partner of an LLP?",
            "description": "An individual (who is capable of entering in to an agreement) or a body corporate can become a partner in an LLP. A body corporate means an LLP registered under the LLP Act, limited company registered under the Companies Act, a registered legal entity in any country registered under relevant laws of that country. However, it does not include a society or a corporation sole."
        },
        {
            "id": 12,
            "title": "Who is a Designated Partner?",
            "description": "A designated partner of an LLP means the partner who is responsible for carrying out all acts and things that are required for the functioning of the LLP in respect of compliance of provisions, filing of documents/returns/statements under the LLP Act and things as may be specified in the LLP agreement. An LLP should have a minimum of two designated partners who are individuals and at least one of them should be resident in India."
        },
        {
            "id": 13,
            "title": "What is Contribution?",
            "description": "Contribution means the amount contributed by each partner in the LLP as per the LLP agreement. The contribution is the liability of each partner and an LLP can recover the agreed contribution from the partner. A partner can contribute to the capital by cash, goods or services subject to applicable valuation."
        },
        {
            "id": 14,
            "title": "Is Foreign Direct Investment (FDI) Permitted in LLP?",
            "description": "Foreign Direct Investment (FDI) is permitted in LLPs under automatic route subject to the sectoral cap regulations. FDI in LLPs will not be allowed in sectors such as agricultural/plantation activity, print media or real estate business."
        },
        {
            "id": 15,
            "title": "What is LLPIN?",
            "description": "LLPIN is a 7-digit alpha numeric registration number allotted by Ministry of Corporate Affairs, Government of India, to an LLP. For example, AAA-0002 is the number allotted by the Ministry of Corporate Affairs to CompaniesInn Consulting LLP, the first LLP registered online in India."
        },
        {
            "id": 16,
            "title": "How to form/incorporate an LLP?",
            "description": "The procedure for formation of an LLP is very similar to that of a Private Limited Company incorporation procedure. A minimum of two Partners are required to start the LLP formation procedure and a registered office location is required within India. It is important to remember that FDI in LLP is allowed only with the prior approval of the Reserve Bank of India (RBI). Therefore, it is recommended that NRIs and Foreign National promoters opt to incorporate a Private Limited Company, where 100% FDI is allowed under the automatic route."
        },
        {
            "id": 17,
            "title": "What is the procedure for LLP registration in India?",
            "description": "LLP registration procedure is the easiest and transparent process as it has a blend of the benefits of a company and partnership firm namely, limited liability feature of a company and the flexibility of a Partnership firm. LLP registration process includes following steps: Get a digital signature (DSC) Apply for Director Identification Number (DIN) Get the name of the company approved through ‘Reserve your Unique Name’ service (RUN) Incorporation of LLP File ‘Limited Liability Partnership Agreement’"
        },
        {
            "id": 18,
            "title": "When should I file my annual report with ROC of an LLP?",
            "description": "LLPs in India must file its Annual Return within 60 days from the end of close of financial year and Statement of Account & Solvency within 30 days from the end of six months of close of financial year. Unlike Companies, LLPs mandatorily have to maintain their financial year, as April 1st to March 31st. Therefore, LLP annual return is due on May 30th and the Statement of Account & Solvency is due on October 30th of each financial year. In addition to the MCA annual return, LLPs must also mandatorily file an income tax return every year."
        },
        {
            "id": 19,
            "title": "Who can become a partner in LLP?",
            "description": "Any individual or body corporate may be a partner in an LLP. However, an individual shall not be capable of becoming a partner of an LLP, if— (a) he has been found to be of unsound mind by a Court of competent jurisdiction and the finding is in force; (b) he is an undischarged insolvent; or (c) he has applied to be adjudicated as an insolvent and his application is pending."
        },
        {
            "id": 20,
            "title": "Is it allowed by the CA Act 1949 to form LLP and practice?",
            "description": "Yes, A Chartered Accountant can practice as CA and form an LLP. However, All members of ICAI in practice who want to constitute separate LLPs are required to follow the provisions of the Limited Liability Partnership Act, 2008"
        },
        {
            "id": 21,
            "title": "Is it difficult to get Virtual Office Address to register your LLP in India?",
            "description": "It is not allowed to have a Virtual office address by ROC. However, you can opt for shared space for registering an LLP. Using a virtual office as a registered business address usually is not possible. While you can certainly run your business online, the ROC needs a physical location where it can contact you."
        },
        {
            "id": 22,
            "title": "What is the difference between partner and designated partner at LLP in India?",
            "description": "Designated partner are like Director and partners are like shareholders. The liability of the Partner is limited solely to Partnership Agreement. The Designated Partners are responsible towards the day to day functioning , liabilities prescribed by LLP Agreement as well as for all penalties imposed on Limited Liability Partners for contravention of any provisions applicable and to be complied with by the LLP."
        },
        {
            "id": 23,
            "title": "How do I close a current account of LLP?",
            "description": "Before closing a current account of an LLP, you need to make sure that there is no assets and balance lying in the bank account. Once there is no balance or assets in the bank account, the designated partners need to approach the banker with a request for closure and obtain a closure certificate from the bank that the account maintained with them has been closed which acts as a proof for closure of the bank account in the name of LLP."
        },
        {
            "id": 24,
            "title": "What is the liability of a partner in an LLP?",
            "description": "The obligation of an LLP whether under contractual arrangements or otherwise is the sole obligation of the LLP and will not extend to its partners. The obligations of the LLP are required to be met through the property of the LLP. The liability of a partner of an LLP, except in case of fraud, is limited to such partner’s contribution in the LLP as provided under the limited liability partnership agreement. A partner acts as an agent of only the LLP and not as an agent of the other partners of the LLP. An LLP can be held liable for wrongful acts or omissions of a partner which are undertaken by the partner as a part of the LLP’s business or with the authority of the LLP. However, an LLP will not be liable for acts undertaken by a partner if such partner does not have the requisite authority to undertake an action on behalf of the LLP and the person dealing with the LLP is aware that the partner does not have such authority."
        }
    ]
}
let benefits = [
    {
        "name": "Convenient",
        "color": "#ffa229",
        "content": "It is easy to start and manage a business like entrepreneurs. LLP agreements are customized in according to meet the needs of partners concerned. There is fewer formalities in areas of legal compilation, annual meeting, resolution as compared to any other Private Limited Company. For a detailed comparison between LLP and Private Limited read Choosing between LLP and Private Limited",
        "image": "assets/images/privatebenefit/liability.png"
    },
    {
        "name": "No minimum capital requirement",
        "color": "#164760",
        "content": "LLP can be started with the minimum amount of capital money. Capital may be in the form of tangible, movable asset like Land, machinery or intangible form.  Capital requirement in the case of a Private company( Requirements for Registration of a Private Company)  and Public Company(Requirements for registration of a Public Company) is Rs. 1, 00,000 and Rs. 5,00,000 respectively whereas no such mandatory capital requirement specified under the LLP.",
        "image": "assets/images/privatebenefit/businessman.png"
    },
    {
        "name": "No limit on owners of business",
        "color": "#ffa229",
        "content": "LLP may have partners varying from 2 to many. There is no limit for partners in LLP. An LLP requires a minimum 2 partners while there is no limit on the maximum number of partners in contrast to a private company wherein there is a restriction of not having more than 200 members.",
        "image": "assets/images/privatebenefit/funding.png"
    },
    {
        "name": "No requirement of compulsory Audit",
        "color": "#164760",
        "content": "LLPs are not required to audit the accounts. Any other company (Public, Private) are mandated to get their accounts audited by the auditing firm.LLP is required to audit their account in the following situation: When the contributions of the LLP exceeds Rs. 25 Lakhs, or When annual turnover of the LLP exceeds Rs. 40 Lakhs",
        "image": "assets/images/privatebenefit/favo.png"
    },
    {
        "name": "Savings from lower compliance burden",
        "color": "#ffa229",
        "content": "LLP have to face less compliance burden as they have to submit only two statements i.e. the Annual Return & Statement of Accounts and Solvency. Whereas in the case of private company, at Least 8 to 10 regulatory formalities and compliances are required to be duly completed. Read Annual Cost Comparison of Private Limited and LLP.",
        "image": "assets/images/privatebenefit/easytoattract.png"
    },
    {
        "name": "Taxation Aspect on LLP",
        "color": "#164760",
        "content": "LLP is not liable to pay the tax on the income and share of its partner. Thus, no dividend distribution tax is payable as under section 40(b).  Bonus, commission or remuneration, Interest to partners, any payment of salary, allowed as deduction.  Provision of ‘deemed dividend’ under income tax law, is not applicable to LLP.",
        "image": "assets/images/privatebenefit/sell.png"
    }
]
let documents = [
    {
        "name": "ID CARD",
        "color": "#ffa229",
        "content": "All the partners are required to provide their PAN at the time of registering LLP. PAN card acts as a primary ID proof.",
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
                <link rel="canonical" href="https://www.registerkaro.in/ads/llp-registration" />
            </Head>
            <GstModal Query={Query} />
            <div className="heroes">
                <section id="hero" className={`pt-50 ${"yes" === "yes" ? "bg-one" : ""} `}>
                    <div className="container d-lg-flex">
                        <div className="left-from-content">
                            <div className="img-container-desktop">
                                <Image priority={true} src={llpDesktop} height={450} width={550} alt='page-hero' className="img-width" />
                            </div>
                            <div className="img-container-mobile">
                                <Image priority={true} src={llpDesktop} height={310} alt='page-hero' className="img-width" />
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