import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/epr-registration/how_to_apply_for_epr_registration.svg'


interface HeroProps {cityName: string;}
export const HowEPRRegistration = ({ cityName }: HeroProps)  => {
  return (
    <div id='HowEPRRegistration'>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
      <div className='flex-5'>
          <Image alt="How to apply for EPR Registration online in India?" className="HowEPRRegistration-img w-100" height={390} loading="lazy" src={dft} />
      </div>
        <div className='flex-5 pt-5'>
          <p><strong>1: </strong>Every Manufacturer in {cityName} who wants EPR Authorization should make an application in Form-1 of the E-Waste (M) Rules, 2016 and this application should be duly filled & accompanied with requested documentation.</p>
          <p><strong>2: </strong>According to these Rules the applicant must provide the duly-filled application to the Member Secretary (CPCB).</p>
          <p><strong>3: </strong>Form-1 should entail the legal information to the accumulation and channelization of E-Waste as mentioned under Section 2.1.1 to 2.1.7.</p>
        </div>
      </div>
    </div>
  )
}
