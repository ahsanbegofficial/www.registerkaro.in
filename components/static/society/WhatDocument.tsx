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
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'
import DIN from '../../../assets/images/pvt-reg/document/DIN.png'
import DSC from '../../../assets/images/pvt-reg/document/DSC.svg'
import PAN from '../../../assets/images/pvt-reg/document/PAN.png'
import TAN from '../../../assets/images/pvt-reg/document/TAN.webp'
import MOA from '../../../assets/images/pvt-reg/document/MOA.webp'
import AOA from '../../../assets/images/pvt-reg/document/AOA.webp'
import COI from '../../../assets/images/pvt-reg/document/COI.webp'
import MD from '../../../assets/images/pvt-reg/document/MD.png'

export const WhatDocument = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='WhatDocuments'>
      <p className='main-para mb-0'>If you have found your destination in the face of a Private Limited Company, then let Registerkaro map the road to your destination. Following the given route, the company registration process becomes easy to handle.</p>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
        <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={one} alt="one" loading="lazy" width={30} height={30} /> &nbsp; Director Identification Number (DIN)
            </div>
            <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} />
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={two} alt="two" loading="lazy" width={30} height={30} /> &nbsp; Digital Signature Certificate (DSC)
            </div>
            <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} />
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={three} alt="three" loading="lazy" width={30} height={30} /> &nbsp; Memorandum of Association (MoA)
            </div>
            <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} />
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={four} alt="four" loading="lazy" width={30} height={30} /> &nbsp; Articles of Association (AoA)
            </div>
            <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} />
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={five} alt="five" loading="lazy" width={30} height={30} /> &nbsp; Permanent Account Number (PAN) of the company
            </div>
            <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} />
          </button>
          <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={six} alt="six" loading="lazy" width={30} height={30} /> &nbsp; Tax Deduction Account Number (TAN) of the company
            </div>
            <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} />
          </button>
          <button onClick={() => handleActive('7')} className={`btn flex ${active === '7' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={seven} alt="seven" loading="lazy" width={30} height={30} /> &nbsp; Certificate of Incorporation (COI)
            </div>
            <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} />
          </button>
          <button onClick={() => handleActive('8')} className={`btn flex ${active === '8' ? 'active-btn' : 'none-btn'}`}>
            <div>
              <Image src={eight} alt="eight" loading="lazy" width={30} height={30} /> &nbsp; Master Data of the Company
            </div>
            <Image src={arrow} alt="arrow" loading="lazy" width={30} height={30} />
          </button>
        </div>
        <div className='flex-5 text-justify fs-20'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <Image className='WhatDocument-img w-100' height={500} src={DIN} alt="A letter of Director Identification Number or DIN from the government of india" loading="lazy" />
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <Image className='WhatDocument-img w-100' height={500} src={DSC} alt="A pendrive of DSC which is used for digitally sign the documents" loading="lazy" />
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <Image className='WhatDocument-img w-100' height={500} src={MOA} alt="An MOA Certificate prepared by the company's owner" loading="lazy" />
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <Image className='WhatDocument-img w-100' height={500} src={AOA} alt="An AOA Certificate prepared by the company's owner" loading="lazy" />
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <Image className='WhatDocument-img w-100' height={500} src={PAN} alt="A Company's PAN card with a QR code issued by the Government of India" loading="lazy" />
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <Image className='WhatDocument-img w-100' height={500} src={TAN} alt="Tax Deduction and Collection Account Number Certificate issued by the Income Tax Department" loading="lazy" />
          </div>
          <div className={`${active === '7' ? 'active' : 'none'}`}>
            <Image className='WhatDocument-img w-100' height={500} src={COI} alt="A certificate of incorporation for an indian company" loading="lazy" />
          </div>
          <div className={`${active === '8' ? 'active' : 'none'}`}>
            <Image className='WhatDocument-img w-100' height={500} src={MD} alt="A Master Data of a Company which contain all the details of the Company" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  )
}
