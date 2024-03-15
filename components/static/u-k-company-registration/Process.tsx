import certificate from '../../../assets/images/static/u-k-company-registration/Registration_uk_certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Establishing a business in the UK has many benefits that draw in investors and entrepreneurs from around the globe. Indian businesses wishing to develop internationally find the UK to be a desirable location due to its business-friendly laws, encouraging atmosphere, and tax breaks. For Indian business owners, registering a company in the UK has several advantages, such as access to a strong financial system, a booming economy, political stability, and a trained labor force.</p>
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
                <p className="small-heading text-center">Company Registration in United Kingdom</p>
                <div>
                    <Image alt="An Overview of Company Registration in United Kingdom" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}