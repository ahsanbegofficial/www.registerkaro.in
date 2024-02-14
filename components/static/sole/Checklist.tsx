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
          <p className='main-para'>Following is the checklist required for Sole Proprietorship in India</p>
          <div className="checklist flex w-80 m-auto mobile-flex-column">
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={one} alt="PAN Card of the Proprietor"/>
                  </div>
                  <p>PAN Card of the Proprietor</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={two} alt="Registration under the Shop & Establishment Act of the respective state"/>
                  </div>
                  <p>Registration under the Shop & Establishment Act of the respective state</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={three} alt="Registration under GST, if the turnover of the business exceeds Rs. 20 lakhs"/>
                  </div>
                  <p>Registration under GST, if the turnover of the business exceeds Rs. 20 lakhs</p>
              </div>
             
          </div>
          <div className="checklist flex w-80 m-auto mt-4 mobile-flex-column">
            <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={four} alt="Bank account in the business name"/>
                  </div>
                  <p>Bank account in the business name</p>
            </div>
            <div className="checklist-divs flex flex-column text-center align-center">
                <div>
                    <Image height={125} width={125} src={five} alt="Complete name & address of the business"/>
                </div>
                <p>Complete name & address of the business</p>
            </div>
          </div>
      </div>

  )
}
