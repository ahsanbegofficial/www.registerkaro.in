import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/book-keeping-and-accounting-services/who_mandates_bookkeeping_acc.svg";

interface HeroProps {
  cityName: string;
}
export const WhoMandates = ({ cityName }: HeroProps) => {
  return (
    <div id="WhoMandates">
      <p className="main-para">Every company or organization doing business in {cityName} must follow statutory regulatory standards, which include maintaining books of accounts.</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-5">
          <p>According to Section 128 of the Companies Act of 2013, every company, including a private limited company, a public limited company, and a one-person company, is required to keep accurate Company Books of Account.</p>
          <p>According to Section 34 of the LLP Act 2008, limited liability partnerships [LLPs] are required to keep accurate books of account and statements of account and solvency relevant to their business operations.</p>
          <p>According to Section 44AA of the Income Tax Act, every business (including sole proprietorships and partnerships) is required to keep proper books of account if their income exceeds INR 1,20,000/- (one lakh twenty thousand rupees) OR their total sales, turnover, or gross receipts exceed INR 10,00,000/- (ten lakh rupees) in any of the 3 years immediately preceding the previous year.</p>
          <p>Every professional engaged in the legal, medical, engineering, or architectural professions, or the professions of accountancy, technical consultancy, interior decoration, or any other profession, must keep and maintain such books of account in order to compute his total income for income tax return filing.</p>
        </div>
        <div className="flex-5">
          <Image
            alt="Who mandates Bookkeeping and Accounting Services?"
            className="WhoMandates-img w-100"
            height={550}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
