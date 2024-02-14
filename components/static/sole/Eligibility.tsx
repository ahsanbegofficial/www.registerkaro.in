import Image from 'next/image'
import React from 'react'
import one from '../../../assets/images/pvt-reg/checklist/one.png'
import two from '../../../assets/images/pvt-reg/checklist/two.png'
import three from '../../../assets/images/pvt-reg/checklist/three.svg'
import four from '../../../assets/images/pvt-reg/checklist/four.svg'
import five from '../../../assets/images/pvt-reg/checklist/five.svg'

export const Eligibility = () => {
  return (
    <div className='checklist' id='Eligibility'>
          <p className='main-para'>Following are the eligibility criteria for Sole Proprietorship Registration in India:</p>
          <div className="checklist flex w-80 m-auto mobile-flex-column">
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={one} alt="Applicants must obtain GST Registration for their business"/>
                  </div>
                  <p>Applicants must obtain GST Registration for their business</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={two} alt="Applicant must be a tax-paying citizen"/>
                  </div>
                  <p>Applicant must be a tax-paying citizen</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={three} alt="Register a Bank Account in the name of Proprietorship."/>
                  </div>
                  <p>Register a Bank Account in the name of Proprietorship.</p>
              </div>
          </div>
      </div>

  )
}
