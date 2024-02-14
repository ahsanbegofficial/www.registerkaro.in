import Image from 'next/image'
import React from 'react'
import one from '../../../assets/images/pvt-reg/checklist/one.png'
import two from '../../../assets/images/pvt-reg/checklist/two.png'
import three from '../../../assets/images/pvt-reg/checklist/three.svg'
import four from '../../../assets/images/pvt-reg/checklist/four.svg'
import five from '../../../assets/images/pvt-reg/checklist/five.svg'
import six from '../../../assets/images/pvt-reg/checklist/six.svg'
import seven from '../../../assets/images/pvt-reg/checklist/seven.svg'

export const Checklist = () => {
  return (
    <div id='Checklist'>
      <p className='main-para'>Following is the checklist for LLP Registration in India:</p>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={one} alt="Minimum 2 directors" />
          </div>
          <p>Minimum 2 Partners are required</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={two} alt="Unique business name" />
          </div>
          <p>Digital Signature Certificate for all the proposed Partners</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="At least one director should be the resident of India" />
          </div>
          <p>DPIN (Designated Partner Identification Number)</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={four} alt="Registered office address" />
          </div>
          <p>LLP Name which is not similar to any existing LLP</p>
        </div>
      </div>
      <div className="checklist flex w-80 mt-4 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={five} alt="Minimum 2 directors" />
          </div>
          <p>LLP Agreement between the Partners</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={six} alt="Unique business name" />
          </div>
          <p>Proof of registered office of the LLP</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={seven} alt="At least one director should be the resident of India" />
          </div>
          <p>Capital contribution by the LLP Partners</p>
        </div>
      </div>
    </div>
  )
}
