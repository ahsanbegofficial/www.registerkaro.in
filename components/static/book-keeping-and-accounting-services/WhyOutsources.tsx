import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/consumer-complaints/challenges.svg";

interface HeroProps {
  cityName: string;
}
export const WhyOutsources = ({ cityName }: HeroProps) => {
  return (

    <div id="WhyOutsources">
  
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
            
            <div className="flex-7">
              <p className="main-para">
              Inefficient bookkeeping departments may result in unfavorable legal consequences. As a business owner, your duty is to focus on your core area of the business rather than chasing accountants and dealing with compliance issues. Accounting and bookkeeping should be outsourced to specialists by a wise business owner.
              </p>
              </div>
          <div className="flex-5">
          <Image
            alt="Why Outsource Accounting and Bookkeeping Services in India?"
            className="WhyOutsources-img w-100"
            height={300}
            loading="lazy"
            src={dft}
          />
          </div>
          </div>
    </div>
  );
};
