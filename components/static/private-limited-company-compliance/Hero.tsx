import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import rightArrow from '../../../assets/images/pvt-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';

let hero = {
    "pack_includes": [
        "Board Meeting Notice & Minutes",
        "General Meeting Notice & Minutes",
        "Form AOC-4 & MGT-7 filing",
        "Directors’ Report Preparation",
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
            <h4 className='mb-4'>Annual Compliance for Private Limited Company</h4>
                <p>It is very tough to maintain all the Annual Compliance for Private Limited Company, That’s why RegisterKaro is here to help you with all the annual filings of Companies & provide details regarding Company Compliances</p>
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
                <ZohoFormService service={'private-limited-company-compliance'} />
            </div>
        </div>
    )
}
