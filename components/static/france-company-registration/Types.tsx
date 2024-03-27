import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/france-company-registration/Types_of_Company.svg";

export const Types = () => {
  return (
    <div id="Types">
        <p className="main-para">France legislature offers different types of company structures to be registered, among which, few are as follows:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
            <Image
              alt="Types of Company Structures in France"
              className="Types-img w-100"
              height={900}
              loading="lazy"
              src={dft}
            />
        </div>
        <div className="flex-7">
           <p><strong>1 : Microentrepreneur:</strong> A microentrepreneur is a tiny business owner who operates alone and generates less than €72,600–€176,200 in revenue, depending on the type of enterprise. Microbusiness owners are eligible for tax breaks and must register.</p>
           <p><strong>2 : Single  Business Person or Sole Proprietor: </strong>There are no minimum capital requirements for sole proprietorships. The business is entirely in the hands of the entrepreneur, who bears all managerial responsibility. Although there are no registration fees, income tax is still applicable to the business.</p>
           <p><strong>3 : Public Limited Company [SA]:</strong> With a minimum share capital of 37 000 €, the SA is made up of at least two shareholders (or seven if it is listed on the stock exchange) and is led by a Board of Directors made up of at least three members as well as a President and Chief Executive Officer, who may be the same individual. The public limited company should only be used for projects up to a specific size due to the burdensome nature of its operational regulations.</p>
           <p><strong>4 : Simplified Joint Stock Company [SAS]:</strong> There has been considerable success with this relatively new firm structure as there is no minimum share capital requirement. Additionally, SAS of a specific size or with capital linkages to other firms are exempt from the appointment of an auditor. The articles of organization may be freely organized by shareholders in accordance with the law. This flexibility can result in the creation of rules that would be challenging to implement in the future, thus it requires the well-informed counsel of a skilled professional.</p>
           <p><strong>5 : Simplified Single-Person Joint Stock Company [SASU]:</strong> This unique SAS category has just one partner unlike the regular SAS company. There are very few principles of operation that are different from SAS rules, especially when it comes to simplifying legal formalism. Similar to SAS, SASU is not often applied to a startup business.</p>
           <p><strong>6 : General Partnership [SNC]:</strong> Due to the drawback of not safeguarding the assets of its shareholders—who are actually perpetually, jointly, and severally liable for the business's debts on their personal property—this type of organization is rarely employed. It is formed by at least two merchant partners, with no minimum capital required. Unless the business chooses to pay corporation tax, the SNC's earnings are taxed at the level of its shareholders for income tax purposes.</p>
           <p><strong>6 : Professional Service Society:</strong> This type of business enables multiple people to practice the same liberal vocation together. After that, they will always be accountable for societal debts. There is no minimum amount of capital needed. Each partner is subject to income tax on the profits of CPC.</p>
        </div>
        
      </div>
    </div>
  );
};
