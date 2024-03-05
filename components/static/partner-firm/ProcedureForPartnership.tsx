import Image from 'next/image'
import React, { useState } from 'react'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
interface HeroProps {  cityName: string;}
export const ProcedureForPartnership = ({ cityName }: HeroProps) => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (

    <div className='DocumentButtonWise w-80 m-auto' id='ProcedureForPartnership'>
    <div className='flex justify-content-center'>
    <p className='main-para mb-2'>Following is the step-by-step Partnership Firm Registration in { cityName }:</p>
  </div>
  <div className="main flex justify-content-between align-center m-auto mobile-flex-column-reverse">
    <div className='flex-5 text-justify fs-20 p-color-black'>
      <div className={`${active === '1' ? 'active' : 'none'}`}>
        <h3> Step 1: Submit an Application for Registration</h3>
        <p className='mb-0'>
        Along with the specified fees, an application form must be completed with the Registrar of Firms of the State in which the firm is located. All partners or their agents must sign and verify the registration application. The application, which includes the following information, can be mailed or delivered to the Registrar of Firms.
        </p>
        <p className='mb-0'>
        <li>The company’s name.</li>
        <li>The firm’s major place of business.</li>
        <li>The location of any other locations where the corporation does business. </li>
        <li>Each partner’s date of incorporation.</li>
        <li>All of the partners’ names and permanent addresses.</li>
        <li>The company’s lifespan. </li>
        </p>
      </div>
      <div className={`${active === '2' ? 'active' : 'none'}`}>
        <h3> Step 2: Choose a Name for the Partnership Firm</h3>
        <p className='mb-0'>A partnership firm can be given any name. However, certain parameters must be met when choosing a name:</p>
        <p className='mb-0'>The name should not be too close or identical to that of an existing company in the same industry.</p>
        <p className='mb-0'>The name should not include words like emperor, crown, empress, empire, or any other words that indicate government permission or support.</p>
      </div>
      <div className={`${active === '3' ? 'active' : 'none'}`}>
        <h3> Step 3: Registration Certificate</h3>
        <p className='mb-0'>
          If the Registrar approves the registration application and documentation, he will enter the firm into the Register of Firms and issue the Registration Certificate. The Register of Firms contains up-to-date information on all firms, and anybody can use it for a fee.
        </p>
        <p className='mb-0'>
          A completed application form and fees must be sent to the Registrar of Firms in the state where the firm is located. All partners or their agents must sign the application.
        </p>
      </div>
    </div>
    <div className='flex-5'>
      <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
        <div className='d-flex justify-content-between align-items-center gap-2'>
          <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 1: Submit an Application for Registration</div> 
          <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
        </div>
      </button>
      <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
        <div className='d-flex justify-content-between align-items-center gap-2'>
          <Image src={two} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 2: Choose a Name for the Partnership Firm</div> 
          <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
        </div>
      </button>
      <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
        <div className='d-flex justify-content-between align-items-center gap-2'>
          <Image src={three} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 3: Registration Certificate</div> 
          <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
        </div>
      </button>
    </div>
  </div>
</div>
  )
}