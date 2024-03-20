import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/mauritius-company-registration/document-required.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">The following are the documents required for incorporating a company in Mauritius:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
       
        <div className="flex-4 pt-5">
            <p><strong>1: </strong>Original Copy of Certificate of Reservation</p>
            <p><strong>2: </strong>Photocopy of Passport for non-residents</p>
            <p><strong>3: </strong>Copy of resident permit if the only director is a foreigner</p>
            <p><strong>4: </strong>Proof of director's address</p>
            <p><strong>5: </strong>Process of address of secretary in case of one person company</p>
        </div>
        <div className="flex-5">
            <Image
              alt="Documents Required"
              className="DocumentRequired-img w-100"
              height={400}
              loading="lazy"
              src={dft}
            />
          </div>
      </div>
    </div>
  );
};
