import Image from 'next/image'
import React from 'react'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'
interface HeroProps {cityName: string;}
export const Procedure = ({ cityName }: HeroProps) => {
  return (
    <div className='DocumentArrowWise w-80 m-auto' id='Procedure'>
 
        <p>Following is the step by step procedure for getting Startup {cityName} Registration Certificate:</p>

        <h3>Step 1: Incorporate Your Company:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />First, you have to incorporate your Company in {cityName} into a Private Limited Company or Partnership or LLP. You just need to follow the normal procedure which involves filing a form-fitting to get the Registration.</li>
        </ul>
        <h3>Step 2: Register under Startup {cityName} Scheme:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />After that, you must register your company or firm under the Startup {cityName} Scheme. You have to fill all the vital details in the form which is available on the website of Startup {cityName} & then upload some vital documents also.</li>
        </ul>
        <h3>Step 3: Upload Documents:</h3>
        <ul className='tick list-unstyled'>
          <li className='bold'>You need a Registration Form along with the recommendation letter. You can get anyone’s recommendation letter which is mentioned below:</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A Recommendation Letter from any PG College in {cityName} or in a format that is approved by DIPP;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A Recommendation Letter from an incubator that the Indian Government funds as a part of any specified scheme to promote innovation;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A letter of funding not less than 20% in equity by an Incubation Fund, or Private Equity Fund, Accelerator, and Angel Fund & which is registered with SEBI that countersign with the innovation nature of the business;</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />A recommendation letter by any State Government or the Central Government of {cityName};</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Incorporation Certificate, you need to upload the Certificate of Incorporation of your Company or LLP or a Registration certificate for a Partnership Company & provide a brief description of your business.</li>
          

        </ul>
        <h3>Step 4: If you need Tax Exemption then mention it:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Startups in {cityName} do not have to pay income tax for the 1st three years in {cityName} but avail of some benefits when the Company must be certified by the Inter-Ministerial Board (IMB). This is where the Company registered with DIPP gets relaxation as the Registration is enough to get the benefits. Then you must follow all the conditions as we mentioned above.</li>
        </ul>
        <h3>Step 5: Get your recognition number:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />For the registration of the application, you will get a Recognition Number. After the Authority goes through all your uploaded documents when you get the Certificate of Incorporation.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Now enroll your Company into the Startup {cityName} Scheme & reap all the benefits which are provided by the Government of {cityName}.</li>
        </ul>
    </div>
  )
}