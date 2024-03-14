import Image from 'next/image'
import React from 'react'
import documents from '../../../assets/images/static/llp-compliance/Mandatory_Compliance_for_LLP_India.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'
interface HeroProps {
   cityName: string;
}
export const PartnershipDeed = ({ cityName }: HeroProps) => {
  return (
    <div>
        <p className='main-para mb-2'id='PartnershipDeed'>Once an LLP is incorporated, there is some mandatory compliance that an LLP is required to fulfill. If a Limited Liability Partnership fails to comply with these requirements, it may have to pay heavy penalties. Following is the list of vital compliance that an LLP needs to follow after the LLP Registration in {cityName}:</p>
        <div className='flex justify-content-center'>
        <Image alt="Mandatory Compliance for LLP in India" className="Mandatory-img w-100" height={582} loading="lazy" src={documents} />
      </div>
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse'>
      <div className='flex-7'>
         <h3>One-Time Mandatory Compliance for LLP:</h3>
        <h3>LLP Form-3:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> The LLP Partners are required to draft an LLP Agreement & a copy has to be filed with the Registrar of Companies (ROC) in LLP Form-3 within 30 days of LLP Incorporation.</li>
        </ul>
        <h3>Opening a Bank Account:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> It’s vital to open a current bank account in the name of the Limited Liability Partnership with any Bank in {cityName}. All the transactions in the LLP Name should be transacted via the LLP Bank Account only.</li>
        </ul>
        <h3>PAN & TAN Number:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Every Limited Liability Partnership in {cityName} must obtain PAN and TAN from the Income Tax Department. With the LLP (Second Amendment) Rules, 2022, the same shall now be allotted with the Certificate of Incorporation itself.</li>
        </ul>
        <h3>GST Registration:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Every Business or company with an annual turnover of more than Rs. 40 lakhs (service providers Rs. 20 lakhs) is required to get GST Registration under the GST Act & Rules. It is not compulsory to obtain GST quickly after LLP Incorporation. The Limited Liability Partnership can obtain the Registration when required.</li>
        </ul>    
    
     
        <h3>Annual Compliance for LLP:</h3>
        <h3>Statement of Accounts & Solvency in LLP Form-8:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Every Limited Liability Partnership is required to prepare & close its accounts until 31st Mar every year. Form-8 is to be filed by at least 2 Partners with the Registrar 30 days after the completion of 6 months of F.Y (Financial Year). The Statement of Account & Solvency can now be signed on behalf of the Limited Liability Partnership by its interim resolution expert.</li>
        </ul>
        <h3>Annual Return in Form-11:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Form-11 is a summary of all the Partners like whether there are any changes in the LLP Management or not. It is required to be in Form-11 to the Registrar within 60 days from the Closure of the Financial Year.</li>
        </ul>
        <h3>Income Tax (IT) Return:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Every Limited Liability Partnership has to file IT Return every year and the last date of filing of ITR Return is 31st July every year. However, any LLP under tax audit is required to file its IT Return by 30th Sep.</li>
        </ul>
        <h3>DIR-3 KYC:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Each designated Partner for a Limited Liability Partnership is required to file Form DIR-3 KYC on or before 30th Sep of each Financial Year.</li>
        </ul>    
        <h3>Audit:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Only those Limited Liability Partnerships whose yearly turnover is more than Rs. 40 lakhs or whose contribution is more than Rs. 25 lakhs are required to get their accounts audited.</li>
        </ul>    
      </div>
      </div>
     

    
    </div>
  )
}