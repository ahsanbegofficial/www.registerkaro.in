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
      You may follow the step by step process for registering your company in Singapore: 
      </p>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
      <div className="flex-5">
          <button onClick={() => handleActive("1")} className={`btn flex ${active === "1" ? "active-btn" : "none-btn" } position-relative`} >
            <div className="d-flex justify-content-between align-items-center gap-2">
              <Image src={one} alt="three" loading="lazy" width={30} height={30} />
              <div className="ms-1 pe-4">Step 1. Register Company Name:</div>
              <Image  src={arrow}  alt="arrow"  loading="lazy"  width={30}  height={30}  className="position-absolute end-0"
              />
            </div>
          </button>
          <button  onClick={() => handleActive("2")}  className={`btn flex ${    active === "2" ? "active-btn" : "none-btn"  } position-relative`}
          >
            <div className="d-flex justify-content-between align-items-center gap-2">
              <Image  src={two}  alt="three"  loading="lazy"  width={30}  height={30}
              />
              <div className="ms-1 pe-4">Step 2. Documentation:</div>
              <Image  src={arrow}  alt="arrow"  loading="lazy"  width={30}  height={30}  className="position-absolute end-0"
              />
            </div>
          </button>
          <button  onClick={() => handleActive("3")}  className={`btn flex ${    active === "3" ? "active-btn" : "none-btn"  } position-relative`}
          >
            <div className="d-flex justify-content-between align-items-center gap-2">
              <Image  src={three}  alt="three"  loading="lazy"  width={30}  height={30}
              />
              <div className="ms-1 pe-4">Step 3. Submit Application with ACRA:</div>
              <Image  src={arrow}  alt="arrow"  loading="lazy"  width={30}  height={30}  className="position-absolute end-0"
              />
            </div>
          </button>
          <button  onClick={() => handleActive("4")}  className={`btn flex ${    active === "4" ? "active-btn" : "none-btn"  } position-relative`} >
            <div className="d-flex justify-content-between align-items-center gap-2">
              <Image  src={four}  alt="three"  loading="lazy"  width={30}  height={30}
              />
              <div className="ms-1 pe-4">Step 4: Certificate Procurement:</div>
              <Image  src={arrow}  alt="arrow"  loading="lazy"  width={30}  height={30}  className="position-absolute end-0"
              />
            </div>
          </button>
        </div>
        <div className="flex-5 text-justify fs-20 p-color-black">
          <div className={`${active === "1" ? "active" : "none"}`}>
            <h3>Step 1. Register Company Name:</h3>
            <p>Primarily, you have to conduct a thorough research regarding the name of the company by making sure that the name you have selected does not violate any of the requisites such as not similar to that of the pre existing company name or not violative of any law, etc. Once researched well, register your company name with ACRA.
            </p>
          </div>
          <div className={`${active === "2" ? "active" : "none"}`}>
            <h3>Step 2. Documentation:</h3>
            <p>Once the name approval has been obtained, you must prepare the documents required for the company registration process which includes Memorandum of Association, Article of Association, Registered Address proof, name approval certificate, directors and shareholders details, etc.
            </p>
          </div>
          <div className={`${active === "3" ? "active" : "none"}`}>
            <h3>Step 3. Submit Application with ACRA:</h3>
            <p>The simplest way is usually to register your business on the ACRA website. To submit your registration, you must first create an account, complete the forms, and upload your supporting documentation. Additionally, you'll have to pay the filing fees. You can also choose to send your application; to do this, download the forms from the website, print copies of your supporting documentation, and follow the instructions for the mailing address.
            </p>
          </div>
          <div className={`${active === "4" ? "active" : "none"}`}>
            <h3>Step 4: Certificate Procurement:</h3>
            <p>After the application has been submitted, the authority will further inspect and analyze the application and attached documents. If any mistake is found, then the application will be subject to rejection by requesting the alteration in the application. If found no errors, the application will be approved by the ACRA, and you will receive the certificate for the company registration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
