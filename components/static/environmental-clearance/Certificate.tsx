import Image from "next/image";
import React from "react";
import bft_two from "../../../assets/images/static/environmental-clearance/5.svg";

interface HeroProps {
  cityName: string;
}
const Certificate = ({ cityName }: HeroProps) => {
  return (
    <div id="Certificate">
      <p className="main-para">The cancellation, validity and renewal of the service involved in obtaining environmental clearance are as follows:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p><strong>1 :  Cancellation:</strong> The MoEFCC or the SEIAA may cancel the EC or the CRZC or both granted to the proponent if it is found that the proponent has violated any of the terms and conditions of the EC or the CRZC or both or has furnished false or misleading information or documents or has concealed any material fact or information. The MoEFCC or the SEIAA may also cancel the EC or the CRZC or both if it is found that the project or activity has caused or is likely to cause unacceptable adverse impacts on the environment or the public health or the safety or the welfare. The MoEFCC or the SEIAA may cancel the EC or the CRZC or both after giving a reasonable opportunity of being heard to the proponent and after recording the reasons for such cancellation in writing. The MoEFCC or the SEIAA may also impose a penalty or take any other legal action against the proponent for such violation or misrepresentation or concealment or impact.</p>
          <p><strong>2 :  Validity:</strong> The EC or the CRZC or both granted to the proponent are valid for a period of five years from the date of their commencement. The commencement of the project or activity means the date of start of the construction or site preparation work or the date of issue of the EC or the CRZC or both, whichever is earlier. The validity of the EC or the CRZC or both may be extended for a further period of three years by the MoEFCC or the SEIAA subject to the satisfactory performance of the proponent and the compliance with the terms and conditions of the EC or the CRZC or both and the applicable laws and regulations.</p>
          <p><strong>3 :  Renewal:</strong> The proponent may apply for the renewal of the EC or the CRZC or both at least six months before the expiry of their validity. The proponent should submit the application for renewal along with the relevant documents and information to the MoEFCC or the SEIAA depending on the category and location of the project or activity. The application for renewal should contain the details of the project or activity such as the name and address of the proponent, the location and extent of the land, the nature and magnitude of the project or activity, the sources and quantities of raw materials, water and energy, the mode and means of transportation, the expected emissions and effluents, the implemented and proposed mitigation measures and environmental management plan, the cost and benefits of the project or activity, the public consultation process and the outcome, and the compliance with the terms and conditions of the EC or the CRZC or both and the applicable laws and regulations. The application for renewal should also be accompanied by the following documents:</p>
          <p><strong>1 : </strong>A copy of the EC or the CRZC or both granted to the proponent along with the terms and conditions imposed by the MoEFCC or the SEIAA.</p>
          <p><strong>2 : </strong>A copy of the environmental audit report or the environmental compliance report or the environmental statement or the environmental impact assessment report or the environmental management plan or any other document that indicates the performance and compliance of the proponent with respect to the environmental aspects of the project or activity. The document should be prepared as per the guidelines and formats issued by the MoEFCC or the SEIAA or the concerned regulatory authority.</p>
          <p><strong>3 : </strong>A copy of the consent to establish or the consent to operate or the authorization or the registration or the license or any other document that indicates the approval of the concerned regulatory authority for the establishment or operation or handling or disposal of the project or activity or the environmental pollutants or the hazardous substances involved in the project or activity.</p>
          <p><strong>4 : </strong>A copy of the monitoring report or the inspection report or the show cause notice or the closure notice or the direction or the order or any other document that indicates the action taken by the concerned regulatory authority or the MoEFCC or the SEIAA or the EAC or the SEAC or the court or the tribunal or any other competent authority against the proponent for any violation or non-compliance or impact related to the environmental aspects of the project or activity.</p>
          <p><strong>5 : </strong>Any other document or information that may be required by the MoEFCC or the SEIAA or the EAC or the SEAC or the concerned regulatory authority for the appraisal of the application for renewal.</p>
        </div>
      </div>
      <div className="Procedure-parent benefits pt-3 w-80 m-auto mobile-flex-column-reverse">
        <div className="flex-7">
          <p className="pt-5">The MoEFCC or the SEIAA may renew the EC or the CRZC or both granted to the proponent subject to the satisfactory performance of the proponent and the compliance with the terms and conditions of the EC or the CRZC or both and the applicable laws and regulations. The MoEFCC or the SEIAA may also modify or amend or revoke the terms and conditions of the EC or the CRZC or both or impose new terms and conditions or reject the application for renewal after giving a reasonable opportunity of being heard to the proponent and after recording the reasons for such decision in writing. The MoEFCC or the SEIAA may also impose a penalty or take any other legal action against the proponent for any violation or non-compliance, or impact related to the environmental aspects of the project or activity. The MoEFCC or the SEIAA may renew the EC or the CRZC or both for a further period of five years from the date of their expiry and communicate the decision to the proponent and the concerned regulatory authority and display the decision on its website. The renewal of the EC or the CRZC or both is required for all Category A and B projects and is a part of the environmental clearance process.</p>
        </div>
        <div className="flex-3">
          <Image
            alt="Procedure to get Environmental Clearance"
            className="Procedure-img w-100"
            height={450}
            loading="lazy"
            src={bft_two}
          />
        </div>
      </div>
    </div>
  );
};

export default Certificate;


