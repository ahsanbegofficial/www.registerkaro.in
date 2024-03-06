

import Image from 'next/image'
import React from 'react'
import ulArrow from '../../../assets/images//static/private-reg/ulArrow.svg'
import dft from '../../../assets/images/static/nbfc-registration/benefits_of_nbfcs.svg'

interface HeroProps {
  cityName: string;
}

export const Benefits = ({ cityName }: HeroProps) => {
  return (
    <div id='Benefits'>
      <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column' >

        <div className='flex-3'>
          <Image alt="Benefits of NBFCs
          Why RegisterKaro for Trademark Registration
          NBFC has gained a great spike in growth graph in the past few decades owing to the wide range of benefits it offers as a business. Few of such benefits can be observed below:" className="Benefits-img w-100" loading="lazy" height={830} src={dft} />
        </div>
        <div className='flex-7'>
          <p>NBFC has gained a great spike in growth graph in the past few decades owing to the wide range of benefits it offers as a business. Few of such benefits can be observed below:</p>
          <h3>Easy Loan</h3>
          <ul className='tick list-unstyled'>
            <li><Image alt="Copy of Aadhar Card" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Private non-bank financial institutions provide a simplified loan application process for individuals with low credit scores, informal income sources, or unconventional collateral. Unlike traditional banks, these NBFCs have lenient eligibility criteria and minimal documentation requirements, making approval quick and easy. They offer a practical solution for individuals seeking credit without extensive hurdles, particularly beneficial for entrepreneurs needing capital promptly.</li></ul>

          <h3>Solutions in Budget</h3>
          <ul className='tick list-unstyled'>
            <li><Image alt="Copy of Aadhar Card" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Non-bank private financial institutions leverage streamlined operations and reduced regulatory obligations to offer competitive interest rates surpassing those of traditional banks. This allows them to transmit savings to customers through lower rates on business loans and deposits. Moreover, private sector NBFCs provide enhanced flexibility in repayment schedules and personalized loan options, catering to individual preferences. By harnessing operational efficiencies and regulatory advantages, private sector NBFCs foster an environment conducive to borrowers seeking cost-effective and flexible financing solutions.</li></ul>

          <h3>Wide horizon of specialization</h3>
          <ul className='tick list-unstyled'>
            <li><Image alt="Copy of Aadhar Card" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Private sector NBFCs serve diverse market segments including MSME loans, housing finance, and vehicle financing, possessing deeper expertise and experience in these domains compared to banks. This expertise renders them more reliable partners in achieving your financial objectives. Furthermore, private sector NBFCs can deliver innovative and tailored solutions like peer-to-peer lending, digital platforms, and alternative credit scoring models, enhancing their ability to address unique financial needs effectively.</li></ul>

          <h3>Confidentiality & Privacy</h3>
          <ul className='tick list-unstyled'>
            <li><Image alt="Copy of Aadhar Card" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Private NBFC companies often excel in providing enhanced privacy and confidentiality compared to traditional banks. They tend to serve a more select clientele and place a premium on discretion in their operations. This aspect can be especially advantageous for individuals who value the confidentiality of their financial matters. Smaller banks are known for prioritizing the protection of private information and offering heightened security for financial transactions and data.</li></ul>

          <h3>Financial Inclusivity</h3>
          <ul className='tick list-unstyled'>
            <li><Image alt="Copy of Aadhar Card" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> NBFC companies are enhancing their service accessibility and convenience for individuals, bridging gaps by catering to those often marginalized within the formal banking sector. Leveraging technology, they offer user-friendly solutions like web applications, mobile payments, and instant verification, simplifying financial transactions and broadening access to financial services. This technological advancement facilitates easier access for a wider spectrum of users, improving overall user experience and extending their reach to a diverse customer base. Consequently, private sector NBFCs play a pivotal role in enhancing financial access and convenience, particularly in underserved regions and for technologically adept applicants.</li></ul>

        </div>
      </div>
    </div>
  )
}