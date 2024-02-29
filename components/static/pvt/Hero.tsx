import React from 'react'
import bgImage from '../../../assets/images/static/private-reg/bg.png';
import rightArrow from '../../../assets/images/static/private-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';

let hero = {
    "pack_includes": [
        "2 DIN and DSC for two Directors",
        "Drafting of MoA & AoA",
        "Registration fees and stamp duty",
        "Company Incorporation Certificate",
        "Company PAN and TAN",
        "ZohoBooks subscription"
    ]
}
interface HeroProps {
    cityName: string;
}


export const Hero = ({cityName}: HeroProps) => {
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
                <h4 className='mb-4'>Private Limited Company Registration Online In {cityName}</h4>
                <p>Register your Company with {cityName}’s No.1 Company Registration service provider. Our experts will help you in incorporating your company in {cityName} in minimal time @1999/-</p>
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
                <ZohoFormService service={'private-limited-company-registration'} />
            </div>
        </div>
    )
}