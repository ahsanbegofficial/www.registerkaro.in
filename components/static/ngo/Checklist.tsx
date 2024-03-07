import React from "react";
import Image from "next/image";
import eligibility_criteria from '../../../assets/images/static/ngo/eligibility_criteria_for_the_registration.svg'

interface HeroProps {cityName: string;}
export const Checklist = ({ cityName }: HeroProps)  => {
  return (
    <div className="Classification flex w-80 m-auto mobile-flex-column" id="Checklist">
        <div className="flex-4">
         
         <Image
             alt="Eligibility to Start an NGO the process for NGO Registration in India
             For private limited companies, a minimum of two directors is required            
             Public limited companies mandate a minimum of three directors            
             Private limited companies can have a maximum of 200 members, while there is no member limit for public limited companies."
             className="Eligibility-img w-100"
             loading="lazy"
             src={eligibility_criteria}
             height={300}
           />
         </div>
      <div className="flex-6 pt-5">
           <p><strong>1: </strong>For private limited companies, a minimum of two directors is required.</p>
          <p><strong>2: </strong>Public limited companies mandate a minimum of three directors.</p>
          <p><strong>3: </strong>Private limited companies can have a maximum of 200 members, while there is no member limit for public limited companies.</p>
          <p><strong>4: </strong>No registration fee is required for NGOs.</p>
      </div>
    
    </div>
  );
};
