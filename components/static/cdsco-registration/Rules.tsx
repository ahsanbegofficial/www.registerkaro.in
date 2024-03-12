import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/cdsco-registration/rules.svg";
interface HeroProps {cityName: string;}
export const Rules = ({ cityName }: HeroProps) => {
  return (
    <div id="Rules">
      <p className="main-para">
        Following are the applicants who can apply for online CDSCO Registration
        in {cityName}:
      </p>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
      <div className="flex-5">
          <Image
            alt="Applicable Rules/Acts/ Regulations"
            className="Applicable-img w-100"
            height={250}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-5 mt-5">
          <p>
            CDSCO operates under the Drugs and Cosmetics Act, of 1940, and the
            Medical Device Rules, of 2017, governing the registration and
            supervision of pharmaceuticals, medical devices, cosmetics, and
            diagnostics
          </p>
        </div>
      </div>
    </div>
  );
};
