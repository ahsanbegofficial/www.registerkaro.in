import Image from "next/image";
import bft from "../../../assets/images/static/bis-fmcs-certification/statndard_mark.svg";

interface HeroProps { cityName: string;}

export const KeyInitiatives = ({ cityName }: HeroProps)  => {
  return (
    <div id="KeyInitiatives">
    <div className="benefits flex w-80 m-auto mobile-flex-column-reverse">
      <div className='flex-6 pt-3'>
      <p >The BIS Standard Mark, commonly referred to as the ISI Mark, is a distinctive emblem mandated by the Bureau of Indian Standards. This symbol authorizes the usage of the Standard Mark (ISI Mark) and serves as an assurance that the product complies with the Indian Standards prescribed by the BIS. The Bureau of Indian Standards, endowed with the authority to confer the ISI Mark, employs a rigorous evaluation process, encompassing examination, documentation, and other criteria. This process verifies that manufacturers adhere to the standards and guidelines set forth by the BIS.</p>
      </div>
      <div className='flex-4'>
  
          <Image
            alt="What is BIS Standard Mark?
            The BIS Standard Mark, commonly referred to as the ISI Mark, is a distinctive emblem mandated by the Bureau of Indian Standards"
            className="BisStandard-img w-100"
            height={300}
            loading="lazy"
            src={bft}
          />
        
      </div>
    </div>
    </div>
  )
}