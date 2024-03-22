import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/private-limited-company-compliance/Mandatory_Private_Limited.svg'

interface HeroProps {
    cityName: string;
}
export const MandatoryCompilance = ({ cityName }: HeroProps) => {

  return (
    <div className='DocumentButtonWise w-80 m-auto' id='MandatoryCompilance'>
      <p className='main-para mb-2'>Following is the mandatory Private Limited Company Compliance:</p>
      <div className="main flex justify-content-between align-center m-auto mobile-flex-column-reverse">
        <div className='flex-7'>
          <p><strong>Appointment of 1st Auditor:</strong> The BoDs are required to appoint an auditor within 30 days of Company Incorporation. A Private Limited Company that fails to appoint an auditor is liable to pay a penalty. Further, the Company will not be allowed to start a business. He or She is required to stay in the office till the completion of the 1st Annual General Meeting (AGM).</p>
          <p><strong>Subsequent Auditor:</strong> This auditor is appointed to monitor the fair dealings of a Company in terms of its financial position. He or She is appointed in the 1st AGM & continues to stay in the same position till the 6th AGM. According to the Companies Act, 2013, a Subsequent Auditor is appointed by the filing Form ADT-1.</p>
          <p><strong>AGM (Annual General Meeting):</strong> Annual General Meeting or AGM is one of the most vital Annual Compliance for Private Limited Company. At the Annual General Meetings, the Board of Directors of the Company is required to present its true financial position to the shareholders. Annual General Meeting is required to be organized on/before 30th Sep every Financial Year (F.Y.) during working hours of the Company. Also, the Annual General Meeting shouldn’t be held on public holidays or after business hours. It must be held at the registered office after issuance of notice of at least 21 days.</p>
          <p><strong>Board Meeting:</strong> The 1st Board Meeting is required to be held within 1 month or 30 days of its incorporation. Four Board Meetings are required to be held in each Financial Year. Also, one should note that the gap between 2 consecutive meetings cannot be more than 120 days. Declaration of Board Meetings is to be duly informed to each Director at least 7 days before the meeting date.</p>
          <p><strong>Director Disclosure:</strong> All Private Limited Companies in {cityName} are required to file Form MBP-1 to disclose their interest in other entities or companies annually on the 1st Board Meeting of every year.</p>
          <p><strong>Filing of Financial Statements:</strong>  Every Private Limited Company is required to file their financial statements i.e., Profit & Loss Account and Balance Sheet along with the Director’s Report by filing Form AOC-4 within 30 days of holding the Annual General Meeting.</p>
          <p><strong>Annual Returns Filing:</strong> Every Private Limited Company in {cityName} must file their Annual Returns within a time span of 60 days of holding the AGM. This can be done by filing MCA Form MGT-7. Failure to file Annual Returns levy a penalty from the due date of non-filing.</p>
          <p><strong>Director KYC:</strong> Directors having DIN or Director Identification Number with active status are required to file DIR-3 KYC yearly as per the Companies Rules. Failure to file Director KYC will lead to inactive DIN status on the MCA portal. Also, remember that no form of Private Limited Company Compliance can be filed if DIR-3 stands deactivated.</p>
          <p><strong>Form DIR-8:</strong> This form is required to be filed by every Director of a Private Limited Company during their appointment ascertaining that he or she is not disqualified from functioning as a Company’s Director.</p>
          <p><strong>Commencement of Business Certificate:</strong> This Certificate is required to be obtained by every company within 180 days of Company Incorporation. In case a Company fails to attain this Certificate.</p>
        </div>
        <div className='flex-4'>
        <Image alt="Mandatory Private Limited Company Compliance" className="Mandatory-img w-100" height={1082} loading="lazy" src={dft} />
      </div>
      </div>
    </div>
  )
  
}
