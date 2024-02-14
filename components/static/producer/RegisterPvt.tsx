import Image from 'next/image'
import React from 'react'
import call from '../../../assets/images/pvt-reg/call.svg'
import document from '../../../assets/images/pvt-reg/document.svg'
import submit from '../../../assets/images/pvt-reg/submit.svg'


export const RegisterPvt = () => {
  return (
    <div className='RegisterPvt' id='HowTo'>
      <p className='main-para'>To register your company online in India with us in just 3 steps:</p>
      <div className="RegisterPvt-container flex text-center m-auto w-80 mobile-flex-column">
        <div className="checklist-divs">
          <div>
            <Image height={125} width={125} src={call} alt="give us a call for more information"/>
          </div>
          <p>Contact us via form or give us a call</p>
        </div>
        <div className="checklist-divs">
          <div>
            <Image height={125} width={125} src={document} alt="You need to submit all the necessary documents"/>
          </div>
          <p>Submit all the necessary documents</p>
        </div>
        <div className="checklist-divs">
          <div>
            <Image height={125} width={125} src={submit} alt="Once all the formalities are completed you will get Certificate of Incorporation"/>
          </div>
          <p>Get your company incorporated within few days</p>
        </div>
      </div>
    </div>
  )
}
