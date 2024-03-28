import Image from "next/image";
import React from "react";
import dft from "../../../assets/images/static/environmental-clearance/Different_types.svg";
interface HeroProps {
    cityName: string;
}
export const Types = ({ cityName }: HeroProps) => {
  return (
    <div id="Types">
        <p className="main-para"> Different types of Environmental Clearance services we offer</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
            <Image
              alt="Different types of Environmental Clearance services"
              className="Types-img w-100"
              height={600}
              loading="lazy"
              src={dft}
            />
        </div>
        <div className="flex-7">
           <p><strong>1 : Prior environmental clearance:</strong> This is the service for projects that require environmental clearance before the start of any construction work or land preparation, as per the EIA Notification, 2006. This service involves the stages of screening, scoping, application, public consultation, appraisal, and grant or rejection of the environmental clearance.</p>
           <p><strong>2 : Environmental clearance for expansion or modernization: </strong>This is the service for projects that involve expansion or modernization of the existing capacity or activity, and that require environmental clearance for the same, as per the EIA Notification, 2006. This service involves the stages of screening, application, appraisal, and grant or rejection of the environmental clearance.</p>
           <p><strong>3 : Environmental clearance for change in scope or product mix:</strong> This is the service for projects that involve change in scope or product mix of the existing capacity or activity, and that require environmental clearance for the same, as per the EIA Notification, 2006. This service involves the stages of screening, application, appraisal, and grant or rejection of the environmental clearance.</p>
           <p><strong>4 : Transfer of environmental clearance: </strong>This is the service for projects that involve transfer of the environmental clearance from one project proponent to another, due to change in ownership or management, as per the EIA Notification, 2006. This service involves the stages of application, appraisal, and grant or rejection of the transfer of the environmental clearance.</p>
          
        </div>
        
      </div>
    </div>
  );
};
