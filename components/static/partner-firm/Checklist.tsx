import Image from 'next/image'
import checklist from '../../../assets/images/static/partnership-firm/checklist.svg'
interface HeroProps {  cityName: string;}
export const Checklist = ({ cityName }: HeroProps) => {
  return (
    <div className='checklist' id='Checklist'>
       <div id='Checklist'>
    <h3 className='main-para mb-5'>Following is the vital checklist for Partnership Firm Registration:</h3>
    <div className='benefits flex w-60 m-auto mobile-flex-column-reverse' >
        <div className='flex-6'>
          <p><strong>1:</strong>The creation of a partnership agreement.</p>
          <p><strong>2:</strong>A minimum of two members must be partners.</p>
          <p><strong>3:</strong>A maximum of twenty partners is permitted.</p>
          <p><strong>4:</strong>Choosing an appropriate name.</p>
          <p><strong>5:</strong>The main place of business.</p>
          <p><strong>6:</strong>The firm’s PAN card and bank account.</p>
        </div>
        <div className='flex-4'>
        <Image alt="Checklist for Partnership Firm Registration in India, The vital checklist for Partnership Firm Registration" className="Checklist-img w-100" height={400} loading="lazy" src={checklist} />
        </div>
        </div>
    </div>
    
     
    </div>
  )
}
