import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/iec-registration/when_iec_not_m.svg";
interface HeroProps {
    cityName: string;
}
export const PartnershipDeed = ({ cityName }: HeroProps) => {
  return (
    <div id='PartnershipDeed'>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4 ">
          <Image
            alt="When is IEC not Mandatory?"
            className="Mandatory-img w-100"
            height={350}
            loading="lazy"
            src={bft}
          />
        </div>
      <div className="flex-7 pt-5">
        <p >As per the latest circular by DGFT, the Import Export Code is not compulsory for all traders registered under GST. In all such instances, the Trader’s PAN shall be constructed as a new IEC Code for the purpose of Import & Export. IEC does not need to be taken in case the products exported/imported are for purpose purposes and are not used for any commercial purpose. Import or export is done by the Departments of Indian Government & Ministries and Notified Charitable Institutions to need not require getting IEC.</p>
    </div>
    
    </div>
    </div>
  )
}