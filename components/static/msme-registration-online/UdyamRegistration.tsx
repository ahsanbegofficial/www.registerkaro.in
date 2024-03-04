import React from "react";
import Image from "next/image";
import Udyam_registration from '../../../assets/images/static/msme-registration-online/Udyam_registration.svg'
interface HeroProps { cityName: string; }
export const UdyamRegistration = ({ cityName }: HeroProps) => {
  return (
     <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' id='UdyamRegistration'>
    <div className='flex-7 mt-5'>
      <p className="main-para my-2" >
       The Union MSME Ministry established Udyam in 2020 as an online system for registering micro, small, and medium businesses. A free Udyam registration for their business can be obtained through a fully digital and paperless process based on self-declaration. Udyam registration is required to benefit from the Ministry of Micro, Small, and Medium Enterprises’ schemes or programs such as the Credit Guarantee Scheme, public procurement policy, an advantage in government tenders, and protection against late payments, among others.
      </p>
    </div>
        <div className='flex-3 mt-5'>
          <Image alt=">What is Udyam Registration  The Union MSME Ministry established Udyam in 2020 as an online system for registering micro, small, and medium businesses." className="UdyamRegistration-img w-100" height={350} loading="lazy" src={Udyam_registration} />
      </div>
    </div>
  );
};
