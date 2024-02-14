
import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'

import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'

export const Disdvantages = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='Disdvantages'>
      <p className='main-para mb-0'>The following are some disadvantages of Partnership Firm Registration:</p>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column-reverse">
      <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1: Unlimited Liability </h3>
            <p>
            The major disadvantage of a partnership firm is that the partners’ liability is unlimited. The partners must cover the firm’s loss out of their personal estate. In contrast, the liability of shareholders or partners in a business or LLP is limited to the number of their shares. The liability caused by one of the partnership firm’s partners must be borne by all of the firm’s partners. If the firm’s assets are insufficient to satisfy the obligation, the partners must repay the creditors with their personal property.
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2: No Perpetual Succession</h3>
            <p>
             A partnership firm, unlike a corporation or an LLP, does not have perpetual succession. This means that the death of a partner or the insolvency of all but one of the partners will bring an end to a partnership firm. It can also be dissolved if one of the partners provides the other partners notice of the firm’s dissolution. As a result, the partnership firm can dissolve at any time.
            </p>
          </div> 
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3: Limited Resources </h3>
            <p>
            A partnership firm can have a maximum of 20 participants. The number of partners is limited, and so the capital invested in the firm is similarly limited. The firm’s capital is the total of the amounts invested by each partner. This limits the firm’s resources, and the partnership firm cannot pursue large-scale projects.
            </p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>4: Difficult to Raise Funds</h3>
            <p>
            Raising capital is challenging since the partnership firm lacks perpetual succession and a separate legal entity. In comparison to a company or an LLP, the firm has fewer possibilities for generating capital and expanding its operations. People have less trust in the firm because there are no strong legal requirements. The firm’s financial statements do not have to be made public. As a result, borrowing money from outside people is difficult.
            </p>
          </div>
        </div>
        <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="three" loading="lazy" width={30} height={30}  /><div className='ms-1 pe-4'>Unlimited Liability</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button><button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>No Perpetual Successio</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button><button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Limited Resources</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button><button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Difficult to Raise Funds</div> 
              <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0'/>
            </div>
          </button>
        
        </div>
       
      </div>
    </div>
  )
}
