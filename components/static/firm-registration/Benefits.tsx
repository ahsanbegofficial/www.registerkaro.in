import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/firm-registration/benefits_of_registreing_a_firm.svg";
interface HeroProps { cityName: string;}
export const Benefits = ({ cityName }: HeroProps) => {
  return (
    <div id="Benefits">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-4 mt-5">
          <Image
            alt="Benefits of Registering a Firm
            The benefits of private limited company in india and these are Separate Legal Entity, Ease in Raising Funds, Limited Liability, Easy Transferable, Limited Liability and ESOP
            Partner : In case when a dispute arises between a partner or between a partner or ex-partners of a firm, they may consider legal proceedings to solve the dispute. Hence, having proper registration papers of the firm acts "
            className="Benefits-img w-100"
            height={500}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
          <p>
            <strong>Partner : </strong>
            
              In case when a dispute arises between a partner or between a
              partner or ex-partners of a firm, they may consider legal
              proceedings to solve the dispute. Hence, having proper
              registration papers of the firm acts as evidence of exitance of
              the firm, the basis of which the dispute arose.{" "}
            </p>

            <p>
              Or, if the partners choose to sue a third party to the business,
              then the registration of the firm becomes mandatory, but not
              mandatory when the situation becomes vice-versa that is when the
              third party tries to sue the firm.
            </p>

            <p>
              An incoming partner can also sue the partners in case of any
              existing dues, on the part of the existing partners and the rights
              cannot be enforced if the firm is not registered, this improves
              credibility in the eyes of new incoming partners who would want to
              join the firm and bring some additional capital contribution to
              firm because no wants to contribute or invest in non- credible
              entities to safeguard their interests and money
            </p>
        

          <p>
            <strong>Creditors : </strong>
            In case, when the firm has taken a certain loan and the creditor
            demands to repay the loan, then the registration documents provide
            clarity about who are the partners and who is liable to pay the
            loans to what extent. Registration also improves the credibility of
            the firm, when the creditors do due diligence related to the firm.
            Although, both registered and unregistered firms are valid in the
            eyes of low, having registration gives added advantages.
          </p>
          <p>
            <strong>Other Benefits : </strong>
            Registration helps in other benefits like- it can help in claiming
            Income Tax Returns if the firm is registered, and in future, if the
            business chooses to change its business structure then having
            registration of the firm would also help, the registered firm is
            only considered for change in business structure.
          </p>
        </div>
       
      </div>
    </div>
  );
};
