import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import six from '../../../assets/images/pvt-reg/HowToRegister/six.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const WhyNGO = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='WhyNGO'>
      <p>Trust registration is imperative for the following reasons:</p>
      <div className="flex w-100 align-center justify-content-between mobile-flex-column">
      <div className='flex-4'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="pu step 2" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Regulatory Compliance</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="pu step 3" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Advancement of Non-Commercial Activities</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="pu step 4" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Income Tax Benefits</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="pu step 5" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Public Interest</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="pu step 6" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Legal Authorization for Business Operations</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={six} alt="pu step 6" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Contribution to Social Sectors</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
        </div>

        <div className='flex-6 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1. Regulatory Compliance:</h3>
            <p>Trust registration ensures the proper regulation of trust activities, promoting adherence to laws and regulations governing their operation.</p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2. Advancement of Non-Commercial Activities:</h3>
            <p>Trusts aspire to advance non-commercial activities in fields such as arts, science, education, and the environment, thereby contributing to the betterment of society.</p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3. Income Tax Benefits:</h3>
            <p>Registered trusts can avail themselves of income tax benefits under sections 12A and 80G. This provision encourages donations and support for the initiatives undertaken by trusts.</p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>4. Public Interest:</h3>
            <p>Public trusts, designed to serve the general public, are required to register to ensure that their activities align with the best interests of the public.</p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>5. Legal Authorization for Business Operations:</h3>
            <p>Trust registration provides a legal license for conducting trust-related businesses, ensuring operations are carried out within the established legal framework.</p>
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>6. Contribution to Social Sectors:</h3>
            <p>Trusts play a pivotal role in the development of sectors such as education, healthcare, social welfare, and the environment, contributing to the overall well-being of society.</p>
          </div>
        </div>
      </div>
      <p className='main-para'>By undergoing registration, trusts not only fulfill their intended objectives but also gain legal recognition, opening avenues for government benefits and opportunities.</p>
    </div>
  )
}