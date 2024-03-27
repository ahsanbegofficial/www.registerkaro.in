


import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/isi-mark-certification/list_of_products.svg";
interface HeroProps {
    cityName: string;
}
export const ObjectivesChecklist = ({ cityName }: HeroProps)  => {
  return (
    <div id="ObjectivesChecklist">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="List of Products under ISI Certification"
            className="listProducts-img w-100"
            height={200}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
            <p>A comprehensive list includes cement, household electrical goods, batteries, medical equipment, steel and iron products, kitchen appliances, and many more.</p>
        </div>
        
      </div>
    </div>
  );
};

export default ObjectivesChecklist;


