import Image from 'next/image'
import React from 'react'
import ProcedureReg from '../../../assets/images/static/nbfc-registration/right_business_model_to_choose_for_nbfc.svg'

interface HeroProps {
  cityName: string;
}

export const BusinessModel  = ({ cityName }: HeroProps) => {
  return (
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' id='BusinessModel'>
    <div className='flex-5 pt-5'>
    
          <p>There are different forms of Business Model to choose under the law when it comes to NBFC Registration. Choosing the right model for the business is equally important for the registration as the business structure decides many factors such as taxation slabs, leverages, regulatory statute, etc. There are major three categorization of NBFCs on the basis of Size, Liabilities, and activities:</p>
       </div>
   
    <div className='flex-4'>
      <Image alt="Right Business Model to choose for NBFC Registration
      There are different forms of Business Model to choose under the law when it comes" className="BusinessModel-img w-100" loading="lazy" height={300} src={ProcedureReg} />
      </div>
   </div>
  )
}
