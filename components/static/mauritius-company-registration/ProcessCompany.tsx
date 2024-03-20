import Image from "next/image";
import { useState } from "react";
import arrow from "../../../assets/images/pvt-reg/HowToRegister/arrow.svg";
import four from "../../../assets/images/pvt-reg/HowToRegister/four.svg";
import one from "../../../assets/images/pvt-reg/HowToRegister/one.svg";
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
      You may follow the step by step process for registering your company in Mauritius: 
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
              <div className="ms-1 pe-4">Step 1: Choose a Business Structure</div>
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
              <div className="ms-1 pe-4">Step 2: Choice of Name for the Company</div>
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
              <div className="ms-1 pe-4">Step 3: File for Registration</div>
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
              <div className="ms-1 pe-4">Step 4: Receive Incorporation Certificate</div>
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
            <h3>Step 1. Select Business Structure:</h3>
            <p>Before incorporating a company one needs to choose the business structure they would want their company to be incorporated in. This decision needs to be made with the help of experts in the field of business, the different types of business structure are discussed above.
            </p>
          </div>
          <div className={`${active === "2" ? "active" : "none"}`}>
            <h3>Step 2. Select Business Name:</h3>
            <p>A name that is unique needs to be chosen for the company, and the name needs to be reserved for the company, checked on the registration website if it is not taken by any other website or not. If it is not taken one may reserve the name of the company
            </p>
          </div>
          <div className={`${active === "3" ? "active" : "none"}`}>
            <h3>Step 3. Get the address:</h3>
            <p>A form needs to be filed for registration with all the details, which would be checked and rectified depending on the instructions provided.
            </p>
          </div>
          <div className={`${active === "4" ? "active" : "none"}`}>
            <h3>Step 4: Directors and Stakeholders:</h3>
            <p>After the successful completion of the above process, a certificate of incorporation will be granted to the company to which the form is applied. This means the company is incorporated and is in legal existence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
