import React from "react"
import Image from 'next/image'
import ProcedureReg from '../../../assets/images/static/trademark-reg/validity.svg'

interface HeroProps {
  cityName: string;
}

export const ValidityOfTrad = ({ cityName }: HeroProps) => {
  return (
    <div className='main-para my-2' id='ValidityOfTrad'>
          <div className='flex-3'><Image alt="Validity of Trademark Registration Online" className="Procedure-img w-100" loading="lazy" height={430} src={ProcedureReg} /></div>
          <p>In {cityName}, all registered Trademarks are valid for 10 years from the date of Trademark Registration Online. At the end of the validity, a Trademark can be renewed by simply giving the Government fee for the Registration within 6 months through Form TM-12 from the date of expiry of the Trademark. An expired Trademark can be renewed via Form-13 (Restoration & Renewal) after 6 months & within 1 year from the expiration of the last Trademark Registration Online.</p>
       
    </div>
  )
}
