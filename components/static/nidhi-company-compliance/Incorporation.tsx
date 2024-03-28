import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/nidhi-company-compliance/pre-incorporation.svg";
interface HeroProps {
    cityName: string;
}
const Incorporation = ({ cityName }: HeroProps) => {
  return (
    <div id="Incorporation">
        <p className="main-para">To get Nidhi Company Registration, all Nidhi Companies must adhere to certain necessary Compliance. The following is a list of the requirements that must be met:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="Pre-Incorporation Compliance"
            className="Incorporation-img w-100"
            height={480}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p><strong>1 : </strong>To establish a Nidhi Company, a minimum of seven members are required. Three of its members must be Directors.</p>
            <p><strong>2 : </strong>The company’s name must include the suffix “Nidhi Limited,” and it must be a public company.</p>
            <p><strong>3 : </strong>Minor organizations, body corporate, or trusts are not eligible to join Nidhi.</p>
            <p><strong>4 : </strong>A minimum of Rs. 5 lakhs must be the paid-up share capital.</p>
            <p><strong>5 : </strong>If Nidhi Company has not made a profit after taxes for three consecutive fiscal years, it is not permitted to open branches. </p>
            <p><strong>6 : </strong>The company is not permitted to issue preference shares; if shares of this type were issued by the company before the Act’s implementation, they must be redeemed.</p>
            <p><strong>7 : </strong>The interest rate on the loan cannot be more than 7.5% higher than the highest interest rate given on deposits.</p>
            <p><strong>8 : </strong>The company’s main goal should be to help its members develop the habit of saving money.</p>
        </div>
       
      </div>
    </div>
  );
};

export default Incorporation;


