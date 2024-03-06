import React from 'react'
import bgImage from '../../../assets/images/static/private-reg/bg.png';
import rightArrow from '../../../assets/images/static/private-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';

let hero = {
    "pack_includes": [
        "Quickest Registration in India",
        "Setting up Business Plans & Policies",
        "Drafting Financial Services",
        "Legal Consultancy At Every Step & more",
        "100% Customer Satisfaction",
        "Ideal for Micro small and medium enterprises"
    ]
}

interface HeroProps {
    cityName: string;
}

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
                <h4 className='mb-4'>NBFC Registration</h4>
                <p>RegisterKaro offers registration of Non-Banking Financial Company in { cityName }. New NBFC Registration as per Business models, Approval from RBI in 90 Days.</p>
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
                <ZohoFormService service={'nbfc-registration'} />
            </div>
        </div>
    )
}