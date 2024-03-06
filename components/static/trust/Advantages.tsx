import Image from 'next/image'
import advantages_of_trust_registration from '../../../assets/images/static/trust-registration/advantages_of_trust_registration.svg'

interface HeroProps { cityName: string;}
export const Advantages = ({ cityName }: HeroProps)=> {
 
  return (
    <div id='Advantages'> 
      <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' >
        <div className='flex-7'>
          <p>The process of trust registration provides several benefits to both individuals and organizations. Here are the key advantages:</p>
          <p><strong>Charitable Engagement:</strong> Establishing a Charitable Trust allows individuals to benefit themselves, their beneficiaries, and their chosen charitable causes.</p>
          <p><strong>Tax Exemptions:</strong> Registered trusts in {cityName} have access to tax exemptions provided by the Income Tax Department, enabling them to benefit from tax relaxations.</p>
          <p><strong>Financial Assistance:</strong> Registered trusts contribute essential financial support to the underprivileged and the public through various charitable activities.</p>
          <p><strong>Legal Safeguards:</strong> The Indian Trusts Act of 1882 ensures comprehensive legal protection, safeguarding the trust’s legal standing against unnecessary claims.</p>
          <p><strong>Family Wealth Management:</strong> Trusts assist in allocating specific assets, preserving and managing family wealth that may be challenging to divide individually.</p>
          <p><strong>Probate Avoidance:</strong> Trust registration facilitates the transfer of assets to heirs without probate, streamlining the asset distribution process.</p>
          <p><strong>Immigration/Emigration Benefits:</strong> Establishing a trust proves advantageous during relocation, offering benefits such as tax mitigation, asset safeguarding, and flexibility in asset organization.</p>
          </div>
          <div className='flex-3'>
        <Image alt="Advantages of Trust Registration,  Charitable Engagement, Tax Exemptions, Financial Assistance, Legal Safeguards, Family Wealth Management, Probate Avoidance, Immigration/Emigration Benefits, Establishing a trust proves advantageous during relocation, offering benefits such as tax mitigation, asset safeguarding, and flexibility in asset organization." className="Advantages-img w-100" loading="lazy" src={advantages_of_trust_registration} height={600} />
        </div>

      </div>
      <p className='main-para'>By undergoing trust registration, individuals can enjoy these benefits, encompassing financial advantages, legal protection, and flexibility in asset management.</p>
    </div>
  )
}