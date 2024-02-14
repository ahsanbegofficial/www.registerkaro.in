import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import six from '../../../assets/images/pvt-reg/HowToRegister/six.svg'
import seven from '../../../assets/images/pvt-reg/HowToRegister/seven.svg'
import eight from '../../../assets/images/pvt-reg/HowToRegister/eight.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'
import DIN from '../../../assets/images/pvt-reg/document/DIN.png'
import DSC from '../../../assets/images/pvt-reg/document/DSC.svg'
import PAN from '../../../assets/images/pvt-reg/document/PAN.png'
import TAN from '../../../assets/images/pvt-reg/document/TAN.webp'
import MOA from '../../../assets/images/pvt-reg/document/MOA.webp'
import AOA from '../../../assets/images/pvt-reg/document/AOA.webp'
import COI from '../../../assets/images/pvt-reg/document/COI.webp'
import MD from '../../../assets/images/pvt-reg/document/MD.png'

export const WhatDocument = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='WhatDocument w-80 m-auto' id='WhatDocuments'>
      <p className='main-para mb-0'>Following are some annual compliances of a Nidhi Company in India:</p>
      <div className="main flex justify-content-between align-center m-auto">
        <div className='first'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={one} alt="pu step 1" loading="lazy" width={30} height={30} /> &nbsp; Form NDH-1
            </div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} />
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={two} alt="pu step 2" loading="lazy" width={30} height={30} /> &nbsp; Form NDH-2
            </div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} />
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={three} alt="pu step 3" loading="lazy" width={30} height={30} /> &nbsp; Form NDH-3 (Half-Yearly Return)
            </div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} />
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={four} alt="pu step 4" loading="lazy" width={30} height={30} /> &nbsp; Form NDH-4
            </div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} />
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={five} alt="pu step 5" loading="lazy" width={30} height={30} /> &nbsp; Form AOC-4
            </div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} />
          </button>
          <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={six} alt="pu step 6" loading="lazy" width={30} height={30} /> &nbsp; ITR- 6
            </div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} />
          </button>
          <button onClick={() => handleActive('7')} className={`btn flex ${active === '7' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={seven} alt="pu step 7" loading="lazy" width={30} height={30} /> &nbsp; Form MGT-7
            </div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} />
          </button>
        </div>
        <div className='second text-justify fs-20'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1: Form NDH-1</h3>
            <p>This form contains all the information regarding members, loans, deposits, etc., for the complete Financial Year e-Form GNL-2 is used for the submission of the documents with the Registrar.</p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2: Form NDH-2</h3>
            <p>The Company fails to add at least 200 members within 1 year of its incorporation</p>
            <p>Failure to maintain the NOF to deposit ratio of 1:20</p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3: Form NDH-3 (Half-Yearly Return)</h3>
            <p>This form is to be filed with the Registrar of Companies</p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>4: Form NDH-4</h3>
            <p>This form is used to file an application for a declaration as Nidhi Company & status updates.</p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>5: Form AOC-4</h3>
            <p>For filing financial documents & other supporting documents to the RoC.</p>
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>6: ITR- 6</h3>
            <p> This is for filing an Income Tax Return.</p>
          </div>
          <div className={`${active === '7' ? 'active' : 'none'}`}>
            <h3>7: Form MGT-7</h3>
            <p>This form is used for filing an Annual Return.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
