import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/usa-company-registration/benefits_of_usa_compnay_reg.svg";

export const Benefits = () => {
  return (
    <div id="Benefits">
        <p className="main-para">The United States is a global economic powerhouse that also serves as a center for innovation and entrepreneurship. A powerful consumer market, potential investors, and a favorable business environment can all be gained by registering your company in the United States. Let’s discuss the benefits of USA Company Registration:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        
        <div className="flex-7 pt-2">
          <p><strong>Access to a Massive Consumer Base:</strong> The United States, with a population of over 330 million people, provides a vast and diverse consumer market with limitless growth prospects.</p>
          <p><strong>Investor Attraction:</strong> The United States attracts investors from all around the world, making it easier for your company to get finance and expand its operations.</p>
          <p><strong>A Stable Legal climate:</strong> The United States has a well-established legal structure that protects commercial interests and provides a stable climate for business growth.</p>
          <p><strong>Innovation Ecosystem:</strong> Silicon Valley and other tech hubs in the United States are well-known for their innovation ecosystems, making them a great location for tech-driven startups.</p>
          <p><strong>Global Reach:</strong> Establishing a presence in the United States can assist your company in gaining international recognition and expanding its global reach.</p>
        </div>
        <div className="flex-4 ">
          <Image
            alt="Benefits of USA Company Registration
            The United States is a global economic powerhouse that also serves as a center for innovation and entrepreneurship. A powerful consumer market, potential investors, and a favorable business environment can all be gained"
            className="Benefits-img w-100"
            height={450}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};
