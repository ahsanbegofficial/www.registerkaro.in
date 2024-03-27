import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/france-company-registration/Documents_required.svg";

export const DocumentRequired = () => {
  return (
    <div id="DocumentRequired">
        <p className="main-para">For registering your company in France, you will need following documents [list is not exhaustive]:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
       
        <div className="flex-4">
            <p><strong>1: </strong>Shareholder’s details: Identification Documents, Financial statements, Affidavits declaring no criminal records, etc.</p>
            <p className="pt-3"><strong>2: </strong>Manager’s details: Identification Documents, Appointment Letters, etc.</p>
            <p className="pt-3"><strong>3: </strong>Article of Association [if applicable]</p>
            <p className="pt-3"><strong>4: </strong>Memorandum of Association [if applicable]</p>
            <p className="pt-3"><strong>5: </strong>Board Resolution for establishment of the company</p>
            <p className="pt-3"><strong>6: </strong>Charter [for SARL]</p>
            <p className="pt-3"><strong>7: </strong>Application forms availed from Trade Registrar</p>
            <p className="pt-3"><strong>8: </strong>Copy of National Gazette announcing the company registration</p>
            <p className="pt-3"><strong>9: </strong>Details regarding the company's paid-up capital</p>
            <p className="pt-3"><strong>10: </strong>Company’s registered address, utility bills, lease agreement (if any)</p>
        </div>
        <div className="flex-5">
            <Image
              alt="Documents required for Company registration in France"
              className="DocumentRequired-img w-100"
              height={710}
              loading="lazy"
              src={dft}
            />
          </div>
      </div>
    </div>
  );
};
