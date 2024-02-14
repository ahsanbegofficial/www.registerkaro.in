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
    <div className='checklist' id='Checklist'>
      <p className='main-para'>Following is the important checklist for Private Limited Company Registration in India:</p>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={one} alt="Minimum two directors for a company"/>
          </div>
          <p>A minimum of 2 Directors are required</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={two} alt="minimum one director should be an Indian Resident"/>
          </div>
          <p>At least 1 Director must be an Indian Resident</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="Digital Signature Certificate"/>
          </div>
          <p>DSC for all the designated Directors</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={four} alt="DIN or Director Identification Number"/>
          </div>
          <p>DIN of all the Directors of the Company</p>
        </div>
      </div>
      <div className="checklist flex w-80 m-auto mt-4 mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={five} alt="Company Name"/>
          </div>
          <p>Unique Company’s Name</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={six} alt="Memorandum of Association and Articles of Association of a Company"/>
          </div>
          <p>MoA & AoA </p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={seven} alt="Any proof of registered office"/>
          </div>
          <p>Proof of registered office</p>
        </div>
      </div>
    </div>
  )
}
