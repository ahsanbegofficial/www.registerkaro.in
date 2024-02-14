import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const WhySocietyRegi = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='WhySocietyRegi'>
      <p className='main-para'>Society registration offers you wide range of benefits which brings more ease in the operation of the society. Such range of benefits include</p>
      
      <div className="flex w-100 align-center justify-content-between mobile-flex-column-reverse">
      <div className='flex-6 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1: Legal Status</h3>
            <p>Society upon registration receives the legal status of being a separate entity working in furtherance of certain objective that is different from that of the personal interest of those operating it. Once registration is successful, Society enjoys all the benefits of that of a legal entity and an artificial person.</p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2: Access to funds</h3>
            <p>When society attains legal status in the market, it becomes convenient to access funds and investors as the registration creates authenticity and reliability of the society being original and not a hoax conduct.</p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3: Limited Liability</h3>
            <p>Like many other forms of company registered under the companies Act, the registered society also holds certain level of limited liability when it comes to debt recovery from its operators or employees running the operations.</p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>4: Credibility & Trust</h3>
            <p>Registration of the society leads to creation of trust and reliability in the market which brings the association of people. It is expected that there can be many such organization operating for person dishonest interest, therefore, to segregate the honest societies from the bunch of bogus ones, registration plays a crucial role.</p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>5: Benefits & Tax Exemptions</h3>
            <p>Society, being a legal separate entity operating in the welfare of the people, enjoys wide range of benefits and tax exemptions offered by the government. However, these benefits and exemptions can only be availed if the society is</p>
          </div>
      </div>
        <div className='flex-4'>
          
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={one} alt="pu step 1" loading="lazy" width={30} height={30} /> &nbsp; Legal Status
            </div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} />
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={two} alt="pu step 2" loading="lazy" width={30} height={30} /> &nbsp; Access to funds
            </div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} />
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={three} alt="pu step 3" loading="lazy" width={30} height={30} /> &nbsp; Limited Liability
            </div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} />
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={four} alt="pu step 4" loading="lazy" width={30} height={30} /> &nbsp; Credibility & Trust
            </div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} />
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={five} alt="pu step 4" loading="lazy" width={30} height={30} /> &nbsp; Benefits & Tax Exemptions
            </div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} />
          </button>
        </div>
       
      </div>
    </div>
  )
}
