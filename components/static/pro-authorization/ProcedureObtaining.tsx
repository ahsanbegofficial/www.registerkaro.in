import Image from 'next/image'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'
interface HeroProps {
    cityName: string;
}
export const ProcedureObtaining = ({ cityName }: HeroProps) => {
  return (
    <div id='ProcedureObtaining'>

     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse'>
      <div className='flex-7'>
        <p>The procedure for obtaining PRO authorization from the CPCB is as follows:</p>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The applicant should prepare an application form in the prescribed format (Form 1B) along with a declaration and an undertaking that the information provided is true and correct and that the applicant will comply with the E-Waste (Management) Rules, 2016 and the guidelines issued by the CPCB.</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The applicant should prepare an EPR plan containing the detailed plan of the applicant for achieving the EPR targets set by the CPCB for the producers for whom the PRO will take the responsibility of collecting and channelizing the e-waste. The EPR plan should also contain the details of the collection mechanism, the channelization mechanism, the documentation mechanism, the record-keeping mechanism, the reporting mechanism and the verification mechanism to be adopted by the applicant. The EPR plan should be prepared as per the guidelines and formats issued by the CPCB.</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The applicant should submit the application form, the EPR plan and the relevant documents and information to the CPCB along with the application fee of Rs. 1 lakh.</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The CPCB will validate and evaluate the application and the documents and information submitted by the applicant and will give feedback, comments and suggestions to the applicant within 60 days of the receipt of the application.</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The applicant should respond to the feedback, comments and suggestions of the CPCB and should make the necessary changes or modifications in the application or the documents or the information as required by the CPCB.</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The CPCB will appraise the revised application and the documents and information submitted by the applicant and will give a recommendation on whether the PRO authorization should be granted or not within 30 days of the receipt of the revised application.</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The CPCB will grant the PRO authorization to the applicant after recording the reasons for such a decision in writing. The PRO authorization will be valid for a period of five years from the date of issue or as specified by the CPCB.</li>
          </ul>
        <ul className='tick list-unstyled'> 
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The CPCB will issue a certificate of registration to the applicant along with a draft summary of the product’s characteristics, the package leaflet, and the proposed text for the packaging.</li>
          </ul>
      </div>
      </div>
    </div>
  )
}