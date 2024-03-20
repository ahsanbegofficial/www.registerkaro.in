import certificate from '../../../assets/images/static/singapore-company-registration/Certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Singapore is well known throughout the world for being a stable country with a robust financial system and a well-organized economy. Various channels like banks, VCs, accelerators, incubators, government grants, and more can be used to secure finance at any point in the development process. This has contributed significantly to the growth of Singapore's start-up industry, which in 2016 attracted US$3.5 billion in venture capital and private equity alone. This makes Singapore a preferential option for businessmen, entrepreneurs, and investors to start a business. If you are among those, and intending to start a business in the Singapore Jurisdiction, then you are at the right place to know a to z. </p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Benefits " className="scrollTo">
                                <li>Benefits of company registration in United Kingdom</li>
                            </a>
                            <a href="#Types " className="scrollTo">
                                <li>Types of Company Structures in UK</li>
                            </a>
                            <a href="#Prerequisites " className="scrollTo">
                                <li>Prerequisites of Company Registration in UK</li>
                            </a>
                            <a href="#DocumentRequired " className="scrollTo">
                                <li>Documents required for Company registration</li>
                            </a>
                            <a href="#ProcessCompany " className="scrollTo">
                                <li>Process of Company Registration in United Kingdom</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                                <li>Why Choose RegisterKaro for Company Registration in the United Kingdom?</li>
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
                <p className="small-heading text-center">Company Registration in Singapore</p>
                <div>
                    <Image alt="Singapore is well known throughout the world for being a stable country with a robust financial system and a well-organized economy. Various channels like banks, VCs, accelerators, incubators, government grants, and more can be used to secure finance at any point in the development process." className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}