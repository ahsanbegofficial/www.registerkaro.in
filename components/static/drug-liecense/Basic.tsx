import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/drug-license/Basic_pre-requisites_for_a_drug_license.svg";

interface HeroProps {
    cityName: string;
}
export const Basic = ({ cityName }: HeroProps) => {
  return (
    <div id="Basic">
        <p className="main-para">The relevant state authorities (Drugs Control Department) must issue a legitimate drug license to any individual, corporation, partnership firm, etc. The provisions for this has been made in Drugs and Cosmetic Act, 1940 and Rules 1945 applicable in {cityName}. The following are some fundamental pre-requisites:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        
        <div className="flex-7 pt-5">
            <p><strong>1 :</strong> Minimum space for the shop or office.</p>
            <p><strong>2 :</strong> Granted in a non-residential setting, such as a business space.</p>
            <p><strong>3 :</strong> Must adhere to the requirements of the licensing body.</p>
            <p><strong>4 :</strong> Refrigerator or air conditioner on the property.</p>
            <p><strong>5 :</strong> The Department of Drug Control-approved technical personnel profile needs to be on display at the business's location.</p>
        </div>
        <div className="flex-4 ">
          <Image
            alt="Basic pre-requisites for a drug license"
            className="Basic-img w-100"
            height={340}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};
