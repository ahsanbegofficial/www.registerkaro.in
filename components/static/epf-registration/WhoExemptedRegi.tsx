import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/epf-registration/who_exempted.svg";

export const WhoExemptedRegi = () => {
  return (
    <div id="WhoExemptedRegi">
      <div className="DocumentArrowWise flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
            alt="Who is exempted from EPF Registration in India?"
            className="exempted-img w-100"
            height={280}
            loading="lazy"
            src={dft}
          />
        </div>
        <div className="flex-6 mt-5">
          <p>
            In India, any business with less than 20 employees is exempt from
            the Employee Provident Fund Act’s requirement that they register.
            Such businesses can still register under the EPF programme if they
            choose. The process will subsequently be known as Voluntary
            Provident Fund Registration.
          </p>
        </div>
      </div>
    </div>
  );
};
