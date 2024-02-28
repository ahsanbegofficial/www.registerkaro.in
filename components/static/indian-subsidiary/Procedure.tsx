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
import eleven from '../../../assets/images/pvt-reg/HowToRegister/eleven.svg'
import twelve from '../../../assets/images/pvt-reg/HowToRegister/twelve.svg'
import thirteen from '../../../assets/images/pvt-reg/HowToRegister/thirteen.svg'
import arrow from '../../../assets/images/pvt-reg/HowToRegister/arrow.svg'
import procedure_for_indian_subsidiary_registration from '../../../assets/images/static/Indian_subsidiary_registration/procedure_for_indian_subsidiary_registration.svg'

export const Procedure = () => {
  const [active, setActive] = useState('1')

  const handleActive = (id: string) => {
    setActive(id)
  }

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='Procedure'>
         <div className='flex-3'>
        <Image alt="Procedure for Indian Subsidiary Registration,Determine the Type of Company,Obtain Digital Signature Certificate (DSC),Apply for Director Identification Number" className="Procedure-img w-100" loading="lazy" width={400} src={procedure_for_indian_subsidiary_registration} />
      </div>
      <div className="flex w-100 align-center justify-content-between mobile-flex-column-reverse">
        <div className='flex-6 text-justify fs-20 p-color-black'>
          <div className={`${active === '1' ? 'active' : 'none'}`}>
            <h3>1: Determine the Type of Company</h3>
            <p>Decide on the specific type of subsidiary company you intend to establish.</p>
          </div>
          <div className={`${active === '2' ? 'active' : 'none'}`}>
            <h3>2: Obtain Digital Signature Certificate (DSC)</h3>
            <p>Since the registration process is conducted online, secure a Digital Signature Certificate (DSC) for the proposed directors of the company. This certificate is essential for electronically signing the necessary documents during the registration process.</p>
          </div>
          <div className={`${active === '3' ? 'active' : 'none'}`}>
            <h3>3: Apply for Director Identification Number (DIN)</h3>
            <p>Directors of the subsidiary company must obtain a Director Identification Number (DIN) from the Ministry of Corporate Affairs (MCA). This is achieved by submitting the DIN application online.</p>
          </div>
          <div className={`${active === '4' ? 'active' : 'none'}`}>
            <h3>4: Name Approval</h3>
            <p>Choose a distinctive name for your subsidiary company and apply for its approval through the MCA’s online portal. Ensure that the chosen name complies with the naming guidelines provided by the MCA.</p>
          </div>
          <div className={`${active === '5' ? 'active' : 'none'}`}>
            <h3>5: Draft Memorandum of Association (MoA) and Articles of Association (AoA)</h3>
            <p>Prepare the legal documents, MoA and AoA, which delineate the company’s objectives, rules, and regulations, following the guidelines of the Companies Act 2013.</p>
          </div>
          <div className={`${active === '6' ? 'active' : 'none'}`}>
            <h3>6: File Incorporation Documents</h3>
            <p>Once the chosen name is approved, file the incorporation documents, including MoA, AoA, and other required forms, with the Registrar of Companies (ROC) through the MCA’s online portal. The SPICe+ form is typically used for the incorporation process on the Ministry of Corporate Affairs portal.</p>
          </div>
          <div className={`${active === '7' ? 'active' : 'none'}`}>
            <h3>7: Payment Registration Fees</h3>
            <p>Pay the applicable registration fees to the ROC based on the authorized capital of the subsidiary company.</p>
          </div>
          <div className={`${active === '8' ? 'active' : 'none'}`}>
            <h3>8: Obtain a Certificate of Incorporation (COI)</h3>
            <p>If all submitted documents and information are in order, the ROC will issue a Certificate of Incorporation, officially confirming the registration of the subsidiary company.</p>
          </div>
          <div className={`${active === '9' ? 'active' : 'none'}`}>
            <h3>9: Apply for Permanent PAN and Tax Registration</h3>
            <p>After obtaining the COI, apply for a Permanent Account Number and a Tax Deduction and Collection Account Number from the Income Tax Department for the subsidiary company.</p>
          </div>
          <div className={`${active === '10' ? 'active' : 'none'}`}>
            <h3>10: Open Bank Account Opening</h3>
            <p>Conclude the process by opening a bank account in the name of the subsidiary company in India.</p>
          </div>
          <div className={`${active === '11' ? 'active' : 'none'}`}>
            <h3>11: Compliance with Other Regulations</h3>
            <p>Apart from the company registration process, ensure compliance with other relevant regulations.</p>
          </div>
          <div className={`${active === '12' ? 'active' : 'none'}`}>
            <h3>12: Obtain a GST Registration</h3>
            <p>Goods and Services Tax (GST) registration is required after completing the aforementioned steps, particularly if the company engages in various business activities. Every Indian company must apply for a GST number for taxation purposes.</p>
          </div>
          <div className={`${active === '13' ? 'active' : 'none'}`}>
            <h3>13: Initiating Business Operations</h3>
            <p>Once all the preceding steps are completed, the subsidiary company can commence its business operations. This marks the culmination of the comprehensive process of registering and initiating operations for an Indian subsidiary company.</p>
          </div>
        </div>
        <div className='flex-4'>
          <button onClick={() => handleActive('1')} className={`btn flex ${active === '1' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={one} alt="pu step 2" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Determine the Type of Company</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('2')} className={`btn flex ${active === '2' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={two} alt="pu step 3" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Obtain Digital Signature Certificate (DSC)</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('3')} className={`btn flex ${active === '3' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={three} alt="pu step 4" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Apply for Director Identification Number (DIN)</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('4')} className={`btn flex ${active === '4' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={four} alt="pu step 5" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Name Approval</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('5')} className={`btn flex ${active === '5' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={five} alt="pu step 6" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Draft Memorandum of Association (MoA) and Articles of Association (AoA)</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('6')} className={`btn flex ${active === '6' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={six} alt="pu step 7" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;File Incorporation Documents</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('7')} className={`btn flex ${active === '7' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={seven} alt="pu step 8" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Payment Registration Fees</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('8')} className={`btn flex ${active === '8' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={eight} alt="pu step 9" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Obtain a Certificate of Incorporation (COI)</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('9')} className={`btn flex ${active === '9' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={nine} alt="pu step 10" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Apply for Permanent PAN and Tax Registration</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('10')} className={`btn flex ${active === '10' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={ten} alt="pu step 11" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Open Bank Account Opening</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('11')} className={`btn flex ${active === '11' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={eleven} alt="pu step 12" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Compliance with Other Regulations</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('12')} className={`btn flex ${active === '12' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={twelve} alt="pu step 13" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Obtain a GST Registration</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
          <button onClick={() => handleActive('13')} className={`btn flex ${active === '13' ? 'active-btn' : 'none-btn'} position-relative`}>
            <div className='d-flex justify-content-between align-items-center gap-2'>
              <Image src={thirteen} alt="pu step 14" loading="lazy" width={30} height={30} /><div className='pe-4'>&nbsp;Initiating Business Operations</div>
              <Image src={arrow} alt="pu step 1" loading="lazy" width={30} height={30} className="position-absolute end-0" />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
