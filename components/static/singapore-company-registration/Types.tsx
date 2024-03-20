import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/singapore-company-registration/Types_of_Company.svg";

export const Types = () => {
  return (
    <div id="Types">
        <p className="main-para">There are different types of business structures available for registration under the Singapore Legislation, few of which are:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
            <Image
              alt="Types of Company Structures in Singapore"
              className="Types-img w-100"
              height={900}
              loading="lazy"
              src={dft}
            />
        </div>
        <div className="flex-7">
           <p><strong>1 Sole Proprietorship: </strong>A sole proprietorship is the most basic kind of business structure where one can begin a business with just one owner, known as sole proprietor. A sole proprietor is individually liable for any debts and lawsuits brought against the company, even though he has total control over the business and all of its operations.</p>
           <p><strong>2 Partnership:</strong> Partnership is such a form of business structure which allows more than one person to come together to start a business. When entered into a partnership agreement, all individuals party to it are called partners who hold rights over the business, operations, profit, and loss. The number of partners in this form must not exceed 20.</p>
           <p><strong>3 Limited Partnership (LP): </strong>A limited Partnership is a minimum of two-person partnership consisting of at least one general partner and one limited partner. A general partner is accountable for the LP's decisions and holds full liability for all of its debts and liabilities. If a limited partner abstains from managing the company, he is exempt from liability for the LP's debts and obligations above and beyond his agreed contribution.</p>
           <p><strong>4 Limited Liability Partnership (LLP):</strong> An entity that is distinct from the partners themselves and is incorporated by two or more partners in known as LLP. An LLP partner is not individually accountable for the deeds of any other partners. As such, each partner bears individual liability for any debts resulting from their own deeds.</p>
           <p><strong>5 Subsidiary :</strong> Another type of limited liability company is a subsidiary where foreign parent corporations prefer to establish their businesses in Singapore through another office. It is distinct from the foreign corporation that is its parent. The fact that Singaporean authorities permit 100% foreign ownership is one of its USPs. A subsidiary business is regarded as a local business and therefore, can take advantage of the tax breaks, exemptions, and rebates given by the regional government. It has personal liability for all debts and losses resulting from its commercial endeavors. </p>
           <p><strong>6 Branch Office:</strong> Another option available to overseas firms is the establishment of a branch office in Singapore. A branch office is not seen as belonging to the local business. It is regarded as the overseas parent company's extension. In order to handle matters like shareholding, business operations, and structure, its management must adhere to the parent company's Memorandum and Articles of Association (MAA).</p>
           <p><strong>7 Representative Office:</strong> Before investing resources to create a presence in a new market, foreign corporations like to inspect and investigate the area. In such furtherance if one has to conduct such operations in Singapore, they must register a representative office. In simple words, Representative Office is nothing but is believed to be merely a short-term administrative setup by its parent business.</p>
        </div>
        
      </div>
    </div>
  );
};
