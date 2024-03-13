
import Image from 'next/image'
import { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import six from '../../../assets/images/pvt-reg/HowToRegister/six.svg'
import seven from '../../../assets/images/pvt-reg/HowToRegister/seven.svg'


import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const ProcessStep = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }
  return (
    <div className='DocumentButtonWise w-80 m-auto' id='ProcessStep'>
        <div className='flex justify-content-center'>
        <p className='main-para mb-2'>You may follow the given step by step instructions for Company Registration in Oman:</p>
      </div>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
      <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 1: Type of Company</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 2: Company Name</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 3: Company Operations</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 4: Shall know about Your Obligations & Duties</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 5: Consent from Company’s Members</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={six} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 6: Make Registration of the Company</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('7')} className={`btn flex ${active === '7' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={seven} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 7: Post Registration</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
         
        </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>Step 1: Type of Company</h3>
            <p className='mb-0'> Decide if a company meets your needs or if you should consider a different business structure. Business.gov.au offers a helpful 'Help me decide' tool to determine the best business structure for you and the necessary registrations. A company is a separate legal entity allowing you to operate nationwide with benefits like corporate tax rates and limited liability. Registering a company is distinct from registering a business name. Explore your business structure for more details. Different types of companies can be registered, such as not-for-profit organizations, registrable Australian bodies, special purpose companies, or corporate collective investment vehicles (CCIV).
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>Step 2: Company Name</h3>
            <p className='mb-2'>When selecting a company name, certain factors must be taken into consideration. The chosen name must not be the same as an existing one. Use our name availability search tool to check if the desired name is available. Before May 2012, it was possible for businesses with the same name to coexist if they were in different locations. This is no longer allowed under ASIC's national register. Approval from a government minister is required to use certain words like 'bank', 'trust', 'Royal', or 'Incorporated'. </p>
            <p className='mb-0'>Misleading words related to government associations or organizations should not be used. If a name is deemed offensive or implies illegal activity, it may be rejected. Explore company name availability and restricted terms for more information. To check availability without committing, you can request to reserve a name with Form 410. If approved, the name will be held for two months, with the option to extend by reapplying. Limited timeframes are imposed to avoid hindering others from using the name for business. Note that similar trademarks or names could lead to legal action, so it's vital to consider potential conflicts. Visit the IP Australia website for further details.
            </p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>Step 3: Company Operations</h3>
            <p className='mb-0'>Before registering, you must decide on how your company will be governed? You can choose replaceable rules, your own constitution, or a mix of both. Replaceable rules are basic rules in the Corporations Act for managing your company. If a company opts out of having a constitution, they can use replaceable rules instead. This eliminates the need for a written constitution and the cost of updating it with law changes. Companies can also choose to have a written constitution and must keep a copy with their records. A proprietary company with only one officeholder is exempt from replaceable rules and constitutions, but once another director/member is appointed, replaceable rules come into effect. A proprietary company must have no more than 50 non-employee shareholders and must be limited by shares or an unlimited company with share capital. They cannot engage in activities requiring disclosure to investors and may only offer shares to company members, employees, or subsidiaries.
            </p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>Step 4: Shall know about Your Obligations & Duties</h3>
            <p className='mb-0'> If you hold a position in a company, you must comply with the regulations outlined in the Corporations Act. This involves fulfilling legal duties by ensuring company information is current, managing records, paying necessary fees, and overseeing the company's compliance with the Act. Directors are accountable for ensuring the company follows the regulations. Check with your company and the law for further details. By law, directors must obtain a director identification number (director ID), which is unique to them permanently. Visit our Director identification number page for additional information.
            </p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>Step 5: Consent from Company’s Members</h3>
            <p className='mb-0'> Prior to appointment, written consent from individuals filling roles like Director and Secretary (both over 18) is required, with every company needing at least one Member. For proprietary companies, at least one Director and Secretary must normally live in Australia, while for public companies, two Directors must reside in Australia. If the registered office is not the company's own, written permission from the owner is essential. Keeping written consents on record and establishing a member register are mandatory requirements.
            </p>
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>Step 6: Make Registration of the Company</h3>
            <p className='mb-0'> The Australian Government's Business Registration Service (BRS) allows for company registration, conveniently combining various business and tax registrations. Opting for a private service provider (PSP) like an accountant or solicitor can offer online registration services with additional fees. Learn more about PSPs. To register certain company types online, specific exceptions apply, such as companies with unlimited liability or individual share values exceeding four decimal places. If your company falls under any of these exceptions, you must request registration via paper and submit relevant details for consideration.
            </p>
          </div>
          <div className={`${active === '7' ? 'active' : 'none'}`}>
            <h3>Step 7: Post Registration</h3>
            <p className='mb-0'> Once your company is officially registered, ensure that the company's name is visible at all business locations, the ACN/ABN is included on all published documents, and the company's information remains current.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
  
}
