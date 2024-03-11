
import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import six from '../../../assets/images/pvt-reg/HowToRegister/six.svg'
import seven from '../../../assets/images/pvt-reg/HowToRegister/seven.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

interface HeroProps {  cityName: string;}
export const MandatoryCompilance = ({ cityName }: HeroProps)   => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }


  return (
    <div className='DocumentButtonWise w-80 m-auto' id='MandatoryCompilance'>
        <div className='flex justify-content-center'>
      </div>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column-reverse">
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1: Essential Surveillance Component:</h3>
            
            <p className='mt-0'> Market surveillance plays a pivotal role in the BIS CRS Certification Scheme, serving as a crucial mechanism to assess the quality of products available in the market. This robust surveillance framework is instrumental in verifying the adherence of certified products to the applicable standards. Moreover, these surveillance activities serve as valuable inputs, offering opportunities for enhancement to manufacturers.
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2: Initiation of Market Surveillance:</h3>
            <p className='mb-0'> BIS is currently in the process of initiating market surveillance, following the provisions outlined in sub-para 6 of para 3 of Scheme II of Schedule II BIS (Conformity Assessment) Regulations, 2018.
            </p>
            
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3: Licensee Obligations and Surveillance Cost:</h3>
            <p className='mb-0'> As per the conditions stipulated in Regulation 6 of BIS (Conformity Assessment Regulations), 2018, all licensees are mandated to furnish details of their distributors, retailers, consignees, or dealers. Furthermore, licensees bear the responsibility of covering the surveillance costs. To facilitate effective surveillance, licensees are required to deposit the specified surveillance cost.
            </p>
            
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>4: Staged Implementation of Surveillance:</h3>
            <p className='mb-0'> The implementation of market surveillance is planned in stages. Letters or emails are being dispatched to licensees, urging them to provide necessary details and deposit fees with BIS.
            </p>
            
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>5: Development of Online System:</h3>
            <p className='mb-0'> A systematic online system is currently under development for the submission of consignee information and online fee deposits. Until the online system is operational, details may be submitted via email, and fees may be remitted through DD or Demand Draft.
            </p>
            
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>6: Timely Submission Requirements: </h3>
            <p className='mb-0'>Licensees are requested to submit information regarding distributors, dealers, consignees, or retailers via email, adhering to the specified format. It is imperative to deposit the surveillance cost within 10 days and 15 days, respectively, upon the receipt of the email or letter by DD.
            </p>
            
          </div>
          <div className={`${active === '7' ? 'active' : 'none'}`}>
            <h3>7: Consequences of Non-Compliance: </h3>
            <p className='mb-0'>Failure to submit details and deposit fees within the stipulated timeframe will be considered a violation of the conditions of BIS CRS Certification or the License to apply or use the BIS CRS Standard Mark. Subsequent actions, including suspension or cancellation of the license, may be initiated in accordance with the provisions outlined in BIS (Conformity Assessment) Regulations, 2018.
            </p>
            
          </div>
        </div>
        <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Step 1: Essential Surveillance Component:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 2: Initiation of Market Surveillance:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 3: Licensee Obligations and Surveillance Cost:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 4: Staged Implementation of Surveillance:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 5: Development of Online System:</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={six} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 6: Timely Submission Requirements: </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
          <button onClick={() => handleActive('7')} className={`btn flex ${active === '7' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={seven} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Step 7: Consequences of Non-Compliance: </div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
  
}
