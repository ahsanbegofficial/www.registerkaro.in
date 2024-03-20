import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/singapore-company-registration/Prerequisites_of_Company.svg";

export const Prerequisites = () => {
  return (
    <div id="Prerequisites">
        <p className="main-para">Following are certain requirements to be fulfilled in order to register your company in Singapore:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p><strong>Company Name: </strong>Before proceeding ahead with the company registration process, it is important to decide over the company name and to verify that it meets the criteria of the name such as not being violative of any law, similar to any other pre-existing company name, etc.</p>
          <p><strong>Directors’ details:</strong> Another prerequisite is to prepare the list of directors to step on board for the company establishment. The list must include the details of the directors such as address, name, financial position, identification proof, etc.</p>
          <p><strong>Shareholders’ details:</strong> Along with the list of the directors, the list of shareholders is also required to be prepared in the same manner, along with their individualistic detailing such as financial position, identification proof, etc.</p>
          <p><strong>Registered Address:</strong> The company intended to be registered under the Singaporean Law must have a registered address for its office.</p>
          <p><strong>Company Secretary:</strong> The company secretary appointment is another must for the company registration process. Within six months of its incorporation, every company in Singapore is required to designate a company secretary. The company secretary cannot hold the position of director or shareholder and must be a Singaporean citizen.</p>
          <p><strong>Paid up Capital: </strong>The company needs to have a paid up capital of $1 to start with the company registration process under the singaporean laws.</p>
          <p><strong>Documents:</strong> The last requirement is to have prepared documents which includes Memorandum of Association, Article of Association, Company Secretary’s Particulars, Business License and Permits, Bank Details, Financial Documents.</p>
        </div>
        <div className="flex-4 ">
          <Image
            alt="Prerequisites of Company Registration in Singapore"
            className="Prerequisites-img w-100"
            height={700}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
