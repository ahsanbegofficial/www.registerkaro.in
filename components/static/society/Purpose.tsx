import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/society-registration/trust_a_comprehensive.svg'

interface HeroProps { cityName: string;}
export const Purpose = ({ cityName }: HeroProps) => {
  return (
    <div className='checklist' id='Purpose'>
          <div className='benefits flex w-80 m-auto mobile-flex-column' >
          <div className='flex-3'>
              <Image alt="Purpose of Society Registration
                Private Limited Company sample
                A society registration can be done for the development of fine arts, science, or literature or else for the diffusion of purposeful knowledge or charitable purposes of political education. According to section 20 of the Society Act, 1860, " className="Purpose-img w-100" height={600} loading="lazy" src={bft} />
            </div>
         <div className='flex-4'>
          <p>A society registration can be done for the development of fine arts, science, or literature or else for the diffusion of purposeful knowledge or charitable purposes of political education. According to section 20 of the Society Act, 1860, a society registration can be done for the following purposes:</p>
          <p><strong>1:</strong>Promotion of fine arts.</p>
          <p><strong>2:</strong>Diffusion of political education.</p>
          <p><strong>3:</strong>Grant of charitable assistance.</p>
          <p><strong>4:</strong>Promotion of science and literature.</p>
          <p><strong>5:</strong>Creation of military orphan funds.</p>
          <p><strong>6:</strong>Maintenance or foundation of galleries or public museum.</p>
          <p><strong>7:</strong>Maintenance or foundation of reading rooms or libraries.</p>
          <p><strong>8:</strong>Promotion or diffusion or instruction of useful knowledge.</p>
          <p><strong>9:</strong>Collections of natural history.</p>
          <p><strong>10:</strong>Collections of mechanical and philosophical inventions, designs, or instruments.</p>
         </div>
      
         </div>
        
    </div>

  )
}
