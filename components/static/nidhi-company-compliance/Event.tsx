import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/nidhi-company-compliance/Event-Based_Compliance.svg";
interface HeroProps {
    cityName: string;
}
const Event = ({ cityName }: HeroProps) => {
  return (
    <div id="Event">
        <p className="main-para">In most cases, event-based Compliance must be filed just once during the company registration procedure. Furthermore, these Compliance must be observed when there is a non-periodic change in the Nidhi company’s structure.</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-5">
        <Image
            alt="Event-Based Compliance"
            className="Event-img w-100"
            height={600}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p><strong>The following are the event-based Compliance:</strong></p>
            <p className="pt-3"><strong>1 : </strong>Any name changes for the company.</p>
            <p className="pt-3"><strong>2 : </strong>Alteration to the registered office address.</p>
            <p className="pt-3"><strong>3 : </strong>Director appointment, resignation, or removal.</p>
            <p className="pt-3"><strong>4 : </strong>Auditor appointment, resignation, or removal.</p>
            <p className="pt-3"><strong>5 : </strong>Any changes to the company’s goal.</p>
            <p className="pt-3"><strong>6 : </strong>Share transfer.</p>
            <p className="pt-3"><strong>7 : </strong>Increase in the company’s authorized capital.</p>
            <p className="pt-3"><strong>8 : </strong>The appointment of key management personnel.</p>
            <p className="pt-3"><strong>9 : </strong>Any other event-driven adjustments.</p>
        </div>
      
      </div>
    </div>
  );
};

export default Event;


