import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/u-k-company-registration/Types_of_Company.svg";

export const Types = () => {
  return (
    <div id="Types">
        <p className="main-para">Following are the types of company structures available in the UK laws:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
            <Image
              alt="Types of Company Structures in UK"
              className="Types-img w-100"
              height={900}
              loading="lazy"
              src={dft}
            />
        </div>
        <div className="flex-7">
           <p><strong>1 : Private Unlimited Company :</strong> Compared to the other kinds, private limitless businesses are less common. They are typically employed for businesses where there is very little chance of insolvency because there is no upper limit on the sum that its members must pay in the event that the company is wound up. The fact that private limitless corporations are exempt from legal requirements to file yearly accounts with corporations House is another crucial feature. Because of this, firms who want to keep some degree of financial confidentiality find limitless companies appealing.</p>
           <p><strong>2 : Private Company Limited by Shares :</strong> Similar to public limited corporations, the amount for which shareholders are liable in the event that the business is wound up is limited to the firm's reserves, which is one of the key reasons why this specific type of company setup is so popular. A lone trader, on the other hand, is solely responsible for all debts related to their business. To pay off obligations, his or her personal assets may be taken. Since a private business limited by shares is not required to have a minimum capitalization amount, unlike public limited firms, many are founded with relatively little initial investment.</p>
           <p><strong>3 : Private Company limited by Guarantee :</strong> In the event that the private business limited by guarantee is wound up, the guarantors' liability is restricted to a predetermined sum that they are required to pay. Non-profit organizations that employ this kind of business structure to put a modest cap on what members (owners) must pay in the event of a problem include charities, clubs, student unions, societies, and social businesses.</p>
           <p><strong>4 : Public Limited Company :</strong> A corporation needs share capital of at least £50,000 to become a public limited company. Of that amount, at least 25% must be paid up before the business may start operating. Additionally, a company secretary and at least two directors are needed for public limited businesses. All companies that are listed on a stock exchange are PLCs, although many privately held companies also gain from the prestige and authority that comes with being a PLC. In order to look larger and more financially supported, or because they want to list in the future, shareholders frequently decide to register as PLCs.</p>
           <p><strong>5 : Limited Liability Partnership:  </strong>There are a few distinct non-standard limited company entities in addition to the four primary categories of public and private companies. These three entities are Societas Europaeas (SEs), Right to Manage Companies (RTMs), and Community Interest Companies (CICs).</p>
           <p><strong>6 : Special Types of Limited Company :</strong> There are a few distinct non-standard limited company entities in addition to the four primary categories of public and private companies. These three entities are Societas Europaeas (SEs), Right to Manage Companies (RTMs), and Community Interest Companies (CICs).</p>
        </div>
        
      </div>
    </div>
  );
};
