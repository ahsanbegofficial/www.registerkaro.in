import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import rightArrow from '../../../assets/images/pvt-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';

let hero = {
    "pack_includes": [
        "Free Incorporation Advisory by expert Chartered Accountant",
        "DIN and DSC for all 5 Directors",
        "Company Name Search and Name Approval",
        "MOA and AOA of the Company",
        "Government Registration Fees",
        "Corporate Identification Number",
        "Bank Account Opening"
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
                <h4 className='mb-4'>Producer Company Registration</h4>
                <p>In {cityName}, a Producer Company is a group of agriculturalists or farmers for the betterment of their living standards. We help to Incorporate the Producer Company in {cityName} without any hassle.</p>
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
                <ZohoFormService service={'producer-company-registration'} />
            </div>
        </div>
    )
}
