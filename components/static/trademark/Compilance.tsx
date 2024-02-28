import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/static/private-reg/HowToRegister/one.svg'
import two from '../../../assets/images/static/private-reg/HowToRegister/two.svg'
import three from '../../../assets/images/static/private-reg/HowToRegister/three.svg'
import four from '../../../assets/images/static/private-reg/HowToRegister/four.svg'
import five from '../../../assets/images/static/private-reg/HowToRegister/five.svg'
import arrow from '../../../assets/images/static/private-reg/HowToRegister/arrow.svg'
import applyForTrade from '../../../assets/images/static/trademark-reg/applyForTrade.svg'

interface HeroProps {
  cityName: string;
}

export const Compilance = ({ cityName }: HeroProps) => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='Compilance'>
      < div className='flex-7'>
          <Image alt="Apply for Trademark Registration Online with RegisterKaro" className="DocumentRequired-img w-100" loading="lazy" src={applyForTrade} height={530}/>
          <p className='main-para mb-2'>Following is the detailed step by step procedure for Trademark Registration Online in {cityName}:</p>
        </div>
      <div className="flex w-100 align-center justify-content-between mobile-flex-column">
      <div className='flex-4'>
         <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="Trademark Search" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 1: Trademark Search:</div> 
              <Image src={arrow} alt="Trademark Search" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
         <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="Application Filing & Submission" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 2: Application Filing & Submission:</div> 
              <Image src={arrow} alt="Application Filing & Submission" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
         <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="Examination of Trademark Application" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 3: Examination of Trademark Application:</div> 
              <Image src={arrow} alt="Examination of Trademark Application" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
         <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="Hearing for trademark" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 4: Hearing:</div> 
              <Image src={arrow} alt="Hearing for trademark" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
         <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="Issuance of Trademark Registration Certificate" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 5: Issuance of Trademark Registration Certificate:</div> 
              <Image src={arrow} alt="Issuance of Trademark Registration Certificate" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
      </div>

      <div className='flex-6 text-justify fs-20 p-color-black'>
        <div className={`${active === '1' ? 'active' : 'none'}`}>
          <h3>Step 1: Trademark Search:</h3>
          <p>Our experts at RegisterKaro checks the Trademark availability on behalf of their clients to ensure that their desired name or design hasn’t already been taken or is not too identical to an already registered Trademark.</p>
        </div>
        <div className={`${active === '2' ? 'active' : 'none'}`}>
          <h3>Step 2: Application Filing & Submission:</h3>
          <p>Once the above step is completed successfully, then our experts will file the Trademark application on your behalf and you can immediately start using the TM symbol. We will provide you with the TM Application Number. We file the application either online or offline at the Trademark Department Office. A Trademark can be filed only by a registered agent or lawyer.</p>
        </div>
        <div className={`${active === '3' ? 'active' : 'none'}`}>
          <h3>Step 3: Examination of Trademark Application:</h3>
          <p>Once the application is completed, then your Trademark application will be examined by the Trademark office in the same class or the name is considered offensive, hurting religious sentiments. If no objection is raised, then the Trademark Registrar will publish an advertisement in the Trademark Journal. If no opposition is filed by any party within a period of 4 months then the Trademark should be registered within 6 months. During this period, our lawyers constantly provide you with updates regarding your application status. You will need to pay an extra fee in case of such objections.</p>
        </div>
        <div className={`${active === '4' ? 'active' : 'none'}`}>
          <h3>Step 4: Hearing:</h3>
          <p>If the objection has been filed on your Trademark & the opposition doesn’t agree with your response, then a hearing is held. We appoint lawyers for extra charges to take up your case thoroughly in front of the Registrar.</p>
        </div>
        <div className={`${active === '5' ? 'active' : 'none'}`}>
          <h3>Step 5: Issuance of Trademark Registration Certificate:</h3>
          <p>In cases where no objections/oppositions are raised, the Trademark Registration Certificate will be prepared & issued to the actual owner of the Trademark. At this point, the ® symbol can be added to the Trademark or Logo.</p>
        </div>
       
      </div>
      </div>
     
    </div>
  )
}