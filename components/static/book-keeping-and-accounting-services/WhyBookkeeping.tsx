import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/book-keeping-and-accounting-services/why_bookkeeping_acc.svg";

interface HeroProps {
  cityName: string;
}
export const WhyBookkeeping = ({ cityName }: HeroProps) => {
  return (
    <div id="WhyBookkeeping">
      <p className="main-para">Every company or organization doing business in {cityName} must follow statutory regulatory standards, which include maintaining books of accounts.</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-5">
          <Image
            alt="why book keeping, Every company or organization doing business in {cityName} must follow statutory regulatory standards, which include maintaining books of accounts"
            className="WhyBookkeeping-img w-100"
            height={650}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7 pt-5">
          <p>Professional bookkeeping is a crucial need for efficient financial management in any area that a firm may operate in. When carried out effectively, it guarantees company expansion and reduces risks.</p>
          <p>Bookkeeping thrived on timely business decision making.</p>
          <p>Accounting services are more subjective, providing business owners with financial insights into their enterprise based on information gleaned from their bookkeeping data.</p>
          <p>Businesses and companies who strictly adhere to accounting regulations will have accurate financial data and be in a better position to make appropriately suited financial decisions.</p> 
          <p>Financial statements aid in comprehending critical financial information.</p>
          <p>The three primary financial statement reports that are created as part of online bookkeeping services in {cityName} will provide you with sensitive and clear financial information: – Profit & Loss Statement, Balance Sheet, and Cash Flow Statement.</p>
          <p>Evaluate the business’s accomplishments.</p>
          <p>Accounting and bookkeeping methods help you maintain your records up to date while also tracking spending, margins, and potential debt.</p> 
          <p>Account Receivable and Payable tracking in real time.</p>
          <p>Business owners can always keep track of who they need to pay and from whom they need to borrow money by maintaining accurate books of accounts. This will support the management of cash flow in businesses.</p>
          </div>
       
      </div>
    </div>
  );
};
