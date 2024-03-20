import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/mauritius-company-registration/Types_of_company_incorporated.svg";

export const Types = () => {
  return (
    <div id="Types">
      <p className="main-para">
        Following are the business structures available as the legislation of
        the country:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="Types of company incorporated"
            className="Types-img w-100"
            height={600}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-7">
          <p>
            <strong>Global Business Company(GBC):</strong>
            Previously known as Global Business Category 1 (GBC1), it is suited
            for businesses that have shareholding and interests by a
            non-Mauritius citizen who should apply for this kind of business
            structure. This structure allows foreigners to set up a company that
            predominantly derives income from outside of the country and utilise
            all the tax treaties and the agreement of the country with fellow
            countries
          </p>

          <p>
            <strong>Authorised Company(AC):</strong>
            Authorised companies also known as GBC2 are commonly used for
            conducting trade internationally, investments and as well as for
            protection of personal assets. Similarly, this also has its business
            activities outside of Mauritius. The need to obtain licencing to do
            offshore activities as a business, the license is granted
            post-examination related to the companies In simple terms it is a
            non-tax resident Mauritius company that is exempted from corporate
            tax, withholding tax, interest, royalties or any capital gains tax.
            In short, it provides a flexible and efficient structure for
            conducting international businesses while benefiting from the
            favourable tax system of the country The corporation process of this
            structure is very fast and transparent which makes business owners
            choose this business structure.
          </p>

          <p>
            <strong>Domestic Company(DC):</strong>A domestic company needs to
            get licences like that of an Authorised Company, they are formed to
            do business within the company. Apart from having corporate tax at
            the rate of 15% per annum, also they are eligible for other tax
            benefits, they are taxed as per the jurisdiction of the company.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
