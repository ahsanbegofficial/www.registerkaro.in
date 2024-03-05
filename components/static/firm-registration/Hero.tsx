import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import rightArrow from '../../../assets/images/pvt-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';

let hero = {
    "pack_includes": [
        "Drafting of Partnership Deed",
        "Name search & approval",
        "Filing Application Form",
        "Consent if Partners",
        "Affidavit ",
        "TAN & PAN Card"
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
            <h4 className='mb-4'>­Firm Registration</h4>
                <p>In today's world, when the start-up culture is booming, every other day there is some or another business that is opening, and most business owners do not have awareness of the business compliances they must adhere to since they are mainly focused on their product. Registration is one such compliance, that business owners must do anyhow to bring their business into existance or have evidence of having their business existence.</p>
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
                <ZohoFormService service={'firm-registration'} />
            </div>
        </div>
    )
}
