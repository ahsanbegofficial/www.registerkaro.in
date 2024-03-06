import Image from 'next/image'
import React from 'react'
import ProcedureReg from '../../../assets/images/static/nbfc-registration/documents.svg'

interface HeroProps {
  cityName: string;
}

export const DocumentsRequired = ({ cityName }: HeroProps) => {
  return (
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' id='DocumentsRequired'>
      
      <div className='flex-5'>
        <p>For proceeding with the successful NBFC Registration Process, one must need following documents get prepared:</p>
        <p><strong>1:</strong>Company Incorporation Certificate under the Companies Act.</p>
        <p><strong>2:</strong>Detailed Brochure of the Company inclusive of management details</p>
        <p><strong>3:</strong>Company’s PAN and CIN [Corporate Identification Number]</p>
        <p><strong>4:</strong>Address Proof [electricity bill, Utility Bill, Lease Agreement (for rented property)]</p>
        <p><strong>5:</strong>Certified copy of Articles of Association (AoA) and Memorandum of Association (MoA) </p>
        <p><strong>6:</strong>Each Director’s Profile details along with affidavits.</p>
        <p><strong>7:</strong>All Directors’ credit score report</p>
        <p><strong>8:</strong>A copy of the board resolution certifying that the business has not engaged in or stopped conducting NBFC activity and won’t till the RBI grants registration.</p>
        <p><strong>9:</strong>Certified copy of the Board Resolution passed on the “Fair Practices Code”.</p>
        <p><strong>10:</strong>A certificate from the statutory auditor attesting to the fact that the business neither accepted nor holds the public deposit.</p>
        <p><strong>11:</strong>1. A certificate from the Statutory Auditor stating the amount of funds owned as of the application date is necessary.</p>
        <p><strong>12:</strong>Financial Documents pertaining to bank accounts, balances, loans, credits, bank statements, Income Tax Return Filing, etc.</p>
        <p><strong>13:</strong>An audited balance sheet, profit and loss statement, and the directors’ and auditors’ report for the three years prior [If applicable].</p>
        <p><strong>14:</strong>Information that includes projections for the balance sheets, cash flow statement, and income statement as well as the company’s future goal, usually for the next three years.</p>
        <p><strong>Note: the list can be extensive depending upon the type of NBFC chosen for registration</strong></p>
      </div>
      <div className='flex-3'><Image alt="Documents required for NBFC Registration
          Why RegisterKaro for Trademark Registration
          For proceeding with the successful NBFC Registration Process" className="DocumentsRequired-img w-100" loading="lazy" height={670} src={ProcedureReg} /></div>
    
    </div>
  )
}