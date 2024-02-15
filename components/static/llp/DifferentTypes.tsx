import Image from 'next/image'
import React from 'react'
import Different from '../../../assets/images/static/llp-reg/Different.svg'

export const DifferentTypes = () => {
  return (
    <div className='DifferentTypes flex w-80 m-auto mobile-flex-column-reverse' id='DifferentTypes'>
      <div className='flex-5'>
        <p>Following is the list of all types of LLP Forms in India:</p>
        <p><strong>1. FiLLiP Form: </strong>This form is used for the incorporation of LLP in India.</p>
        <p><strong>2. Run LLP: </strong> This form is used for reserving a name for the LLP.</p>
        <p><strong>3. Form 3: </strong>Details regarding LLP Agreement.</p>
        <p><strong>4. Form 8: </strong>Statement of Account & Solvency.</p>
        <p><strong>5. Form 11: </strong>Annual Return of LLP.</p>
        <p><strong>6. Form 24: </strong>This is the application to the ROC for striking off the name of LLP.</p>
      </div>
      <div className='flex-5'>
        <Image alt="6 different types of LLP Forms required at the time of LLP Registration" className="DifferentTypes-img w-100" height={382} loading="lazy" src={Different} />
      </div>
    </div>
  )
}
