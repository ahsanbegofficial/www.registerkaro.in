import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'
interface HeroProps { cityName: string;}
export const Renewal = ({ cityName }: HeroProps) => {



  return (
    <div className='DocumentButtonWise w-80 m-auto' id='Renewal'>
      <p className='main-para'>For renewing the certificate of Society registration, follow the give steps</p>
      <div className="flex w-80 m-auto align-center justify-content-between mobile-flex-column">
        <div className=' text-justify fs-20 p-color-black'>
            <p><strong>1: </strong>Prepare the application for the renewal, and fill in the form with details like personal information.</p>
            <p><strong>2: </strong>The renewal process is only possible if the registrar had not dispensed the certificate due to destruction, loss or any other relevant reason</p>
            <p><strong>3: </strong>Attach the documents with the application such as Account Audit, Financial Documents, affidavits. Member details, society registration certificate, etc</p>
            <p><strong>4: </strong>Submit the application and wait for the verification. Once verified, your will receive the renewal of the certificate for Society Registration.</p>
        </div>
      </div>
    </div>
  )
}
