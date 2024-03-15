import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/u-k-company-registration/Prerequisites_of.svg";

export const Prerequisites = () => {
  return (
    <div id="Prerequisites">
        <p className="main-para">Following are prerequisites to be fulfilled for company registration in United Kingdom :</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
           <p><strong>Name Approval for Company :</strong> Selecting a distinctive company name is the first step in registering a business in the UK. The name must be distinct from the brand name of the business. Additionally, it must not contain any offensive, illegal, or sensitive words or expressions. Additionally, a company name needs to have an ending that corresponds to its type, like "Ltd." for a private limited corporation.</p>
           <p><strong>Registered Office Address :</strong> Every UK business needs to have a registered office, which serves as the official mailing address for all legal correspondence. The address, which may be a physical or virtual office, must be in the United Kingdom. It is noteworthy that in the event that the firm is a Limited Liability Partnership (LLP), the registered office needs to be a physical address.</p>
           <p><strong>Directors’ List :</strong> In the UK, a company must have a minimum of one director. A director must be at least 16 years old and eligible to occupy the post; they may be an individual or a business. The names and addresses of all directors must also be submitted by companies to Companies House, and any changes must be communicated within a fourteen-day period.</p>
           <p><strong>Shareholders’ List :</strong> There is no cap on the number of shareholders that a corporation may have in the UK, however all firms must have at least one. The company's articles of organization specify the rights and obligations of its shareholders, who own a portion of the business. Companies are also required to give Companies House the names and addresses of all of their shareholders, and they have 14 days to notify Companies House of any changes.</p>
        </div>
        <div className="flex-4 pt-5">
          <Image
            alt="Prerequisites of Company Registration in UK"
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
