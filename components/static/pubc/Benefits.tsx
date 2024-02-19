import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/public-reg/Benefit.svg'

export const Benefits = () => {
  return (
    <div className='benefits flex w-80 m-auto mobile-flex-column' id='Benefits'>
        <div className='flex-3'>
        <Image alt="Benefits of Public Limited Company Registration" className="benefits-img w-100" height={900} loading="lazy" src={bft} />
      </div>
      <div className='flex-7'>
        <p>Following are the benefits of Public Limited Company Registration in India:</p>
        <p><strong>1. Limited Liability Protection:</strong></p>
        <p>Private Limited Company Registration provides shareholders with limited liability, safeguarding their personal assets in case of company debts or liabilities.</p>
        <p><strong>2. Capital Generation:</strong></p>
        <p>PLCs can raise capital by issuing shares to the public, allowing them to gather funds for business expansion and investment opportunities.</p>
        <p><strong>3. Credibility and Market Reputation:</strong></p>
        <p>PLC status enhances the company's reputation, instills investor confidence, and improves brand perception, leading to potential business growth and partnerships.</p>
        <p><strong>4. Share Transferability:</strong></p>
        <p>PLCs offer flexibility in buying and selling shares, making it easier to transfer ownership, attract investors, and facilitate liquidity in the stock market.</p>
        <p><strong>5. Tax Advantages:</strong></p>
        <p>PLCs often enjoy certain tax benefits and incentives, providing opportunities for long-term business planning and optimizing tax obligations.</p>
        <p><strong>6. Access to Borrowing:</strong></p>
        <p>PLCs have increased credibility, enabling them to secure loans and credit facilities from financial institutions for business expansion and development.</p>
        <p><strong>7. Employee Incentives:</strong></p>
        <p>PLCs can offer employees stock options and share ownership plans, fostering employee loyalty, and motivation, and aligning their interests with the company's success.</p>
        <p><strong>Prestige and Market Positioning:</strong></p>
        <p>PLC status adds prestige, signaling a higher level of compliance, transparency, and corporate governance, attracting business partners and customers.</p>
        <p><strong>Growth Potential:</strong></p>
        <p>PLCs have the potential for rapid growth and expansion, attracting skilled professionals, accessing better resources, and engaging in strategic partnerships or mergers and acquisitions.</p>
      </div>
    </div>
  )
}
