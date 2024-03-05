import Image from 'next/image'
import a_minimum_of_two_members_must_be_partners from '../../../assets/images/static/partnership-firm/a_minimum_of_two_members_must_be_partners.svg'
import the_main_place_of_business from  '../../../assets/images/static/partnership-firm/the_main_place_of_business.svg'
import the_creation_of_a_partnership_agreement from '../../../assets/images/static/partnership-firm/the_creation_of_a_partnership_agreement.svg'
interface HeroProps {  cityName: string;}
export const WhatIs = ({ cityName }: HeroProps) => {
  return (
    <div className='checklist' id='WhatIs'>
      <p className='main-para'>It’s a relationship between two people who have agreed to share the business profits carried on by all/any one of them acting for all as mentioned in Section 4 of the Indian Partnership Act. Hence, a Partnership includes 3 main elements:</p>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={a_minimum_of_two_members_must_be_partners} alt="A Partnership must be an outcome of an agreement between 2 or more individuals"/>
          </div>
          <p>A Partnership must be an outcome of an agreement between 2 or more individuals</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={the_main_place_of_business} alt="The business or a company must be run by all or any of them representing the rest"/>
          </div>
          <p>The business or a company must be run by all or any of them representing the rest</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={the_creation_of_a_partnership_agreement} alt="The agreement must be drafted to share the business profits."/>
          </div>
          <p>The agreement must be drafted to share the business profits.</p>
        </div>
      </div>
    </div>
  )
}
