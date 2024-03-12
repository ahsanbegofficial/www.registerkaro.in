import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import rightArrow from '../../../assets/images/pvt-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';

let hero = {
    "pack_includes": [
        "Determine product class and CDSCO standards compliance",
        "Obtain CDSCO certificate/online registration",
        "Analyze product requirements for clear guidelines",
        "Conduct virtual pre-audit for manufacturing unit compliance",
        "CDSCO consultants coordinate with authorities for follow-ups",
        "Ensure reliable and punctual service delivery",
        "Visit CDSCO office on behalf of clients if needed",
    ]
}
interface HeroProps { cityName: string; }

export const Hero = ({ cityName }: HeroProps) => {
    return (
        <div className="hero align-center mobile-flex-column">
            <Image
                src={bgImage}
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority={true}
                className="background-image"
            />
            <div className="header-content">
                <h4 className='mb-4'>CDSCO Registration</h4>
                <p>CDSCO Registration Experts, Quality advise Flawless registration. Assured Confidentiality. We help clients in meeting CDSCO guidelines to acquire the CDSCO Registration. Get in touch to know more.</p>
                <div className="packages">
                    {hero.pack_includes?.map((i: any, n: number) => {
                        return (
                            <div key={n} className='package flex w-80'>
                                <div>
                                    <Image src={rightArrow} alt='rightArrow' className='rightArrow' />
                                </div>
                                <div>{i}</div>
                            </div>
                        );
                    })}
                </div>
                <GoogleDiv />
            </div>
            <div className="zoho">
                <ZohoFormService service={'cdsco-registration'} />
            </div>
        </div>
    )
}
