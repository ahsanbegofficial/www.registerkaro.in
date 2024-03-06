import Image from 'next/image'
import React from 'react'
import ProcedureReg from '../../../assets/images/static/nbfc-registration/challenges_faced_in_nbfc_registration.svg'

interface HeroProps {
  cityName: string;
}

export const Challenges = ({ cityName }: HeroProps) => {
  return (
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' id='Challenges'>
       
        <div className='flex-5'>
        <p>There are certain challenges that entrepreneurs face in the NBFC business starting from the NBFC registration to NBFC Operation, few of which are as follows:</p>
         <p><strong>Extensive Compliances</strong>
          The compliances for the NFBC registration and operation is quite of an extensive list which becomes a challenge in the smooth sailing. The compliances part oftenly experience exhaustion in the Company which further slows down the operations.</p>

          <p><strong>Complex documentation</strong>
          The documentation process for the NBFC Registration is a multi faceted process which asks for the delicate attention and efforts. As any fault in the documentation might make the registration process a bit challenging, and can also lead to non-compliance penalties.</p>

          <p><strong>Fervent Taxation regime</strong>
          The taxation system is quite fervent and complex when it comes to NBFC which becomes a challenge as the missing on Taxes leads to Income Tax Notice and therefore penalties. Therefore, professional services are required at many stages which are quite expensive.  </p>

          <p><strong>Lack of Flexibility</strong>
          The NBFC is governed by rigid statutes which brings little or no space for flexibility whether it be in terms of taxes, compliances, etc. Therefore, the NBFC faces a series of challenges in terms of operation in comparison to other businesses.</p>
      </div>
      <div className='flex-3'><Image alt="Challenges faced in NBFC Registration
        Why RegisterKaro for Trademark Registration
        There are certain challenges that entrepreneurs face in the NBFC business starting from the NBFC registration to NBFC Operation" className="Procedure-img w-100" loading="lazy" height={570} src={ProcedureReg} /></div>
    </div>
  )
}