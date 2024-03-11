import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/dubai-company-registration/documents_you_would_need.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">Following is the list of documents [not exhaustive] that you might need for the Company Registration process in Dubai:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong>1 : </strong>A duplicate of the directors' and shareholders' passports</p>
            <p><strong>2 : </strong>A copy of the directors' and shareholders' national identity cards</p>
            <p><strong>3 : </strong>Current utility bills, credit card statements, or bank statements that include the shareholders' and directors' residence addresses</p>
            <p><strong>4 : </strong>The Memorandum and Articles of Association of the Company Board resolution containing information about the establishment of the branch or subsidiary designating an authorized manager</p>
            <p><strong>5 : </strong>Information about share capital</p>
            <p><strong>6 : </strong>a duly certified appointment contract from a business or service</p>
        </div>
        <div className="flex-3">
          <Image
            alt="Documents you would need"
            className="DocumentRequired-img w-100"
            height={350}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
