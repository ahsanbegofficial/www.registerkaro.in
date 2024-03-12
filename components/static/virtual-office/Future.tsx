import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/virtual-office/future.svg";
interface HeroProps { cityName: string;}
const Future = ({ cityName }: HeroProps) => {
  return (
    <div id="Future">
      <div className="benefits flex w-80 m-auto mobile-flex-column">
        <div className="flex-4">
          <Image
              alt="Future Trends and Adaptation of Virtual Offices"
              className="Future-img w-100"
              height={300}
              loading="lazy"
              src={bft}
            />
        </div>
        <div className="flex-5 pt-5">
            <p>The trajectory of remote work continues to shape the future of virtual offices. Advancements in augmented reality (AR), virtual reality (VR), and the integration of artificial intelligence (AI) are poised to revolutionize collaboration and productivity in virtual work environments. Companies must adapt by embracing these technologies and fostering a culture of continuous learning to remain competitive in an evolving landscape.</p>
        </div>
       
      </div>
    </div>
  );
};

export default Future;
