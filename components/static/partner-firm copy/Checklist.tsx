import Image from 'next/image'
import a_maximum_of_twenty_partners_is_permitted from '../../../assets/images/static/partnership-firm/a_maximum_of_twenty_partners_is_permitted.svg'
import a_minimum_of_two_members_must_be_partners from '../../../assets/images/static/partnership-firm/a_minimum_of_two_members_must_be_partners.svg'
import checklist from '../../../assets/images/static/partnership-firm/checklist.svg'
import choosing_an_appropriate_name from '../../../assets/images/static/partnership-firm/choosing_an_appropriate_name.svg'
import the_creation_of_a_partnership_agreement from '../../../assets/images/static/partnership-firm/the_creation_of_a_partnership_agreement.svg'
import the_firm_PAN_card_and_bank_account from '../../../assets/images/static/partnership-firm/the_firm_PAN_card_and_bank_account.svg'
import the_main_place_of_business from '../../../assets/images/static/partnership-firm/the_main_place_of_business.svg'

export const Checklist = () => {
  return (
    <div className='checklist' id='Checklist'>
      <div className='flex-5'>
          <Image alt="The vital checklist for Partnership Firm Registration" className="benefits-img w-100" height={600} loading="lazy" src={checklist} />
      </div>
      <p className='main-para'>Following is the vital checklist for Partnership Firm Registration:</p>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={the_creation_of_a_partnership_agreement} alt="The creation of a partnership agreement"/>
          </div>
          <p>The creation of a partnership agreement.</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={a_minimum_of_two_members_must_be_partners} alt="A minimum of two members must be partners."/>
          </div>
          <p>A minimum of two members must be partners.</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={a_maximum_of_twenty_partners_is_permitted} alt="A maximum of twenty partners is permitted."/>
          </div>
          <p>A maximum of twenty partners is permitted.</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={choosing_an_appropriate_name} alt="Choosing an appropriate name."/>
          </div>
          <p>Choosing an appropriate name.</p>
        </div>
      </div>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={the_main_place_of_business} alt="The main place of business."/>
          </div>
          <p>The main place of business.</p>
        </div>
         <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={the_firm_PAN_card_and_bank_account} alt="The firm’s PAN card and bank account."/>
          </div>
          <p>The firm’s PAN card and bank account.</p>
        </div>
      </div>
     
    </div>
  )
}
