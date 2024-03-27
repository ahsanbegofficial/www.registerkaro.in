

import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/isi-mark-certification/validity.svg";
interface HeroProps {
    cityName: string;
}

export const PartnershipDeed = ({ cityName }: HeroProps)  => {
  return (
    <div id="PartnershipDeed">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="Validity and Renewal of ISI Certificate"
            className="validity-img w-100"
            height={220}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
            <p>The ISI certificate holds a validity of one year and can be renewed by submitting a renewal application along with the prescribed fees. The renewal application undergoes scrutiny by a Practicing Chartered Accountant (CA).</p>
        </div>
      
      </div>
    </div>
  );
};

