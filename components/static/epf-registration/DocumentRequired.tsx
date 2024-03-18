import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/epf-registration/Documents_Required.svg'

export const DocumentRequired = () => {
  return (
    <div id='DocumentRequired'>
     <p className='main-para mb-2'>Following is the list of all the essential documents required for EPF Registration:</p>
    <div className='benefits flex w-80 m-auto mobile-flex-column' >
       <div className='flex-4 '>
          <Image alt="Documents Required for EPF Registration" className="Documents-img w-100" height={520} loading="lazy" src={bft} />

      </div>
      <div className='flex-7 pt-5'>
      
      <p>1: PAN Card of the Partner or Proprietor or Director;</p>
      <p>2: Aadhar Card of the Partner or Proprietor or Director;</p>
      <p>3: Digital Signature Certificate of the Partner or Director or Proprietor;</p>
      <p>4: GST Registration Certificate or Shop & Establishment Certificate or any Licence issued by the Government for the Establishment;</p>
      <p>5: Hired or Leased or Rented Agreement (if any);</p>
      <p>6: Address Proof such as the water bill or electricity bill or telephone bill of the registered office (not older than 2 months);</p>
      <p>7: Canceled cheque or bank statement of the company or entity;</p>
      <p>8: License proof issued by the Licensing Authority or Identifier.</p>
      </div>
     </div>
      </div>
  )
}
