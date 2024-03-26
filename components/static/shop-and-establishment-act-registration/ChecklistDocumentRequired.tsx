import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/shop-and-establishment-act-registration/Documents.svg";
interface HeroProps {
    cityName: string;
}
export const ChecklistDocumentRequired = ({ cityName }: HeroProps) => {
  return (
    <div className="checklist" id="ChecklistDocumentRequired">
      <p className="main-para">
        Following is the list of all the documents required for Shop and
        Establishment Act Registration:
      </p>

      <div className="checklist flex w-80 m-auto mobile-flex-column">
      <div className="flex-5">
          <Image
            alt="Documents Required for Shop and Establishment Act Registration"
            className="ChecklistDocumentRequired-img w-100"
            height={450}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-5">
          <p className="pt-4"><strong>1 : </strong> Identity proof of the Proprietor;</p>
          <p className="pt-4"><strong>2 : </strong> PAN Card of the Proprietor;</p>
          <p className="pt-4"><strong>3 : </strong> Address proof of the shop or business establishment;</p>
          <p className="pt-4"><strong>4 : </strong> Employees’ details;</p>
          <p className="pt-4"><strong>5 : </strong> Payment challan;</p>
          <p className="pt-4"><strong>6 : </strong> Additional business licences vital for commencing the business.</p>
        </div>
      
      </div>
    </div>
  );
};
