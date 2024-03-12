import Image from 'next/image'
import React from 'react'
import dft from '../../../assets/images/static/cdsco-registration/Types_of_CDSCO_Registration.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'
interface HeroProps {cityName: string;}
export const KeyInitiatives = ({ cityName }: HeroProps) => {
  return (
    <div   id='KeyInitiatives'>
     <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse'>
      <div className='flex-7'>
        <p>The Central Drugs Standard Control Organization (CDSCO) in {cityName} manages several types of registrations about pharmaceuticals, medical devices, cosmetics, and diagnostics. The primary types of CDSCO registrations are:</p>
        <h3>New Drug Approval (NDA):</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Required for new pharmaceuticals or drugs that haven’t been marketed in {cityName} before. It involves the comprehensive submission of pre-clinical and clinical data to establish safety, efficacy, and quality.</li>
          </ul>
        <h3>Import License:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Necessary for importing pharmaceuticals, medical devices, cosmetics, or diagnostics into {cityName} for commercial purposes. It ensures compliance with regulatory standards and quality norms.</li>
          </ul>
        <h3>Manufacturing License:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Essential for manufacturers producing pharmaceuticals, medical devices, or other regulated products within {cityName}. This license assures adherence to quality and safety standards during manufacturing.</li>
          </ul>
        <h3>Medical Device Registration:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Involves obtaining approval or certification for the sale, import, or manufacture of medical devices in {cityName}. It encompasses various risk-based categories such as Class A, B, C, and D devices.</li>
          </ul>
        <h3>Cosmetic Registration:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Required for skincare products, makeup, and personal hygiene items to ensure their safety and quality before being marketed in {cityName}.</li>
          </ul>
        <h3>Clinical Trial Approval:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Sponsors or applicants conducting clinical trials on drugs, medical devices, or healthcare products in {cityName} must obtain approval from CDSCO through the Clinical Trial Registration process.</li>
          </ul>
        <h3>Dossier Submission and Approval:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Approval for submitting technical dossiers related to pharmaceuticals or medical devices. This ensures compliance with regulatory requirements before product registration.</li>
          </ul>
        <h3>Export License/Registration:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Essential for exporters of pharmaceuticals, medical devices, cosmetics, or diagnostics to comply with international standards and regulations for export purposes.</li>
          </ul>
      </div>
        <div className='flex-3'>
          <Image alt="Types of CDSCO Registration" className="Types-img w-100" height={882} loading="lazy" src={dft} />
        </div>
      </div>
      <p className='main-para'>These registrations and licenses are fundamental for ensuring adherence to established standards, safety, efficacy, and quality control measures before products enter the Indian market, are manufactured, imported, or exported within the country.</p>
    </div>
  )
}