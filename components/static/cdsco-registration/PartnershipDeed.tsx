import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/cdsco-registration/procedure.svg"

interface HeroProps { cityName: string; }
export const PartnershipDeed = ({ cityName }: HeroProps) => {
  return (
    <div id="PartnershipDeed">
      <div className="checklist flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-5 mt-5">
          <p className='main-para my-2'>The registration process involves document submission, CDSCO evaluation, potential queries for additional information, review periods, and final approval or rejection. Timelines vary based on application complexity.</p>
        </div>
        <div className='flex-4 mt-5'>
          <Image
            alt="What is the procedural timeline of the service involved?"
            className="procedural-img w-100"
            height={220}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  )
}