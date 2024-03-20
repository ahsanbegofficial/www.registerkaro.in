import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import rightArrow from '../../../assets/images/pvt-reg/rightArrow.svg';
import ZohoFormService from '../../child_components/ZohoformService';
import Image from 'next/image';
import { GoogleDiv } from '../GoogleDiv';

let hero = {
    "pack_includes": [
        "Expert Advisory",
        "Process Consultation",
        "Notice Drafting",
        "Post Notice follow up",
        "Suit Assistance ",
        "Legal Consultation",
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
            <h4 className='mb-4'>Company Registration in Mauritius</h4>
                <p>Incorporation of a company is a very important and the initial official step that is taken towards bringing the company into legal existence. Incorporation is a necessity though not compulsory but it gives multiple benefits, big companies in terms of having many employees, who want to go public, and who want to raise capital need incorporation to increase the credibility of their business besides deciding to incorporate one must also decide the jurisdiction in which one wants their company to be incorporated, since the laws are enforced based on the jurisdiction, and the company is made liable based on jurisdiction.</p>
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
                <ZohoFormService service={'mauritius-company-registration'} />
            </div>
        </div>
    )
}
