import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/private-limited-company-compliance/what_are_consequences.svg";
interface HeroProps {
    cityName: string;
}
export const Compilance = ({ cityName }: HeroProps) => {
  return (
    <div id="Compilance">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-5">
          <Image
            alt="Internal Compliance"
            className="Internal-img w-100"
            height={350}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
          <p>
            It basically refers to an internally designed set of rules and
            regulations that the traders, customers, traders, and employees
            follow to maintain the quality of services or products by the
            Company or Organisation. These are created and sanctioned by senior
            experts and are followed by everyone in the Company. Some Internal
            Compliances are setting up Board of Directors, conducting regular
            meetings and distributing stocks to shareholders.
          </p>
        </div>
        
      </div>
    </div>
  );
};
