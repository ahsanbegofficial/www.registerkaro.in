import Image from 'next/image'
import importance_of_trust_registration from '../../../assets/images/static/trust-registration/Importance_of_Trust_Registration.svg'
interface HeroProps { cityName: string;}
export const ImportanceTrust = ({ cityName }: HeroProps) => {


  return (
    <div id='ImportanceTrust'> 
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column' >
    <div className='flex-4'>
        <Image alt="Importance of Trust Registration,  Regulatory Compliance,  Advancement of Non-Commercial Activities, Income Tax Benefits, Public Interest, Legal Authorization for Business Operations,  Contribution to Social Sectors" className="ImportanceTrust-img w-100" loading="lazy" src={importance_of_trust_registration} height={600} />
        </div>
      
    <div className='flex-7'>
    <p className='main-para'>Trust registration is imperative for the following reasons:</p>
      <p><strong>Regulatory Compliance:</strong> Trust registration ensures the proper regulation of trust activities, promoting adherence to laws and regulations governing their operation.</p>
      <p><strong>Advancement of Non-Commercial Activities: </strong>Trusts aspire to advance non-commercial activities in fields such as arts, science, education, and the environment, thereby contributing to the betterment of society.</p>
      <p><strong>Income Tax Benefits: </strong>Registered trusts can avail themselves of income tax benefits under sections 12A and 80G. This provision encourages donations and support for the initiatives undertaken by trusts.</p>
      <p><strong>Public Interest:</strong> Public trusts, designed to serve the general public, are required to register to ensure that their activities align with the best interests of the public.</p>
      <p><strong>Legal Authorization for Business Operations:</strong> Trust registration provides a legal license for conducting trust-related businesses, ensuring operations are carried out within the established legal framework.</p>
      <p><strong>Contribution to Social Sectors: </strong>Trusts play a pivotal role in the development of sectors such as education, healthcare, social welfare, and the environment, contributing to the overall well-being of society.</p>
      </div>
      </div>
       <p className='main-para'>By undergoing registration, trusts not only fulfill their intended objectives but also gain legal recognition, opening avenues for government benefits and opportunities.</p>
    </div>
  )
}