import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/australia-company-registration/facts_to_know.svg";

const Facts = () => {
  return (
    <div id="Facts">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
     
        <div className="flex-3">
        <Image
            alt="Facts to Know , Registering for GST is crucial for companies with an annual turnover exceeding AUD$75,000, requiring an Australian Business Number (ABN)."
            className="Facts-img w-100"
            height={420}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-4">
            <p><strong> 1 : </strong>Registering for GST is crucial for companies with an annual turnover exceeding AUD$75,000, requiring an Australian Business Number (ABN).</p>
            <p><strong> 2 : </strong>The application can be submitted online through the ABN Business Entry Point, with an ABN issued upon successful submission. </p>
            <p><strong> 3 : </strong>The ATO will confirm receipt within 28 days. Failure to obtain an ABN result in GST being applicable to all sales, with penalties for overdue payments. </p>
            <p><strong> 4 : </strong>Companies earning less than AUD$2 million annually face a 27.5% Corporate Tax rate. This information serves as a basic overview and does not replace professional advice. </p>
            <p><strong> 5 : </strong>It may contain generalizations, so seeking individualized advice is recommended for compliance with applicable laws.</p>
        </div>
      </div>
    </div>
  );
};

export default Facts;