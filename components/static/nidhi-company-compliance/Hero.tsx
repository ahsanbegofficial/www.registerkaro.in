import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import rightArrow from '../../../assets/images/pvt-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';

let hero = {
    "pack_includes": [
        "Advisory relating to annual compliances of Nidhi Companies",
        "Preparation of Financial Statement",
        "Statutory Audit Report under Companies Act, 2013",
        "Tax Consultancy by a Chartered Accountant",
        "Income Tax Return Filing",
        "Annual ROC Filing by Company Secretary",
        "Advisory relating to Nidhi Company",
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
            <h4 className='mb-4'>Nidhi Company Compliance</h4>
                <p>Ensure seamless Nidhi Company compliance with the regulations. Our expert services guide you through the intricacies of compliance, helping your Nidhi Company adhere to legal standards, fostering growth and trust in your financial operations</p>
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
                <ZohoFormService service={'nidhi-company-compliance'} />
            </div>
        </div>
    )
}
