import React from 'react'
import bgImage from '../../../assets/images/static/private-reg/bg.png';
import rightArrow from '../../../assets/images/static/private-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';

interface HeroProps {
    cityName: string;
}

let hero = {
    "pack_includes": [
        "DPIN and DSC",
        "LLP Agreement",
        "Fees & Stamp duty",
        "LLP Incorporation Certificate",
        "LLP PAN and TAN",
        "ZohoBooks subscription",
        "Filing of Form -3",
    ]
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
                <h4 className='mb-4'>LLP Registration</h4>
                <p>Register your Limited Liability Partnership at RegisterKaro only @1999. More than 5000 businesses trust us to register their LLP and keep their business compliant with the law. So, you are just a click away from getting the fastest and most affordable way to get LLP Registration in {cityName}. @1999/-</p>
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
                <ZohoFormService service={'llp-registration'} />
            </div>
        </div>
    )
}
