import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/isi-mark-certification/key_point.svg";
interface HeroProps {
    cityName: string;
}
const Checklist = ({ cityName }: HeroProps)  => {
  return (
    <div id="Checklist">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
        <Image
            alt="Key Points to Consider for ISI Mark Certification"
            className="KeyPoints-img w-100"
            height={300}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-4">
              <p><strong>1 : </strong>Complaints regarding product quality can be filed with BIS.</p>
              <p className="pt-4"><strong>2 : </strong>BIS Officers take three months to examine filed complaints.</p>
              <p className="pt-4"><strong>3 : </strong>The ISI Mark Certification details must be specified on every invoice.</p>
              <p className="pt-4"><strong>4 : </strong>BIS regularly monitors all manufacturers.</p>
        </div>
     
      </div>
    </div>
  );
};

export default Checklist;


