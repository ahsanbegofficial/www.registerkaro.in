import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/pvt-reg/differentType.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

export const Requirement = () => {
  return (
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' id='Requirement'>
      <div className='flex-5'>
        <div className='flex-3'>
          <Image alt="list of documents for private limited company registration in india that is passport size photos, aadhar and pan card, address proof, passport for NRIs applicant, bank statement" className="DocumentRequired-img w-100" loading="lazy" src={dft} height={430} />
          <p>The registration process for a company in India is intricately governed by the Companies Act of 2013, a comprehensive legal framework that delineates pre-incorporation and post-incorporation requisites. When embarking on the journey of registering a company in India, it is imperative to consider the following key elements:</p>
        </div>
        <h3>Company Name: </h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Selecting a unique and distinct name for your business is paramount. The chosen name must stand apart from existing businesses’ names or trademarks.</li>
        </ul>
        <h3>Shareholders: </h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> The parent company can hold 100% of the shares, or a combination of two foreign nationals can serve as shareholders. Notably, there is no mandatory requirement for an Indian resident to be a shareholder.</li>
        </ul>
        <h3>Share Capital: </h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> India does not impose a minimum capital requirement for company registration, providing flexibility for businesses in determining their capital structure.</li>
        </ul>
        <h3>Directors: </h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> A minimum of two directors is mandatory, with at least one director being an Indian resident. Additionally, nominee directorship services can be availed if needed.</li>
        </ul>
        <h3>Registered Address: </h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Every company in India must have a registered address officially recorded in government records. Virtual office address services are available to fulfill this requirement efficiently.</li>
        </ul>
        <h3>Annual General Meeting (AGM): </h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> As per the Companies Act, every Indian company must conduct at least one annual general meeting, in addition to two board meetings within the year.</li>
        </ul>
        <h3>Company Secretary: </h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Mandatory filing of three secretarial returns annually is overseen by a company secretary.</li>
        </ul>
        <h3>In terms of taxation, companies in India encounter the following considerations: </h3>

        <h3>Professional and Government Fees:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Incurrence of professional fees, including government fees for the registration process.</li>
        </ul>
        <h3>Profit Tax Rate:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Post-incorporation, companies are subjected to a profit tax rate of approximately 25.36%.</li>
        </ul>
        <h3>GST (Goods and Services Tax):</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Applicability to domestic sales, with monthly GST returns and an annual tax return mandated.</li>
        </ul>
        <h3>Ensuring compliance with India’s unique requirements is crucial, encompassing: </h3>

        <h3>Annual Compliance:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Mandatory statutory audits, even for smaller companies, necessitate the appointment of a statutory auditor and the submission of annual filings.</li>
        </ul>
      <p className='main-para'>Navigating these multifaceted requirements is indispensable for the successful establishment and operation of a company in India, aligning with the stipulations of the Companies Act of 2013.</p>
      </div>
    </div>
  )
}
