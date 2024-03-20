import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/singapore-company-registration/Documents_required.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">For registering your company in Singapore, you will need following documents:</p>
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
            <p><strong>1: </strong>Registered Company Name [with ACRA]</p>
            <p><strong>2: </strong>Briefing of Business Activities</p>
            <p><strong>3: </strong>SSIC codes pertaining to business activities</p>
            <p><strong>4: </strong>Registered Address and its proof</p>
            <p><strong>5: </strong>Details of Shareholders and Directors</p>
            <p><strong>6: </strong>Company Secretary Details and particulars</p>
            <p><strong>7: </strong>Passport Copy and residential address proof of Directors [if foreign nationals]</p>
            <p><strong>8: </strong>Copy of Singapore Identity cards of Directors [if singaporean nationals]</p>
        </div>
      </div>
    </div>
  );
};
