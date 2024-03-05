
import Image from 'next/image'
import React from 'react'
import advantages from '../../../assets/images/static/partnership-firm/advantages.svg'
interface HeroProps {  cityName: string;}
export const Advantages = ({ cityName }: HeroProps) => {

  return (
    <div id='Advantages'>
    <h3 className='main-para mb-5'>The following are the benefits of Partnership Firm Registration in { cityName }:</h3>
    <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' >
        
        <div className='flex-7'>
          <p><strong>1:Easy to Incorporate:</strong> In comparison to other types of business organisations, forming a partnership firm is simple. By preparing the partnership deed and entering into the partnership agreement, the partnership firm can be formed. Other than the partnership agreement, no other documents are necessary. It is not even required to be registered with the Registrar of Firms. A partnership firm can be created and registered at a later date because registration is optional.</p>
          <p><strong>2:Less Compliance:</strong> In comparison to a corporation or an LLP, a partnership firm is subject to far fewer regulations. The partners do not require a Digital Signature Certificate (DSC) or a Director Identification Number (DIN), which are required for LLP company directors or designated partners. Any changes to the business can be readily implemented by the partners. Their operations are subject to legal constraints. It is less expensive to establish than a corporation or limited liability partnership. The dissolution of a partnership firm is simple and requires few legal requirements.</p>
          <p><strong>3:Quick Decision:</strong> Because there is no distinction between ownership and management in a partnership firm, decision-making is swift. All choices are made collaboratively by the partners and can be applied instantly. The partners have broad powers and actions that they can carry out on behalf of the company. They can even conduct transactions on behalf of the partnership firm without the agreement of the other partners.</p>
          <p><strong>4:Sharing of Profits and Losses:</strong> The partners split the firm’s profits and losses evenly. They can even choose their own profit and loss ratio in the partnership firm. They feel a sense of ownership and accountability because the firm’s profitability and turnover are based on their efforts. Any loss incurred by the firm will be shared equally or in accordance with the partnership deed ratio, alleviating the weight of loss on one individual or partner. They are jointly and severally accountable for the firm’s operations.</p>
        </div>
        <div className='flex-5'>
            <Image alt="Advantages of Partnership Firm Registration ,Easy to Incorporate Less Compliance Quick Decision Sharing of Profits and Losses" className="Advantages-img w-100" height={800} loading="lazy" src={advantages} />
        </div>
       
    </div>
  </div>
  )
}
