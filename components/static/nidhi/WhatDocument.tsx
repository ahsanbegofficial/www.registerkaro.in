import Image from 'next/image'
import { useState } from 'react'
import arrow from '../../../assets/images/static/private-reg/HowToRegister/arrow.svg'
import five from '../../../assets/images/static/private-reg/HowToRegister/five.svg'
import four from '../../../assets/images/static/private-reg/HowToRegister/four.svg'
import one from '../../../assets/images/static/private-reg/HowToRegister/one.svg'
import seven from '../../../assets/images/static/private-reg/HowToRegister/seven.svg'
import six from '../../../assets/images/static/private-reg/HowToRegister/six.svg'
import three from '../../../assets/images/static/private-reg/HowToRegister/three.svg'
import two from '../../../assets/images/static/private-reg/HowToRegister/two.svg'

export const WhatDocument = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='WhatDocument'>
      <p className='main-para mb-4'>Following are some annual compliances of a Nidhi Company in India:</p>
      <div className="flex w-100 justify-content-between align-center m-auto mobile-flex-column">
        <div className='flex-4'>
           {/* <button onClick={() => handleActive('8')} className={`btn flex ${active === '8' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2' >
              <Image src={eight} alt=" Select the Company name" loading="lazy" width={30} height={30} /><div className='pe-4'> Board Meetings and Annual General Meetings</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button> */}
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="Form NDH-1" loading="lazy" width={30} height={30} /> <div className='pe-4'> Form NDH-1</div>
              <Image src={arrow} alt="Form NDH-1" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="Form NDH-2" loading="lazy" width={30} height={30} /> <div className='pe-4'> Form NDH-2</div>
              <Image src={arrow} alt="Form NDH-2" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="Form NDH-3 (Half-Yearly Return)" loading="lazy" width={30} height={30} /> <div className='pe-4'> Form NDH-3 (Half-Yearly Return)</div>
              <Image src={arrow} alt="Form NDH-3 (Half-Yearly Return)" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="Form NDH-4" loading="lazy" width={30} height={30} /> <div className='pe-4'> Form NDH-4</div>
              <Image src={arrow} alt="Form NDH-4" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="Form AOC-4" loading="lazy" width={30} height={30} />  <div className='pe-4'> Form AOC-4</div>
              <Image src={arrow} alt="Form AOC-4" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={six} alt="This is for filing an Income Tax Return" loading="lazy" width={30} height={30} /> <div className='pe-4'> ITR- 6</div>
              <Image src={arrow} alt="This is for filing an Income Tax Return" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('7')} className={`btn flex ${active === '7' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={seven} alt="Form MGT-7" loading="lazy" width={30} height={30} /><div className='pe-4'> Form MGT-7</div>
              <Image src={arrow} alt="Form MGT-7" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
        <div className='flex-6 text-justify fs-20 p-color-black'>
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
