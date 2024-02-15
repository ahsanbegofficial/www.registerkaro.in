import Image from 'next/image'
import React from 'react'
import one from '../../../assets/images/static/private-reg/checklist/one.png'
import two from '../../../assets/images/static/private-reg/checklist/two.png'
import three from '../../../assets/images/static/private-reg/checklist/three.svg'
import four from '../../../assets/images/static/private-reg/checklist/four.svg'
import five from '../../../assets/images/static/private-reg/checklist/five.svg'
import six from '../../../assets/images/static/private-reg/checklist/six.svg'
import seven from '../../../assets/images/static/private-reg/checklist/seven.svg'

export const Checklist = () => {
  return (
    <div className='checklist' id='Checklist'>
      <p className='main-para'>Following is the checklist for OPC Registration in India:</p>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={one} alt="All the membership standards should be meet"/>
          </div>
          <p>Membership standards must be met at both the maximum and minimum levels</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={two} alt="Selection of a nominee person before incorporation"/>
          </div>
          <p>Before incorporation, a nominee should be picked</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="Filing of Form INC-3 for the nominee selection"/>
          </div>
          <p>Form INC-3 should be used to request the nominee’s approval</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={four} alt="Selection of OPC Name under Companies (Incorporation Rules) 2014"/>
          </div>
          <p>Companies (Incorporation Rules) 2014 require that the OPC name be selected</p>
        </div>
      </div>
      <div className="checklist flex w-80 m-auto mt-4 mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={five} alt="Minimum authorized capital of an OPC is Rs. 1 lakh"/>
          </div>
          <p>The minimum authorized capital of Rs. 1 Lakh</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={six} alt="DSC for Director"/>
          </div>
          <p>Digital Signature Certificate for Potential Director</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={seven} alt="Registered office address proof"/>
          </div>
          <p>Proof of the One Person Company’s registered office</p>
        </div>
      </div>
    </div>
  )
}
