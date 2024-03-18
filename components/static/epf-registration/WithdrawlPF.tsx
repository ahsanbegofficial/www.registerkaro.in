import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/epf-registration/what_are_pf_withdrawl.svg";

export const WithdrawlPF = () => {
  return (
    <div id="WithdrawlPF">
      <div className="DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p >
            EPFO establishes the processes for withdrawals from the PF after
            Resignation. As per the Rules, employees who have been unemployed
            for 2 months or more are allowed to withdraw the complete balance in
            their Provident Fund Account. This shows that a person who resigns
            from their job may withdraw the complete balance in their account 2
            months after their last day of employment.
          </p>
          <p >
            Before an employee can take the entire amount from the Provident
            Fund (PF) account, a number of limits & requirements must be
            satisfied. The employee must have worked for the present company or
            organisation for a minimum of 5 years, which is one of the vital
            conditions. If the employee hasn’t yet worked for 5 years, they are
            only permitted to withdraw the money they deposited to the Provident
            Fund account, interest-free.
          </p>
        </div>
        <div className="flex-4">
          <Image
            alt="What are the PF Withdrawal Rules after the Registration under EPFO?"
            className="Withdrawal-img w-100"
            height={382}
            loading="lazy"
            src={dft}
          />
        </div>
      </div>
    </div>
  );
};
