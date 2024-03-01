import Image from 'next/image'
import objective_of_bis from '../../../assets/images/static/bis-certification/objective_of_bis.svg'
interface HeroProps {
  cityName: string;
}

export const ObjectivesChecklist = ({ cityName }: HeroProps) => {
  return (
    <div id='ObjectivesChecklist'>
        <p className='main-para'>The Bureau of Indian Standards (BIS) operates with a set of core objectives aimed at fostering the continual and harmonious development of standardization, quality certification, and marking. These objectives encompass:</p>
        <div className='benefits flex w-80 m-auto mobile-flex-column' >
          <div className='flex-4 mt-3'>
            <Image alt="Objectives of BIS,The Bureau of Indian Standards (BIS) operates with a set of core objectives aimed at fostering the continual and harmonious development of standardization, quality certification, and marking. These objectives encompas" className="ObjectivesChecklist-img w-100" height={352} loading="lazy" src={objective_of_bis} />
          </div>
          <div className='flex-7 pt-5'>
            <p><strong>1: Continual Development:</strong>Facilitating the ongoing and harmonious development of standardization, quality certification, and marking processes.</p>
            <p><strong>2: National Strategy Formation:</strong>Developing a seamless national strategy for the recognition of standards, synchronizing them with product development and exports.</p>
            <p><strong>3: Thrust on Quality Control:</strong>Ensuring a renewed emphasis on quality control and standardization.</p>
          </div>
          </div>
    </div>
  )
}
