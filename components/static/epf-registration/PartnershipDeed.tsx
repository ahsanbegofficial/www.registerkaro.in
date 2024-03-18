import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/epf-registration/due_date.svg";

export const PartnershipDeed = () => {
  return (
    <div id="PartnershipDeed">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className='flex-4 '>
          <Image alt="What is the Due Date for PF Filing?" className="Due-img w-100" height={320} loading="lazy" src={bft} />
      </div>
        <div className="flex-7">
          <p>
            Before paying the salaries of employees, the employer must deduct
            the contribution of the employee. The EPFO will thereafter receive
            both the employer share & employee half within 15 days of the end of
            each month. The EPF Registration is unique in terms of returns from
            a debt instrument. A sovereign guarantees the currency & the
            interest is tax-free. The PF has exempt status since contributions
            are tax-deductible from income. Debt securities with such large
            yields & solid safety & reliability are uncommon. Hence, to reduce
            the temptation to withdraw money, it’s good to relocate the PF
            account while switching jobs.
          </p>
        </div>
      </div>
    </div>
  );
};
