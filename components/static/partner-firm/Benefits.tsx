import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/partnership-firm/partnership.svg'

export const Benefits = () => {
  return (
    <div className='m-auto w-80' id='Benefits'>
      <h3 className='main-para mb-0'>The Indian Partnership Act makes registration of a partnership firm optional rather than mandatory. It is entirely at the discretion of the couples and is entirely voluntary. The firm can be registered at the moment of its formation or incorporation, or at any time throughout the partnership’s operation.</h3>
    <div className='benefits flex w-80 m-auto mobile-flex-column' >
     <div className='flex-5'>
          <Image alt="The Indian Partnership Act makes registration of a partnership firm optional rather than mandatory. It is entirely at the discretion of the couples and is entirely voluntary. The firm can be registered at the moment of its formation or incorporation, or at any time throughout the partnership’s operation" className="Benefits-img w-100" height={420} loading="lazy" src={bft} />
      </div>
      <div className='flex-5 '>
        <p>However, it is usually better to register the partnership firm because a registered partnership firm has additional rights and benefits over unregistered firms. A partnership firm enjoys the following advantages:</p>
        <p><strong>1: </strong>A partner may sue any other partner or the partnership firm to enforce his contractual rights against the partner or the firm. Partners in an unregistered partnership firm cannot sue the firm or other partners to enforce their rights.</p>
        <p><strong>2: </strong>The registered firm may launch litigation against any third party to enforce a contractual right. An unregistered firm cannot file a lawsuit against a third party to enforce a right. Any third party, however, may initiate a lawsuit against the unregistered firm.</p>
        <p><strong>3: </strong>To enforce a contractual entitlement, the registered firm may seek set-off or other legal action. In any proceedings brought against it, the unregistered firm cannot claim to set off.</p>  
      </div>
    
      </div>
    </div>
  )
}
