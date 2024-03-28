import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/nidhi-company-compliance/penalities.svg";
interface HeroProps {
    cityName: string;
}
const Penalties = ({ cityName }: HeroProps) => {
  return (
    <div id="Penalties">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-5 margin-padding-0">
            <p>If the company fails to submit the required documentation on time, the Nidhi Bank Operators may face punishment and penalties.</p>
            <p>If the Company fails to achieve the compliance requirements, the responsible officials will be penalized up to Rs 5000.</p>
            <p>If the breach continues, the penalty would be Rs 500 per violation.</p>
        </div>
        <div className="flex-3 ">
        <Image
            alt="Penalties If the company fails to submit the required documentation on time, the Nidhi Bank Operators may face punishment and penalties"
            className="Penalties-img w-100"
            height={300}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
      <p className="main-para">As a result, it is critical to seek compliance administrations from industry specialists.</p>
    </div>
  );
};

export default Penalties;


