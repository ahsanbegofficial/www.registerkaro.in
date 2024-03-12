import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import rightArrow from '../../../assets/images/pvt-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';

let hero = {
    "pack_includes": [
        "Verify BIS applicability and compliance",
        "Expert BIS consultants for documentation",
        "Virtual pre-audit for production process compliance",
        "Schedule BIS officer factory audit",
        "Assist in setting up in-house testing",
        "Coordinate with BIS-accredited labs for testing"
    ]
}

interface HeroProps { cityName: string;}

export const Hero = ({ cityName }: HeroProps)  => {
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
            <h4 className='mb-4'>BIS FMCS Certification</h4>
                <p>Process of obtaining the BIS FMCS Certification is very tedious and time-consuming, but we RegisterKaro are one of the best BIS FMCS consultants in {cityName}.</p>
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
                <ZohoFormService service={'bis-fmcs-certification'} />
            </div>
        </div>
    )
}
