import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/environmental-clearance/documentRequired.svg";
interface HeroProps {
    cityName: string;
}
export const DocumentRequired = ({ cityName }: HeroProps) => {
  return (
    <div id="DocumentRequired">
        <p className="main-para"> The documents required for environmental clearance may vary depending on the type, category, and stage of the project. However, some of the common documents that are usually needed for environmental clearance are:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        
        <div className="flex-7 pt-5">
            <p><strong>1: </strong>Project profile and feasibility report, which contains the details of the project, such as location, land, water, power, raw materials, products, processes, technology, capital, employment, etc.</p>
            <p><strong>2: </strong>EIA report, which contains the details of the environmental impacts of the project, such as baseline data, impact prediction, impact assessment, impact mitigation, environmental management plan, risk assessment, etc.</p>
            <p><strong>3: </strong>Public consultation report, which contains the details of the public consultation and hearing, such as public notice, EIA summary, public comments and suggestions, public hearing proceedings, action taken report, etc.</p>
            <p><strong>4: </strong>NOC or consent from the State Pollution Control Board (SPCB) or the Pollution Control Committee (PCC), which indicate the compliance of the project with the pollution control norms and standards.</p>
            <p><strong>5: </strong>Clearance or approval from other authorities, such as forest clearance, wildlife clearance, CRZ clearance, heritage clearance, etc., if applicable to the project.</p>
            <p><strong>6: </strong>Affidavit or undertaking, which declare the authenticity and accuracy of the documents and information submitted by the project proponent.</p>
        </div>
        <div className="flex-5">
            <Image
              alt="Documents Required for Environmental Clearance"
              className="DocumentRequired-img w-100"
              height={550}
              loading="lazy"
              src={dft}
            />
          </div>
      </div>
    </div>
  );
};
