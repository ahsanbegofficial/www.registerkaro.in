import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/esi-registration/benefits.svg";
interface HeroProps {
    cityName: string;
}
export const EventBased = ({ cityName }: HeroProps) => {
  return (
    <div id="EventBased">
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7 pt-5">
          <p> The following are the benefits of ESI Registration in {cityName}:</p>
          <p>
            1. All disabled employees can get 90% of their monthly salaries as
            disablement benefits.
          </p>
          <p>
            2. Pregnant women are allowed maternity benefits that are payable up to
            26 weeks and this period can be further extended to 30 days on
            medical advice. To avail of such benefits, employers are required to
            contribute their wages for 70 days in the preceding 2 contributions
            period.
          </p>
          <p>
            3. All the ESI registered members and their families are entitled to
            avail the benefits of full medical care & insurance from the very
            1st day of employment.
          </p>
          <p>
            4. The deceased employee’s family is entitled to an additional amount
            Rs. 10,000/- towards funeral expenses.
          </p>
          <p>
            5. Absence from work due to illness can be taken for a maximum of 91
            days per year along with 70% of the monthly wages.
          </p>
          <p>
            6. In the confinement case of an insured wife/woman of an employee
            occurring in a place with no medical facilities under the ESI
            Scheme, confinement expenses can be availed.
          </p>
          <p>7. Old age medical care;</p>
          <p>8. Enhanced sickness benefit.</p>
        </div>
        <div className="flex-4 mt-5">
          <Image
            alt="Benefits of ESI Registration in India"
            className="Benefits-img w-100"
            height={550}
            loading="lazy"
            src={bft}
          />
        </div>
      </div>
    </div>
  );
};
