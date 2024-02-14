import Image from 'next/image'
import React from 'react'
import one from '../../../assets/images/pvt-reg/checklist/one.png'
import two from '../../../assets/images/pvt-reg/checklist/two.png'
import three from '../../../assets/images/pvt-reg/checklist/three.svg'
import four from '../../../assets/images/pvt-reg/checklist/four.svg'
import five from '../../../assets/images/pvt-reg/checklist/five.svg'
import six from '../../../assets/images/pvt-reg/checklist/six.svg'
import seven from '../../../assets/images/pvt-reg/checklist/seven.svg'

export const Purpose = () => {
  return (
    <div className='checklist' id='Purpose'>
      <p className='main-para'>A society registration can be done for the development of fine arts, science, or literature or else for the diffusion of purposeful knowledge or charitable purposes of political education. According to section 20 of the Society Act, 1860, a society registration can be done for the following purposes:</p>
      <div className="checklist flex w-80 m-auto mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={one} alt="Promotion of fine arts"/>
          </div>
          <p>Promotion of fine arts</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={two} alt="Diffusion of political education"/>
          </div>
          <p>Diffusion of political education</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={three} alt="Grant of charitable assistance"/>
          </div>
          <p>Grant of charitable assistance</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={four} alt="Promotion of science and literature"/>
          </div>
          <p>Promotion of science and literature</p>
        </div>
      </div>
      <div className="checklist flex w-80 m-auto mt-4 mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={five} alt="Creation of military orphan funds"/>
          </div>
          <p>Creation of military orphan funds</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={six} alt="Maintenance or foundation of galleries or public museum"/>
          </div>
          <p>Maintenance or foundation of galleries or public museum</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={seven} alt="Maintenance or foundation of reading rooms or libraries"/>
          </div>
          <p>Maintenance or foundation of reading rooms or libraries</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={seven} alt="Promotion or diffusion or instruction of useful knowledge"/>
          </div>
          <p>Promotion or diffusion or instruction of useful knowledge</p>
        </div>
      </div>
      <div className="checklist flex w-80 m-auto mt-4 mobile-flex-column">
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={six} alt="Collections of natural history"/>
          </div>
          <p>Collections of natural history</p>
        </div>
        <div className="checklist-divs flex flex-column text-center align-center">
          <div>
            <Image height={125} width={125} src={five} alt="Collections of mechanical and philosophical inventions, designs, or instruments"/>
          </div>
          <p>Collections of mechanical and philosophical inventions, designs, or instruments</p>
        </div>
      </div>
    </div>

  )
}
