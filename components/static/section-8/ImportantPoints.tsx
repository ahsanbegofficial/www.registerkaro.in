import Image from 'next/image'
import pvtReg from '../../../assets/images/static/private-reg/pvt-reg.svg'

interface HeroProps {
  cityName: string;
}

export const ImportantPoints = ({ cityName }: HeroProps) => {
  return (
    <div className='ImportantPoints flex w-80 m-auto mobile-flex-column' id='ImportantPoints'>
      <div className='flex-3'>
      <Image alt="Important Points Regarding Section 8 Company" className="ImportantPoints-img w-100" height={382} loading="lazy" src={pvtReg}/>
      </div>
      <div className='flex-7'>
        <p>Following are some vital points about Section 8 Company in {cityName}:</p>
        <ol>
          <li>NGOs in {cityName} can be registered under Registrar of Societies or as a Non-Profit entity under Section 8 Company of the Companies Act, 2013</li>
          <li>Compliance with Companies Act is compulsory for Section 8 Company, including Filing returns with the ROCs, maintaining books of accounts, & complying with GST and IT Act Regulations</li>
          <li>Section 8 Company in {cityName} cannot utilise profits for purposes other than charitable objectives & cannot distribute them among shareholders of the Company</li>
          <li>Any alterations to the Charter Documents like AoA & MOA require consent from the Government</li>
          <li>Section 8 Companies are identical to the former Section 25 Companies Under the Companies Act 1956 and now, they are recognized as such under the prevailing legislation</li>
        </ol>
      </div>
    </div>
  )
}
