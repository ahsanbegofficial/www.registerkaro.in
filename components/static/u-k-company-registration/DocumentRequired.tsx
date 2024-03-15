import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/u-k-company-registration/Documents.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">Following are the documents required for the company registration in United Kingdom:</p>
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
            <p><strong>1: </strong>The articles of association and the memorandum of association.</p>
            <p><strong>2: </strong>valid visa and passport.</p>
            <p><strong>3: </strong>Information about the stockholders of the company.</p>
            <p><strong>4: </strong>PSCs of the company's details.</p>
            <p><strong>5: </strong>Information about the address that is registered.</p>
            <p><strong>6: </strong>Information about the service address for each director and PSC.</p>
            <p><strong>7: </strong>Documents proving identity and address proof.</p>
            <p><strong>8: </strong>Details of a UK bank account</p>
        </div>
      </div>
    </div>
  );
};
