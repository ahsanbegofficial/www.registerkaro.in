import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/private-reg/benefit.svg'

interface HeroProps {
  cityName: string;
}

export const OtherAnnual = ({ cityName }: HeroProps) => {
  return (
    <div id='OtherAnnual'>
    <div className='benefits flex w-80 m-auto mobile-flex-column' >
       <div className='flex-4 mt-5'>
          <Image alt="The benefits of private limited company in india and these are Separate Legal Entity, Ease in Raising Funds, Limited Liability, Easy Transferable, Limited Liability and ESOP" className="benefits-img w-100" height={450} loading="lazy" src={bft} />
      </div>
      <div className='flex-7 pt-5'>
          <p>BIS may reject an ISI application under certain non-compliance conditions. The reasons for rejection include:</p>
      <p><strong>1: </strong>Failure to submit samples for testing post ISI application submission.</p>
      <p><strong>2: </strong>Inadequate technical personnel within the manufacturing entity.</p>
      <p><strong>3: </strong>Engagement in unethical practices by the firm or applicant.</p>
      <p><strong>4: </strong>Manufacturer’s failure to provide assistance during official visits to the factory.</p>
      <p><strong>5: </strong>Incorrect or incomplete document submission by the firm.</p>
      <p><strong>6: </strong>Significant deviations in the manufacturing facility from the declared (BIS official) facility.</p>
      <p><strong>7: </strong>Insufficient technical personnel within the manufacturing entity.</p>
      <p><strong>8: </strong>Test failure of samples drawn for testing.</p>
      <p><strong>9: </strong>Lack of testing facilities by the manufacturer.</p>
      <p><strong>10: </strong>Non-conformity in factory testing of sample products during the second stage.</p>
      </div>
     </div>
     <p className='main-para'><strong>Note:</strong>  Before rejecting the ISI Certification application, BIS provides a 21-day notice period. During this period, the applicant must present their case either in person or through a representative. If the reasons provided are deemed unsatisfactory, the BIS reserves the right to reject the application.</p>
    </div>
  )
}
