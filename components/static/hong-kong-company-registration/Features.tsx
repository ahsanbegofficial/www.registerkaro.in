import Image from "next/image";
import React from "react";
import ulArrow from "../../../assets/images/pvt-reg/ulArrow.svg";
import bft from "../../../assets/images/static/hong-kong-company-registration/Features.svg";

export const Features = () => {
  return (
    <div id="Features">
      <p className="main-para">
        The following are the features that make Hong Kong an ideal jurisdiction
        for incorporating their business:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
       
        <div className="flex-6 pt-5">
          <p>
            <strong>Location advantage : </strong>
            Incorporation in Hong Kong gives access to a business to multiple
            Asian countries and it has China nearby, thereby making it easier
            for the company to enter into bilateral trade agreements. Hong Kong
            of its good international trade relations make it advantageous for
            business owners to get into business agreements, and contracts using
            the goodwill of the country with other countries to expand the
            business.
          </p>
          <p>
            <strong>Freedom in Business : </strong>
            The cost of incorporating a business in Hong Kong is very affordable
            as well and the steps involved in incorporation are smooth and
            easier. Hong Kong along with Singapore has a very smooth and
            easy-flowing business, these countries also have the best and
            fastest arbitration system, which acts as an Alternative Dispute
            Resolution mechanism. Having jurisdiction over the company
            incorporation allows the company or gives a reason for the company
            to choose Hong Kong and Singapore as their venue for their
            arbitration, to settle their disputes with third parties or their
            internal disputes amicably.{" "}
          </p>
          <p>
            <strong>Support from the Government : </strong>
            China and Honk have a very unique administrative system, it has a
            proper structure and flow for the working of the government function
            without too much of complexities. The government operates with
            greater authority in Hong Kong.
          </p>
          <p>
            <strong>Political Stability : </strong>
            Hong Kong has a reputation for maintaining social and political
            harmony in the world. It provides a safe, secure platform for
            businesses incorporated without much political interference in the
            business operations. It has a very strong rule of law, where law is
            made superior to other factors, which makes the application,
            enforcement and execution of law in these countries fair for all.
          </p>
          <p>
            <strong>Tax Benefits : </strong>
            There are many benefits that one gets by incorporating their company
            in Hong Kong. following are the features that make Hong
            Kong-incorporated companies eligible for multiple taxing benefits.
          <p>Features: </p>
             <ul className="tick list-unstyled m-0">
              <li>
                <Image
                  alt="ulArrow"
                  className="ulArrow-img p-0"
                  loading="lazy"
                  height={25}
                  width={30}
                  src={ulArrow}
                />Low Corporate Tax Rate</li></ul>
             <ul className="tick list-unstyled   m-0">
              <li>
                <Image
                  alt="ulArrow"
                  className="ulArrow-img"
                  loading="lazy"
                  height={25}
                  width={30}
                  src={ulArrow}
                />Territorial Taxing </li></ul>
             <ul className="tick list-unstyled   m-0">
              <li>
                <Image
                  alt="ulArrow"
                  className="ulArrow-img"
                  loading="lazy"
                  height={25}
                  width={30}
                  src={ulArrow}
                />No tax on capital gains </li></ul>
             <ul className="tick list-unstyled   m-0">
              <li>
                <Image
                  alt="ulArrow"
                  className="ulArrow-img"
                  loading="lazy"
                  height={25}
                  width={30}
                  src={ulArrow}
                />No Value Added Tax or Goods and Service Tax </li></ul>
             <ul className="tick list-unstyled   m-0">
              <li>
                <Image
                  alt="ulArrow"
                  className="ulArrow-img"
                  loading="lazy"
                  height={25}
                  width={30}
                  src={ulArrow}
                />No withholding of the share of dividends, interest and royalties </li></ul>
             <ul className="tick list-unstyled   m-0">
              <li>
                <Image
                  alt="ulArrow"
                  className="ulArrow-img"
                  loading="lazy"
                  height={25}
                  width={30}
                  src={ulArrow}
                />Double Tax Avoiding Agreement</li></ul>
             <ul className="tick list-unstyled   m-0">
              <li>
                <Image
                  alt="ulArrow"
                  className="ulArrow-img"
                  loading="lazy"
                  height={25}
                  width={30}
                  src={ulArrow}
                />Easy Tax Filing</li></ul>
          </p>
        </div>
        <div className="flex-4 mt-5">
          <Image
            alt="Location advantage : Incorporation in Hong Kong gives access to a business to multiple Asian countries and it has China nearby, thereby making it easier for the company to enter into bilateral trade agreements"
            className="Features-img w-100"
            height={850}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};
