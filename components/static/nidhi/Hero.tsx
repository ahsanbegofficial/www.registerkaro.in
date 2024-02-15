import React from 'react'
import bgImage from '../../../assets/images/static/private-reg/bg.png';
import rightArrow from '../../../assets/images/static/private-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';

let hero = {
    "pack_includes": [
        "3 DIN and DSC",
        "Drafting of MoA & AoA",
        "Government Stamp duty",
        "Company Incorporation Certificate",
        "OPC PAN and TAN",
        "ZohoBooks subscription",
        "Approval letter from Central Govt",
    ]
}

export const Hero = () => {
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
                <h4 className='mb-4'>Nidhi Company Registration</h4>
                <p>Get your Nidhi Company registered in India quickly and effortlessly @19999 by partnering with India's leading Nidhi Company Registration service provider. Our team of experts will assist you every step of the way.</p>
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
                <ZohoFormService service={'nidhi-company-registration'} />
            </div>
        </div>
    )
}
