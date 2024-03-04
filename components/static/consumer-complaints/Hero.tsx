import React from 'react'
import bgImage from '../../../assets/images/pvt-reg/bg.png';
import rightArrow from '../../../assets/images/pvt-reg/rightArrow.svg';
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
            <h4 className='mb-4'>Consumer Complaints</h4>
                <p>Capitalism has been around for centuries, and with that, so have the consumers. Therefore, the continuity of the consumer's dissatisfaction in the market is not something new to talk about, but its redressal mechanism is. However, consumers are now protected against malpractices with the help of the mechanisms offered by the government, such as consumer complaints. If you feel you have been the victim of dark market practices and are resorting to the solution, let Registerkaro help you with your Consumer complaint and attain justice.</p>
                {/* <div className="packages">
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
                </div> */}
                <GoogleDiv />
            </div>
            <div className="zoho">
                <ZohoFormService service={'consumer-complaint'} />
            </div>
        </div>
    )
}
