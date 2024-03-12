import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/virtual-office/impact.svg";
interface HeroProps { cityName: string;}
const Impact = ({ cityName }: HeroProps) => {
  return (
    <div id="Impact">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-6 pt-5">
            <p>Transitioning to a virtual office environment necessitates a shift in company culture. Building a cohesive virtual culture entails efforts to promote transparency, open communication, and trust among team members. Regular virtual meetings, team-building exercises, and the use of digital platforms to foster a sense of belonging are pivotal in maintaining a strong organizational culture.</p>
        </div>
        <div className="flex-4">
        <Image
            alt="Impact of Virtual Offices on Company Culture"
            className="Impact-img w-100"
            height={270}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};

export default Impact;
