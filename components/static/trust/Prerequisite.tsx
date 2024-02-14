import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import six from '../../../assets/images/pvt-reg/HowToRegister/six.svg'
import seven from '../../../assets/images/pvt-reg/HowToRegister/seven.svg'
import eight from '../../../assets/images/pvt-reg/HowToRegister/eight.svg'
import nine from '../../../assets/images/pvt-reg/HowToRegister/nine.svg'
import ten from '../../../assets/images/pvt-reg/HowToRegister/ten.svg'

import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const Prerequisite = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='Prerequisite'>
      <p className='main-para'>To qualify for trust registration, the following conditions must be fulfilled:</p>
    <div className="flex w-100 align-center justify-content-between mobile-flex-column">
 
          <div className='flex-4'>
            <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2'>
                <Image src={one} alt="pu step 1" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Minimum Number of Founders:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
            <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2'>
                <Image src={two} alt="pu step 2" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Compliance with the Indian Trusts Act of 1882:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
            <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2'>
                <Image src={three} alt="pu step 3" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Disqualification Status:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
            <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2'>
                <Image src={four} alt="pu step 4" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Conformity with Legal Objectives:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
            <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2'>
                <Image src={five} alt="pu step 5" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Fair and Just Conduct:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
            <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2'>
                <Image src={six} alt="pu step 6" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Alignment with Public Interest:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
            <button onClick={() => handleActive('7')} className={`btn flex ${active === '7' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2'>
                <Image src={seven} alt="pu step 7" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Non-Harmful Activities:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
            <button onClick={() => handleActive('8')} className={`btn flex ${active === '8' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2'>
                <Image src={eight} alt="pu step 7" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Consistency with Stated Objectives:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
            <button onClick={() => handleActive('9')} className={`btn flex ${active === '9' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2'>
                <Image src={nine} alt="pu step 7" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Appropriately Drafted Trust Deed:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
            <button onClick={() => handleActive('10')} className={`btn flex ${active === '10' ? 'active-btn' : 'none-btn'} position-relative`}>
              <div className='d-flex justify-content-between align-items-center gap-2'>
                <Image src={ten} alt="pu step 7" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Validity of Multiple Objectives:</div>
                <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
              </div>
            </button>
          </div>
          <div className='flex-6 text-justify fs-20 p-color-black text-center'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1. Minimum Number of Founders:</h3>
            <p>Trust must be established by at least two or more individuals.</p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2. Compliance with the Indian Trusts Act of 1882:</h3>
            <p>The trust must be formed in accordance with the provisions specified in the Indian Trusts Act of 1882.</p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3. Disqualification Status:</h3>
            <p>None of the parties involved should be disqualified under any prevailing law in India.</p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>4. Conformity with Legal Objectives:</h3>
            <p>The objectives of the trust must not contravene any existing laws in India.</p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>5. Fair and Just Conduct:</h3>
            <p>The trustee must conduct their activities in a fair and just manner.</p>
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>6. Alignment with Public Interest:</h3>
            <p>The formation of the trust should not be contrary to public interest or any other applicable laws.</p>
          </div>
          <div className={`${active === '7' ? 'active' : 'none'}`}>
            <h3>7. Non-Harmful Activities:</h3>
            <p>The activities carried out by the trust must not cause harm to any individual.</p>
          </div>
          <div className={`${active === '8' ? 'active' : 'none'}`}>
            <h3>8. Consistency with Stated Objectives:</h3>
            <p>The trust activities should align with the objectives outlined in the trust deed.</p>
          </div>
          <div className={`${active === '9' ? 'active' : 'none'}`}>
            <h3>9. Appropriately Drafted Trust Deed:</h3>
            <p>The trust deed must be drafted appropriately, reflecting the genuine interests of the parties involved in forming the trust.</p>
          </div>
          <div className={`${active === '10' ? 'active' : 'none'}`}>
            <h3>10. Validity of Multiple Objectives:</h3>
            <p>If the trust has more than two purposes, both purposes must be valid. If one goal is reasonable and the other is invalid, trust cannot be formed.</p>
          </div>
        </div>
      </div>
       
    </div>
  )
}