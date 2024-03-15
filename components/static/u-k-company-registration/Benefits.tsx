import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/u-k-company-registration/Benefits.svg";

export const Benefits = () => {
  return (
    <div id="Benefits">
        <p className="main-para">Setting up a business in United Kingdom is a beneficial step for the investors and entrepreneurs for following reasons:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
           <p><strong> Simple Process : </strong> The process of company registration in United Kingdom is quite simple to be followed which adds on into the benefits for th entrepreneurs to start their business in the mainland</p>
           <p><strong> Low Cost Required : </strong> The cost requirement for the company registration in UK is very much low whether it is about registration cost, professional fees, or capital requirement which makes the UK an attractive spot for Businesses.</p>
           <p><strong> 100 % Foreign Ownership : </strong> UK laws allow 100 % foreign ownership in the businesses to promote foreign investment and attract more investors to the UK market. This brings the market competitive and therefore, friendly enough for business operations</p>
           <p><strong> Fast Process : </strong> The registration process for companies in the United kingdom is quite fast along with being an easy one. This makes the initial step of starting a business hassle free, therefore, adding on the attraction point for the UK economy.</p>
           <p><strong> Single Director Formation : </strong> You are allowed to start a business under the UK laws with a single director or shareholder which is sometimes challenging and even prohibited in other countries. This makes UK a popular choice among the start up companies to be established</p>
        </div>
        <div className="flex-4">
          <Image
            alt="Benefits of company registration in United Kingdom"
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
