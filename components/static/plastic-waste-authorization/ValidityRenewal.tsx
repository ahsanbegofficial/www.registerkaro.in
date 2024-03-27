
import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/plastic-waste-authorization/validity.svg";
interface HeroProps {
    cityName: string;
}
export const ValidityRenewal = ({ cityName }: HeroProps)  => {
  return (
    <div id="ValidityRenewal">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-5">
            <p>The plastic waste authorization is valid for a period of five years from the date of issue. The authorization holder can apply for renewal of the authorization at least 120 days before the expiry of the authorization. The renewal application has to be submitted online along with the updated documents and the proof of compliance with the authorization conditions and terms. The SPCB or UTPCC will renew the authorization or reject the application within 120 days of the receipt of the complete application. The renewal authorization is also valid for a period of five years from the date of issue.</p>
        </div>
        <div className="flex-3">
        <Image
            alt="What is the validity and renewal of Authorization?"
            className="ValidityRenewal-img w-100"
            height={310}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};




