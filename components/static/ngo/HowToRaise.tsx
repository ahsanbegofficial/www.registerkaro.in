import Image from 'next/image'
import raise_funds_for_ngo from '../../../assets/images/static/ngo/raise_funds_for_ngo.svg'
interface HeroProps { cityName: string; }
export const HowToRaise = ({ cityName }: HeroProps) => {


  return (
    <div className='Classification flex w-80 m-auto mobile-flex-column' id='HowToRaise'>
      <div className='flex-5'>
        <Image alt="How to Raise Funds for NGOs?" className="HowToRaise-img w-100" loading="lazy" src={raise_funds_for_ngo} height={480} />
      </div>
      <div className='flex-5 pt-3'>
        <p><strong>Crowdfunding:</strong> Solicit small donations from a large audience through online platforms.</p>
        <p><strong>Grants:</strong> Apply for grants from government agencies, private foundations, and international organizations.</p>
        <p><strong>Corporate Partnerships: </strong>Partner with companies sharing your values for sponsorship and support.</p>
        <p><strong>Fundraising Events:</strong> Organize events like charity walks, concerts, auctions, or online campaigns to attract donors.</p>
        <p><strong>Individual Appeals:</strong> Appeal to individuals through online donation portals or direct outreach.</p>
        <p><strong>Social Media Outreach:</strong> Leverage social media platforms to create awareness and reach potential donors.</p>
      </div>

    </div>
  )
}