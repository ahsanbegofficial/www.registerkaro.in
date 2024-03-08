import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/usa-company-registration/inforamtion_requred.svg";

export const InformationRequired = () => {
  return (
    <div id="InformationRequired">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4 mt-4">
          <Image
            alt="Information and Documents Required for USA Company Registration
            In order to register a company in the US, a number of required documents and pieces of information must be provided. A detailed list of all the items you’ll need to start the process of USA Company Registration is provided below:"
            className="InformationRequired-img w-100"
            height={500}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
            <p><strong>Company Name:</strong> Choose a name for your company. Make sure it’s one-of-a-kind and not already in use in your chosen state. The majority of states require a different business name.</p>
            <p><strong>Company Structure:</strong> Decide if you want to establish an LLC, C-Corporation, S-Corporation, nonprofit organization, or a single-person business.</p>
            <p><strong>Physical US Address for a Registered Business:</strong> You must provide a physical address where the business is registered in the United States. This could be your place of business or the address of a registered agent.</p>
            <p><strong>Registered Agent (Y/N):</strong> If you are using the address of a registered agent (a person or entity designated to receive legal documents on behalf of the business), you must state whether you have one or not.</p>
            <p><strong>Information on Business Partners:</strong> If you have business partners, you must submit their names, addresses, and the percentage of ownership each partner has in the company.</p>
        </div>
      </div>
    </div>
  );
};
