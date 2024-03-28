import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/netherlands-company-registration/Post-Registration.svg";

export const Registration = () => {
  return (
    <div id="Registration">
        <p className="main-para">Once you have registered your company successfully in Netherlands, yuo must adhere to the following post registration compliances:</p>
        <div className="flex-4 pt-5">
          <Image
            alt="Post-Registration Compliances"
            className="Registration-img w-100"
            height={500}
            loading="lazy"
            src={dft}
          />
        </div>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
           <p><strong>Opening Bank Account:</strong> To manage your business funds, the first compliance to adhere with is to register a corporate bank account for your firm. You are required to deposit the company's initial share capital as soon as the bank account is opened. In the Netherlands, you can open an online bank account with certain banks such as HSBC, etc.</p>
           <p><strong>Tax Registration:</strong> You must apply to the Tax Administration for VAT and tax registration when the firm is registered. At the same time, you can also submit an Employer Registration application.</p>
           <p><strong>Licenses and Permits:</strong> For running a business in the Netherlands, you must have to procure certain licenses and permits depending on the nature of your business. In such a step, you must consult an expert to know all permits that are required which will vary from industry to industry.</p>
        </div>
       
      </div>
    </div>
  );
};
