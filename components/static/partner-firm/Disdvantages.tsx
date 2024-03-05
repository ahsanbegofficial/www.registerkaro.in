
import Image from 'next/image'
import disadvantages from '../../../assets/images/static/partnership-firm/partnershipt_disadvantage_upd.svg'
interface HeroProps {  cityName: string;}
export const Disdvantages = ({ cityName }: HeroProps) => {

  return (
    <div id='Disdvantages'>
    <h3 className='main-para mb-5'>The following are some disadvantages of Partnership Firm Registration:</h3>
    <div className='benefits flex w-80 m-auto mobile-flex-column' >
       <div className='flex-5'>
        <Image alt="Disadvantages of Partnership Firm Registration Unlimited Liability No Perpetual Succession Limited Resources Difficult to Raise Funds" className="Disdvantages-img w-100" height={700} loading="lazy" src={disadvantages} />
        </div>
        <div className='flex-7'>
          <p><strong>1: Unlimited Liability:</strong> The major disadvantage of a partnership firm is that the partners’ liability is unlimited. The partners must cover the firm’s loss out of their personal estate. In contrast, the liability of shareholders or partners in a business or LLP is limited to the number of their shares. The liability caused by one of the partnership firm’s partners must be borne by all of the firm’s partners. If the firm’s assets are insufficient to satisfy the obligation, the partners must repay the creditors with their personal property</p>
          <p><strong>2: No Perpetual Succession:</strong> A partnership firm, unlike a corporation or an LLP, does not have perpetual succession. This means that the death of a partner or the insolvency of all but one of the partners will bring an end to a partnership firm. It can also be dissolved if one of the partners provides the other partners notice of the firm’s dissolution. As a result, the partnership firm can dissolve at any time</p>
          <p><strong>3: Limited Resources:</strong> A partnership firm can have a maximum of 20 participants. The number of partners is limited, and so the capital invested in the firm is similarly limited. The firm’s capital is the total of the amounts invested by each partner. This limits the firm’s resources, and the partnership firm cannot pursue large-scale projects</p>
          <p><strong>4: Difficult to Raise Funds:</strong> Raising capital is challenging since the partnership firm lacks perpetual succession and a separate legal entity. In comparison to a company or an LLP, the firm has fewer possibilities for generating capital and expanding its operations. People have less trust in the firm because there are no strong legal requirements. The firm’s financial statements do not have to be made public. As a result, borrowing money from outside people is difficult</p>
        </div>
       
        </div>
    </div>
  )
}
