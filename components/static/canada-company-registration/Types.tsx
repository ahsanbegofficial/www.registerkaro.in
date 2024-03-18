import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/canada-company-reg/Types.svg";

export const Types = () => {
  return (
    <div id="Types">
        <p className="main-para">There are different types of business structures available for registration under the Canadian Legislation, few of which are:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
            <Image
              alt="Types of Company Structures in Canada"
              className="Types-img w-100"
              height={900}
              loading="lazy"
              src={dft}
            />
        </div>
        <div className="flex-7">
           <p><strong>1 : Sole Proprietorship:</strong> The most basic type of business form used by small enterprises is the single proprietorship. This kind of business is owned and run by a single individual who also retains total control over the enterprise. A sole proprietorship has no distinct legal identity, and the owner bears personal responsibility for any obligations or claims brought against the company.</p>
           <p><strong>2 : Partnerships:</strong> Similar to sole proprietorships, partnerships involve two or more individuals. The partners manage the company's debts and obligations in addition to sharing power over it. Typically, partnership agreements delineate the allocation of earnings and losses as well as assigning responsibilities, eliminating any ambiguity over the ownership of certain firm shares.</p>
           <p><strong>3 : Limited Liability Companies:</strong> A limited liability company shields its owners from personal liability and is a more formal type of business structure. This kind of business is typically owned by one or more shareholders, who are only accountable for the amount they invested in the business. Because it is not incorporated, it enjoys the same advantages as a corporation but is not bound by the same regulations..</p>
           <p><strong>4 : Public Limited Company: </strong>A corporation needs share capital of at least £50,000 to become a public limited company. Of that amount, at least 25% must be paid up before the business may start operating. Additionally, a company secretary and at least two directors are needed for public limited businesses. All companies that are listed on a stock exchange are PLCs, although many privately held companies also gain from the prestige and authority that comes with being a PLC. In order to look larger and more financially supported, or because they want to list in the future, shareholders frequently decide to register as PLCs.</p>
           <p><strong>5 : Cooperatives:</strong> Cooperatives are companies that are owned and managed by its members, who share in the company's gains and losses. Both for-profit and non-profit cooperatives exist. They are frequently founded by business owners to offer their members services including banking, housing, and medical attention. Cooperative businesses may be an effective instrument for community development since they are democratic and sustainable.</p>
           <p><strong>6 : Corporations:</strong> Since a business and its stockholders are two different legal entities, the former is not responsible for the latter's debts. There are two types of corporations: for-profit and not-for-profit. It is the most popular kind of corporate structure, and businesses can register with local, state, or federal governments as corporations.</p>
        </div>
        
      </div>
    </div>
  );
};
