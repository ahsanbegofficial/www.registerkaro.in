
import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import howCan from '../../../assets/images/consumer-complaints/how-can.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const HowCanRegis = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }
  return (
    <div className='DocumentButtonWise w-80 m-auto' id='HowCanRegis'>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column-reverse">
      <div className='flex-5'>
          <Image alt="The benefits of private limited company in india and these are Separate Legal Entity, Ease in Raising Funds, Limited Liability, Easy Transferable, Limited Liability and ESOP" className="benefits-img w-100" height={350} loading="lazy" src={howCan} />
          </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>Step 1. Assistance with Notice</h3>
            <p>
              We primarily assist you in drafting a detailed and well-mannered notice to dispatch to the vendor you are seeking relief against. We make sure that all the aspects of the matter are covered within the notice so that it can be a proof of good faith. We dispatch the notice for you and keep track of the response of the vendor in case he aims to resolve the dispute amicably.
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>Step 2. Choose the right forum</h3>
            <p>
              In case the vendor responds in a negative way or does not even respond to the notice, we assist you in proceeding ahead with the process of consumer complaints. Here, the process begins with choosing the right forum for your complaint, which is chosen as per the nature of your complaint and the claimed amount.
            </p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>Step 3. Preparation of Consumer Complaint</h3>
            <p>
              Each of the forums has its own set of formats for the submission of consumer complaints, as per which the complaint is required to be drafted. On the basis of a chosen forum, we will select the format for your complaints and then prepare your complaints as per the same, with details and essentials added to the same.
            </p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>Step 4. Detailed analysis of the case</h3>
            <p>
              Once your matter has been filed with the forum, the case will proceed in the form of trials, which require a detailed analysis of the matter. It is required to understand the strengths of the case and project the weakness of the same to further make a plan of action to present the case before the forum in a strong manner.
            </p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>Step 5. Trial process assistance</h3>
            <p>
              This analysis is further used in the preparation of the documentation and applications to be filed in the court. The process might also include the submission of the evidence. This definitely requires expert assistance in drafting the petitions, applications, documentation, affidavits, evidence, etc.
            </p>
          </div>
        </div>
        <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 1. Assistance with Notice</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 2. Choose the right forum</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 3. Preparation of Consumer Complaint</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 4. Detailed analysis of the case</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 5. Trial process assistance</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
  
}
