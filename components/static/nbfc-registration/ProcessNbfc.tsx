import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/static/private-reg/HowToRegister/one.svg'
import two from '../../../assets/images/static/private-reg/HowToRegister/two.svg'
import three from '../../../assets/images/static/private-reg/HowToRegister/three.svg'
import four from '../../../assets/images/static/private-reg/HowToRegister/four.svg'
import five from '../../../assets/images/static/private-reg/HowToRegister/five.svg'
import arrow from '../../../assets/images/static/private-reg/HowToRegister/arrow.svg'
import benefits from '../../../assets/images/static/trademark-reg/Benefits.svg';

interface HeroProps {
  cityName: string;
}

export const ProcessNbfc = ({ cityName }: HeroProps) => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }
  return (
    <div className='DocumentButtonWise w-80 m-auto' id='ProcessNbfc'>
      <div className="flex w-100 align-center justify-content-between mobile-flex-column">
        <div className='flex-4 w-100'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="Gives Exclusive Rights" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 1:</div>
              <Image src={arrow} alt="Gives Exclusive Rights" loading="lazy" width={30} height={30} className='position-absolute end-0' />
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="Provides Unique Identity" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 2:</div>
              <Image src={arrow} alt="Provides Unique Identity" loading="lazy" width={30} height={30} className='position-absolute end-0' />
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="It Protects, Builds Commercial Goodwill" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 3:</div>
              <Image src={arrow} alt="It Protects, Builds Commercial Goodwill" loading="lazy" width={30} height={30} className='position-absolute end-0' />
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="Legal Protection" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 4:</div>
              <Image src={arrow} alt="Legal Protection" loading="lazy" width={30} height={30} className='position-absolute end-0' />
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="Creation of an Asset" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 5:</div>
              <Image src={arrow} alt="Creation of an Asset" loading="lazy" width={30} height={30} className='position-absolute end-0' />
            </div>
          </button>
        </div>
        <div className='flex-6 w-100 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>Step 1:</h3>
            <p> The applicant may visit the RBI’s secured website for online application of NBFC Registration. The applicant need not to login into the COSMOS application at this stage, as the user ID is certainly not required. </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>Step 2:</h3>
            <p> You may now check on “CLICK” visible on the login page (of COSMOS Application). Download the suitable Form [NBFC or SC/RC] available on the side in the Excel Application. (i.e. from the above website, key in the data and upload the application form. </p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>Step 3:</h3>
            <p> Now you must fill the form with correct information such as regional office name and address in the C-8 column of annexure for Identification Particulars. This will assist you in obtaining the CARN or Company Application Reference Number for COR Application filed. </p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>Step 4:</h3>
            <p> Now you must also submit the Hard copy of the form filled with the CARN Details and other supporting documents to the regional office address. </p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>Step 5:</h3>
            <p> The application will be subject to scrutiny and then will be granted the approval. Once the approval is being given, you will receive the certificate of incorporation.</p>
          </div>

        </div>
      </div>

    </div>
  )
}