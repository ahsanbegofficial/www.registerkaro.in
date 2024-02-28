import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/section-8-reg/Requirements.svg'

interface HeroProps {
  cityName: string;
}

export const Requirements = ({ cityName }: HeroProps) => {
  return (
    <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' id='Requirements'>
      <div className='flex-6'>
        <p>Following are some vital requirements for Section 8 Company Registration:</p>
        <p><strong>1. Directors:</strong></p>
        <p>For Section 8 Company Registration in {cityName}, a minimum of 2 Directors are required.</p>
        <p><strong>2. Capital Requirement:</strong></p>
        <p>There is no minimum paid-up capital for the Registration of Section 8 Company. NGOs in {cityName} established as a Section 8 company need not use the words Private Limited or Limited in their name.</p>
        <p><strong>3. Management</strong></p>
        <p>Section 8 Company is managed by the BoD (Board of Directors) as per AoA & MoA of the Company, unlike other Trusts that are handled by the Trustees as per the Trust Deed.</p>
        <p><strong>4. Regulation under various Acts:</strong></p>
        <p>Section 8 Company needs to follow the Rules & Regulations prescribed under the Companies Act, 2013. It needs to file returns & maintain Books of Account with ROCs. Section 8 Company can’t make any alterations to the provisions of Memorandum of Association (MoA) & Articles of Association (AoA) without prior consent of the Central Government and it should follow the provisions of the GST Law & Income Tax Act.</p>
        <p><strong>5. Charitable Objects:</strong></p>
        <p>In {cityName}, Section 8 Companies are registered with non-profit objectives. The AoA & MoA must mention the purpose for which it is set up. Any profits earned by the Section 8 Company is utilised for the furtherance of its main objectives i.e., charitable purposes in the Company. The profits will not be distributed among its members.</p>
        <p><strong>6. DSC and DIN:</strong></p>
        <p>DSC or Digital Signatures of all the proposed Company’s Directors are necessary for the Registration because the forms for the Registration process are filed online & should be digitally signed. Apart from DSC, you need to apply for DIN for the Directors and the application for allotment of DIN must be filed in Form DIR-3 or along with the SPICe+ Form for the Registration.</p>
      </div>
      <div className='flex-4'>
        <Image alt="Requirements for Section 8 Company Registration" className="Requirements-img w-100" height={1100} loading="lazy" src={bft} />
      </div>
    </div>
  )
}
