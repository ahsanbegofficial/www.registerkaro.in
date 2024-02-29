import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/private-reg/benefit.svg'

interface HeroProps {
  cityName: string;
}
export const Benefits = ({ cityName }: HeroProps) => {
  return (
    <div className='benefits flex w-80 m-auto mobile-flex-column' id='Benefits'>
      <div className='flex-5'>
        <Image alt="The benefits of private limited company in india and these are Separate Legal Entity, Ease in Raising Funds, Limited Liability, Easy Transferable, Limited Liability and ESOP" className="benefits-img w-100" height={600} loading="lazy" src={bft} />
      </div>
      <div className='flex-5'>
        <p>Following are the benefits of Private Limited Company Registration in India:</p>
        <p><strong>1. Separate Legal Entity:</strong></p>
        <p>The Company enjoys a separate legal existence from the owners and it can enter into its own assets, contracts & sue the 3rd parties in its own name. As a separate entity, it has a perpetual existence even beyond the members’ lifetime.</p>
        <p><strong>2. Ease in Raising Funds:</strong></p>
        <p>Being a highly compliant structure, banks prefer to issue loans easily to Companies. Private Limited Company registration  offers key benefits like the ease in limited liability protection for owners & ownership transfer.</p>
        <p><strong>3. Limited Liability:</strong></p>
        <p>By incorporating as a Private Limited Company in India, owners can limit their liabilities to their capital contribution commitment. Their personal assets are safeguarded from any big loss or debt in the business, unlike Proprietorship Firms & Partnership.</p>
        <p><strong>4. Easy Transferable:</strong></p>
        <p>One of the main benefits of Private Limited Company Registration is the share can be easily transferred to the other person without any complications & hassle.</p>
        <p><strong>5. ESOP (Employee Stock Option Plans):</strong></p>
        <p>Private Company can issue Employee Stock Option Plans to its employees subject to the limitation of the number of shareholders.<strong className='italic'> Section 61 of the Companies Act </strong>enables a Private Company to issue Employee Stock Option Plans to its employees.</p>
      </div>
    </div>
  )
}