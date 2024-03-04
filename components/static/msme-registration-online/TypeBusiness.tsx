import React from "react";
import Image from "next/image";
import what_type_of_business_comes_under_msme from '../../../assets/images/static/msme-registration-online/what_type_of_business_comes_under_msme.svg'
interface HeroProps { cityName: string; }
export const TypeBusiness = ({ cityName }: HeroProps) => {
  return (
    <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' id='TypeBusiness'>
   <div className='flex-7 mt-5'>
      <p className="main-para my-2" id="TypeBusiness">
        According to the Government of { cityName }, MSME refers only to manufacturing
        and service businesses, with trading companies excluded. The MSMED Act
        2006 divides businesses into Manufacturing Enterprises and Service
        Enterprises based on their definition and categorization, as well as the
        registration regulation applicable to the Central and State governments.
        Manufacturing enterprises manufacture and produce goods, whereas service
        enterprises provide a variety of services.
      </p>
      <p className="main-para my-2">
        To be eligible for the MSME plan, industries must meet the Ministry of
        Micro, Small, and Medium Enterprises’ qualifying criteria. These
        eligibility criteria vary depending on the investment in plant and
        machinery/equipment and turnover for Micro-Enterprise, Small-Enterprise,
        and Medium-Enterprise.
      </p>
      <p className="main-para my-2">
        The investment in machinery/equipment for a Micro-Enterprise should not
        exceed Rs. 1 crore, and the turnover should be less than Rs. 5 crore.
        Small enterprises should invest not more than Rs. 10 crores in
        machinery/equipment, and their turnover should not exceed Rs. 50 crores,
        whereas medium enterprises should invest not more than Rs. 50 crores and
        their turnover should not exceed Rs. 250 crores.
      </p>
    </div>
    <div className='flex-3 mt-5'>
       <Image alt="What type of business comes under MSME?The investment in machinery/equipment for a Micro-Enterprise should not
        exceed Rs. 1 crore, and the turnover should be less than Rs. 5 crore." className="TypeBusiness-img w-100" height={430} loading="lazy" src={what_type_of_business_comes_under_msme} />
   </div>
    </div>
  );
};
