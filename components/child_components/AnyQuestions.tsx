import React, { FC } from "react";
import { WhatsappLogo } from "phosphor-react";
import Image from "next/image";
import anyQn1 from "../../assets/images/services/anyQns1.svg";
import anyQn2 from "../../assets/images/services/anyQns2.png";

interface AnyQuestionsProps {
  isBg: string;
}

const AnyQuestions: FC<AnyQuestionsProps> = ({ isBg }) => {
  return (
    <section
      id="anyquestions"
      className={`about anyqn section-padding ${isBg === "yes" ? "bg-one" : ""
        }`}
    >
      <div className="d-flex justify-content-center align-items-start d-grid gap-1">
        <h1
          className="fw-bold section-title text-center"
          style={{ fontSize: "28px" }}
        >
          <span className="badge-text text-capitalize">Reach </span> to us for
          anything!
        </h1>
      </div>
      <div className="d-md-flex container px-5">
        <div className="col-md-8 col-12">
          <h3 className="fw-bold text-green mt-5">Hey there,</h3>
          <h1 className="fw-bold mt-2">Have any</h1>
          <h1 className="fw-bold text-orange">Questions?</h1>
          <h5 className="fw-bold mt-3">
            Don{"'"}t worry every problem have its solution you <br />
            just need a right person to resolve it and we have them all.
          </h5>
          <h6 className="fw-regular mt-3 fs-3">
            Call us on <span className="text-orange">+91 783-698-6460</span>
          </h6>
          <div className="question-btn1 mt-5 d-flex">
            <div className="question-btn2 fw-bold">MORE QUESTIONS?</div>
            <WhatsappLogo
              size={40}
              color="#f9f9f9"
              weight="fill"
              className="text-end mt-1"
            />
          </div>
        </div>
        <div
          className="position-relative col-md-4 col-12"
          style={{ height: "28rem" }}
        >
          <div
            className="position-absolute bottom-0 end-0"
            style={{ zIndex: 1 }}
          >
            <Image src={anyQn1} className="img-fluid" alt="more_info" />
          </div>
          <div
            className="position-absolute"
            style={{ bottom: "1.6rem", right: "-1rem", zIndex: 2 }}
          >
            <Image src={anyQn2} className="img-fluid" alt="more_info" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnyQuestions;