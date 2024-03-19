import Image from "next/image";
import React from "react";
import documents from "../../../assets/images/static/llp-compliance/Non_Compliance_for_LLPs.svg";

export const WhatConseq = () => {
  return (
    <div id="WhatConseq">
      <div className='benefits flex w-80 m-auto mobile-flex-column' >
        
      <div className="flex-4">
        <Image
          alt="What are the Consequences of Non-Compliance for LLPs?"
          className="Consequences-img w-100"
          height={382}
          loading="lazy"
          src={documents}
        />
       </div>
       <div className="flex-7 pt-5">
          <p className="main-para">
            If there is any delay in filing Form-8 and Form-11 of LLP, you will
            have to pay the penalty of Rs. 100/day of default. One cannot wind
            up or close their LLP without filing Annual Accounts. Also,
            non-compliance with any of the mandatory requirements may lead to
            heavy penalties
          </p>
      </div>
      </div>
    </div>
  );
};
