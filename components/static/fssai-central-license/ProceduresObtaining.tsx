
import Image from 'next/image'
import { useState } from 'react'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'

interface HeroProps { cityName: string}
export const ProceduresObtaining = ({ cityName }: HeroProps) => {
  const [active, setActive] = useState('1')
  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='ProceduresObtaining'>
        <div className='flex justify-content-center'>
        <p className='main-para mb-2'>In summary, securing a BIS Certificate offers a myriad of benefits, including:</p>
      </div>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
      <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 1: Application Filing Via Form B</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 2: Applicant Scrutiny by FSSAI Officials</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 3: On-Site Inspection by FSSAI’s Officials of the Business Place</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 4: Approval of Application and Grant of the License</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 5: Commencement of Business Operations</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1: Application Filing Via Form B</h3>
            <p className='mb-0'>Initiate the process by submitting Form B to the licensing authority. It is crucial to adhere to the basic turnover criteria during the application filing.
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2: Applicant Scrutiny by FSSAI Officials</h3>
            <p className='mb-0'>The submitted application, along with the required documents, undergoes meticulous scrutiny by FSSAI officials. This step ensures the completeness and accuracy of the provided information.
            </p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3: On-Site Inspection by FSSAI’s Officials of the Business Place</h3>
            <p className='mb-0'>FSSAI conducts an on-site inspection of the business place. Designated officials evaluate the level of compliance with FSSAI regulations. Non-compliance may jeopardize the application status.
            </p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>4: Approval of Application and Grant of the License</h3>
            <p className='mb-0'>Upon approval by the licensing authority, the application proceeds to the next stage. The central FSSAI license is granted, and the certificate is issued to the licensee. The entire process typically takes a few days.
            </p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>5: Commencement of Business Operations</h3>
            <p className='mb-0'>With the obtained FSSAI Central License, the business owner is authorized to commence full-scale operations. This certification validates the business’s compliance with food safety standards and allows for seamless participation in the food industry
            </p>
          </div>
        </div>
      </div>
    </div>
  )
  
}
