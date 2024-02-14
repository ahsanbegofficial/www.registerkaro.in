import React from "react";
import Head from "next/head";
import { Hero } from "../components/static/trademark-registration/Hero";
import { Process } from "../components/static/trademark-registration/Process";
import { FaqTemplatePVT } from "../components/child_components/FaqTemplatePVT";
import { WhyRegisterkaro } from "../components/static/WhyRegisterkaro";
import { Compilance } from "../components/static/trademark-registration/Compilance";
import { ValidityOfTrad } from "../components/static/trademark-registration/ValidityOfTrad";
import { Checklist } from "../components/static/trademark-registration/Checklist";
import { RoleOfTrad } from "../components/static/trademark-registration/RoleOfTrad";
import { Benefits } from "../components/static/trademark-registration/Benefits";
import { DocRequirement } from "../components/static/trademark-registration/DocRequirement";
import { ListOfDiff } from "../components/static/trademark-registration/ListOfDiff";
import { WhyRegist } from "../components/static/trademark-registration/WhyRegist";

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

const Home = () => {
  return (
    <div className="services-pages trademark-registration-reg">
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
      <h1 className="main-heading">
        An Overview of Trademark Registration Online
      </h1>
      <div className="heading-line"></div>
      <Process />
      <h1 className="main-heading">
        List of Different Trademark Classes in India
      </h1>
      <div className="heading-line"></div>
      <ListOfDiff />
      <h1 className="main-heading">What is the Role of Trademark Registry?</h1>
      <div className="heading-line"></div>
      <RoleOfTrad />
      <h1 className="main-heading">
        Benefits of Trademark Registration Online in India
      </h1>
      <div className="heading-line"></div>
      <Benefits />
      <h1 className="main-heading">
        Who can apply for Trademark Registration Online in India?
      </h1>
      <div className="heading-line"></div>
      <Checklist />
      <h1 className="main-heading">
        Documents required for Trademark Registration Online in India
      </h1>
      <div className="heading-line"></div>
      <DocRequirement />

      <h1 className="main-heading">
        Apply for Trademark Registration Online with RegisterKaro
      </h1>
      <div className="heading-line"></div>
      <Compilance />
      <h1 className="main-heading">
        Validity of Trademark Registration Online in India
      </h1>
      <div className="heading-line"></div>
      <ValidityOfTrad />
      <h1 className="main-heading">
        Why RegisterKaro for Trademark Registration?
      </h1>
      <div className="heading-line"></div>
      <WhyRegist />
      <h1 className="main-heading">Why RegisterKaro?</h1>
      <div className="heading-line"></div>
      <WhyRegisterkaro />
      <h1 className="main-heading">FAQs</h1>
      <div className="heading-line"></div>
      <FaqTemplatePVT faqItems={faq} />
    </div>
  );
};
export default Home;
