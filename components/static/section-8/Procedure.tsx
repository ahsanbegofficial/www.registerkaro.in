import Image from 'next/image'
import React from 'react'
import pvtReg from '../../../assets/images/section-8-reg/Procedure .svg'

export const Procedure = () => {
  return (
    <div className='Procedure flex w-80 m-auto mobile-flex-column-reverse' id='Procedure'>
      <div className='flex-7'>
        <p>Following is the step-by-step procedure for Section 8 Company Registration:</p>
        <p><strong>Step 1: Obtain DSC & DIN:</strong></p>
        <p>First, the applicant needs to obtain a Digital Signature Certificate of the proposed Directors. Once they receive DSC, file Form DIR-3 with ROC for obtaining DIN. The identity & address proof should be attached for getting DSC. Once DIR-3 is approved, the Registrar of Companies will allot a DIN to the proposed Directors.</p>
        <p><strong>Step 2: Filing of INC-12 Application Form:</strong></p>
        <p>After getting DSC and DIN, the next step is to file Form INC-12 with the Registrar of Companies to apply for a Licence under Section 8 Company along with the attachment of the required documents. Once the form is approved, a Licence under Section 8 Company will be issued in Form INC-16.</p>
        <p><strong>Step 3: Filing of SPICe+ Form:</strong></p>
        <p>After getting License under Section 8, you need to file SPICe+ Form with the Registrar of Companies (ROC) for the Registration along with the vital documents.</p>
        <p><strong>Note:</strong> Once the Registrar of Companies is satisfied with the forms submitted, he or she issues a CoI (Certificate of Incorporation) along with a Unique CIN</p>
      </div>
      <div className='flex-3'>
        <Image alt="Private Limited Company sample" className="Procedure-img w-100" height={382} loading="lazy" src={pvtReg} />
      </div>
    </div>
  )
}