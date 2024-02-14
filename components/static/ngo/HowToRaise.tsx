import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import six from '../../../assets/images/pvt-reg/HowToRegister/six.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const HowToRaise = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='HowToRaise'>
      <div className="flex w-100 align-center justify-content-between mobile-flex-column">
      <div className='flex-4'>
        <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={one} alt="pu step 1" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp; Crowdfunding</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
        <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={two} alt="pu step 2" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp; Grants</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
        <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={three} alt="pu step 3" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp; Corporate Partnerships</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
        <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={four} alt="pu step 4" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp; Fundraising Events</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
        <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={five} alt="pu step 5" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp; Individual Appeals</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
        <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={six} alt="pu step 6" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp; Social Media Outreach</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
      </div>

      
        <div className='flex-6 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1: Crowdfunding</h3>
            <p>Solicit small donations from a large audience through online platforms.</p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2: Grants</h3>
            <p>Apply for grants from government agencies, private foundations, and international organizations.</p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3: Corporate Partnerships</h3>
            <p>Partner with companies sharing your values for sponsorship and support.</p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>4: Fundraising Events</h3>
            <p>Organize events like charity walks, concerts, auctions, or online campaigns to attract donors.</p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>5: Individual Appeals</h3>
            <p>Appeal to individuals through online donation portals or direct outreach.</p>
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>6: Social Media Outreach</h3>
            <p>Leverage social media platforms to create awareness and reach potential donors.</p>
          </div>
        
        </div>
      </div>
    </div>
  )
}