import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/epf-registration/mandatory_compliance.svg'


export const MandatoryCompliance = () => {
  return (
    <div id='MandatoryCompliance'>
     <p className='main-para mb-2'>Following are some mandatory compliance after EPF Registration that should be completed:</p>
    <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' >
     
      <div className='flex-7 pt-5'>
      <p>1: Monthly returns are submitted digitally by uploading the ECR sheet using the establishment login;</p>
      <p>2: Online returns are submitted by the 15th of the following month;</p>
      <p>3: Once the company or establishment has registered with EPFO, it must follow certain legal requirements on a monthly/yearly basis;</p>
      <p>4: A file must be created from an XML sheet before it can be uploaded for Return Filing;</p>
      <p>5: Every employee registered with the Company during the month for which the return is filed is listed by name & UAN on the ECR Sheet, which is available for download via EPFO in an XML format;</p>
      <p>6: By adding online payment gateways, finish filling out the return.</p>
      </div>
      <div className='flex-4 mt-5'>
          <Image alt="Mandatory Compliance" className="MandatoryCompliance-img w-100" height={380} loading="lazy" src={bft} />
      </div>
     </div>
      </div>
  )
}
