import Image from 'next/image'
import React from 'react'
import ProcedureReg from '../../../assets/images/static/nbfc-registration/nbfcs_based_on_liabilite.svg'


interface HeroProps {
  cityName: string;
}

export const NBFCbased = ({ cityName }: HeroProps) => {
  return (
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column' id='NBFCbased'>
         <div className='flex-3'><Image alt="NBFCs based on Liabilities
      Deposit Accepting NBFCs: Deposit accepting NBFCs are such NBFCs that are open to accepting deposits from the general public. Moreover, this form of NBFCs" className="NBFCbased-img w-100" loading="lazy" height={420} src={ProcedureReg} />
      </div>
      
      <div className='flex-5'>
        <p> <strong>Deposit Accepting NBFCs:</strong> Deposit accepting NBFCs are such NBFCs that are open to accepting deposits from the general public. Moreover, this form of NBFCs have also to comply with the statutory liquidity requirements laid down within the RBI guidelines. NBFCs accepting public deposits with total assets of at least Rs 100 crore must furnish monthly return on capital market exposure. NBFCs are required to maintain a minimum level of liquid assets of 15% of outstanding public deposits as of the final business day of the quarter before.</p>
        <p> <strong>Non-Deposit Accepting NBFCs:</strong> Non deposit accepting NBFCs are such NBFCs that does not accept the deposits from the general public. Non-deposit taking non-bank financial institutions (NBFCs) with assets over Rs. 50 crore but under Rs. 100 crore must file a quarterly return covering key financial metrics. Non-deposit taking NBFCs with asset sizes between Rs. 50 crore and Rs 100 crore must disclose basic information on a quarterly basis, such as the company name, address, NOF, and profit or loss for the last three years. </p> 
      </div>

   </div>
  )
}