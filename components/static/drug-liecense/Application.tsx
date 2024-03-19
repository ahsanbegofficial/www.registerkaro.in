import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/drug-license/who_submit.svg";

interface HeroProps {
    cityName: string;
}
export const Application = ({ cityName }: HeroProps) => {
  return (
    <div id="Application">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4 ">
            <Image
                alt="Who may submit a drug license application?"
                className="Application-img w-100"
                height={320}
                loading="lazy"
                src={bft}
            />
            </div>
        <div className="flex-7 pt-5">
           <p>Let's say you want to distribute pharmaceuticals or open a medical supply business and need a drug license. If so, you have to meet the educational requirements outlined in the 1940 Drugs and Cosmetic Act. A pharmacy degree is required of both competent individuals and pharmacists. The qualified individual needs to have prior drug distribution expertise. The pharmacist must maintain their registration with the Pharmacist Council at the same time. Since the Drug License Application will be submitted, they should have proof. </p>
        </div>
        
      </div>
    </div>
  );
};
