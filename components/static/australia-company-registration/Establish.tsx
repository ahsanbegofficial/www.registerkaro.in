import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/australia-company-registration/why_to_es.svg";

const Establish = () => {
  return (
    <div id="Establish">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      
        <div className="flex-4">
        <Image
            alt="why to establish a business in australia?"
            className="Establish-img w-100"
            height={580}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p><strong>1 : </strong> Establishing a business in Australia offers owners limited liability protection, ensuring their personal assets are distinct from the company's. The Australian government is supportive of business growth, providing tax incentives and grants. </p>
            <p><strong>2 : </strong> Australia has a low corporate tax rate and offers tax benefits for small businesses. Companies in Australia have access to various funding options, including venture capital, angel investors, and government grants. </p>
            <p><strong>3 : </strong> With strong trade connections to Asia, Europe, and North America, Australia is an appealing choice for businesses seeking international expansion. The country boasts a well-educated workforce, particularly in technology and professional services, with a high standard of living that can attract and retain top talent.</p>
            <p><strong>4 : </strong> A firm provides shareholders with limited liability, making them responsible for the company's debts only up to their investment value. In Australia, companies can benefit from tax concessions and a lower corporate tax rate. Registering a company can boost credibility, attracting customers, suppliers, and investors. </p>
            <p><strong>5 : </strong> Different business models and ownership structures can be accommodated within companies, offering flexibility. Equity and debt financing are available to registered companies for growth, while shares can be easily bought and sold, facilitating efficient ownership transfers.</p>
        </div>
      </div>
    </div>
  );
};

export default Establish;

