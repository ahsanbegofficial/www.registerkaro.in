import React from "react";
import { Accordion } from "react-bootstrap";
import bgImg from '../../assets/images/steps/bgImg.webp';
// import TradeMarkContact from "./TradeMarkContact";
import TradeMarkContact from "./ZohoformService";

interface FaqProps {
  Query: any
  isBg: string;
  faqData: {
    title: string;
    subtitle: string;
    description: string;
    faqItem: {
      id: number;
      title: string;
      description: string;
    }[];
  };
}

const Faq: React.FC<FaqProps> = ({ isBg, faqData, Query }) => {
  const { title, subtitle, description, faqItem } = faqData;
  const bgImage = {
    backgroundImage: `url(${bgImg.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '5500',
    width: '8000'
  };

  return (
    <section style={bgImage} id="faq" className={`section-padding mainContainer faq ${isBg === "yes" ? "bg-one" : ""}`}>
      <div className={`container`}>
        <div className="p-3">
          <h1 className='text-center fs-3 fw-bold'>Frequently Asked <span className="headText">Questions</span></h1>
          <div className={"d-flex justify-content-center align-items-center contentDiv"}>
            <div className="mt-5 col-lg-8">
              <Accordion className="accordion-flush faqs-accordion mt-4 mt-lg-0" defaultActiveKey="1">
                {faqItem?.map((data, i) => (
                  <Accordion.Item eventKey={data.id.toString()} key={data.id} className="mb-4">
                    <Accordion.Header className="m-0">{data.title}</Accordion.Header>
                    <Accordion.Body>{data.description}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
        <div className="d-grid d-lg-none gap-5 container justify-content-center align-items-center mt-5">
          <div className="d-flex flex-column justify-content-center align-items-center" >
            <h1 className="headingText fw-bold fs-4">Have Any <span className='text-primary'>Questions</span>?</h1>
            <p className="subText mb-3">Don&apos;s worry every problem have its solution just you need a right person to resolve it and we have them all</p>
          </div>
          <div >
            <TradeMarkContact service={Query} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;