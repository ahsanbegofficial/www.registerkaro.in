import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/canada-company-reg/prerequisites.svg";

export const Prerequisites = () => {
  return (
    <div id="Prerequisites">
        <p className="main-para">One needs to fulfill following prerequisites for company registration in Canada:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-2">
           <p><strong>1 : </strong>Select the organizational structure for your company. It may be a corporation, partnership, or sole proprietorship.</p>
           <p><strong>2 : </strong>Select a name for your company. The name must be original and not previously registered to a Canadian company. To make sure your name isn't already taken, check the databases for company registries and Canadian corporate names. Additionally, look through your province's business directory; a company name registered in one province does not entitle it to use that name on a federal level.</p>
           <p><strong>3 : </strong>Obtain a business registration from your government.</p>
           <p><strong>4 : </strong>Determine which licenses and permits you might need.</p>
           <p><strong>5 : </strong>Bank account for business opening as your business registration documents will be requested to be viewed by the banks.</p>
           <p><strong>6 : </strong>Plan your tax payment [A CRA liaison officer can provide free tax assistance to small business owners].</p>
        </div>
        <div className="flex-4">
          <Image
            alt="Prerequisites of Company Registration in Canada"
            className="Prerequisites-img w-100"
            height={500}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
