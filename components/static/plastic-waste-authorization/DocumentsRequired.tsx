import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/plastic-waste-authorization/Documents.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'
interface HeroProps {
    cityName: string;
}
export const DocumentsRequired = ({ cityName }: HeroProps)  => {
  return (
    <div id='DocumentsRequired'>
        
      
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse'>
      <div className='flex-7 '>
        <p className='py-5'>The documents required for plastic waste authorization vary from state to state and depend on the type and capacity of the plastic waste activities undertaken by the entity. However, some of the common documents are:</p>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Certificate of incorporation or registration of the entity</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Proof of ownership or lease of the premises where the plastic waste activities are carried out</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Details of the machinery and equipment used for collection, storage, transport, processing, or recycling of plastic waste</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Environmental management plan, including the measures for pollution control, waste disposal, health and safety, etc.</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Consent to establish and operate from the SPCB or UTPCC</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Details and documents of the authorized person signing the papers, such as Aadhaar card, PAN card, and GST certificate</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Details of the products, including model numbers and import history</li>
          </ul>
        <ul className='tick list-unstyled'> 
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Details of the recycler, if any, with whom the entity has a contract or agreement.</li>
          </ul>
      </div>
      <div className='flex-3' >
        <Image alt="What are the documents required for Plastic Waste Authorization?" className="DocumentsRequired-img w-100" height={700} loading="lazy" src={dft} />
      </div>
      </div>
    </div>
  )
}