import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/hong-kong-company-registration/Governing_Body.svg";

export const Governing = () => {
  return (
    <div id="Governing">
        <p className="main-para">The governing body in Hong Kong is the company registry, it includes multiple tasks related to the companies some tasks include:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4 ">
          <Image
            alt="Governing Body in Hong Kong"
            className="Governing-img w-100"
            height={450}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
            <p><strong>A: </strong>Incorporation of Company</p>
            <p><strong>B: </strong>Maintaining records relating to the company</p>
            <p><strong>c: </strong>Filing of various compliances for the company</p>
            <p><strong>D: </strong>Company name search services</p>
            <p><strong>E: </strong>Imposing penalties for non-compliance</p>
            <p><strong>F: </strong>Enforcing rights related to the company law of Hong Kong</p>
            <p><strong>G: </strong>Company dissolution</p>
            <p><strong>H: </strong>Promoting Corporate Governance as a part of the complaint</p>
        </div>
      </div>
    </div>
  );
};
