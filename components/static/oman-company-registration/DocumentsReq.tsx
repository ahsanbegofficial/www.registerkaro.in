import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/oman-company-registration/Documents_you_would_need.svg";

const DocumentsReq = () => {
  return (
    <div id="DocumentsReq">
        <p className="main-para"> The following crucial paperwork is required for company registration in Oman:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-5">
            <p><strong>1 : </strong>Certificates of Memorandum </p>
            <p><strong>2 : </strong>Articles of Association, </p>
            <p><strong>3 : </strong>Tax Registration, </p>
            <p><strong>4 : </strong>Passports and Visas for Shareholders, and </p>
            <p><strong>5 : </strong>Affiliation with the Chamber of Commerce and Industry</p>
            <p><strong>6 : </strong>Certificate of First Deposit </p>
            <p><strong>7 : </strong>Shareholder Identity Cards </p>
            <p><strong>8 : </strong>Completed Company Registration Form</p>
        </div>
        <div className="flex-3">
        <Image
            alt="Documents you would need"
            className="DocumentsReq-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentsReq;
