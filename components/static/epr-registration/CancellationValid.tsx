
import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'

import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'
interface HeroProps {cityName: string;}
export const CancellationValid =({ cityName }: HeroProps)   => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }
  return (
    <div className='DocumentButtonWise w-80 m-auto' id='CancellationValid'>
        <div className='flex justify-content-center'>
        <p className='main-para mb-2'>The cancellation, validity and renewal of the service involved in EPR registration are as follows:</p>
      </div>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column-reverse">
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1: Cancellation:</h3>
            <p className='mb-0'>The CPCB or the SPCBs may cancel the EPR registration granted to the applicant if it is found that the applicant has violated any of the terms and conditions of the EPR registration or has furnished false or misleading information or documents or has concealed any material fact or information. The CPCB or the SPCBs may also cancel the EPR registration granted to the applicant if it is found that the applicant has failed to achieve the EPR targets or has failed to comply with the E-Waste (Management) Rules, 2016 or the Plastic Waste Management Rules, 2016 or the guidelines issued by the CPCB or the SPCBs. The CPCB or the SPCBs may cancel the EPR registration after giving a reasonable opportunity of being heard to the applicant and after recording the reasons for such action in writing. The CPCB or the SPCBs may also impose a penalty or take any other legal action against the applicant for such violation or misrepresentation or concealment.</p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2: Validity:</h3>
            <p className='mb-0'>The EPR registration granted to the applicant is valid for a period of one year for plastic packaging or five years for EEE from the date of issue or as specified by the CPCB or the SPCBs. The validity of the EPR registration is subject to the satisfactory performance and compliance of the applicant with respect to the EPR plan, the collection mechanism, the channelization mechanism, the documentation mechanism, the record keeping mechanism, the reporting mechanism and the verification mechanism.</p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3: Renewal:</h3>
            <p className='mb-0'>The applicant may apply for the renewal of the EPR registration at least three months before the expiry of the validity period of the EPR registration. The applicant has to submit the application for renewal along with the relevant documents and information and the processing fee to the CPCB or the SPCBs. The CPCB or the SPCBs may renew the EPR registration after appraising the application and the documents and information submitted by the applicant and after ensuring that the applicant has achieved the EPR targets and has complied with the E-Waste (Management) Rules, 2016 or the Plastic Waste Management Rules, 2016 and the guidelines issued by the CPCB or the SPCBs. The CPCB or the SPCBs may renew the EPR registration for a further period of one year for plastic packaging or five years for EEE or as specified by the CPCB or the SPCBs.</p>
          </div>
        </div>
        <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Cancellation: </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Validity: </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Renewal: </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
  
}
