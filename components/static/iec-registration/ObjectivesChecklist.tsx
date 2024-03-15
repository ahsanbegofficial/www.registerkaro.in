import Image from "next/image";
import React from "react";
import one from "../../../assets/images/pvt-reg/checklist/one.png";
import two from "../../../assets/images/pvt-reg/checklist/two.png";
import three from "../../../assets/images/pvt-reg/checklist/three.svg";
interface HeroProps {
    cityName: string;
}
export const ObjectivesChecklist = ({ cityName }: HeroProps) => {
  return (
    <div id="ObjectivesChecklist">
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image
              height={125}
              width={125}
              src={one}
              alt="Minimum 2 directors"
            />
          </div>
          <p>IEC is required by the bank to transfer the amount in the case of any imports made;</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image
              height={125}
              width={125}
              src={two}
              alt="Unique business name"
            />
          </div>
          <p>IEC is required by the customs authorities to clear all the shipments in the case of any imports;</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image
              height={125}
              width={125}
              src={three}
              alt="At least one director should be the resident of India"
            />
          </div>
          <p>VISA is also vital if an exporter needs to send shipments;</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image
              height={125}
              width={125}
              src={three}
              alt="At least one director should be the resident of India"
            />
          </div>
          <p>If the exporter is expected to receive funds in foreign currency & they are transferred instantly to his/her bank account.</p>
        </div>
      </div>
    </div>
  );
};
