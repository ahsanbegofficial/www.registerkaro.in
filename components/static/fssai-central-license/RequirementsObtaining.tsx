import Image from 'next/image';
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg';
interface HeroProps { cityName: string;}
export const RequirementsObtaining  = ({ cityName }: HeroProps) => {
  return (
    <div id='RequirementsObtaining'>
      
<p className='main-para'>The FSSAI Central License, a crucial legal authorization granted by the Food Safety and Standards Authority of {cityName} (FSSAI), is available to food businesses meeting specific criteria:</p>
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse'>
      <div className='flex-7'>
        <h3>Mandatory Criteria:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Annual turnover exceeding Rs 20 crores, or</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Operations spanning multiple states, or</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Monthly or annual production surpassing the prescribed threshold limit.</li>
          </ul>
        <h3>Special Conditions for Application:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Initiating a business in Nutraceuticals and Health Supplements.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Engaged in transportation with a fleet of more than 100 vehicles.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Operating a hotel with a 5-star or 7-star rating.</li>
          </ul>
        <h3>Additional Criteria for FSSAI Central License Include:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Dairy facilities producing milk solids with an annual production of 50,000 liters or 2,500 megatons.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Processing facilities involved in vegetable oil production with a daily volume of 2 MT.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Slaughter facilities with a daily capacity of:</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />50 large animals,</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />150 small animals,</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />1,000 poultry birds.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Meat processing facilities with a daily production capacity of 50 KG or 150 megatons.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Food processing facilities with a daily production volume of 2 megatons.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Food businesses engaged in shipping food articles abroad.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Facilities with refrigeration or cold storage having a storage capacity of 1,000 megatons or more.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Wholesalers in the food business with an annual turnover exceeding Rs 30 crores.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Retailers and distributors of food articles with an annual turnover exceeding Rs 20 crores.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Catering services or food marketing businesses with a yearly turnover exceeding Rs 20 crores.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Restaurants and eating houses with an annual turnover of INR 20 Crore.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Food catering services operating in government-based agencies, including seaports, airports, etc.</li>
          </ul>
      </div>
      </div>
      <p className='main-para'>Adhering to these comprehensive criteria ensures that businesses obtain the FSSAI Central License, emphasizing compliance with food safety standards and regulatory measures.</p>
    </div>
  )
}