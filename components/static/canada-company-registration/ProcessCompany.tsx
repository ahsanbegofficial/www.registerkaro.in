import Image from "next/image";
import { useState } from "react";
import arrow from "../../../assets/images/pvt-reg/HowToRegister/arrow.svg";
import five from "../../../assets/images/pvt-reg/HowToRegister/five.svg";
import four from "../../../assets/images/pvt-reg/HowToRegister/four.svg";
import one from "../../../assets/images/pvt-reg/HowToRegister/one.svg";
import six from "../../../assets/images/pvt-reg/HowToRegister/six.svg";
import three from "../../../assets/images/pvt-reg/HowToRegister/three.svg";
import two from "../../../assets/images/pvt-reg/HowToRegister/two.svg";

export const ProcessCompany = () => {
  const [active, setActive] = useState("1");

  const handleActive = (id: string) => {
    setActive(id);
  };
  return (
    <div className="DocumentButtonWise w-80 m-auto" id="ProcessCompany">
      <p className="main-para">
      You may follow the step by step process for registering your company in Canada: 
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
              <div className="ms-1 pe-4">Step 1. Specify Registration Level:</div>
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
              <div className="ms-1 pe-4">Step 2. Obtain Company Number:</div>
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
              <div className="ms-1 pe-4">Step 3. Select Business Structure:</div>
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
              <div className="ms-1 pe-4">Step 4: Choose Company Name:</div>
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
              <div className="ms-1 pe-4">Step 5. Documentation:</div>
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
              <div className="ms-1 pe-4">Step 6. Apply for the Registration:</div>
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
            <h3>Step 1. Specify Registration Level:</h3>
            <p>At the very first step, you have to select the registration level for the business among two different levels which is federal and Provincial as the registration process varies for each level. If you intend to conduct business in only one province, you may opt for the Provincial Level whereas if you intend to operate your business in multiple provinces, you may choose Federal Level for the same. 
            </p>
          </div>
          <div className={`${active === "2" ? "active" : "none"}`}>
            <h3>Step 2. Obtain Company Number:</h3>
            <p>Next step consists of obtaining a nine digit number for the company registration by the authorities. This number is required for the further process of company registration in Canada.
            </p>
          </div>
          <div className={`${active === "3" ? "active" : "none"}`}>
            <h3>Step 3. Select Business Structure:</h3>
            <p>After obtaining the number of companies, you must decide the business structure of the same for proceeding ahead with the registration  process. You may select the structure of the company like corporation, partnership, or sole proprietorship, private limited company, etc.
            </p>
          </div>
          <div className={`${active === "4" ? "active" : "none"}`}>
            <h3>Step 4: Choose Company Name:</h3>
            <p>Next, you must choose a name for your business under which the business would be registered. Make note of a few things while deciding on the company name such as it must not violate any law or be identical to the business name of an already-established company. Following name selection, the name must be verified to see if it is listed at Canada's business registry or the NUANS. 
            </p>
          </div>
          <div className={`${active === "5" ? "active" : "none"}`}>
            <h3>Step 5. Documentation:</h3>
            <p>Prepare the necessary paperwork, such as the articles of association and memorandum of association which must be signed by each of the original investors or guarantors. Moreover, make sure to attach financial documents for the directors, and shareholders along with their identity documents. Apart from the documents, you would also need a registered office address for the delivery of documents.
            </p>
          </div>
          <div className={`${active === "6" ? "active" : "none"}`}>
            <h3>Step 6. Apply for the Registration:</h3>
            <p>Send the required paperwork to the government along with your request for company registration. Afterwards, obtaining a GST/HST account is the final stage in the registration process for a Canadian corporation, provided that the company expects to make at least $30,000 in revenue annually.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
