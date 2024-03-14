import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import rightArrow from '../../../assets/images/pvt-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';

let hero = {
    "pack_includes": [
        "Free Experts Assistance",
        "Minimum Price guaranteed",
        "Quick and Hassle-Free Process",
        "20 years experience & Serving more than 1100+ companies",
        "Providing one stop solution for all Annual compliancesn"
    ]
}

interface HeroProps {cityName: string;}


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
            <h4 className='mb-4'>Online EPR Registration in {cityName}</h4>
                <p>Get your EPR Registration for your projects online with our hassle-free and affordable services. More than 5000 businesses trust us and keep their business compliant with the law. So, you are just a click away from getting the fastest and most affordable way to get EPR Registration in {cityName}.</p>
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
                <ZohoFormService service={'epr-registration'} />
            </div>
        </div>
    )
}
