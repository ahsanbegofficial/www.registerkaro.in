import Image from 'next/image'
import React from 'react'
import one from '../../../assets/images/pvt-reg/checklist/one.png'
import two from '../../../assets/images/pvt-reg/checklist/two.png'
import three from '../../../assets/images/pvt-reg/checklist/three.svg'
import four from '../../../assets/images/pvt-reg/checklist/four.svg'
import five from '../../../assets/images/pvt-reg/checklist/five.svg'

export const Checklist = () => {
  return (
    <div className='checklist' id='Checklist'>
      <p className='main-para'>Following is the vital checklist for Partnership Firm Registration:</p>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={one} alt="Minimum 10 members are required for the Registration in India"/>
          </div>
          <p>The creation of a partnership agreement.</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={two} alt="A minimum capital of Rs. 5 lakhs required"/>
          </div>
          <p>A minimum of two members must be partners.</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="Out of 10 members, at least 5 Directors are required"/>
          </div>
          <p>A maximum of twenty partners is permitted.</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="Out of 10 members, at least 5 Directors are required"/>
          </div>
          <p>Choosing an appropriate name.</p>
        </div>
      </div>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={one} alt="Minimum 10 members are required for the Registration in India"/>
          </div>
          <p>The main place of business.</p>
        </div>
         <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={one} alt="Minimum 10 members are required for the Registration in India"/>
          </div>
          <p>The firm’s PAN card and bank account.</p>
        </div>
      </div>
     
    </div>
  )
}
