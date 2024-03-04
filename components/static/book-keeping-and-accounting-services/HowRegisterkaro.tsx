import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/book-keeping-and-accounting-services/how_registerKaro_helps.svg";

interface HeroProps {
  cityName: string;
}
export const HowRegisterkaro = ({ cityName }: HeroProps) => {
  return (
    <div id="HowRegisterkaro">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-5">
          <Image
            alt="Why Outsource Accounting and Bookkeeping Services in India?"
            className="HowRegisterkaro-img w-100"
            height={300}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
          <p className="main-para">
            {" "}
            Our professionals are certified in multiple accounting software and
            can assist you with all your accounting needs. They can also help in
            the integration of industry specific add on software programs,
            depending on the nature of industries.
          </p>
          <p className="main-para">
            {" "}
            Outsourcing your Bookkeeping to our professionals at Registerkaro
            provides your organization with more ability to grow. Your books
            contain valuable information concerning your business and it’s
            essential that they are accurate, timely and efficiently processed.
            Here’s where we shine.
          </p>
        </div>
      </div>
    </div>
  );
};
