import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/environmental-clearance/RegisterKaro_for_Environment.svg";
interface HeroProps {
    cityName: string;
}
const Procedure = ({ cityName }: HeroProps) => {
  return (
    <div id="Procedure">
      <p className="main-para">Procedural timeline of the service involved in obtaining environmental clearance is as follows:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="Procedure to get Environmental Clearance"
            className="Procedure-img w-100"
            height={680}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7">
            <p><strong>1 : </strong>The proponent submits the application along with the relevant documents and information to the MoEFCC or the SEIAA depending on the category and location of the project or activity.</p>
            <p><strong>2 : </strong>The MoEFCC or the SEIAA forwards the application to the EAC or the SEAC for screening and scoping. The EAC or the SEAC screens the application and the pre-feasibility report or the project report and issues the TOR for the EIA study within 30 days of the receipt of the application. The TOR is required only for Category A and B1 projects.</p>
            <p><strong>3 : </strong>The proponent conducts the EIA study as per the TOR and prepares the EIA report and the EMP. The EIA study and the EIA report are required only for Category A and B1 projects.</p>
            <p><strong>4 : </strong>The proponent submits the EIA report and the EMP to the MoEFCC or the SEIAA and publishes the advertisement or notice for inviting public comments or objections on the proposed project or activity. The EIA report and the EMP are required only for Category A and B1 projects.</p>
            <p><strong>5 : </strong>The District Collector or the District Magistrate or the Deputy Commissioner or the Additional District Magistrate or the Sub-Divisional Magistrate or the Sub-Divisional Officer or the Additional Deputy Commissioner or the Tehsildar or the Block Development Officer or the District Forest Officer or the District Environment Officer or any other officer designated by the State Pollution Control Board or the Pollution Control Committee or the Union Territory Administration conducts the public hearing or public consultation meeting within 45 days of the receipt of the request from the proponent. The public hearing or public consultation meeting is required for all Category A and B projects.</p>
            <p><strong>6 : </strong>The proponent submits the minutes of the public hearing or public consultation meeting to the MoEFCC or the SEIAA. The MoEFCC or the SEIAA forwards the minutes to the EAC or the SEAC for appraisal. The EAC or the SEAC appraises the application and the EIA report or the CRZ map and the minutes of the public hearing or public consultation meeting and makes its recommendations or comments to the MoEFCC or the SEIAA within 60 days of the receipt of the minutes. The EAC or the SEAC is required for all Category A and B projects.</p>
            <p><strong>7 : </strong>The MoEFCC or the SEIAA considers the recommendations or comments of the EAC or the SEAC and grants or rejects the EC or the CRZC or both to the proponent within 45 days of the receipt of the recommendations or comments. The MoEFCC or the SEIAA also communicates the decision to the proponent and the concerned regulatory authority and displays the decision on its website. The EC or the CRZC or both are required for all Category A and B projects.</p>
        </div>
     
      </div>
    </div>
  );
};

export default Procedure;


