import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import rightArrow from '../../../assets/images/pvt-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';

let hero = {
    "pack_includes": [
        "3 DIN and DSC",
        "Drafting of MoA & AoA",
        "Government Stamp duty",
        "Company Incorporation Certificate",
        "Company PAN and TAN",
        "ZohoBooks subscription",
        "Approval letter from Central Govt",
        "PF and ESIC Registration",
        "PT registration in Maharashtra and Karnataka",
        "Business Commencement certificate of the Company"
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
                <h4 className='mb-4'>Public Limited Company Registration</h4>
                <p>Elevate Your Business with Public Limited Company Registration! and get your Registration Done with RegisterKaro @7999</p>
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
                <ZohoFormService service={'section-8-company-registration'} />
            </div>
        </div>
    )
}
