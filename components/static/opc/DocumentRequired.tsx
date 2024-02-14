import Image from 'next/image'
import React from 'react'
import documents from '../../../assets/images/opc-reg/Documents.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

export const DocumentRequired = () => {
  return (
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' id='Required'>
      <div className='flex-7'>
        <p>Following are the crucial documents required for One Person Company Registration in India</p>
        <h3>A scanned copy of a current bank statement:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Bank statements can be accessed via Internet banking or by visiting a bank branch. Account statements and transaction summary statements are two additional common titles for them.</li>
        </ul>
        <h3>A phone bill, an electricity or gas bill and a mobile bill:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Utilities often include power, gas, water/sewage, and garbage disposal. Other services, such as internet, cable TV, and phone service, are occasionally viewed as extra utilities because they are now considered standard in the majority of Indian households. The cost of utilities might vary greatly based on your location, the temperature where you reside, and your usage habits. As a result, these are also presented as critical documents for OPC Registration.</li>
        </ul>
        <h3>Rental agreement in English, digitally transcribed:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Tenants are frequently given hard copies of rental agreements. This must be scanned and submitted to the appropriate authority for documentation.</li>
        </ul>
        <h3>A digital transcription of a landlord’s no-objection certificate:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />This document comes from the specific landlord. Section 12 of The Companies Act, 2013 requires that every corporation maintain a registered address. When a company is incorporated in India, the registered address is attached to the SPICe+ form. If the business’s address changes after formation, a Form INC-22 notification of the company’s new registration address must be sent to the ROC.</li>
        </ul>
        <h3>A scanned copy of the property or sale deeds in English (if the property is owned):</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A sale deed is a legal document used in real estate transactions to confirm the purchase of property and the transfer of ownership from the seller to the buyer. This is the primary ownership transfer documentation. A sale deed is also known as a conveyance deed or a final deed.</li>
        </ul>
      </div>
      <div className='flex-3'>
        <Image alt="list of all the vital documents required for OPC Registration in India" className="DocumentArrowWise-img w-100" loading="lazy" height={430} src={documents} />
      </div>
    </div>
  )
}