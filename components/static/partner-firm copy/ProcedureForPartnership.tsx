import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/partnership-firm/Procedure.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

export const ProcedureForPartnership = () => {
  return (
    <div>
        <p className='main-para'>Following is the step-by-step Partnership Firm Registration in India:</p>
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column' id='ProcedureForPartnership'>
      <div className='flex-3 justify-content-center'>
        <Image alt="Procedure for Partnership Firm Registration in India" className="ProcedureForPartnership-img w-100" height={482} loading="lazy" src={dft} />
      </div>
      
      <div className='flex-7'>
        <h3>Step 1: Submit an Application for Registration</h3>
        <ul className='tick list-unstyled'>
          <p className='h6'>Along with the specified fees, an application form must be completed with the Registrar of Firms of the State in which the firm is located. All partners or their agents must sign and verify the registration application. The application, which includes the following information, can be mailed or delivered to the Registrar of Firms.</p>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The company’s name.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The firm’s major place of business.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The location of any other locations where the corporation does business. </li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Each partner’s date of incorporation.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />All of the partners’ names and permanent addresses.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The company’s lifespan. </li>
        </ul>
        <h3>Step 2: Choose a Name for the Partnership Firm</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> A partnership firm can be given any name. However, certain parameters must be met when choosing a name</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> The name should not be too close or identical to that of an existing company in the same industry.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> The name should not include words like emperor, crown, empress, empire, or any other words that indicate government permission or support.</li>
        </ul>
        <h3>Step 3: Registration Certificate</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> If the Registrar approves the registration application and documentation, he will enter the firm into the Register of Firms and issue the Registration Certificate. The Register of Firms contains up-to-date information on all firms, and anybody can use it for a fee.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A completed application form and fees must be sent to the Registrar of Firms in the state where the firm is located. All partners or their agents must sign the application.</li>
        </ul>
      </div>
      </div>
    </div>
  )
}