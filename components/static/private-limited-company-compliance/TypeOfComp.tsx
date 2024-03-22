import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/private-limited-company-compliance/types.svg";
interface HeroProps {
    cityName: string;
}
export const TypeOfComp = ({ cityName }: HeroProps) => {
  return (
    <div id="TypeOfComp">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
        <Image
            alt="Types of Compliance for a Company Registered in India"
            className="TypeOfComp-img w-100"
            height={350}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
            <p >
              There are various parts of a business that must be conducted in
              the correct way, so there are different types of Compliance in
              Business. Let’s have a look at what they are and what they mean:
            </p>
          
        </div>
      </div>
    </div>
  );
};
