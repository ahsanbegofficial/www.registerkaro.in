
import Image from 'next/image'
import advantages_of_obtaining_bis_certification from '../../../assets/images/static/bis-certification/advantages_of_obtaining_bis_certification.svg'


interface HeroProps {
  cityName: string;
}
export const AdvantagesBIS = ({ cityName }: HeroProps) => {

  return (
    <div className='DocumentButtonWise  m-auto' id='AdvantagesBIS'>
          <p className='main-para mb-2'>In summary, securing a BIS Certificate offers a myriad of benefits, including:</p>
        <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' >
         
          <div className='flex-7 pt-5'>
          <p><strong>1: Ground for Total Quality Management (TQM):</strong>Establishes a foundation for implementing Total Quality Management practices, fostering excellence in every aspect of the business.</p>
          <p><strong>2: Enhanced Resource Utilization:</strong>Ensures better utilization of resources by streamlining processes and optimizing efficiency.</p>
          <p><strong>3: Cost Reduction:</strong>Eliminates unnecessary overhead expenses incurred during the manufacturing of final products, contributing to cost reduction.</p>
          <p><strong>4: Global Recognition:</strong>Facilitates global recognition, opening avenues for access to untapped markets and international expansion.</p>
          <p><strong>5: Strong Evidence of Product Quality:</strong>Serves as a robust testament to the quality of the product, instilling confidence in customers and stakeholders.</p>
          <p><strong>6: Bespoke Quality Management:</strong>Enables the deployment of customized quality management practices tailored to the specific needs of the business.</p>
          <p><strong>7: Improved Market Reputation:</strong>Aids the firm in steadily enhancing its market reputation over time, reinforcing trust among consumers and partners.</p>
          </div>
          <div className='flex-4 mt-5'>
          <Image alt="Advantages of Obtaining BIS Certification,securing a BIS Certificate offers a myriad of benefits" className="AdvantagesBIS-img w-100" height={600} loading="lazy" src={advantages_of_obtaining_bis_certification} />
          </div>
        </div>
    </div>
  )
  
}
