import React from 'react'
import certificate from '../../../assets/images/static/plastic-waste-authorization/Plastic_Waste_Authorization_certificate.svg';
import Image from 'next/image';
interface HeroProps {
    cityName: string;
}
export const Process = ({ cityName }: HeroProps)  => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Plastic waste authorization is a certification that allows businesses to legally collect, store, transport, process, or recycle plastic waste in {cityName}. Plastic waste refers to any discarded plastic material that has no further use or value. Plastic waste can pose serious threats to human health and the environment, as it can leach toxic chemicals, clog drains, choke animals, and pollute water bodies. Therefore, proper management and disposal of plastic waste is essential to prevent its adverse impacts.</p>
                <p className='text-justify'>In {cityName}, the Plastic Waste Management Rules, 2016, as amended in 2018, are the main legal framework for regulating the plastic waste sector. These rules aim to promote the environmentally sound management of plastic waste, reduce its generation, and encourage its reuse, recycling, and recovery. The rules also assign responsibilities and obligations to various stakeholders, such as producers, consumers, local bodies, waste pickers, collection centers, and recyclers, to ensure the effective implementation of the plastic waste management system.</p>
                <p className='text-justify'>According to the rules, any entity that is engaged in the collection, storage, transport, processing, or recycling of plastic waste is required to obtain an authorization from the concerned State Pollution Control Board (SPCB) or Union Territory Pollution Control Committee (UTPCC). The authorization is granted based on the compliance with the standards and guidelines issued by the Central Pollution Control Board (CPCB) and the Ministry of Environment, Forest and Climate Change (MoEFCC).</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhoCan" className="scrollTo">
                                <li>Who can apply?</li>
                            </a>
                            <a href="#RequirementsAuthorizationRules" className="scrollTo">
                                <li>Requirements for Authorization</li>
                            </a>
                            <a href="#DocumentsRequired" className="scrollTo">
                                <li>What are the documents required for Plastic Waste Authorization?</li>
                            </a>
                            <a href="#Procedure" className="scrollTo">
                                <li>What is the procedure for Plastic Waste Authorization?</li>
                            </a>
                            <a href="#ValidityRenewal" className="scrollTo">
                                <li>What is the validity and renewal of Authorization?</li>
                            </a>
                            <a href="#Cancellation" className="scrollTo">
                                <li>Cancellation, suspension, or revocation</li>
                            </a>
                            <a href="#MandatoryCompliance" className="scrollTo">
                                <li>What are the mandatory compliance?</li>
                            </a>
                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>
                            <a href="#Faq" className="scrollTo">
                                <li>Frequently Asked Questions</li>
                            </a>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center">Plastic Waste Authorization Certificate</p>
                <div>
                    <Image alt="Get Plastic Waste Authorization in India" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
