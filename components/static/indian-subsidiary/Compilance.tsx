import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import six from '../../../assets/images/pvt-reg/HowToRegister/six.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const Compilance = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='Compilance'>
      <p>Ensuring the establishment of a legally sound and valid Indian subsidiary company necessitates strict adherence to specific regulatory requirements, including:</p>
      <div className="flex w-100 align-center justify-content-between mobile-flex-column">
      <div className='flex-4'>
        <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={one} alt="pu step 2" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Foreign Exchange Management Act (FEMA)</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
        <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={two} alt="pu step 3" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Companies Act, 2013</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
        <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={three} alt="pu step 4" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Reserve Bank of India (RBI) Compliances</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
        <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={four} alt="pu step 5" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Income Tax Act, 1961</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
        <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={five} alt="pu step 6" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Annual Returns</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
        <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
          <div className='d-flex justify-content-between align-items-center gap-2'>
            <Image src={six} alt="pu step 6" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;SEBI (Listing Obligations and Disclosure Regulations)</div>
            <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
          </div>
        </button>
      </div>

      <div className='flex-6 text-justify fs-20 p-color-black'>
        <div className={`${active === '1' ? 'active' : 'none'}`}>
          <h3>1: Foreign Exchange Management Act (FEMA)</h3>
          <p>Foreign companies operating in India must meticulously comply with the laws and regulations governing foreign exchange, as stipulated by the Foreign Exchange Management Act, 1999.</p>
        </div>
        <div className={`${active === '2' ? 'active' : 'none'}`}>
          <h3>2: Companies Act, 2013</h3>
          <p>All Indian subsidiary companies are obligated to adhere to the provisions outlined in the Companies Act, 2013, ensuring compliance with the statutory framework governing corporate entities.</p>
        </div>
        <div className={`${active === '3' ? 'active' : 'none'}`}>
          <h3>3: Reserve Bank of India (RBI) Compliances</h3>
          <p>Indian subsidiary companies are subject to various foreign exchange management compliances mandated by the Reserve Bank of India (RBI), contributing to the overall regulatory landscape.</p>
        </div>
        <div className={`${active === '4' ? 'active' : 'none'}`}>
          <h3>4: Income Tax Act, 1961</h3>
          <p>Annual filing of income tax returns is a mandatory requirement for Indian subsidiaries, with compliance under the provisions of the Income Tax Act, 1961. The current corporate tax rate in India stands at 25%.</p>
        </div>
        <div className={`${active === '5' ? 'active' : 'none'}`}>
          <h3>5: Annual Returns</h3>
          <p>Companies are obligated to submit annual returns to both the Ministry of Corporate Affairs (MCA) and the Registrar of Companies, reinforcing transparency and adherence to regulatory standards.</p>
        </div>
        <div className={`${active === '6' ? 'active' : 'none'}`}>
          <h3>6: SEBI (Listing Obligations and Disclosure Regulations)</h3>
          <p>Should the subsidiary opt to list its securities on a stock exchange, strict compliance with the Securities and Exchange Board of India (SEBI) regulations, specifically the Listing Obligations and Disclosure Regulations, becomes imperative.</p>
        </div>
      </div>
      </div>
      <h6 >The confluence of these regulatory frameworks ensures that an Indian subsidiary company operates within the bounds of legality and remains compliant with the diverse aspects of corporate governance, financial transparency, and regulatory obligations.</h6>
    </div>
  )
}