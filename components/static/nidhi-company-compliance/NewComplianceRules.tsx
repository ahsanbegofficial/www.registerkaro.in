
import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/nidhi-company-compliance/new_compliance.svg";
interface HeroProps {
    cityName: string;
}
const NewComplianceRules = ({ cityName }: HeroProps) => {
  return (
    <div id="NewComplianceRules">
        <p className="main-para">The Nidhi (Amendment) Rules, 2022, enhance compliance requirements for Nidhi companies.</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>1 : </strong>Any public company incorporated as Nidhi with a share capital of Rs 10 lakh must submit an NDH-4 form and apply to the central government within 120 days of its incorporation to be notified as a Nidhi company.</p>
            <p><strong>2 : </strong>The company must have at least 200 members and a net-owned fund (NOF) of Rs 20 lakh.</p>
            <p><strong>3 : </strong>Nidhi Company must acquire central government approval to operate within 14 months after incorporation.</p>
            <p><strong>4 : </strong>If a corporation does not hear back from the Central Government after 45 days of filing the NDH-4 form, the approval is assumed granted.</p>
        </div>
        <div className="flex-4">
        <Image
            alt="New Compliance Rules for Nidhi Companies"
            className="NewComplianceRules-img w-100"
            height={300}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default NewComplianceRules;


