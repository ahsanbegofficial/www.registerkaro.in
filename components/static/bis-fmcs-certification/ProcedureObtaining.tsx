
import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import six from '../../../assets/images/pvt-reg/HowToRegister/six.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'


interface HeroProps { cityName: string;}
export const ProcedureObtaining = ({ cityName }: HeroProps)  => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }
  return (
    <div className='DocumentButtonWise w-80 m-auto' id='ProcedureObtaining'>
        <div className='flex justify-content-center'>
        <p className='main-para mb-2'>Acquiring BIS FMCS Certification involves a systematic process that can be outlined in the following steps:</p>
      </div>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column mt-4">
      <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 1: Documentation and Filing:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 2: Verification:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 3: Audit of the Factory Premises:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 4: Testing of the Product Sample:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 5: Issuance of License:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={six} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 6: Indemnity Bond:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>Step 1: Documentation and Filing:</h3>
            <p className='mb-0'>
             Initially, our experts will compile all necessary documents. The application, along with the required documents, will be submitted online to BIS. Simultaneously, a hardcopy of the application will be sent to the FMCD Department.
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>Step 2: Verification:</h3>
            <p className='mb-0'>The BIS Authority will undertake a thorough verification of the submitted application. Any missing or incomplete documents, test equipment, or other requirements will be communicated via email. If the application is deemed satisfactory, it will be recorded.
            </p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>Step 3: Audit of the Factory Premises:</h3>
            <p className='mb-0'>Subsequent to the verification, a BIS Officer will conduct an on-site inspection of the factory premises on an agreed-upon date. This inspection encompasses a review of infrastructure, manufacturing processes, and product testing within the in-house lab. Additionally, product samples will be collected and sent for testing to an independent lab.
            </p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>Step 4: Testing of the Product Sample:</h3>
            <p className='mb-0'>The collected product sample will be sent to a BIS-recognized lab for testing. The associated testing fee will be borne by the applicant.
            </p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>Step 5: Issuance of License:</h3>
            <p className='mb-0'>Upon satisfaction with the inspection and test reports, the applicant is required to pay the License fee and minimum marking fee. Following this, BIS will issue the License.
            </p>
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>Step 6: Indemnity Bond:</h3>
            <p className='mb-0'>Following the grant of the License, the applicant will sign an Indemnity Bond and provide a $10,000 US Dollar Performance Bank Guarantee to BIS. Failure to submit the Performance Bank Guarantee may result in the revocation of the License by BIS without prior notice.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
  
}
