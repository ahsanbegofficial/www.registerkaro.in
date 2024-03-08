import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/usa-company-registration/related_buisness.svg";

export const Business = () => {
  return (
    <div id="Business">
        <p className="main-para">Depending on your location and the kind of business, you might need additional licenses or registrations in addition to the primary company registration. Common additional registrations include the following:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4 ">
          <Image
            alt="Related Business Registrations
            Depending on your location and the kind of business, you might need additional licenses or registrations in addition to the primary company registration. Common additional registrations include the following:"
            className="Business-img w-100"
            height={440}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
            <p><strong>Employer Identification Number (EIN):</strong> Usually necessary for most US-based enterprises, this is important information for tax purposes.</p>
            <p><strong>State Business Licenses:</strong> Depending on your industry or location, several states and municipalities may need particular business licenses or permits.</p>
            <p><strong>Sales Tax Permit:</strong> In order to collect and submit sales tax, your company may need to obtain a sales tax permit if it sells tangible goods.</p>
            <p><strong>Professional Licenses:</strong> Certain occupations, such as healthcare practitioners or lawyers, may necessitate the obtaining of specialized licenses.</p>
            <p><strong>Registration of a Trade Name or Fictitious Business Name:</strong> If you intend to operate your business under a name other than the legal corporate name, you may need to register a trade name or fictitious company name.</p>
        </div>
      </div>
      <p className="main-para"><strong>Note: </strong>The process of registering a company in the United States can be time-consuming and complex, with precise criteria varying depending on state and corporate structure. Seek legal and financial counsel to ensure compliance with all applicable federal, state, and local laws, as well as to comprehend the tax consequences and other regulatory concerns. You can establish a legally compliant and operating business entity in the United States by following these steps and getting the required permits and licenses.</p>
    </div>
  );
};
