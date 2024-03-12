import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/cdsco-registration/doc_req.svg";
interface HeroProps {cityName: string;}
export const Paperwork = ({ cityName }: HeroProps) => {
  return (
    <div id="Paperwork">
      <div className="checklist flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-5 mt-5">
      
            <p >
              Documents encompass technical details, manufacturing information,
              quality management system certifications, clinical data (if
              applicable), conformity evidence, labeling details, and supporting
              documentation as specified by CDSCO.
            </p>
          </div>
          <div className="flex-4">
          <Image
            alt="Documents Required/Paperwork from the Client for CDSCO Registration"
            className="DocumentsReq-img w-100"
            height={250}
            loading="lazy"
            src={bft}
          />
          </div>
      </div>
    </div>
  );
};
