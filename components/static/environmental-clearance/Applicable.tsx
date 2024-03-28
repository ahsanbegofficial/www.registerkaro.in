import Image from "next/image";
import React from "react";
import bft from "../../../assets/images/static/environmental-clearance/Applicable_Rules.svg";
interface HeroProps {
    cityName: string;
}
const Applicable = ({ cityName }: HeroProps) => {
  return (
    <div id="Applicable">
      <p className="main-para">Environmental clearance is governed by various national and international laws, regulations, standards, and guidelines, such as:</p>
      <div className="benefits flex w-80 m-auto mobile-flex-column">
      <div className="flex-3">
        <Image
            alt="Applicable Rules/Acts/Regulations"
            className="Applicable-img w-100 pt-5"
            height={700}
            loading="lazy"
            src={bft}
          />
        </div>
        <div className="flex-7 pt-5">
            <p><strong>1 : </strong>The Environment (Protection) Act, 1986</p>
            <p className="pt-4"><strong>2 : </strong>The National Green Tribunal Act, 2010</p>
            <p className="pt-4"><strong>3 : </strong>The Environmental Impact Assessment Notification, 2006</p>
            <p className="pt-4"><strong>4 : </strong>The CRZ Notification, 2011</p>
            <p className="pt-4"><strong>5 : </strong>The Forest (Conservation) Act, 1980</p>
            <p className="pt-4"><strong>6 : </strong>The Wildlife (Protection) Act, 1972</p>
            <p className="pt-4"><strong>7 : </strong>The Biological Diversity Act, 2002</p>
            <p className="pt-4"><strong>8 : </strong>The Convention on Biological Diversity, 1992</p>
            <p className="pt-4"><strong>9 : </strong>The Ramsar Convention on Wetlands, 1971</p>
            <p className="pt-4"><strong>10 : </strong>The World Heritage Convention, 1972</p>
        </div>
       
      </div>
    </div>
  );
};

export default Applicable;


