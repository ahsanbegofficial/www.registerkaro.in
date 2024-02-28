import Image from 'next/image'
import types_of_subsidiaries_in_india from '../../../assets/images/static/Indian_subsidiary_registration/types_of_subsidiaries_in_india.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'
export const TypeOfSubs = () => {
  return (
    <div className='TypeOfSubs flex w-80 m-auto mobile-flex-column-reverse' id='TypeOfSubs'>
      <div className='flex-5'>
        <div className='flex-3'>
        <p>India recognizes two primary types of subsidiaries:</p>
      </div>
        <h3>Wholly Owned Subsidiary</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> In a wholly-owned subsidiary, the parent company holds complete ownership, owning 100% of the subsidiary’s shares. However, it’s vital to understand that wholly owned subsidiaries can only be formed in sectors that permit 100% Foreign Direct Investment (FDI).</li>
        </ul>
        <h3>Joint Venture Subsidiary Company:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />It is jointly operated by 2 or more companies. For instance, such companies collaborate on various projects & rule the market together. Additionally the ownership & control of subsidiary companies are shared with the parent companies.</li>
        </ul>
        <h3>LLP for Subsidiary Compan:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />It’s a type Subsidiary Company formed as a Partnership. In addition, this type of Subsidiary provides liability protection to its partners, which doesn’t make them personally liable for debts/obligations of the Subsidiary Company.</li>
        </ul>
        <p >Before initiating the establishment of a subsidiary in India, obtaining approval from the Reserve Bank of India is a crucial prerequisite. This regulatory step ensures adherence to the country’s foreign investment regulations and safeguards the interests of all stakeholders involved.</p>
      </div>
      <div className='flex-3'>
        <Image alt="Types of Subsidiaries in India,Wholly Owned Subsidiary,Joint Venture Subsidiary Company,LLP for Subsidiary Compan" className="TypeOfSubs-img w-100" loading="lazy" height={500} src={types_of_subsidiaries_in_india} />
        </div>
    </div>
  )
}