import Image from 'next/image'
import { useState } from 'react'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import six from '../../../assets/images/pvt-reg/HowToRegister/six.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'

export const HowToRegister = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='How'>
      <p className='main-para'>Following is the step-by-step procedure for LLP Registration in India</p>
      <div className="flex w-100 align-center justify-content-between mobile-flex-column-reverse">
        <div className='flex-6 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1: Obtain DSC</h3>
            <p>We already know that the documents for LLP Registration are filed online & are required to be digitally signed. So, before starting the LLP Registration process, you must apply for the Digital Signature Certificate (DSC) of the designated Partners of the proposed LLP. Hence, the designated Partner must obtain their DSCs from the Government-recognized certifying agencies.</p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2: Get DIN</h3>
            <p >After obtaining DSC, then you need to apply for DPIN of all the proposed Partners or those wanting to be designated Partner of LLP. The application for the allotment of DIN has to be made in <strong>Form DIR-3</strong></p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3: Application for Name su Approval</h3>
            <p><strong>LLP-RUN</strong> application form is for the name reservation of the Limited Liability Partnership. But before applying for the name reservation, it is necessary to use the free name search facility on MCA Portal. The system will provide the list of closely resembling names of existing companies/LLPs based on the search criteria. This will definitely help you choose names not identical to already registered names. The Registrar will approve the proposed name only if the name is not undesirable in the Central Government’s opinion & doesn’t resemble any existing Partnership Firm or an LLP or a body corporate or a Trademark.</p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>4: Filing FiLLiP Form</h3>
            <p>For the LLP Registration in India, you need to file a FiLLiP Form and submit it to the Registrar who has jurisdiction over the State in which the registered office of the LLP is situated. The Form will be an integrated form. This Form is also used for allotment of DPIN, if a person who is to be appointed as a designated partner doesn’t have a DPIN or DIN. The application for reservation may be made via FiLLiP too. In case the name is approved, the name shall be filled as the proposed name of the Limited Liability Partnership.</p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>5: File LLP Agreement </h3>
            <p>This Agreement governs the mutual rights & duties amongst the Partners & also between the LLP & its Partners. LLP Agreement must be filed in Form-3 online, Form-3 for the LLP Agreement must be filed within 30 days of the Incorporation. This Agreement has to be printed on stamp paper. The value of Stamp Paper is different for every state.</p>
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>6: Apply for PAN, TAN, and Open a Bank Account</h3>
            <p>Once you get the Certificate of Incorporation we will apply for the PAN, TAN and Bank Account for your Limited Liability Partnership. </p>
          </div>
        </div>
        <div className='flex-4'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2' >
              <Image src={one} alt="pu step 1" loading="lazy" width={30} height={30} /><div className='pe-4'>Obtain DSC</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2' >
              <Image src={two} alt="pu step 1" loading="lazy" width={30} height={30} /><div className='pe-4'>Get DIN</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2' >
              <Image src={three} alt="pu step 1" loading="lazy" width={30} height={30} /><div className='pe-4'>Application for Name su Approval</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2' >
              <Image src={four} alt="pu step 1" loading="lazy" width={30} height={30} /><div className='pe-4'>Filing FiLLiP Form</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2' >
              <Image src={five} alt="pu step 1" loading="lazy" width={30} height={30} /><div className='pe-4'>File LLP Agreement </div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2' >
              <Image src={six} alt="pu step 1" loading="lazy" width={30} height={30} /><div className='pe-4'>Apply for PAN, TAN, and Open a Bank Account</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
