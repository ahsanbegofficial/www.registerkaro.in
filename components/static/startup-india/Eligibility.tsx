import Image from 'next/image'
import eligibility_criteria_for_the_registration from '../../../assets/images/static/startup_india_registration/eligibility_criteria_for_the_registration.svg'
interface HeroProps {cityName: string;}
export const Eligibility = ({ cityName }: HeroProps) => {
  return (
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' id='Eligibility'>
     
      <div className='flex-5'>
        <div className='flex-3'>
        <p>Following is the eligibility criteria for Startup {cityName} Registration or DPIIT Certificate of Recognition:</p>
      </div>
        <p><strong>1: </strong>The Startup {cityName} Registration Certificate or DPIIT Certificate of Recognition is provided for the company which is registered as an LLP, Private Limited Company, or a registered Partnership Firm.</p>
        <p><strong>2: </strong>To get the Registration Certificate, the firm should have an annual turnover of less than Rs. 100 crores for any of the previous Financial Year.</p>
        <p><strong>3: </strong>The entity or company should be working towards improvement/development of a product, service, or process.</p>
        <p><strong>4: </strong>The entity or company should have a scalable business model with high potential for the creation of wealth & employment. The company or firm should have the capability to generate employment or create wealth.</p>
        <p><strong>5: </strong>The period of Company’s operations or existence shouldn’t exceed 10 years from the date of formation.</p>
        <p><strong>6: </strong>To get Startup {cityName} Registration Certificate or DPIIT Certificate of Recognition, the company shouldn’t have been registered by splitting up/recreating an already existing entity.</p>
        <p><strong>7: </strong>Applicants shouldn’t have defaulted with any financial institution in the past.</p>
      </div>
      <div className='flex-3'>
        <Image alt="Eligibility Criteria for the Registration,The Startup India Registration Certificate or DPIIT Certificate of Recognition ,To get the Registration Certificate, the firm should have an annual turnover of,The entity or company should be working towards improvement/development of a ,The entity or company should have a scalable business model with high potential,The period of Company’s operations or existence shouldn’t exceed 10 years from ,To get Startup India Registration Certificate or DPIIT Certificate of ,Applicants shouldn’t have defaulted with any financial institution in the past." className="Eligibility-img w-100" loading="lazy" height={450} src={eligibility_criteria_for_the_registration} /></div>
    </div>
  )
}