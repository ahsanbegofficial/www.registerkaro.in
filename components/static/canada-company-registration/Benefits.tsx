import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/canada-company-reg/benefits.svg";

export const Benefits = () => {
  return (
    <div id="Benefits">
        <p className="main-para">The Canadian Market and its laws offer varied range benefits to those who are looking forward to establishing their business in the mainland. Following are few of such benefits:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
           <p><strong>Tax benefits:</strong> Corporate tax rates are normally lower than personal income tax rates, and corporations are subject to separate taxation from their owners.</p>
           <p><strong>Limited Liability:</strong> Better protection is offered by incorporation to you and to all other parties connected to the business, such as partners and staff. Unexpected financial problems can happen even with diligent planning, it is a fact. In Canada, small businesses are intrinsically connected to their owner(s), while corporations are distinct legal entities. In a corporation, you are not personally liable for the obligations of the company if you are an executive, shareholder, or founder.</p>
           <p><strong>Separate Legal Entity:</strong> Companies have all of the same rights as a real person, including the capacity to borrow money, own property, and enter into contracts.</p>
           <p><strong>Market Goodwill:</strong> Corporate histories are very important because they show that you recognize the value of your business and that you are dedicated to its growth, even if revenue doesn't change. This is very helpful while looking for work or starting a new business.</p>
           <p><strong>Capital Gain Exemption:</strong> Upon the sale of your business, you will realize further savings associated with registering your small business. By exempting a sizable portion of your earnings from tax laws, LCGE can lower the overall amount of taxes you pay on all, if not nearly all, of the profits you make from the sale of this incorporated, registered small business when you realize a profit. Additionally, this LCGE has a cumulative lifetime limit rather than a one-time exemption, thus it can be used repeatedly until the financial cap of $892,218 in 2021 is met.</p>
        </div>
        <div className="flex-4">
          <Image
            alt="Benefits of company registration in Canada"
            className="Benefits-img w-100"
            height={550}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
