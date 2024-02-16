import Image from 'next/image'
import React, { useState } from 'react'
import one from '../../../assets/images/static/private-reg/HowToRegister/one.svg'
import two from '../../../assets/images/static/private-reg/HowToRegister/two.svg'
import three from '../../../assets/images/static/private-reg/HowToRegister/three.svg'
import four from '../../../assets/images/static/private-reg/HowToRegister/four.svg'
import five from '../../../assets/images/static/private-reg/HowToRegister/five.svg'
import six from '../../../assets/images/static/private-reg/HowToRegister/six.svg'
import seven from '../../../assets/images/static/private-reg/HowToRegister/seven.svg'
import eight from '../../../assets/images/static/private-reg/HowToRegister/eight.svg'
import arrow from '../../../assets/images/static/private-reg/HowToRegister/arrow.svg'
import DIN from '../../../assets/images/static/private-reg/document/DIN.png'
import DSC from '../../../assets/images/static/private-reg/document/DSC.svg'
import PAN from '../../../assets/images/static/private-reg/document/PAN.png'
import TAN from '../../../assets/images/static/private-reg/document/TAN.webp'
import MOA from '../../../assets/images/static/private-reg/document/MOA.webp'
import AOA from '../../../assets/images/static/private-reg/document/AOA.webp'
import COI from '../../../assets/images/static/private-reg/document/COI.webp'
import MD from '../../../assets/images/static/private-reg/document/MD.png'

export const WhatDocument = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='WhatDocuments'>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column">
        <div className='flex-5'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2' >
              <Image src={one} alt="Director Identification Number (DIN)" loading="lazy" width={30} height={30} /><div className='pe-4'>Director Identification Number (DIN)</div>
              <Image src={arrow} alt="Director Identification Number (DIN)" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2' >
              <Image src={two} alt="Digital Signature Certificate (DSC)" loading="lazy" width={30} height={30} /><div className='pe-4'>Digital Signature Certificate (DSC)</div>
              <Image src={arrow} alt="Digital Signature Certificate (DSC)" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2' >
              <Image src={three} alt="Memorandum of Association (MoA)" loading="lazy" width={30} height={30} /><div className='pe-4'>Memorandum of Association (MoA)</div>
              <Image src={arrow} alt="Memorandum of Association (MoA)" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2' >
              <Image src={four} alt="Articles of Association (AoA)" loading="lazy" width={30} height={30} /><div className='pe-4'>Articles of Association (AoA)</div>
              <Image src={arrow} alt="Articles of Association (AoA)" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2' >
              <Image src={five} alt="Permanent Account Number (PAN) of the companye" loading="lazy" width={30} height={30} /><div className='pe-4'>Permanent Account Number (PAN) of the company</div>
              <Image src={arrow} alt="Permanent Account Number (PAN) of the company" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2' >
              <Image src={six} alt="Tax Deduction Account Number (TAN) of the company" loading="lazy" width={30} height={30} /><div className='pe-4'>Tax Deduction Account Number (TAN) of the company</div>
              <Image src={arrow} alt="Tax Deduction Account Number (TAN) of the company" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('7')} className={`btn flex ${active === '7' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2' >
              <Image src={seven} alt="Certificate of Incorporation (COI)" loading="lazy" width={30} height={30} /><div className='pe-4'>Certificate of Incorporation (COI)</div>
              <Image src={arrow} alt="Certificate of Incorporation (COI)" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('8')} className={`btn flex ${active === '8' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2' >
              <Image src={eight} alt="Master Data of the Company" loading="lazy" width={30} height={30} /><div className='pe-4'>Master Data of the Company</div>
              <Image src={arrow} alt="Master Data of the Company" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
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
