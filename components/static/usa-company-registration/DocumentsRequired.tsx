import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/usa-company-registration/document_required.svg";

export const DocumentsRequired = () => {
  return (
    <div id="DocumentsRequired">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        
        <div className="flex-7 pt-5">
            <p><strong>PAN Card:</strong> For tax and identity purposes, Indian people and entities must have a Permanent Account Number (PAN) card.</p>
            <p><strong>Passport:</strong> For the purposes of identification and verification, a current passport is required.</p>
            <p><strong>Aadhar Card:</strong> An Aadhar card may be used as further identification if necessary.</p>
            <p><strong>Company Incorporation Details:</strong> You must submit the parent company’s incorporation details if your company is a branch or subsidiary of an already-existing foreign company.</p>
            <p><strong>Other Crucial Information: </strong> Additional information may be necessary depending on your business structure and the state in which you are registering. This could include your company’s mission, the names of its officials and directors, and the issuing of stock.</p>
        </div>
        <div className="flex-4 mt-4">
          <Image
            alt="PAN Card: For tax and identity purposes, Indian people and entities must have a Permanent Account Number (PAN) card."
            className="DocumentsRequired-img w-100"
            height={420}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};
