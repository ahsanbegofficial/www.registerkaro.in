import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const HowToRegister = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='HowToRegister'>
      <p className='main-para'>RegisterKaro brings the expert assistance to your door to turn our dream into a living reality. Our service toolkit has been of service to our longstanding clients for many reasons few of which could be counted on</p>
      
      <div className="flex w-100 align-center justify-content-between mobile-flex-column-reverse">
      <div className='flex-6 text-justify fs-20 p-color-black'>
          
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1: Expert Advisory</h3>
            <p>RegisterKaro primarily assigns you an expert advisor for the Society registration process who will guide from the beginning to the end till you obtain the certificate of incorporation. The Expert assist you in designing the plan of action for the entire process.</p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2: Collection of Documents</h3>
            <p>Next, RegisterKaro helps you in preparing and drafting all the required documents such as Memorandum of Association, Rules and Regulations or By-laws and further signed by all the members which is an important requirement in the society registration process.</p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3: Application Filing</h3>
            <p>Once all the documentation are drafting and prepared for filing, now RegisterKaro helps you in filing the application for Society Registration along with step-by-step consultation from our expert Advisor. We make sure that there is a consistent follow up on your application status. In case of rejected application, we also assist you in refiling of the same till you get the end results.</p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>4: Registration Certificate</h3>
            <p>Once the department examine and approve your application, your Registration Certificate is Issued. The whole process takes approx 30-90 days (varies state to state as per their working process)</p>
          </div>
      </div>
        <div className='flex-4'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="pu step 1" loading="lazy" width={30} height={30} /> <div className='pe-4'>Expert Advisory </div> 
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="pu step 2" loading="lazy" width={30} height={30} /> <div className='pe-4'>Collection of Documents </div> 
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="pu step 3" loading="lazy" width={30} height={30} /> <div className='pe-4'>Application Filing </div> 
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="pu step 4" loading="lazy" width={30} height={30} /> <div className='pe-4'>Registration Certificate </div> 
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
       
      </div>
    </div>
  )
}
