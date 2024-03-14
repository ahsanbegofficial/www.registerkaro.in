import Image from "next/image";
import React from "react";
import documents from "../../../assets/images/static/llp-compliance/benefits_of_llp_compliance_in_india.svg";
interface HeroProps {
   cityName: string;
}

export const Benefits = ({ cityName }: HeroProps) => {


  return (
    <div className='DocumentButtonWise w-80 m-auto' id='Benefits'>
      <p className='main-para mb-2'>Following are some benefits of LLP Compliance in {cityName}:</p>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column-reverse">
        <div className='flex-7'>
          <p><strong>1 : Easy Closer and Conversion of LLP:</strong> For the LLP Conversion into any other organization or company, annual filing is very important. Regular compliance records ease the conversion task. The same applies in the case of LLP Closure. Even if the Limited Liability Partnership was non-operational, the Registrar may ask to fulfill LLP Compliance, with an additional LLP filing fee (if applicable).</p>
          <p><strong>2 : Avoid Penalties:</strong> With an intention to avoid huge penalties & fees, regular filing of forms protects Partners from being declared as defaulters. It also avoids further disqualification of contracts. Hence, Limited Liability Partnership needs to fulfill the Annual Compliance requirements. The non-fulfillment of LLP Compliance adds up in the form of heavy penalties till the actual date of filing.</p>
          <p><strong>3 : High Credibility: </strong>Legal Compliance is the main requirement for any business in {cityName}. The status of the LLP Annual filing is shown in the Master Data of the Limited Liability Partnership on the MCA portal & any individual can access the same. For loan approvals or any other requirements, compliance is a primary criterion to measure the Company’s Credibility.</p>
          <p><strong>4 : Financial Worth Record:</strong> The Forms filed by the Limited Liability Partnership are accessible by Companies. Hence, while entering into major projects or contracts, the concerned party may also inspect the financial worth. The annual filing provides its financial worth record & capacity to an interested individual or party.</p>
          <p><strong>5 : Greater Reputation:</strong> A vital requirement for any company is legal compliance. Anyone can access the Master Data of the LLP on the MCA portal to check the current status of the LLP Annual Filing. Compliance is a key factor in determining how trustworthy an organization or a Company is when approving loans or other needs of a similar nature.</p>
        </div>
        <div className="flex-4">
        <Image
          alt="Benefits of LLP Compliance in India"
          className="benefits-img w-100"
          height={682}
          loading="lazy"
          src={documents}
        />
       </div>
      </div>
    </div>
  )
  
}
