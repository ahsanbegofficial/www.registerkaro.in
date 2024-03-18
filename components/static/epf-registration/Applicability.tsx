import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/epf-registration/Applicability_of_epf_registration.svg";

export const Applicability = () => {
  return (
    <div id="Applicability">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4">
          <Image
            alt="Applicability of EPF Registration "
            className="Applicability-img w-100"
            height={550}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
          <p>
            In India, the employer must obtain the EPF Registration within 1
            month of attaining the strength, failing which penalties will be
            applicable. A registered establishment continues to be under the Act
            even if the employee strength falls below the required minimum. The
            Central Government of India may apply the provisions to any
            establishment employing less than 20 employees after giving not less
            than 2 months’ notice for mandatory registration. Where the employer
            & the most of employees have agreed that the provisions of this act
            should be made applicable to the establishment, they may themselves
            apply to the Central PF Commissioner.
          </p>
          <p>
            The Commissioner may apply the provisions of the Act to that
            establishment after passing the notification in the Official Gazette
            from the agreement date or from any particular date specified in the
            agreement.
          </p>
          <p>
            All the employees will be eligible for a Provident Fund from the
            beginning of their employment & the responsibility of deduction and
            the payment of Provident Fund lies with the employer. The PF
            contribution of 12% should be equally divided between the employer &
            employee. The contribution of the employer is 12% of the basic
            salary. If the establishment has employed less than 20 employees,
            the PF deduction rate will be 10%.
          </p>
        </div>
      
      </div>
    </div>
  );
};
