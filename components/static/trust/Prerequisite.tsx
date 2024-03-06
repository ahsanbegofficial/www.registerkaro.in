import Image from 'next/image'
import prerequisites_for_trust_registration from '../../../assets/images/static/trust-registration/prerequisites_for_trust_registration.svg'
interface HeroProps { cityName: string;}

export const Prerequisite = ({ cityName }: HeroProps) => {
 
  
  return (
    <div id='Prerequisite'> 
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column' >
        <div className='flex-3'>
        <Image alt="Prerequisites for Trust Registration,  Minimum Number of Founders, Compliance with the Indian Trusts Act of 1882, Disqualification Status, Conformity with Legal Objectives, Fair and Just Conduct, Alignment with Public Interest, Non-Harmful Activities, Consistency with Stated Objectives, Appropriately Drafted Trust Deed,Validity of Multiple Objectives" className="Prerequisites-img w-100" loading="lazy" src={prerequisites_for_trust_registration} height={720} />
          </div>
          <div className='flex-7'>
            <p>To qualify for trust registration, the following conditions must be fulfilled:</p>
            <p><strong>Minimum Number of Founders:</strong> Trust must be established by at least two or more individuals.</p>
            <p><strong>Compliance with the Indian Trusts Act of 1882:</strong> The trust must be formed in accordance with the provisions specified in the Indian Trusts Act of 1882.</p>
            <p><strong>Disqualification Status:</strong> None of the parties involved should be disqualified under any prevailing law in {cityName}.</p>
            <p><strong>Conformity with Legal Objectives:</strong> The objectives of the trust must not contravene any existing laws in {cityName}.</p>
            <p><strong>Fair and Just Conduct:</strong> The trustee must conduct their activities in a fair and just manner.</p>
            <p><strong>Alignment with Public Interest:</strong> The formation of the trust should not be contrary to public interest or any other applicable laws.</p>
            <p><strong>Non-Harmful Activities:</strong> The activities carried out by the trust must not cause harm to any individual.</p>
            <p><strong>Consistency with Stated Objectives:</strong> The trust activities should align with the objectives outlined in the trust deed.</p>
            <p><strong>Appropriately Drafted Trust Deed:</strong> The trust deed must be drafted appropriately, reflecting the genuine interests of the parties involved in forming the trust.</p>
            <p><strong>Validity of Multiple Objectives:</strong> If the trust has more than two purposes, both purposes must be valid. If one goal is reasonable and the other is invalid, trust cannot be formed.</p>
          </div>

    </div>
  </div>
  )
}