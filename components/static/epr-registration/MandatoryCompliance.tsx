import Image from 'next/image'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'
interface HeroProps {cityName: string;}
export const MandatoryCompliance  = ({ cityName }: HeroProps)  => {
  return (
    <div >
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse'>
      <div className='flex-7'>
        <p>The applicant is required to comply with the following mandatory requirements attached with the service of obtaining EPR registration:</p>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The applicant should comply with all the terms and conditions of the EPR registration granted by the CPCB or the SPCBs and should implement the EPR plan, the collection mechanism, the channelization mechanism, the documentation mechanism, the record keeping mechanism, the reporting mechanism and the verification mechanism as per the E-Waste (Management) Rules, 2016 or the Plastic Waste Management Rules, 2016 and the guidelines issued by the CPCB or the SPCBs.</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The applicant should comply with all the applicable laws and regulations related to the e-waste or plastic waste management and should obtain and maintain the consent to establish or the consent to operate or the authorization or the registration or the license or any other document that indicates the approval of the concerned regulatory authority for the collection and management of e-waste or plastic waste.</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The applicant should conduct regular monitoring of the e-waste or plastic waste parameters and should submit periodic reports on the e-waste or plastic waste performance and compliance to the CPCB or the SPCBs or the concerned regulatory authority as per the prescribed frequency and format.</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The applicant should conduct annual verification or validation of the e-waste or plastic waste performance and compliance by the CPCB or the SPCBs or any other authority and should submit the verification or validation report to the CPCB or the SPCBs or the concerned regulatory authority as per the prescribed frequency and format.</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The applicant should display the EPR registration and the verification or validation report or the e-waste or plastic waste statement or the e-waste or plastic waste performance report or the e-waste or plastic waste compliance report or any other document that indicates the performance and compliance of the applicant with respect to the e-waste or plastic waste management at a conspicuous place at the office of the applicant or the website of the applicant or the CPCB or the SPCBs.</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The applicant should cooperate with the inspection or verification or audit or investigation or inquiry or enforcement or adjudication or litigation or arbitration or mediation or conciliation or any other process or action initiated by the CPCB or the SPCBs or the concerned regulatory authority or the court or the tribunal or any other competent authority with respect to the e-waste or plastic waste management and should provide all the necessary information and documents and should implement all the directions or orders or decisions or awards or settlements or agreements or any other outcomes of such process or action.</li>
          </ul>
      </div>
      </div>
    </div>
  )
}