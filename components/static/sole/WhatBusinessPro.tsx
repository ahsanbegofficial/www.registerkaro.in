import Image from 'next/image'
import React from 'react'
import one from '../../../assets/images/pvt-reg/checklist/one.png'
import two from '../../../assets/images/pvt-reg/checklist/two.png'
import three from '../../../assets/images/pvt-reg/checklist/three.svg'
import four from '../../../assets/images/pvt-reg/checklist/four.svg'
import five from '../../../assets/images/pvt-reg/checklist/five.svg'

export const WhatBusinessPro = () => {
  return (
    <div className='checklist' id='WhatBusinessPro'>
          <p className='main-para'>Following are the various types of businesses in India that can be Sole Proprietorships:</p>
          <div className="checklist flex w-80 m-auto mobile-flex-column">
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={one} alt="Minimum 10 members are required for the Registration in India"/>
                  </div>
                  <p>Grocery Shops</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={two} alt="A minimum capital of Rs. 5 lakhs required"/>
                  </div>
                  <p>Fast food vendors</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={three} alt="Out of 10 members, at least 5 Directors are required"/>
                  </div>
                  <p>Manufacturing businesses</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={four} alt="This Company can be established by the joining of at least 2 Institutions"/>
                  </div>
                  <p>Small Traders</p>
              </div>
          </div>
          <div className="checklist flex w-80 m-auto mt-4 mobile-flex-column">
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={five} alt="Producer Company cannot be converted into a Public Limited Company"/>
                  </div>
                  <p>Repair & Maintenance Services</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={four} alt="This Company can be established by the joining of at least 2 Institutions"/>
                  </div>
                  <p>Parlours</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={four} alt="This Company can be established by the joining of at least 2 Institutions"/>
                  </div>
                  <p>Boutiques</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={four} alt="This Company can be established by the joining of at least 2 Institutions"/>
                  </div>
                  <p>Retail Stores</p>
              </div>
          </div>
          <div className="checklist flex w-80 m-auto mt-4 mobile-flex-column">
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={four} alt="This Company can be established by the joining of at least 2 Institutions"/>
                  </div>
                  <p>Local Transportation Services</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={four} alt="This Company can be established by the joining of at least 2 Institutions"/>
                  </div>
                  <p>Clinical & Medical Management Facilities</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={four} alt="This Company can be established by the joining of at least 2 Institutions"/>
                  </div>
                  <p>Tutoring Services and so on.</p>
              </div>
          </div>
      </div>

  )
}
