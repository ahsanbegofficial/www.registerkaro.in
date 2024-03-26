import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/shop-and-establishment-act-registration/panalties.svg";
interface HeroProps {
    cityName: string;
}
export const Penalities = ({ cityName }: HeroProps) => {
  return (
    <div id="Penalities">
      <div className="DocumentArrowWise flex w-80 m-auto mobile-flex-column">
      <div className='flex-4'>
          <Image alt="Penalties for not obtaining Shop and Establishment License in India" className="Penalities-img w-100" height={240} loading="lazy" src={bft} />
      </div>
        <div className="flex-6 pt-5">
          
        <p className="main-para my-2">
          Under the Shop & Establishment Act, penalties vary by state & are
          generally monetary, imprisonment, or operational-based. Although the
          monetary value is high, the risk of a closure notice hangs over
          various non-compliances.
        </p>
        </div>
       
      </div>
    </div>
  );
};
