import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/oman-company-registration/Post_Registration_Compliances.svg"

const Post = () => {
  return (
    <div id="Post">
        <p className="main-para">Following the conclusion of the Omani company registration process, a number of post-incorporation tasks must be fulfilled in order for the business to abide by Omani rules and regulations. The following are some of the main steps that an Oman-registered company must take after being incorporated:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="Post Registration Compliances"
            className="Post-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p><strong>Tax Registration:</strong> Companies in Oman are required to get a Tax Card from the Tax Authority within 30 days of registering. For the purpose of creating bank accounts, executing contracts, and filing tax returns, the Tax Card is essential.</p>
            <p><strong>Social Security Registration:</strong> Companies in Oman are required to register their employees with the Public Authority for Social Insurance (PASI) within 15 days of the employee's start date. The social security fund is something that employers must contribute to on behalf of their employees.</p>
            <p><strong>VAT Registration:</strong> In Oman, businesses who have yearly sales more than OMR 38,500 (about USD 100,000) are required to register for VAT. Getting a VAT registration number and filing regular VAT returns are steps in the VAT registration procedure.</p>
            <p><strong>Other Licenses and Permits:</strong> Companies in Oman could require extra licenses and permits to operate, depending on the nature of the enterprise. For instance, the Ministry of Housing and Urban Planning may be required to provide a building permit for a construction company.</p>
            <p><strong>Company Record Maintenance:</strong> In Oman, businesses are required to keep complete and accurate records of all of their financial activities, including contracts, invoices, and receipts.</p>
        </div>
        
      </div>
    </div>
  );
};

export default Post;
