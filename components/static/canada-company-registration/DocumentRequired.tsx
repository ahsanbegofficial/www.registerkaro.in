import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/canada-company-reg/document_required.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">For registering your company in Canada, you will need following documents:</p>
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
            <p><strong>1: </strong>Articles of Association</p>
            <p><strong>2: </strong>Records attesting to the name search and displaying the efforts undertaken to look for and reserve the company name</p>
            <p><strong>3: </strong>Evidence of the address for the registered office</p>
            <p><strong>4: </strong>Number for Federal Business</p>
            <p><strong>5: </strong>Details regarding the company's paid-up capital</p>
            <p><strong>6: </strong>documents establishing the business's shareholder identity that have been translated and notarized</p>
            <p><strong>7: </strong>A photocopy of the passport or visa (if the person is not Canadian)</p>
            <p><strong>8: </strong>Form for company incorporation</p>
        </div>
      </div>
    </div>
  );
};
