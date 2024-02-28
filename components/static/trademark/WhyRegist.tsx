import Image from 'next/image'
import React from 'react'
import ProcedureReg from '../../../assets/images/static/trademark-reg/whyRegisterKaro.svg'

interface HeroProps {
  cityName: string;
}

export const WhyRegist = ({ cityName }: HeroProps) => {
  return (
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' id='WhyRegist'>
      <div className='flex-5'>
        <div className='flex-3'>
        <p>Following is the documents required for Startup {cityName} Company Registration:</p>
      </div>

        <p><strong>1: </strong>We conduct a thorough Trademark Search of the TM Directory;</p>
        <p><strong>2: </strong>We prepare the Authorisation Letter, so our experts can file for Registration on your behalf;</p>
        <p><strong>3: </strong>Our experts or lawyers guide you with the Trademark Classes you need to apply under;</p>
        <p><strong>4: </strong>Our experts will file & apply with the Trademark Registrar;</p>
        <p><strong>5: </strong>We constantly provide you with updates until the process is complete.</p>
      
        
      </div>
      <div className='flex-3'><Image alt="Why RegisterKaro for Trademark Registration" className="Procedure-img w-100" loading="lazy" height={430} src={ProcedureReg} /></div>
    </div>
  )
}