
import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'
import advantages from '../../../assets/images/static/partnership-firm/advantages.svg'

export const Advantages = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='Advantages'>
      <Image alt="Easy to Incorporate Less Compliance Quick Decision Sharing of Profits and Losses" className="benefits-img w-100" height={500} loading="lazy" src={advantages} />
      <p className='main-para mb-0'>The following are the benefits of Partnership Firm Registration in India:</p>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
        <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="one" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Easy to Incorporate</div>
            <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0' />
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="two" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Less Compliance</div>
            <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0' />
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Quick Decision</div>
            <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0' />
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="three" loading="lazy" width={30} height={30} /><div className='ms-1 pe-4'>Sharing of Profits and Losses</div>
            <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} className='position-absolute end-0' />
            </div>
          </button>
        
        </div>
        <div className='flex-5 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1: Easy to Incorporate </h3>
            <p>
            In comparison to other types of business organisations, forming a partnership firm is simple. By preparing the partnership deed and entering into the partnership agreement, the partnership firm can be formed. Other than the partnership agreement, no other documents are necessary. It is not even required to be registered with the Registrar of Firms. A partnership firm can be created and registered at a later date because registration is optional.
            </p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2: Less Compliance</h3>
            <p>
             In comparison to a corporation or an LLP, a partnership firm is subject to far fewer regulations. The partners do not require a Digital Signature Certificate (DSC) or a Director Identification Number (DIN), which are required for LLP company directors or designated partners. Any changes to the business can be readily implemented by the partners. Their operations are subject to legal constraints. It is less expensive to establish than a corporation or limited liability partnership. The dissolution of a partnership firm is simple and requires few legal requirements.
            </p>
          </div> 
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3: Quick Decision</h3>
            <p>
             Because there is no distinction between ownership and management in a partnership firm, decision-making is swift. All choices are made collaboratively by the partners and can be applied instantly. The partners have broad powers and actions that they can carry out on behalf of the company. They can even conduct transactions on behalf of the partnership firm without the agreement of the other partners.
            </p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>4: Sharing of Profits and Losses</h3>
            <p>
            The partners split the firm’s profits and losses evenly. They can even choose their own profit and loss ratio in the partnership firm. They feel a sense of ownership and accountability because the firm’s profitability and turnover are based on their efforts. Any loss incurred by the firm will be shared equally or in accordance with the partnership deed ratio, alleviating the weight of loss on one individual or partner. They are jointly and severally accountable for the firm’s operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
