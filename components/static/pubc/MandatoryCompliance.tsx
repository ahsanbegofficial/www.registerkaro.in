import Image from 'next/image'
import React from 'react'
import pvtReg from '../../../assets/images/static/private-reg/pvt-reg.svg'

export const MandatoryCompliance = () => {
  return (
    <div className='MandatoryCompliance flex w-80 m-auto mobile-flex-column' id='Mandatory'>
      <div className='flex-5'>
        <Image alt="Mandatory Compliance" className="PvtReg-img w-100" height={382} loading="lazy" src={pvtReg} />
      </div>
      <div className='flex-5'>
        <ol>
          <li>Draft and submit the captivating Memorandum of Association (MOA) and Articles of Association (AOA) that outline the company's objectives and internal rules.</li>
          <li>Meet the financial threshold by fulfilling the minimum authorized and subscribed share capital requirements, as per the Companies Act, 2013.</li>
          <li>Assemble a dynamic team of at least three directors and obtain their unique Director Identification Numbers (DINs) to steer the company's success.</li>
          <li>Set the stage for success by hosting an impressive Annual General Meeting (AGM) within six months of the financial year-end, where you unveil financial statements and reports to captivate shareholders.</li>
          <li>Harness the power of collaboration through regular board meetings, conducting at least four per calendar year, to foster innovation and make informed decisions.</li>
          <li>Comply with the legal spotlight by meticulously maintaining statutory registers, including registers of members, directors, and charges, showcasing your commitment to transparency.</li>
          <li>Craft a compelling financial narrative through meticulous preparation and filing of annual financial statements, showcasing the company's financial prowess with the balance sheet, profit and loss account, cash flow statement, and accompanying notes.</li>
          <li>Entrust the company's financial integrity to a skilled auditor, appointed within 30 days of incorporation, ensuring compliance with annual appointment and rotation requirements.</li>
          <li>Secure your company's legacy by filing an annual return with the Registrar of Companies (ROC), providing a comprehensive snapshot of company details, shareholding structure, director information, and other essential data.</li>
          <li>Embark on a journey of compliance excellence, adhering to all provisions of the Companies Act, 2013, and its related rules and regulations, showcasing your commitment to ethical and responsible business practices.</li>
          <li>Navigate the tax landscape diligently, ensuring timely payment of income tax, meticulous filing of tax returns, and seamless adherence to Goods and Services Tax (GST) regulations, should they apply.</li>
          <li>Earn recognition for your compliance prowess by obtaining relevant certifications, such as the prestigious Commencement of Business Certificate, where applicable, cementing your position as a compliant and trusted player in the market.</li>
        </ol>
      </div>
    </div>
  )
}