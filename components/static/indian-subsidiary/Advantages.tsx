import Image from 'next/image';
import advantages_of_indian_subsidiary_registration from '../../../assets/images/static/Indian_subsidiary_registration/advantages_of_indian_subsidiary_registration.svg';
interface HeroProps {cityName: string;}
export const Advantages = ({ cityName }: HeroProps) => {


  return (
    <div className='Classification flex w-80 m-auto mobile-flex-column' id='Advantages'>
      <div className='flex-3'>
        <Image alt="Advantages of Indian Subsidiary Registration,Indian Subsidiary Registration in India comes with numerous compelling advantages,Entry into the Indian Market,Foreign Direct Investment (FDI) in India" className="Advantages-img w-100" loading="lazy" height={920} src={advantages_of_indian_subsidiary_registration} />
      </div>
      <div className='flex-7'>
          <p>Indian Subsidiary Registration in {cityName} comes with numerous compelling advantages:</p>
          <p><strong>1: Entry into the Indian Market:</strong> {cityName}’s competitive business landscape offers a multitude of investment opportunities that attract foreign entrepreneurs to establish their subsidiary companies in the country.</p>
          <p><strong>2: Foreign Direct Investment (FDI) in {cityName}:</strong> FDI involves investments by foreign companies in Indian private enterprises through share subscriptions or acquisitions. In 2020, the Indian government mandated prior approval for investments from countries sharing a border with {cityName}, making the registration of Indian subsidiaries an appealing option for foreign investors.</p>
          <p><strong>3: Perpetual Succession:</strong> The concept of perpetual succession ensures that a company’s existence remains unaffected by events such as changes in management, transfers of membership, or insolvency. The company operates seamlessly, providing stability and continuity.</p>
          <p><strong>4: Limited Liability:</strong> Limited liability is a significant advantage that encourages individuals to choose company formation. This principle extends to Indian subsidiary companies, safeguarding the personal assets of shareholders and directors. The company bears responsibility for its debts to third parties, shielding the personal assets of its stakeholders.</p>
          <p><strong>5: Scope of Diversification:</strong> Establishing an Indian subsidiary company provides a strategic avenue for foreign businesses to expand operations, contributing to the growth of the Indian economy. It also introduces a variety of goods and services, fostering healthy competition.</p>
          <p><strong>6: Separate Legal Identity:</strong> According to the Companies Act, a company is recognized as a distinct legal entity separate from its shareholders and directors. This legal status empowers the company to engage in agreements with other entities, initiate legal actions, and respond to allegations before the judicial system in its own name.</p>
          <p><strong>7: Property Ownership and Rental:</strong> As a legal entity, a subsidiary company has the authority and right to purchase or rent properties in {cityName} for its business activities. Acquiring such properties in the company’s name aligns with the principle of perpetual succession and helps prevent potential conflicts among company members.</p>
      </div>
    </div>
  )
}
