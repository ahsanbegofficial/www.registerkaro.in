import Image from "next/image";
import bft from "../../../assets/images/static/bis-fmcs-certification/required_docuement_for_is_fmcs.svg";
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'


interface HeroProps { cityName: string;}
export const DocRequiredBIS = ({ cityName }: HeroProps)  => {
  return (
    <div id='DocRequiredBIS'>
     <p className='main-para'>The following essential documents are imperative for BIS FMCS Certification  and should be available with the applicant before initiating the project:</p>
        <div className='benefits flex w-80 m-auto mobile-flex-column' >
            <div className='flex-3'> 
            <Image
              alt="Required Documents for BIS FMCS Certification
              The following essential documents are imperative for BIS FMCS Certification and should be available with the applicant before initiating the project:
              
              Key Guidelines for Nomination of AIR (Authorized Indian Representative) for Foreign Manufacturers
              Factory or Company Registration Documents"
              className="DocRequiredBIS-img w-100"
              height={1130}
              loading="lazy"
              src={bft}
            />
          </div>
          <div className='flex-7'>
           <h3>Factory or Company Registration Documents:</h3>
           <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Documentation validating the registration of the factory or company.</li>
          </ul> 
          <h3>Flow Chart of Manufacturing Process:</h3>
           <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A comprehensive flow chart outlining the manufacturing process.</li>
          </ul> 
          <h3>Business License & ISO Certificate:</h3>
           <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Business license and ISO certificate, with mandatory English translations if originally in another language.</li>
          </ul> 
          <h3>Test Reports as per Indian Standards:</h3>
           <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Reports documenting tests conducted in accordance with Indian Standards.</li>
          </ul> 
          <h3>Nomination:</h3>
           <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Nomination details pertaining to the project.</li>
          </ul> 
          <h3>Declaration & Undertaking:</h3>
           <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Official declarations and undertakings relevant to the certification process.</li>
          </ul> 
          <h3>Product or Component Drawings (If Applicable):</h3>
           <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Drawings illustrating the product or its components, if applicable.</li>
          </ul> 
          <h3>List of Raw Materials & Raw Material Test Certificates:</h3>
           <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A detailed list of raw materials accompanied by test certificates for each.</li>
          </ul> 
          <h3>Information on Other Certificates for Factory System (If Applicable):</h3>
           <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Details regarding any other certificates relevant to the factory system.</li>
          </ul> 
          <h3>List of Raw Materials & Raw Material Test Certificates (Duplicate Entry):</h3>
           <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Reiteration of the list of raw materials and accompanying test certificates.</li>
          </ul> 
          <h3>Information on Test Equipment & Test Equipment Calibration Certificates:</h3>
           <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A comprehensive list containing information on test equipment along with calibration certificates.</li>
          </ul>
          <p>Ensuring the availability and accuracy of these documents is crucial for a seamless initiation of the BIS FMCS Certification process.</p>
      </div>
      
      </div>
    </div>
  )
}