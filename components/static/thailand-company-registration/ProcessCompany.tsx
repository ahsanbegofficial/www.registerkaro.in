import Image from "next/image";
import { useState } from "react";
import arrow from "../../../assets/images/pvt-reg/HowToRegister/arrow.svg";
import five from "../../../assets/images/pvt-reg/HowToRegister/five.svg";
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
      Follow the step by step process for successfully registering your company under Thai Jurisdictions:
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
              <div className="ms-1 pe-4">Step 1. Company Name Reservation:</div>
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
              <div className="ms-1 pe-4">Step 2. Directors and shareholders’ list: </div>
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
              <div className="ms-1 pe-4">Step 3. Memorandum of Association:</div>
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
              <div className="ms-1 pe-4">Step 4. Statutory meeting:</div>
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
              <div className="ms-1 pe-4">Step 5. FIle Application: </div>
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
            <h3>Step 1. Company Name Reservation:</h3>
            <p> The process for company registration begins with deciding the name of the company. When reserving any company name, one should adhere to the standards supplied by the Ministry of Commerce's Department of Business Development (DBD). Once selected, the name must be verified with the authority to check its availability.
            </p>
          </div>
          <div className={`${active === "2" ? "active" : "none"}`}>
            <h3>Step 2. Directors and shareholders’ list: </h3>
            <p> A minimum of two (2) promoters, shareholders, and one (1) director are required for the registration and setup of a Thai Limited Company. If a bank in Thailand issues a Bank Statement Certificate to Thai shareholders who are either all Thai nationals but the directors are foreign nationals, or if the shareholders are all Thai nationals but the directors are foreign nationals, it must demonstrate that the total amount of funds in their bank accounts exceeds the purchase price of each Thai shareholder's shares.
            </p>
          </div>
          <div className={`${active === "3" ? "active" : "none"}`}>
            <h3>Step 3. Memorandum of Association:</h3>
            <p> The name of the company that has been successfully reserved, the province in which it will be based, its goals for operation, the capital to be registered, and the identities of the promoters must all be included in a Memorandum of Association (MOA), which needs to be submitted to the Department of Business Development (DBD) in the Ministry of Commerce. Even though there are no minimum capital regulations in place, the capital quantity should be sufficient and acceptable for the planned business operations. 
            </p>
          </div>
          <div className={`${active === "4" ? "active" : "none"}`}>
            <h3>Step 4. Statutory meeting:</h3>
            <p> Once the company's share structure has been determined, the Memorandum and Articles of Association have been authorized, the Board of Directors has been chosen, and an auditor has been appointed, a statutory meeting is called to make all of the appointments as it is a mandatory obligation for company registration. The minutes of meeting for such statutory meetings are then submitted along with other documents.
            </p>
          </div>
          <div className={`${active === "5" ? "active" : "none"}`}>
            <h3>Step 5. FIle Application: </h3>
            <p> The last step is to compile all the documents prepared such as capital proof, directors’ details, shareholders’ details, registered office address and proof, minutes of the meeting, etc along with the application for company registration and then submit it to the Department of Business Development (DBD) in the Ministry of Commerce. Once evaluated, your application will receive a green signal for procuring the company registration certificate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
