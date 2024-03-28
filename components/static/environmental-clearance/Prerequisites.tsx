import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/environmental-clearance/Eligibility.svg";
interface HeroProps {
    cityName: string;
}
export const Prerequisites = ({ cityName }: HeroProps) => {
  return (
    <div id="Prerequisites">
        <p className="main-para"> Any project proponent, whether individual or organization, can avail our environmental clearance services, provided that:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-5 margin-padding-0">
           <p className="pt-5"><strong>1 : </strong>The project falls under one of the categories specified in the EIA Notification, 2006, such as mining, thermal power, river valley, infrastructure, industrial estates, etc.</p>
           <p className="pt-5"><strong>2 : </strong>The project has a valid registration or license to operate in {cityName}.</p>
           <p className="pt-5"><strong>3 : </strong>The project has the necessary documents and information to demonstrate its feasibility, viability, and sustainability.</p>
           <p className="pt-5"><strong>4 : </strong>The project has the consent and cooperation of the local people and other stakeholders who might be affected by the project.</p>
        </div>
        <div className="flex-4 ">
          <Image
            alt="Eligibility/Pre-Licensing/Mandatory Pre-Requisites"
            className="Prerequisites-img w-100"
            height={500}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
