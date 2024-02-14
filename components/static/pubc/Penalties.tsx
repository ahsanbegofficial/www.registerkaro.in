import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/pvt-reg/benefit.svg'

export const Penalties = () => {
  return (
    <div className='benefits flex w-80 m-auto' id='Benefits'>
      <div className='w-50'>
        <Image alt="Private Limited Company sample" className="benefits-img" loading="lazy" src={bft} />
      </div>
      <div className='w-50'>
        <p>As per the Companies Act, if the Company fails to comply with the legal provisions, then the Central Government will cancel the License for Section 8 Company. If the Company’s objectives are conducted fraudulently or in violation of the objectives for which it is established, the licence can be cancelled. In case a Company fails to comply with the provisions of the Companies Act, then the Company will be punishable with a fine not less than Rs. 10 lakhs & may extend to Rs. 1 crore. The Officers & Directors of the Company in default of the provisions will be punishable with a fine not less than Rs. 25,000 which may extend to Rs. 25 lakhs or both.</p>
      </div>
    </div>
  )
}
