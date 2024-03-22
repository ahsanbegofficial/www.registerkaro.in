import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/private-limited-company-compliance/External_Compliance.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

interface HeroProps {
    cityName: string;
}
export const PartnershipDeed =({ cityName }: HeroProps)  => {
  return (
    <div >
        <p className='main-para mb-0'id='PartnershipDeed'>This type of compliance refers to following the rules, laws and standards set by the Government to avoid any kind of negative impact on the Company’s Goodwill. The State in which the firm is built public relations and trust & brings transparency to its business. Complying with all the rules makes sure no unnecessary duplication of efforts of resources. External Companies are further divided into 2 different parts:</p>
     
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse'>
    
      <div className='flex-7'>
         <h3>Regulatory Compliance:</h3>
         <p>These are some rules and laws passed by some regulatory bodies set up by the Central or State Government. Some of these are listed below:</p>
        <h3>1. Accounting & Payroll</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Accounting</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Employee Payroll</li>
        </ul>
        <h3>2. Assurance</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Statutory Audit</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Tax Audit</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Internal Audit</li>
        </ul>
        <h3>3. Direct Tax</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Corporate Tax</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Transfer Pricing</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Withholding Tax</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Expatriate Taxation</li>
        </ul>
        <h3>4. Indirect Tax</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Customs Duty</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Goods and Services Tax (‘GST ‘)</li>
        </ul>
        <h3>5. Secretarial Compliance</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />In {cityName}, Businesses or Companies must comply with secretarial matters cited under the Companies Act & report to the concerned Registrar of Companies.</li>
        </ul>
        <h3>6. Labour Laws</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />An employer must consider the impact of the Provident Fund, a government-regulated Pension Plan scheme.</li>
        </ul>
        <h3>7. Corporate Law</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Board Meeting</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Annual General Meeting (adoption of financials)</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Annual Return with the ROC</li>
        </ul>
        <h3>8. Tax</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Corporate Tax Return</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Tax Audit Report</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Transfer Pricing Report</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />TDS Returns (Tax Withholding)</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Individual tax return</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />GST Return </li>
        </ul>
        <h3>8. Compliance</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Deposit of TDS</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Deposit of GST</li>
        </ul>
        <h3>Statutory Compliances:</h3>
        <p>These are the rules and laws passed by the Central or State Government. Following is the list of Statutory Rules that a Company must adhere to:</p>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Shops and Commercial Establishments Act (S&E)</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The Employees Provident Funds and Miscellaneous Provision Act – 1952 (EPF)</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The Employees State Insurance Corporation Act – 1948 (ESIC)</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The Professional Tax Act (PT) 1975</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The Labour Welfare Fund Act (LWF) 1965</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The Contract Labour (Regulation & Abolition) Act – 1970 (CLRA)</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The Child Labour (Prohibition & Regulation Act), 1986</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The Minimum Wages Act-1948</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The Payment of Wages Act-1936</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The Payment of Bonus Act 1965</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The Maternity Benefit Act of 1961</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The Payment of Gratuity Act 1972</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The Equal Remuneration Act-1976</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The Industrial Establishment (N&FH) Act, 1963</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The Employment Exchange (Compulsory Notification of Vacancies) Act, 1959</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act 2013</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The Employees Compensation Act, 1923</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The Industrial Employment (Standing Orders) Act, 1946</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Model Standing Order Only The Industrial Disputes Act of 1947</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The Apprentice Act, 1961</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The Interstate Migrant Workmen (Regulation of Employment and Conditions of Services) Act, 1979</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The Factories Act of 1948</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The Trade Unions Act of 1926.</li>
         </ul>
      </div>
      <div className='flex-4'>
        <Image alt="External Compliance" className="External-img w-100" height={1082} loading="lazy" src={dft} />
      </div>
      </div>
    </div>
  )
}