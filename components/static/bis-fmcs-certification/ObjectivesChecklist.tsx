import Image from "next/image";
import bft from "../../../assets/images/static/bis-fmcs-certification/importance_of.svg";

interface HeroProps { cityName: string;}
export const ObjectivesChecklist = ({ cityName }: HeroProps)  => {
  return (
    <div id="ObjectivesChecklist">
    <div className="benefits flex w-80 m-auto mobile-flex-column">
       <div className='flex-3'>
  
          <Image
            alt="Importance of BIS FMCS Certification in India
            Key Guidelines for Nomination of AIR (Authorized Indian Representative) for Foreign Manufacturers
            The acquisition of BIS FMCS Certification is imperative for products categorized as mandatory in India. Without this certification, manufacturers face restrictions in"
            className="Importance-img w-100"
            height={350}
            loading="lazy"
            src={bft}
          />
        
      </div>
      <div className='flex-7 pt-5'>
      <p>The acquisition of BIS FMCS Certification is imperative for products categorized as mandatory in {cityName}. Without this certification, manufacturers face restrictions in selling their products in the Indian market. Thus, obtaining BIS FMCS Certification facilitates seamless access to the Indian market, providing legal benefits and more. The process of securing BIS FMCS Certification is intricate and time-consuming. Our team of professionals simplifies this procedure by maintaining direct communication with BIS officers, ensuring efficient follow-ups and acknowledgments. This strategic approach streamlines the certification process, making it more manageable for manufacturers seeking compliance with Indian standards.</p>
     
    </div>
   
    </div>
    </div>
  )
}
