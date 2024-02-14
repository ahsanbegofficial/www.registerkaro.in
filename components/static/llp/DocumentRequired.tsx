
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg';
import Image from 'next/image'
import { useState } from 'react'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'
import five from '../../../assets/images/pvt-reg/HowToRegister/five.svg'
import four from '../../../assets/images/pvt-reg/HowToRegister/four.svg'
import one from '../../../assets/images/pvt-reg/HowToRegister/one.svg'
import three from '../../../assets/images/pvt-reg/HowToRegister/three.svg'
import two from '../../../assets/images/pvt-reg/HowToRegister/two.svg'

export const DocumentRequired = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='Documents'>
      <p className='main-para'>Following is the step-by-step procedure for LLP Registration in India</p>
      <p className='text-center'><strong>Documents of all the Partners</strong></p>
      <div className="flex w-100 align-center justify-content-between mobile-flex-column">
        <div className='flex-4'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2' >
              <Image src={one} alt="pu step 1" loading="lazy" width={30} height={30} /><div className='pe-4'>PAN Card or Identity Proof of all the Partners</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2' >
              <Image src={two} alt="pu step 1" loading="lazy" width={30} height={30} /><div className='pe-4'>Address Proof of Partners</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2' >
              <Image src={three} alt="pu step 1" loading="lazy" width={30} height={30} /><div className='pe-4'>Partners Residence Proof</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2' >
              <Image src={four} alt="pu step 1" loading="lazy" width={30} height={30} /><div className='pe-4'>Passport sized-photos</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2' >
              <Image src={five} alt="pu step 1" loading="lazy" width={30} height={30} /><div className='pe-4'>Passport</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
        </div>
        <div className='flex-6 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1: PAN Card or Identity Proof of all the Partners</h3>
            <p>All the designated Partners are required to provide their PAN and it acts as a primary identity proof.</p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2: Address Proof of Partners</h3>
            <p >For the address proof, Partners can submit any one document out of Passport, Aadhar Card, Voter’s Id, or Driving License. Name & other information as per address proof & PAN Card should be the same. If the spelling of one’s own name or father’s name or DoB is different in PAN Card & address proof, it should be corrected before submitting to the Registrar of Companies.</p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3: Partners Residence Proof</h3>
            <p>Latest telephone bill, electricity bill, bank statement, or gas bill should be submitted as residence proof. Note: Such bills should not be more than 2-3 months old & must contain the Partner’s Name as mentioned in the PAN Card.</p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>4: Passport sized-photos</h3>
            <p> Partners should also provide their latest passport size photos</p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>5: Passport</h3>
            <p> For becoming a Partner in a Limited Liability Partnership, NRIs & Foreign Nationals have to submit their passport mandatorily. Passport has to be notarized by the concerned authorities in the country of such NRI & Foreign Nationals, else the Indian Embassy located in that country can also sign the documents.</p>
          </div>
        </div>
      </div>
      <div className='flex-child-1'>
        <h3>Proof of Registered Office Address:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />If the registered office is taken on rent, an NOC & a Rent Agreement from the landlord has to be submitted. NOC will be the consent of the landlord to allow the LLP to use the place as a registered office.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Submit the latest utility bills like electricity, gas, telephone bill, etc. and the bill should contain the complete address of the premise & owner’s name & the document should not be older than 2 months.</li>
        </ul>
      </div>
    </div>
  )
}
