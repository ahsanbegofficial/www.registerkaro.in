import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/hong-kong-company-registration/Types_of.svg";

export const Types = () => {
  return (
    <div id="Types">
        <p className="main-para">Now we will be discussing the types of companies that are incorporated as per the company law of Hong Kong:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        
        <div className="flex-7 pt-5">
        <p><strong>Private Limited : </strong>
        A private limited company has its capital and ownership divided into shares and the liability is to the extent of their unpaid amount based on their shareholding in the company. It must have at least one shareholder and one director while incorporating, these may be normal individuals or entities, but unlike public companies, they cannot issue shares to the public. As the name suggests, the company is private and their liability is limited to the extent of their shares in the company.</p>
        <p><strong>Sole Proprietorship : </strong>
        Generally, meant for small businesses or freelancers in this there is sole liability of the owner, the simplest form of business. It can be advantageous on the part that the owner has complete control and ownership over the business in this model. However, it can be disadvantageous on the part that there might be a lack of diversity for expansion and decision-making related to the business.</p>
        <p><strong>Partnership : </strong>
        A partnership is preferred by businesses, who want to run a business together without having to go through the complexity of a private limited incorporation. But Partnership has more flexibility in terms of management because- here the business is owned by the partners who are involved in day-to-day management of the business.</p>
        <p><strong>Branch Office : </strong>
        This type of company is headed by a parent company, generally, they are to create diversification of the business, this can be incorporated in a separate jurisdiction as well as may have a different identity, The branch company shares legal duties and liabilities with that of the parent company.</p>
        <p><strong>Representative Office : </strong>
        This kind of company is incorporated to carry out pro-bono activities, it cannot operate to carry out a profitable business. It can be incorporated for promotional purposes of the parent company and it lacks a legal personality. It does not have any liability.</p>

        </div>
        <div className="flex-4 mt-5">
          <Image
            alt="Types of companies incorporated in Hong Kong"
            className="Types-img w-100"
            height={750}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};
