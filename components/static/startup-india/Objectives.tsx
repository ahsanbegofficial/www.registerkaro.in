import Image from 'next/image'
import objectives_of_startup_india_movement from '../../../assets/images/static/startup_india_registration/objectives_of_startup_india_movement.svg'
interface HeroProps {cityName: string;}
export const Objectives = ({ cityName }: HeroProps) => {
  return (
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' id='Objectives'>
      <div className='flex-7 pt-5'>
        <p>Following are the objectives of Startup {cityName} Movement:</p>
      

        <p><strong>1: </strong>Enhanced Infrastructure, including incubation centers;</p>
        <p><strong>2: </strong>IPR facilitation;</p>
        <p><strong>3: </strong>A goal to increase the funding opportunities;</p>
        <p><strong>4: </strong>Provide an extensive networking database for the entrepreneurs & other stakeholders in the startup ecosystem;</p>
        <p><strong>5: </strong>The better regulatory environment including the tax benefits, easier compliance improved establishing a Company, fastest mechanism & more.</p>   
      </div>
      <div className='flex-3'>
        <Image alt="Objectives of Startup India Movement,Enhanced Infrastructure, including incubation centers,IPR facilitation" className="Objectives-img w-100" loading="lazy" height={430} src={objectives_of_startup_india_movement} />
        </div>
    </div>
  )
}