import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/ca-services/Challenges_faced.svg";

const Challenges = () => {
  return (
    <div id="Challenges">
        <p className="main-para">Business is a multi dimensional process which consist of various different set of operations to be handled individually. One of such tangent is of financial handling which requires deliberation due to which many businesses face challenges in maintaining the same. Following are few of such challenges faced if no CA Service is availed for the Businesses:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
       
        <div className="flex-4">
        <Image
            alt="Challenges faced by Business without CA services"
            className="Challenges-img w-100"
            height={630}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-3">
            <p><strong>Complex process :</strong> The process for maintaining the financial aspect of the business is quite complex as it requires multiple tangents to cover such as bookkeeping, accounting, tax filing, etc. If no services are availed, then it becomes difficult for the business to handle all of such aspects single handedly.</p>
            <p><strong>Comprehensive Documentation :</strong> There is a comprehensive Documentation required in maintaining the financial record for the business operation which also becomes a major problem.</p>
            <p><strong>Exhaustive Compliances :</strong> Any business is required to adhere with the compliances in order to avoid any notice for non compliance. However, the list of compliances for a business becomes so long that it becomes a tedious task to handle without errors.</p>
            <p><strong>GST :</strong> Businesses are also required to file GST and maintain GST Compliances which is another tedious and complex task to be dealt with delicacy. However, many times businesses miss upon timely filing and compliance adherence, and therefore, recieve notice pertaining to the same.</p>
            <p><strong>Book-keeping record :</strong> CAs are required to maintain the book keeping records for the financial transaction of the businesses. The Record maitenance requires deliberated attention and organization as little displacement in the records can cause major harm to the busiensses.</p>
        </div>
      </div>
    </div>
  );
};

export default Challenges;


