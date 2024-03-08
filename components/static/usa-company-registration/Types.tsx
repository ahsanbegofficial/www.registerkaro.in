import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/usa-company-registration/types_of_usa_company_reg.svg";

export const Types = () => {
  return (
    <div id="Types">
      <p className="main-para">
        The United States of America provides several legal forms for company
        formation, each with its own set of rules and regulations. The following
        are the five most common types of companies registered in the United
        States:
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4 mt-5">
          <Image
            alt="Types for USA Company Registration
            The United States of America provides several legal forms for company formation, each with its own set of rules and regulations. The following are the five most common types of companies registered in the United States"
            className="Types-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
          <p>
            <strong>S Corporations</strong>
            These are small business entities that provide pass-through taxes,
            allowing revenue and losses to be reported on shareholders’
            individual tax returns.
          </p>

          <p>
            <strong>Corporate Entities (C-Corp)</strong>
            C-Corporations are separate legal entities with their own tax
            obligations and benefits. They have the ability to issue shares and
            have several classes of shareholders.
          </p>

          <p>
            <strong>Nonprofit Organizations</strong>
            Established for philanthropic, educational, religious, or social
            reasons, nonprofit organizations are eligible for specific tax
            advantages.
          </p>

          <p>
            <strong>Limited Liability Companies (LLCs)</strong>
            LLCs combine the flexibility of pass-through taxation with the
            limited liability protection of corporations. They are a well-liked
            option for small companies.
          </p>

          <p>
            <strong>Single-Person Businesses</strong>
            These are the most basic types of businesses, where one person owns
            and runs the company. They are also referred to as sole
            proprietorships. They are simple to set up, even though they offer
            no liability protection.
          </p>
        </div>
      </div>
      <p className="main-para">Your business objectives, preferred tax structure, and personal liability requirements all play a role in selecting the best kind of business structure.</p>
    </div>
  );
};
