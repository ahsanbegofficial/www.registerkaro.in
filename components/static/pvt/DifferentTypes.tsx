import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/private-reg/differentType.svg'

export const DifferentTypes = () => {
  return (
    <div className='DifferentTypes w-80 m-auto' id='Different'>
      <div className='flex justify-content-center'>
        <Image alt="Types of business structures in india and these structures are private limited company, public limited company, one person company, limited and sole proprietorship" className="DifferentTypes-img w-100" height={382} loading="lazy" src={dft} />
      </div>
      <div>
        <p><strong>1. Private Limited Company: </strong>This Company is the most prevalent & popular type of corporate legal entity in India. Private Limited Company is a privately held business entity and Company is privately held by the shareholders & the maximum number of shareholders shouldn’t be more than 200.</p>
        <p><strong>2. Public Limited Company: </strong>This Company is a group of members which is incorporated under the Companies Act and it has a separate legal existence & the liability of its members are limited to the share they hold.</p>
        <p><strong>3. OPC or One Person Company: </strong>A One Person Company is a company established by only one person. A single person established & managed the Company. A One Person Company has all the features of a Company like limited liability, perpetual succession & a separate legal entity.</p>
        <p><strong>4. LLP or Limited Liability Partnership:</strong>Limited Liability Partnership is an alternative corporate business that gives the benefits of limited liability of a Company & the flexibility of a Partnership. It is liable to the full extent of its assets but liability of the partners is limited to their agreed contribution in the Limited Liability Partnership.</p>
        <p><strong>5. Sole Proprietorship: </strong>This is a business that is completely owned & controlled by a single person, a Company or a Limited Liability Partnership. There are no partners in the business. Sole Proprietorship is not a separate legal entity from the business owner. The business owner has unlimited liability that means the owner is personally liable for all the debts & losses of the Sole Proprietorship.</p>
      </div>
    </div>
  )
}