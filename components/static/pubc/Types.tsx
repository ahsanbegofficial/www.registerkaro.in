import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/public-reg/Types and distinctions.svg'

export const Types = () => {
  return (
    <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' id='Types'>
      <div className='flex-7'>
        <p><strong>1. Director Identification Number (DIN):</strong></p>
        <p>Unique identification number for directors obtained from the Ministry of Corporate Affairs.</p>
        <p><strong>2. Digital Signature Certificate (DSC):</strong></p>
        <p>Digital authentication tool used for secure online document filing.</p>
        <p><strong>3. Name Approval:</strong></p>
        <p>Official approval for the company's chosen name, ensuring it complies with regulations and is distinct from others.</p>
        <p><strong>4. Certificate of Incorporation:</strong></p>
        <p>Legal document issued by the government, confirming the establishment of the public limited company.</p>
        <p><strong>5. PAN and TAN:</strong></p>
        <p>Obtaining a Permanent Account Number (PAN) and Tax Deduction and Collection Account Number (TAN) from the Income Tax Department for taxation purposes.</p>
        <p><strong>6. Goods and Services Tax (GST) Registration:</strong></p>
        <p>Mandatory registration for companies exceeding the prescribed turnover threshold to collect and remit goods and services taxes.</p>
        <p><strong>7. Intellectual Property Rights (IPR) Registration:</strong></p>
        <p>Protection of Trademarks, Copyrights, and Patents through official registration to safeguard intellectual property assets.</p>
        <p><strong>8. Compliance Services:</strong></p>
        <p>Assistance with meeting regulatory requirements, including filing annual financial statements, conducting audits, and complying with tax and labor laws.</p>
        <p><strong>9. Secretarial Services:</strong></p>
        <p>Professional support for managing legal obligations, maintaining accurate records, and ensuring adherence to corporate governance principles.</p>
        <p><strong>10. Statutory Audits:</strong></p>
        <p>Independent audits are conducted to review the company's financial statements, ensuring compliance with accounting standards and legal obligations.</p>
      </div>
      <div className='flex-3'>
        <Image alt="Types and distinctions of Licenses/Services involved" className="w-100" height={1000} loading="lazy" src={bft} />
      </div>
    </div>
  )
}
