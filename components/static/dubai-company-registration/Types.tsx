import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/dubai-company-registration/types_of_comapnaies_in.svg";

export const Types = () => {
  return (
    <div id="Types">
        <p className="main-para">There are different types of companies to be chosen for business registration under the Dubai Laws. Following are such among the popular company structures that people opt for Company Registration:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
            <p><strong> Free Zone Companies : </strong> The businesses and establishments that are part of the free zone are located in FTZs, which have different laws from mainland Dubai regarding ownership, taxes, and customs. A foreign businessperson may own all shares in a firm founded in a Free Trade Zone (FTZ). Within a Free Zone, entrepreneurs are able to form two different kinds of businesses: free zone establishments and free zone firms. Establishing a free zone establishment is possible for a single stakeholder with minimal responsibility. A free zone business or LLC can have up to five shareholders. A free zone corporation or institution can be founded by any natural or legal person. The laws and guidelines set forth by the specific free zones govern the creation of a firm or facility within them.</p>
            <p><strong> Limited Liability Company : </strong> An LLC, or limited liability company, must have at least two shareholders in Dubai. An LLC may have a maximum of 50 stockholders. The amount that an LLC's stockholders can contribute to the share capital is the only restriction. Except for banking, insurance, and financial investing, an LLC can engage in any type of business.</p>
            <p><strong> Onshore Company : </strong> A business founded in Dubai's mainland is referred to as an onshore company. The directors of the company are based in Dubai. Dubai only permitted 49% ownership for foreign business owners, and that ownership had to be created in conjunction with a native sponsor or agent. The administration of Dubai has changed this, though. As of right now, foreign entrepreneurs are allowed to hold 100% of a Dubai onshore business, with the exception of those founded for economically significant ventures in seven distinct industries.</p>
            <p><strong> Offshore Company : </strong> An offshore corporation is used to organize and run the firm outside of the nation's legal jurisdiction. The company is entirely controlled by foreigners and is based in another nation, although it is registered in Dubai. Offshore companies are fully owned by foreign entrepreneurs.</p>
            <p><strong> Branch Office : </strong> An extension of the main business is a branch office. Any foreign business may open a branch office in any of the FTZs in Dubai as well as on the mainland. Establishing a branch office is a wise move for businesses hoping to grow in the regional markets of the United Arab Emirates.</p>
        </div>
        <div className="flex-4">
          <Image
            alt="Types of Companies in Dubai"
            className="Types-img w-100"
            height={800}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
