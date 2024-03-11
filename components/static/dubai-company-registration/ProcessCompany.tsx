import Image from "next/image";
import React, { useState } from "react";
import one from "../../../assets/images/pvt-reg/HowToRegister/one.svg";
import two from "../../../assets/images/pvt-reg/HowToRegister/two.svg";
import three from "../../../assets/images/pvt-reg/HowToRegister/three.svg";
import four from "../../../assets/images/pvt-reg/HowToRegister/four.svg";
import five from "../../../assets/images/pvt-reg/HowToRegister/five.svg";
import six from "../../../assets/images/pvt-reg/HowToRegister/six.svg";
import seven from "../../../assets/images/pvt-reg/HowToRegister/seven.svg";
import eight from "../../../assets/images/pvt-reg/HowToRegister/eight.svg";
import nine from "../../../assets/images/pvt-reg/HowToRegister/nine.svg";
import ten from "../../../assets/images/pvt-reg/HowToRegister/ten.svg";
import arrow from "../../../assets/images/pvt-reg/HowToRegister/arrow.svg";

export const ProcessCompany = () => {
  const [active, setActive] = useState("1");

  const handleActive = (id: string) => {
    setActive(id);
  };
  return (
    <div className="DocumentButtonWise w-80 m-auto" id="ProcessCompany">
      {/* dfsdf */}
      <p className="main-para">
        You may follow the given step by step instructions for Company
        Registration in Dubai:
      </p>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
      <div className="flex-5">
          <button
            onClick={() => handleActive("1")}
            className={`btn flex ${
              active === "1" ? "active-btn" : "none-btn"
            } position-relative`}
          >
            <div className="d-flex justify-content-between align-items-center gap-2">
              <Image
                src={one}
                alt="three"
                loading="lazy"
                width={30}
                height={30}
              />
              <div className="ms-1 pe-4">
                Step 1: Identify the Business Nature
              </div>
              <Image
                src={arrow}
                alt="arrow"
                loading="lazy"
                width={30}
                height={30}
                className="position-absolute end-0"
              />
            </div>
          </button>
          <button
            onClick={() => handleActive("2")}
            className={`btn flex ${
              active === "2" ? "active-btn" : "none-btn"
            } position-relative`}
          >
            <div className="d-flex justify-content-between align-items-center gap-2">
              <Image
                src={two}
                alt="three"
                loading="lazy"
                width={30}
                height={30}
              />
              <div className="ms-1 pe-4">Step 2: Select Business Structure</div>
              <Image
                src={arrow}
                alt="arrow"
                loading="lazy"
                width={30}
                height={30}
                className="position-absolute end-0"
              />
            </div>
          </button>
          <button
            onClick={() => handleActive("3")}
            className={`btn flex ${
              active === "3" ? "active-btn" : "none-btn"
            } position-relative`}
          >
            <div className="d-flex justify-content-between align-items-center gap-2">
              <Image
                src={three}
                alt="three"
                loading="lazy"
                width={30}
                height={30}
              />
              <div className="ms-1 pe-4">Step 3: Trade name Registration</div>
              <Image
                src={arrow}
                alt="arrow"
                loading="lazy"
                width={30}
                height={30}
                className="position-absolute end-0"
              />
            </div>
          </button>
          <button
            onClick={() => handleActive("4")}
            className={`btn flex ${
              active === "4" ? "active-btn" : "none-btn"
            } position-relative`}
          >
            <div className="d-flex justify-content-between align-items-center gap-2">
              <Image
                src={four}
                alt="three"
                loading="lazy"
                width={30}
                height={30}
              />
              <div className="ms-1 pe-4">Step 4: Initial Approval</div>
              <Image
                src={arrow}
                alt="arrow"
                loading="lazy"
                width={30}
                height={30}
                className="position-absolute end-0"
              />
            </div>
          </button>
          <button
            onClick={() => handleActive("5")}
            className={`btn flex ${
              active === "5" ? "active-btn" : "none-btn"
            } position-relative`}
          >
            <div className="d-flex justify-content-between align-items-center gap-2">
              <Image
                src={five}
                alt="three"
                loading="lazy"
                width={30}
                height={30}
              />
              <div className="ms-1 pe-4">Step 5: Prepare Documentation</div>
              <Image
                src={arrow}
                alt="arrow"
                loading="lazy"
                width={30}
                height={30}
                className="position-absolute end-0"
              />
            </div>
          </button>
          <button
            onClick={() => handleActive("6")}
            className={`btn flex ${
              active === "6" ? "active-btn" : "none-btn"
            } position-relative`}
          >
            <div className="d-flex justify-content-between align-items-center gap-2">
              <Image
                src={six}
                alt="three"
                loading="lazy"
                width={30}
                height={30}
              />
              <div className="ms-1 pe-4">
                Step 6: Business Location Selection
              </div>
              <Image
                src={arrow}
                alt="arrow"
                loading="lazy"
                width={30}
                height={30}
                className="position-absolute end-0"
              />
            </div>
          </button>
          <button
            onClick={() => handleActive("7")}
            className={`btn flex ${
              active === "7" ? "active-btn" : "none-btn"
            } position-relative`}
          >
            <div className="d-flex justify-content-between align-items-center gap-2">
              <Image
                src={seven}
                alt="three"
                loading="lazy"
                width={30}
                height={30}
              />
              <div className="ms-1 pe-4">
                Step 7: Other Government Approvals
              </div>
              <Image
                src={arrow}
                alt="arrow"
                loading="lazy"
                width={30}
                height={30}
                className="position-absolute end-0"
              />
            </div>
          </button>
          <button
            onClick={() => handleActive("8")}
            className={`btn flex ${
              active === "8" ? "active-btn" : "none-btn"
            } position-relative`}
          >
            <div className="d-flex justify-content-between align-items-center gap-2">
              <Image
                src={eight}
                alt="three"
                loading="lazy"
                width={30}
                height={30}
              />
              <div className="ms-1 pe-4">Step 8: Documents Submission</div>
              <Image
                src={arrow}
                alt="arrow"
                loading="lazy"
                width={30}
                height={30}
                className="position-absolute end-0"
              />
            </div>
          </button>
          <button
            onClick={() => handleActive("9")}
            className={`btn flex ${
              active === "9" ? "active-btn" : "none-btn"
            } position-relative`}
          >
            <div className="d-flex justify-content-between align-items-center gap-2">
              <Image
                src={nine}
                alt="three"
                loading="lazy"
                width={30}
                height={30}
              />
              <div className="ms-1 pe-4">Step 9: License Procurement</div>
              <Image
                src={arrow}
                alt="arrow"
                loading="lazy"
                width={30}
                height={30}
                className="position-absolute end-0"
              />
            </div>
          </button>
          <button
            onClick={() => handleActive("10")}
            className={`btn flex ${
              active === "10" ? "active-btn" : "none-btn"
            } position-relative`}
          >
            <div className="d-flex justify-content-between align-items-center gap-2">
              <Image
                src={ten}
                alt="three"
                loading="lazy"
                width={30}
                height={30}
              />
              <div className="ms-1 pe-4">
                Step 10: Company Registration with Chamber of Commerce and
                Industry
              </div>
              <Image
                src={arrow}
                alt="arrow"
                loading="lazy"
                width={30}
                height={30}
                className="position-absolute end-0"
              />
            </div>
          </button>
        </div>
        <div className="flex-5 text-justify fs-20 p-color-black">
          <div className={`${active === "1" ? "active" : "none"}`}>
            <h3>Step 1: Identify the Business Nature</h3>
            <p>
              First step consists of identifying the nature of the business for
              the registration as there tend to be more than 2000 different
              economic activities listed for registration.
            </p>
          </div>
          <div className={`${active === "2" ? "active" : "none"}`}>
            <h3>Step 2: Select Business Structure</h3>
            <p>
              Once the activities have been identified in the business, it is
              time to select the most suitable business structure for the
              registration process as different business structures offer
              different benefits and compliances.
            </p>
          </div>
          <div className={`${active === "3" ? "active" : "none"}`}>
            <h3>Step 3: Trade name Registration</h3>
            <p>
              The company name, or trade name, needs to be distinct and not
              rhyme with the name of any other company that has already been
              registered. Through the Department of Economic Development of the
              selected emirate, you can apply in person, online, or through a
              smart application.
            </p>
          </div>
          <div className={`${active === "4" ? "active" : "none"}`}>
            <h3>Step 4: Initial Approval</h3>
            <p>
              The UAE government's "no objection" to a certain firm being
              created in the nation is known as an initial permission. The
              investor can now move forward with the next phases of business
              setup and wait for the authorities to grant the license, thanks to
              this approval. Nonetheless, it does not provide the investor
              authority to manage the company or carry out the business
              activity.
            </p>
          </div>
          <div className={`${active === "5" ? "active" : "none"}`}>
            <h3>Step 5: Prepare Documentation</h3>
            <p>
              If the company is organized as a limited liability company, civil
              corporation, public shareholding company, or private shareholding
              company, a Memorandum of Association (MOA) is necessary. If the
              business is a sole proprietorship, a local service agent agreement
              (LSA) is necessary.
            </p>
          </div>
          <div className={`${active === "6" ? "active" : "none"}`}>
            <h3>Step 6: Business Location Selection</h3>
            <p>
              In order to conduct business in the UAE, all companies need a
              physical address. The company's site and facilities must adhere to
              the emirate's Department of Economic Development's criteria as
              well as any local municipalities' or other appropriate
              authorities' zoning laws and regulations. The Ejari site of the
              Dubai Land Department is where the tenancy contract for office or
              warehouse space must be recorded in Dubai.
            </p>
          </div>
          <div className={`${active === "7" ? "active" : "none"}`}>
            <h3>Step 7: Other Government Approvals</h3>
            <p>
              In certain instances, further permissions from governmental bodies
              in charge of specific commercial operations are needed such as
              from the Ministry of Interiors, Ministry of Justice, Local
              Municipal Department, etc.
            </p>
          </div>
          <div className={`${active === "8" ? "active" : "none"}`}>
            <h3>Step 8: Documents Submission</h3>
            <p>
              Once all the documents have been prepared, you may submit all of
              them along with the application. The documents include Copy of
              lease contract, duly attested.
            </p>
          </div>
          <div className={`${active === "9" ? "active" : "none"}`}>
            <h3>Step 9: License Procurement</h3>
            <p>
              After the submission of documents with the application, you can
              obtain the business license on their website or at the economic
              department's service centers if no objection has been made.
            </p>
          </div>
          <div className={`${active === "10" ? "active" : "none"}`}>
            <h3>
              Step 10: Company Registration with Chamber of Commerce and
              Industry
            </h3>
            <p>
              After the procurement of License, you may register the company
              with the chamber of commerce and industry. However, the company
              must register in the same emirate in which it was incorporated.
            </p>
          </div>
        </div>
       
      </div>
    </div>
  );
};
