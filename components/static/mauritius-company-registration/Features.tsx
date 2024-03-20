import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/mauritius-company-registration/Features.svg";

export const Features = () => {
  return (
    <div id="Features">
        <p className="main-para">The following are the features that make Mauritius an attractive jurisdiction to choose for incorporating businesses:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
     <div className="flex-7">
          <p><strong>Tax System:</strong>The corporate tax rate in Mauritius stands at the rate of 15%, which is very attractive for investment and offers competitiveness. Corporate tax rates mean - the tax charged upon the profits made in the business. The country also follows the Double Taxation Treaties feature with multiple countries, the countries who are signees to this contract are provided relief from double taxation, in the form of tax credits and also have a reduced tax rate.</p>
          <p><strong>Location:</strong>Mauritius is located in the Indian Ocean, which makes it an ideal country to do business since it would make other countries ideal for investment, trade and tourism. Mauritius is best suited for business since the country’s timezone makes it easy to do business with three continents.</p>
          <p><strong>Environment:</strong>Mauritius promotes good business relations in its country, and these steps were taken by the government to create a very business-friendly environment and registration process for businesses.</p>
          <p><strong>Political Stability:</strong>The country has been at the top multiple times in terms of political stability. The laws followed in this country are a combination of French Civil Laws and common law, while the civil and criminal practices are based on the way of British Laws. The political stability features provide a sense of security for businesses and investors. The regulatory framework in the country is highly reputed. Also, the country is recognised as a highly well-regulated and developed financial centre in the country. The country is very famous for confidentiality and business and financial operations. Multiple Indian celebrities have their businesses incorporated in the country because of these features under a separate name to gain advantages.</p>
          <p><strong>Governing Body:</strong>The governing body in Mauritius related to the companies are Corporate and the Business Registration Department (CBRD) which has been given by the Ministry of Finance, Economic Development and Planning which has prepared guidelines for the steps of incorporating a company under this department multiple legislations have been passed that cover multiple aspects related to companies including registration</p>
        </div>
        <div className="flex-4">
          <Image
            alt="Tax System Location , Environment, Political, Stability, Governing Body"
            className="Features-img w-100"
            height={750}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
