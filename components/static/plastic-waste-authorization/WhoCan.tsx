

import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/plastic-waste-authorization/who_can.svg";
interface HeroProps {
  cityName: string;
}
const WhoCan = ({ cityName }: HeroProps) => {
  return (
    <div id="WhoCan">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="margin-padding-0 flex-7 pt-5">
          <p>Any entity that is involved in the collection, storage, transport, processing, or recycling of plastic waste can apply for plastic waste authorization. The entity can be a company, a partnership firm, a society, a trust, an association, or an individual. The entity can be a producer, a consumer, a bulk consumer, a collection center, a processor, or a recycler of plastic waste.</p>
        </div>
        <div className="flex-3">
          <Image
            alt="Who can apply?"
            className="WhoCan-img w-100"
            height={280}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default WhoCan;

