import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/thailand-company-reg/Post_Registration.svg";

export const Registration = () => {
  return (
    <div id="Registration">
        <p className="main-para">Once you have successfully completed the registration process, you must do the following task without missing upon any:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 mt-5">
         <p><strong>Tax Registration:</strong> For taxation purposes, any business in Thailand needs to be registered. Within 60 days of formation or the commencement of business operations, businesses that are required to pay Corporate Income Tax (CIT) must receive a Tax ID card and registration number for the company from the Thailand Revenue Department. In addition, business owners who are responsible for paying Value Added Tax (VAT) have to apply for a VAT ID within 30 days of reaching THB 600,000 in sales.</p>
         <p><strong>Bank Account Opening:</strong> After being formally registered, businesses in Thailand are able to use online banking and open corporate bank accounts. To open a company bank account, you need to know which bank and location, what kind of accounts the firm needs, and who will sign the papers. Because the statutory meeting must be held at least seven days before the actual registration, the registration process typically takes at least nine days. </p>
        </div>
        <div className="flex-4 ">
          <Image
            alt="Post Registration To-dos"
            className="Registration-img w-100"
            height={500}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
