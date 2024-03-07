import Image from 'next/image';
import bft from "../../../assets/images/static/society-registration/why_to_go_for_society_registration.svg";
interface HeroProps { cityName: string;}
export const WhySocietyRegi = ({ cityName }: HeroProps) => {
 
  return (

      <div  id='WhySocietyRegi'>
        <p className='main-para'>Society registration offers you wide range of benefits which brings more ease in the operation of the society. Such range of benefits include:</p>
         <div className='benefits flex w-80 m-auto mobile-flex-column' id='Registration'>
              <div className='flex-5'>
                <Image alt="Society registration offers you wide range of benefits which brings more ease in the operation of the society. Such range of benefits include" className="WhySocietyRegi-img w-100" height={720} loading="lazy" src={bft} />
              </div>
          <div className='flex-5'>
          <p><strong>Legal Status</strong>
              Society upon registration receives the legal status of being a separate entity working in furtherance of certain objective that is different from that of the personal interest of those operating it. Once registration is successful, Society enjoys all the benefits of that of a legal entity and an artificial person.</p>

              <p><strong>Access to funds</strong>
              When society attains legal status in the market, it becomes convenient to access funds and investors as the registration creates authenticity and reliability of the society being original and not a hoax conduct.</p>

              <p><strong>Limited Liability</strong>
              Like many other forms of company registered under the companies Act, the registered society also holds certain level of limited liability when it comes to debt recovery from its operators or employees running the operations.</p>

              <p><strong>Credibility & Trust</strong>
              Registration of the society leads to creation of trust and reliability in the market which brings the association of people. It is expected that there can be many such organization operating for person dishonest interest, therefore, to segregate the honest societies from the bunch of bogus ones, registration plays a crucial role.</p>

              <p><strong>Benefits & Tax Exemptions</strong>
              Society, being a legal separate entity operating in the welfare of the people, enjoys wide range of benefits and tax exemptions offered by the government. However, these benefits and exemptions can only be availed if the society is</p>
          </div>
        </div>
      </div>
  
  )
}
