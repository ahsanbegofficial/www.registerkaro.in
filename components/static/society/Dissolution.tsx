import Image from 'next/image'
import bft from '../../../assets/images/static/society-registration/dissolution_of_a_registered_society.svg'
interface HeroProps { cityName: string;}

export const Dissolution = ({ cityName }: HeroProps) => {
  return (
    <div  id='Dissolution'>
      <p className='main-para'>As per the provisions of the Society Registration Act, the dissolution of a society registered under the Act can be initiated by either the Registrar of Cooperative Societies or at least one-tenth of the society members through a court of competent jurisdiction. The court, upon due consideration, may decree the dissolution of the society based on various grounds, including:</p>
      <div className='benefits flex w-80 m-auto mobile-flex-column' id='Registration'>
            <div className='flex-5'>
              <Image alt="As per the provisions of the Society Registration Act, the dissolution of a society registered under the Act can be initiated by either the Registrar of Cooperative Societies " className="Dissolution-img w-100" height={460} loading="lazy" src={bft} />
            </div>
            <div className='flex-5 pt-5'>
                <p><strong>1: Violation of Act Provisions: </strong>If the society is found to have contravened any stipulation outlined in the Act.</p>
                <p><strong>1: Inadequate Society Membership:</strong> If the number of society members drops below seven, breaching the prescribed minimum.</p>
                <p><strong>1: Extended Period of Inactivity:</strong> Should the society remain non-functional for a period exceeding three years.</p>
                <p><strong>1: Financial Incapacity: </strong>In the event that the society is unable to settle its debts or fulfill its financial obligations.</p>
                <p><strong>1: Cancellation of Registration due to Public Policy Opposition:</strong> If the society’s registration is revoked due to activities or proposed actions conflicting with public policy.</p>
            </div>
        </div>
    </div>
  )
}
