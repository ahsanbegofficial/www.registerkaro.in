import Image from 'next/image'
import React from 'react'
import pvtReg from '../../../assets/images/public-reg/procedure.svg'

export const Procedure = () => {
  return (
    <div className='Procedure flex w-80 m-auto mobile-flex-column-reverse' id='Procedure'>
    
      <div className='flex-7'>
        <p>Following is the step by step procedure for Public Limited Company Registration:</p>
        <ol>
          <li>Choose a unique company name</li>
          <li>Obtain Digital Signature Certificates (DSC) and Director Identification Numbers (DIN) for the proposed directors</li>
          <li>Apply for name reservation</li>
          <li>Prepare the Memorandum of Association (MOA) and Articles of Association (AOA)</li>
          <li>Submit the incorporation application and required documents</li>
          <li>Await verification and approval</li>
          <li>Apply for a Permanent Account Number (PAN) and Tax Deduction and Collection Account Number (TAN)</li>
          <li>Complete post-incorporation compliance, such as obtaining a Corporate Identification Number (CIN), opening a bank account, and registering for Goods and Services Tax (GST) if applicable</li>
        </ol>
        <p><strong>Note: </strong>Registering a Public Limited Company typically takes several weeks to a few months, depending on the country and the complexity of the company's structure. Public Limited Company registration involves creating a legal entity that offers shares to the public for purchase and trading on a stock exchange. This process includes meeting requirements such as minimum share capital and appointing directors.</p>
      </div>
      <div className='flex-3'>
        <Image alt="Private Limited Company sample" className="PvtReg-img w-100" height={382} loading="lazy" src={pvtReg} />
      </div>
    </div>
  )
}