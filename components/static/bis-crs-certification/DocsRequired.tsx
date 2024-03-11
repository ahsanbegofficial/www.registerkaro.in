import Image from 'next/image'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'
import bft from '../../../assets/images/static/bis-crs-certifiaction/Guidelines_for_Electronic_Labeling.svg'
interface HeroProps {  cityName: string;}
export const DocsREquired = ({ cityName }: HeroProps)  => {
  return (
  <div id='DocsREquired'>
    <div className='benefits flex w-80 m-auto mobile-flex-column' >
       <div className='flex-3'>
            <Image alt="Guidelines for Electronic Labeling within the BIS CRS Certification Scheme" className="GuidelinesElectronic-img w-100" height={1000} loading="lazy" src={bft} />
        </div>
        <div className='flex-7'>
      
          <h3>Physical Labeling Requirement:</h3>
          <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Devices utilizing e-labels must incorporate a physical label on the product packaging during various stages, including sale, distribution, import, and storage. For mass-produced devices not individually packaged, an acceptable alternative is a removable adhesive label on the packaging.</li>
          </ul>
          <h3>Compliance Programming:</h3>
          <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The responsible party must program compliance information, ensuring its protection against third-party modifications. This information can be embedded in the software menu, provided it remains easily accessible and unmodifiable.</li>
          </ul>
          <h3>Regulatory Details Inclusion:</h3>
          <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />All applicable regulatory details mandated for product packaging or user manuals must be provided, adhering to relevant rules. This holds true even if such details are presented electronically.</li>
          </ul>
          <h3>Tool-Free Access for E-Labeled Devices:</h3>
          <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Devices with electronic labels should not necessitate any additional tools or plug-ins for users to access the e-label content, ensuring a seamless and tool-free experience.</li>
          </ul>
          <h3>User Accessibility:</h3>
          <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Users must access e-label details without requiring special access codes or permissions. The details should be reachable in more than four steps within the device’s menu, guaranteeing user-friendly accessibility.</li>
          </ul>
          <h3>Integration with User Manuals:</h3>
          <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />In cases where the primary user manual or guide is provided through electronic media, this information may be integrated into the e-label presentation, ensuring comprehensive and synchronized details.</li>
          </ul>
          <h3>Website Access Instructions:</h3>
          <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Instructions guiding users on accessing information through the product website should be provided. These instructions must be explicitly mentioned in the user’s manual or on the product packaging.</li>
          </ul>
          <h3>User Instruction Provision:</h3>
          <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Particular instructions on how users can access e-label details must be provided. These instructions should be included in the user’s manual, operating instructions, or as an insert within the product package.</li>
          </ul>
          <h3>Compliance with Standard Mark Requirements:</h3>
          <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The electronic display of the Standard Mark must meet all the stipulated requirements issued by BIS, ensuring conformity and adherence to the established standards.</li>
          </ul>
        </div>
       
        </div>
  </div>
    
  )
}