import Image from "next/image";
import { useState } from "react";
import arrow from "../../../assets/images/pvt-reg/HowToRegister/arrow.svg";
import five from "../../../assets/images/pvt-reg/HowToRegister/five.svg";
import four from "../../../assets/images/pvt-reg/HowToRegister/four.svg";
import one from "../../../assets/images/pvt-reg/HowToRegister/one.svg";
import seven from "../../../assets/images/pvt-reg/HowToRegister/seven.svg";
import six from "../../../assets/images/pvt-reg/HowToRegister/six.svg";
import three from "../../../assets/images/pvt-reg/HowToRegister/three.svg";
import two from "../../../assets/images/pvt-reg/HowToRegister/two.svg";

interface HeroProps {
    cityName: string;
}
export const ProcessCompany = ({ cityName }: HeroProps) => {
  const [active, setActive] = useState("1");

  const handleActive = (id: string) => {
    setActive(id);
  };
  return (
    <div className="DocumentButtonWise w-80 m-auto" id="ProcessCompany">
      <p className="main-para">
      You may follow the step by step process for registering your company in United kingdom: 
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
              <div className="ms-1 pe-4">Step 1: Get Your User ID and Password </div>
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
              <div className="ms-1 pe-4">Step 2: Fill out the online application </div>
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
              <div className="ms-1 pe-4">Step 3: submit Documents </div>
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
              <div className="ms-1 pe-4">Step 4: Physical Inspection</div>
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
              <div className="ms-1 pe-4">Step 5: Approval/Rejection </div>
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
              <div className="ms-1 pe-4">Step 6: Change in constitution </div>
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
              <div className="ms-1 pe-4">Step 7: Separate password for pharmacists </div>
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
            <h3>Step 1: Get Your User ID and Password </h3>
            <p>The applicant must provide their personal information in person together with a request letter to obtain their User ID and Password.
            </p>
          </div>
          <div className={`${active === "2" ? "active" : "none"}`}>
            <h3>Step2: Fill out the online application </h3>
            <p>Before sending the application, please double-check that all the fields are filled out accurately for the relevant application listed below. Should your application be rejected due to incomplete information, you will forfeit the previously paid fees.
            </p>
          </div>
          <div className={`${active === "3" ? "active" : "none"}`}>
            <h3>Step 3: submit Documents </h3>
            <p>After scanning each document at 100 DPI in black and white, submit it to the designated location with the aforementioned ID and password. If more particular documentation is needed, the licensing authority may request it.
            </p>
          </div>
          <div className={`${active === "4" ? "active" : "none"}`}>
            <h3>Step 4: Physical Inspection</h3>
            <p>Present the inspector with all original documentation at the time of the inspection. Any more documentation related to your application that the inspector may request from you.
            </p>
          </div>
          <div className={`${active === "5" ? "active" : "none"}`}>
            <h3>Step 5: Approval/Rejection </h3>
            <p>You will be notified by SMS if your application is approved or denied. For new licenses and license renewals, print the approval or rejection from the "Print License" option. Within three days, click "MISC approvals" for additional approvals. Licenses and approvals bearing the official seal and current e-registration will be sent to you.
            </p>
          </div>
          <div className={`${active === "6" ? "active" : "none"}`}>
            <h3>Step 6: Change in constitution </h3>
            <p>Changing the proprietor or partner will be interpreted as a "change in constitution," requiring the applicant to apply for a new license.
            </p>
          </div>
          <div className={`${active === "7" ? "active" : "none"}`}>
            <h3>Step 7: Separate password for pharmacists </h3>
            <p>Registered pharmacists are also required to update their details by obtaining separate password.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
