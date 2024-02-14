import Image from 'next/image'
import React from 'react'
import documents from '../../../assets/images/pvt-reg/documents.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

export const Classification = () => {
  return (
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' id='Classification'>
      <div className='flex-7'>
       
        <p>The trust registration process encompasses the participation of the following key parties:</p>
      
        <h3>1. Trustor:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The trustor is the individual who initiates the establishment of the trust. Typically, they are the proprietor of the assets or property being placed into the trust.</li>
        </ul>
        
        <h3>2. Trustee:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> The trustee is an individual or entity entrusted with the responsibility of managing and overseeing the trust. They hold and administer the trust property on behalf of the trustor and for the benefit of the beneficiary.</li>
        </ul>
        <h3>2. Beneficiary:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The beneficiary is the person for whom the trust is established. They are the designated recipient of the benefits, assets, or property held within the trust. The beneficiary, often a third party known to both the trustor and trustee, is entitled to receive the benefits in accordance with the terms and conditions specified in the trust.</li>
        </ul>
    </div>
        <div className='flex-3'>
        <Image alt="list of documents for private limited company registration in india that is passport size photos, aadhar and pan card, address proof, passport for NRIs applicant, bank statement" className="DocumentRequired-img w-100" loading="lazy" src={documents} height={430} />
        </div>
    </div>
  )
}