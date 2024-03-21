import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/thailand-company-reg/Documents_you_might_need.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">To begin with the process of company registration in Thailand, you must have the following documents:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-5">
            <Image
              alt="Documents required for Company registration"
              className="DocumentRequired-img w-100"
              height={550}
              loading="lazy"
              src={dft}
            />
          </div>
        <div className="flex-4 pt-5">
            <p><strong>1: </strong>Identity proof of Directors and Shareholders [Passport/ Thai ID]</p>
            <p><strong>2: </strong>Details of Directors/shareholders [financial Documents]</p>
            <p><strong>3: </strong>Paid up capital details </p>
            <p><strong>4: </strong>Registered office address and proof for the same [Lease Agreement/ Utility Bills]</p>
            <p><strong>5: </strong>minutes of the meeting where the MOA and AOA were approved.</p>
            <p><strong>6: </strong>Memorandum of Association [if applicable]</p>
            <p><strong>7: </strong>Article of Association [if applicable]</p>
            <p><strong>8: </strong>Registration fee payment proof</p>
        </div>
      </div>
    </div>
  );
};
