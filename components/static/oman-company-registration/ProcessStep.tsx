
import Image from 'next/image'
import { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import six from '../../../assets/images/pvt-reg/HowToRegister/six.svg'


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
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 1: Choose Company Structure  </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 2: Select the company name </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 3: Submit the documents </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 4: Bank Account Opening </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 5: Register the Business </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={six} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 6: Company Seal </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
         
        </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>Step 1: Choose Company Structure </h3>
            <p className='mb-0'>Selecting the right kind of company is crucial when registering one in Oman. There are multiple structures available in Oman jurisdiction such as Branch office, Sole proprietorship, Commercial agency, Joint-stock company, Representative office, Limited liability company, etc.
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>Step 2: Select the company name</h3>
            <p className='mb-0'>A trade name needs to be distinct and associated with the company. Choose a name, then send the application to the Ministry of Industry and Commerce. Since your company name will serve as a brand for your enterprise, it is important to choose it carefully. But, there are some guidelines you must adhere to while choosing a name for your company.
            </p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>Step 3: Submit the documents</h3>
            <p className='mb-0'>This is the crucial step in the incorporation procedure, when all required paperwork must be filed. The necessary fundamental documents must be prepared and submitted such as Certificate of Affiliation with the Chamber of Commerce and Industry Memorandum and Articles of Association, Passports and Visas for Shareholders, completed and submitted the company registration form, the shareholders' identity cardInitial Deposit Certificate, and Certificate of Tax Registration, etc.
            </p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>Step 4: Bank Account Opening</h3>
            <p className='mb-0'>After the paperwork is turned in, the first incorporation fee must be deposited into a capital account after opening the bank account in the Oman Mainland.
            </p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>Step 5: Register the Business</h3>
            <p className='mb-0'> To comply with the business laws and regulations that apply to corporations operating in Oman, register with the Oman Chamber of Commerce and Industry (OCCI). The steps entail submitting the necessities such as Municipality Approval, Share Capital Certificate, and Legalised Opening Forms
            </p>
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>Step 6: Company Seal</h3>
            <p className='mb-0'> In Oman, a company seal issued by the company's authorized signatory is mandatory for all businesses. A certificate of initial capital deposit, an authorized signatory form, and an affiliation certificate from the Chamber of Commerce and Industry must first be obtained and submitted. Tetra Consultants will help you design and order a company seal from a third-party supplier in addition to helping you complete these duties.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
  
}
