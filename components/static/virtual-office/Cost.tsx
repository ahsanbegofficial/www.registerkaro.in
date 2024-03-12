import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/virtual-office/Costs_of_Virtual_Offices.svg";
interface HeroProps { cityName: string;}
const Cost = ({ cityName }: HeroProps) => {
  return (
    <div id="Cost">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-5">
            <p><strong>Subscription and Service Fees: </strong>Virtual offices typically incur subscription fees for various services such as a virtual address, call answering services, mail handling, and access to meeting spaces or conference rooms on demand.</p>
            <p><strong>Technology Expenses: </strong>Implementing and maintaining the necessary technology infrastructure, including high-speed internet, communication tools, cloud services, and cybersecurity measures, contributes to the operational costs.</p>
            <p><strong>Additional Costs for Premium Services:</strong> Some virtual office providers offer additional premium services like specialized administrative support, extended meeting room usage, or dedicated receptionist services, which come at an added cost.</p>
            <p><strong>Staff Training:</strong> Costs associated with training employees to adapt to virtual work environments, utilize collaboration tools effectively, and maintain cybersecurity practices.</p>
        </div>
        <div className="flex-3">
        <Image
            alt="Costs of Virtual Offices"
            className="Cost-img w-100"
            height={440}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Cost;
