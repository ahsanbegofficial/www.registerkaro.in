import Image from 'next/image'
import React, { useState } from 'react'
import bft from '../../../assets/images/static/society-registration/how_registerkar_assist.svg'

interface HeroProps { cityName: string; }
export const HowToRegister = ({ cityName }: HeroProps) => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div id='HowToRegister'>
      <p className='main-para'>RegisterKaro brings the expert assistance to your door to turn our dream into a living reality. Our service toolkit has been of service to our longstanding clients for many reasons few of which could be counted on:</p>
      <div className='benefits flex w-80 m-auto mobile-flex-column' id='Registration'>
        <div className='flex-5'>
          <Image alt="RegisterKaro brings the expert assistance to your door to turn our dream into a living reality." className="HowToRegister-img w-100" height={640} loading="lazy" src={bft} />
        </div>
        <div className='flex-5'>
          <p><strong>Expert Advisory</strong>
            RegisterKaro primarily assigns you an expert advisor for the Society registration process who will guide from the beginning to the end till you obtain the certificate of incorporation. The Expert assist you in designing the plan of action for the entire process.</p>

          <p><strong>Collection of Documents</strong>
            Next, RegisterKaro helps you in preparing and drafting all the required documents such as Memorandum of Association, Rules and Regulations or By-laws and further signed by all the members which is an important requirement in the society registration process.</p>

          <p><strong>Application Filing</strong>
            Once all the documentation are drafting and prepared for filing, now RegisterKaro helps you in filing the application for Society Registration along with step-by-step consultation from our expert Advisor. We make sure that there is a consistent follow up on your application status. In case of rejected application, we also assist you in refiling of the same till you get the end results.</p>

          <p><strong>Registration Certificate</strong>
            Once the department examine and approve your application, your Registration Certificate is Issued. The whole process takes approx 30-90 days (varies state to state as per their working process)</p>
        </div>
      </div>
    </div>
  )
}
