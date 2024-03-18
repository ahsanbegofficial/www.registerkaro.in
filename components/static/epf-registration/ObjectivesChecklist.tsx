import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/epf-registration/Important_details_need.svg'



export const ObjectivesChecklist = () => {
  return (
    <div id='ObjectivesChecklist'>
      <p className='main-para'>Following are some important details need to provide for EPF Registration:</p>
      <div className="checklist flex w-80 m-auto mobile-flex-column-reverse">
        <div className='flex-5  pt-5'>
          <p className='mt-4'><strong>1 : </strong>No. of employees;</p>
          <p><strong>2 : </strong>Complete name and address of your Company;</p>
          <p><strong>3 : </strong>Head office and branch details;</p>
          <p><strong>4 : </strong>Type of business activity;</p>
          <p><strong>5 : </strong>Nature of the business;</p>
          <p><strong>6 : </strong>Company Registration date;</p>
          <p><strong>7 : </strong>Details of all the Directors or Partners;</p>
          <p><strong>8 : </strong>Basic details of the employees;</p>
          <p><strong>9 : </strong>Salary details of the employees;</p>
          <p><strong>10 : </strong>Company’s bank account details;</p>
          <p><strong>11 : </strong>PAN Card.</p>
          </div>
          <div className='flex-5'>
        
        <Image alt="Important details need to provide for the Registration under EPFO" className="important-img w-100" height={580} loading="lazy" src={dft} />
      </div>

      </div>
    </div>
  )
}
