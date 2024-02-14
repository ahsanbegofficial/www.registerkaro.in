import Image from 'next/image'
import React from 'react'
import one from '../../../assets/images/pvt-reg/checklist/one.png'
import two from '../../../assets/images/pvt-reg/checklist/two.png'
import three from '../../../assets/images/pvt-reg/checklist/three.svg'
import four from '../../../assets/images/pvt-reg/checklist/four.svg'
import whoCan from '../../../assets/images/trade-mark/whoCanApply.svg'


export const Checklist = () => {
  return (
    <div className='checklist' id='Checklist'>
      < div className='flex-7'>
          <Image alt="list of documents for private limited company registration in india that is passport size photos, aadhar and pan card, address proof, passport for NRIs applicant, bank statement" className="DocumentRequired-img w-100" loading="lazy" src={whoCan} height={530}/>
        <p className='main-para'>A Trademark application can be filed by:</p>
        </div>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={one} alt="Minimum two directors for a company" />
          </div>
          <p>Private Firms;</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={two} alt="minimum one director should be an Indian Resident" />
          </div>
          <p>Individuals;</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="Digital Signature Certificate" />
          </div>
          <p>Companies like Private Limited, OPC, LLP, Public Limited, Partnership & so on;</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={four} alt="DIN or Director Identification Number" />
          </div>
          <p>NGOs</p>
        </div>   

      </div>
      <p className='main-para'>In the case of LLPs and NGOs the Trademark must be applied for Registration in the name of the proposed company or a business.</p>
    </div>
  )
}