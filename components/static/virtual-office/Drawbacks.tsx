import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/virtual-office/Drawbacks_of_Virtual_Office.svg";
interface HeroProps { cityName: string;}
const Drawbacks = ({ cityName }: HeroProps) => {
  return (
    <div id="Drawbacks">
      <p className="main-para">The following are the drawbacks of Virtual Offices:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
       <div className="flex-3">
          <Image
              alt="Drawbacks of Virtual Office"
              className="Drawbacks-img w-100"
              height={480}
              loading="lazy"
              src={bft}
            />
        </div>
        <div className="flex-7">
            <p><strong>Limited Physical Presence: </strong>Lack of physical office space might hinder certain businesses that require face-to-face interactions with clients, customers, or hands-on tasks, affecting credibility or relationships with clients who prefer physical meetings.</p>
            <p><strong>Communication Challenges: </strong>Relying solely on digital communication tools might lead to misinterpretations, misunderstandings, or feelings of isolation among remote team members. Communication barriers can hinder effective collaboration.</p>
            <p><strong>Data Security Risks: </strong>With the reliance on digital platforms, virtual offices are susceptible to cybersecurity threats, potentially compromising sensitive data or proprietary information if adequate security measures are not in place.</p>
            <p><strong>Difficulty in Fostering Company Culture: </strong>Establishing and nurturing a cohesive company culture becomes challenging in virtual settings. Building camaraderie, fostering teamwork, and maintaining a shared vision might be more complex without physical interactions.</p>
            <p><strong>Dependency on Technology:</strong> Technical glitches, internet outages, or software malfunctions can disrupt work processes, leading to productivity losses and operational disruptions.</p>
        </div>
      </div>
    </div>
  );
};

export default Drawbacks;
