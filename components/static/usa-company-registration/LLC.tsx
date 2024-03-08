import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/usa-company-registration/llc_or-c_corporation_chossing_the.svg";

export const LLC = () => {
  return (
    <div id="LLC">
      <p className="main-para">
        When it comes to USA company registration, one of the most important
        decisions you’ll have to make is selecting the appropriate business
        organization. Both the LLC and the C-Corporation have advantages and
        disadvantages, and the decision is based on your business objectives,
        tax preferences, and operational structure.
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
      
        <div className="flex-7 pt-5">
          <p>
            <strong>1: LLC (Limited Liability Company)</strong>
            An LLC is a versatile business structure that combines the limited
            liability protection of a corporation with the ease and tax
            flexibility of a partnership. Here are some reasons why you should
            consider forming an LLC:
          </p>
          <p><strong>Limited Liability: </strong>In most cases, owners (members) are not personally liable for the company’s debts or legal liabilities.</p>
          <p><strong>Pass-Through Taxation:</strong> Profits and losses are “pass-through” to members’ personal tax returns, preventing double taxation.</p>
          <p><strong>Flexibility: </strong>Compared to C-Corporations, there are fewer formalities and paperwork, making it easier to handle.</p>
          <p><strong>2: C-Corporation </strong> A C-corporation is a more traditional company structure that provides various benefits:</p>
          <p><strong>Limited Liability:</strong> In general, shareholders are not personally liable for the company’s debts or legal responsibilities.</p>
          <p><strong>Investor-Friendly:</strong> Because C-Corporations can issue several classes of stock, it is easier to attract investors and raise funds.</p>
          <p><strong>Global Expansion: </strong>This option is ideal for businesses that want to expand internationally and issue publicly listed stock.</p>
        </div>
        <div className="flex-4 mt-5">
          <Image
            alt="LLC or C-Corporation: Choosing the Right Entity for Your Business
            When it comes to USA company registration, one of the most important decisions you’ll have to make is selecting the appropriate business organization. Both the LLC and the C-Corporation have advantages and disadvantages, "
            className="LLC-img w-100"
            height={650}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};
