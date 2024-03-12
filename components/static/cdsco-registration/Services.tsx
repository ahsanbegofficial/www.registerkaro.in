import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/cdsco-registration/service.svg";
interface HeroProps {cityName: string;}
export const Services = ({ cityName }: HeroProps) => {
  return (
    <div id="Services">
      <div className="checklist flex w-80 m-auto mobile-flex-column-reverse">
      <div className="flex-5">
          <p className="main-para pt-5">
            The primary registration required is the Registration Certificate
            (RC). Other licenses may include import licenses, manufacturing
            licenses, and approvals for clinical trials, contingent on the
            product classification.
          </p>
        </div>
        <div className="flex-4">
          <Image
            alt="Types and Distinctions of Licenses/Services Involved"
            className="Distinctions-img w-100"
            height={250}
            loading="lazy"
            src={bft}
          />
        </div>
       
       
      </div>
    </div>
  );
};
