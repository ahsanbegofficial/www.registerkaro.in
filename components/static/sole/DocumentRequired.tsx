import Image from 'next/image'
import React from 'react'
import documents from '../../../assets/images/static/sole-proprietorship/Documents.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

export const DocumentRequired = () => {
  return (
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' id='Documents'>
      <div className='flex-7'>
        <p>Following is the list of some basic documents required for Sole Proprietorship Registration in India</p>
        <h3>Documents of the applicant</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />PAN Card</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Identity Proof</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Address Proof</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Sale Deed or Rental Agreement (in case of Shop & Establishment Act Registration</li>
        </ul>
       
        <p>To open a current bank account, you need to submit the following documents</p>
        <h3>Documents of the applicant</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Address Proof</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Identity Proof</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />PAN Card</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Existence proof of your business</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Shop & Establishments Registration</li>
        </ul>
       
      </div>
      <div className='flex-3'>
        <Image alt="the list of some basic documents required for Sole Proprietorship Registration in India,Address Proof,Existence proof of your business,Shop & Establishments Registration" className="DocumentRequired-img w-100" loading="lazy" src={documents} height={500}/>
      </div>
    </div>
  )
}