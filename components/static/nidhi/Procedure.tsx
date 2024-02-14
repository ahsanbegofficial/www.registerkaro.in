import Image from 'next/image'
import React from 'react'
import ProcedureReg from '../../../assets/images/nidhi-reg/procedure.svg'

export const Procedure = () => {
  return (
    <div className='Procedure  flex w-80 m-auto mobile-flex-column-reverse' id='Procedure'>
      <div className='flex-7'>
        <p>Following is the step-by-step procedure for Nidhi Company Registration in India:</p>
        <p><strong>Step 1:</strong></p>
        <p>Apply for a Digital Signature Certificate (DSC) and Director Identification Number (DIN). Our experts will help you obtain DSC and DIN.</p>
        <p><strong>Step 2:</strong></p>
        <p>Select a suitable Company Name, and make an application for a Reservation of name.</p>
        <p><strong>Step 3:</strong></p>
        <p>Draft Memorandum of Association and Articles of Association (MOA & AOA).</p>
        <p><strong>Step 4:</strong></p>
        <p>Upload Forms and pay requisite fees and Stamp Duty to the Ministry of Corporate Affairs</p>
        <p><strong>Step 5:</strong></p>
        <p>Scrutiny of documents by MCA</p>
        <p><strong>Step 6:</strong></p>
        <p>Receipt of Certificate of Incorporation (COI) from MCA</p>
      </div>
      <div className='flex-3'>
        <Image alt="Private Limited Company sample" className="Procedure-img w-100" loading="lazy" height={430} src={ProcedureReg} />
      </div>
    </div>
  )
}