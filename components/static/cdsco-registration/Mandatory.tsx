import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/cdsco-registration/mandatory.svg";
interface HeroProps {cityName: string;}
export const Mandatory = ({ cityName }: HeroProps) => {
  return (
    <div id="Revocation">
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="flex-5">
          <Image
            alt="Mandatory Compliance Attached with Service"
            className="Mandatory-img w-100"
            height={250}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-5 mt-5">
          <p className="main-para my-2" id="Mandatory">
            Manufacturers must comply with post-market surveillance, adverse
            event reporting, labeling, and manufacturing standards, and maintain
            an effective quality management system.
          </p>
        </div>
      </div>
    </div>
  );
};
