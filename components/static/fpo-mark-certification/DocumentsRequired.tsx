import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/fpo-mark-certification/documents-required-for-fpo-mark-certification.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'
interface HeroProps {
  cityName: string;
}

export const DocumentsRequired = ({ cityName }: HeroProps) => {
  return (
    <div >
        
      <div className='flex justify-content-center' id='DocumentsRequired'>
        <Image alt="Documents required for FPO Mark Certification,For obtaining the FPO (Food Products Order) mark in { cityName }, you typically need the following documents" className="DocumentsRequired-img w-100" height={682} loading="lazy" src={dft} />
      </div>
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse'>
      <div className='flex-7'>
      <p>For obtaining the FPO (Food Products Order) mark in { cityName }, you typically need the following documents:</p>
        <h3>1. Application Form:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A duly filled application from for obtaining the FPO mark.</li>
        </ul>
        <h3>2. Product Details:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Detailed information about the food product(s) for which you’re seeking the FPO mark.</li>
        </ul>
        <h3>3. Manufacturing Process Details:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Description of the manufacturing process, including the machinery and equipment used.</li>
        </ul>
        <h3>4. Ingredients List:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A comprehensive list of ingredients used in the production of the food product.</li>
        </ul>
        <h3>5. Testing Reports:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Reports from accredited laboratories certifying the quality and safety of the product, including tests for contaminants, if required.</li>
        </ul>
        <h3>6. Labelling Details:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Labels of the product(s) indicating the name, address, and other necessary information as per FPO regulations.</li>
        </ul>
        <h3>7. FSSAI License:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A valid FSSAI license for the manufacturing unit.</li>
        </ul>
        <h3>8. Quality Assurance plan:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Documentation outlining the quality control measures implemented during production.</li>
        </ul>
        <h3>9. Trademark Registration (if applicable):</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Proof of trademark registration for the product.</li>
        </ul>
        <p >Always verify the latest requirements and consult with the concerned authorities or experts to ensure that you have all the necessary and updated documents for obtaining the FPO mark for your food products.</p>
        <p ><i>The following important documents are needed to be submitted to the ministry of food processing in { cityName } at the time of filling application:</i></p>
        <ul>
          <p><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Application Form</p>
          <p><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Name of the product or item</p>
          <p><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />name of the applicant</p>
          <p><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Name of the Firm or Company</p>
          <p><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Sample of the products</p>
          <p><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Demand Draft of Rs. 1000 for Government Fee</p>
          <p><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Affidavits</p>
        </ul>
      </div>
      </div>
    </div>
  )
}