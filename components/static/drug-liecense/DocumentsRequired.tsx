import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/drug-license/document_requirement.svg"

interface HeroProps {
    cityName: string;
}
export const DocumentsRequired = ({ cityName }: HeroProps) => {
  return (
    <div id="DocumentsRequired">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4 mt-4">
          <Image
            alt="Documents requirement for Drug License in India"
            className="DocumentsRequired-img w-100"
            height={600}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
            <p><strong>1 : </strong> The partnership deed, or memorandum and articles of association (MOA & AOA for companies) of the firm.</p>
            <p><strong>2 : </strong> For Retail and Wholesale Licenses: Affidavit of a licensed pharmacist or other qualified individual.</p>
            <p><strong>3 : </strong> Property Document (POA in the event of owned property, lease agreement, or registry deed).</p>
            <p><strong>4 : </strong> Certificate of Incorporation, List of Directors, and Board Resolution (if applicable to a company)</p>
            <p><strong>5 : </strong> The property's primary plan and site plan (blue print)</p>
            <p><strong>6 : </strong> A copy of the rent agreement (if the property is rented)</p>
            <p><strong>7 : </strong> One invoice copy of the refrigerator or air conditioner that was purchased for use.</p>
            <p><strong>8 : </strong> Cover letter outlining the application's purpose</p>
            <p><strong>9 : </strong> Identification proof for directors, partners, and proprietors</p>
            <p><strong>10 : </strong> For Manufacturing: Employer's affidavit and Technical staff’s evidence of education, experience, certificate of experience, bio-data, appointment letter, and photographs.</p>
            <p><strong>11 : </strong> In the event that a retail license is required: a degree from a registered pharmacist, a registration certificate from the state pharmacy council, an appointment letter, and biographical information</p>
            <p><strong>12 : </strong> In the event of a wholesale license: a certificate of competency in medicine, a letter of appointment, a bio-data file, and a certificate of experience.</p>
            <p><strong>13 : </strong> Affidavit of Non-Conviction, inventory of manufacturing tools, and inventory of testing tools are required for manufacture.</p>
        </div>
       
      </div>
    </div>
  );
};
