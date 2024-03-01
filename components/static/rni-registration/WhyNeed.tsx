import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/rni-registration/why_do_you_need_rni_registration.svg";
interface HeroProps {
  cityName: string;
}
export const WhyNeed = ({ cityName }: HeroProps) => {
  return (
    <div id="WhyNeed">
      <p className="main-para mb-2">
        RNI registration offers many benefits to the user when it comes to
        regulating journals, newspapers, etc.
      </p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-6">
          <Image
            alt="Why do you need RNI Registration?,Legal Recognition,Government Schemes benefits,Copyright Protection,RNI registration offers many benefits to the user when it comes to
            regulating journals, newspapers, etc."
            className="WhyNeed-img w-100"
            height={700}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
          <p>
            <strong>Legal Recognition:</strong> By guaranteeing adherence to
            regulatory regulations, RNI registration bestows legal recognition
            upon publications and journals. It creates credibility and increases
            marketers’ and readers’ confidence.
          </p>
          <p>
            <strong>Government Schemes benefits:</strong> Registered publishers
            are eligible to participate in a number of government initiatives,
            awards, and benefits pertaining to the media sector. Subsidies,
            grants, and other financial aid initiatives fall under this
            category.
          </p>
          <p>
            <strong> Copyright Protection:</strong> Publishers can safeguard
            their intellectual property rights by registering with the RNI. It
            supports legal claims and acts as important evidence in copyright
            infringement cases.
          </p>
          <p>
            <strong> Monetary Advantage:</strong> A lot of public and private
            advertisers would rather have their ads appear in newspapers and
            magazines that have their RNIs registered. Getting registered builds
            credibility and improves the likelihood of landing advertising
            deals, which can be a big source of income for publishers.
          </p>
        </div>
      </div>
    </div>
  );
};
