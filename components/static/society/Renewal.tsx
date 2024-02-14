import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const Renewal = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='Renewal'>
      <p className='main-para'>For renewing the certificate of Society registration, follow the give steps</p>
      <div className="flex w-100 align-center justify-content-between mobile-flex-column">
        <div className='flex-4'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={one} alt="pu step 1" loading="lazy" width={30} height={30} /> &nbsp; Step 1
              </div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} />
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={two} alt="pu step 2" loading="lazy" width={30} height={30} /> &nbsp; Step 2
            </div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} />
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={three} alt="pu step 3" loading="lazy" width={30} height={30} /> &nbsp; Step 3
            </div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} />
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={four} alt="pu step 4" loading="lazy" width={30} height={30} /> &nbsp; Step 4
            </div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} />
          </button>
        </div>
        <div className='flex-6 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>Step 1</h3>
            <p>Prepare the application for the renewal, and fill in the form with details like personal information.</p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>Step 2</h3>
            <p>The renewal process is only possible if the registrar had not dispensed the certificate due to destruction, loss or any other relevant reason</p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>Step 3</h3>
            <p>Attach the documents with the application such as Account Audit, Financial Documents, affidavits. Member details, society registration certificate, etc</p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>Step 4</h3>
            <p>Submit the application and wait for the verification. Once verified, your will receive the renewal of the certificate for Society Registration.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
