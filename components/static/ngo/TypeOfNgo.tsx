import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/pvt-reg/differentType.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

export const TypeOfNgo = () => {
  return (
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' id='TypeOfNgo'>
      <div className='flex-5'>
        <div className='flex-3'>
        <Image alt="list of documents for private limited company registration in india that is passport size photos, aadhar and pan card, address proof, passport for NRIs applicant, bank statement" className="DocumentRequired-img w-100" loading="lazy" src={dft} height={430} />
        <p>Following are the different types of NGO Registration in India:</p>
      </div>
        <h3>1. Trust Registration:</h3>
        <h3>Process Overview:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Drafting a Trust Deed in compliance with the Indian Trusts Act, 1882.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Appointment of trustees and formation of a governing body.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Submission of registration documents to the Registrar of Trusts.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Obtaining tax exemptions under Section 12A and 80G.</li>
        </ul>
        <h3>Documentation Requirements:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Bill of electricity or water as address proof.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Identity proof of at least two trustees (Voter ID, Driving License, Passport, Aadhaar Card).</li>
        </ul>
        <h3>2. Society Registration:</h3>
        <h3>Process Overview:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Drafting a Memorandum of Association (MoA) and By-laws in adherence to the Societies Registration Act, 1860.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Formation of a Governing Council.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Submission of registration documents to the Registrar of Societies.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Obtaining tax exemptions under Section 12A and 80G.</li>
        </ul>
        <h3>Documentation Requirements:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Name of the society.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Address proof of the office.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Identity proof of all nine members (Driving License, Passport, Voter ID, Aadhaar Card).</li>
        </ul>
        <h3>3. Section 8 Company Registration:</h3>
        <h3>Process Overview:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Drafting the Memorandum and Articles of Association in accordance with the Companies Act of 2013.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Formation of a Board of Directors.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Submission of registration documents to the Registrar of Companies (ROC).</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Obtaining tax exemptions under Section 8(1) and 12A.</li>
        </ul>
        <h3>Documentation Requirements:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Name of the Company for approval.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Address proof of the office.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Identity proof of all directors (Driving License, Passport, Voter ID, Aadhaar Card).</li>
        </ul>
    </div>
    </div>
  )
}