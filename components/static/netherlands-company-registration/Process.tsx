import certificate from '../../../assets/images/static/netherlands-company-registration/certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Establishing a corporation in the Netherlands is a desirable option for businesses due to its numerous benefits. The nation has a transparent legal system, a stable and business-friendly atmosphere, and a prime location in Europe. The Netherlands boasts a highly qualified workforce, cutting edge technology, and well-developed infrastructure. Furthermore, the nation provides advantageous tax regulations, such as a competitive corporation tax rate and incentives for R&D expenditures. The Dutch corporate culture places a strong focus on innovation and global cooperation, which improves opportunities for businesses wishing to establish a foothold in this vibrant and financially stable European centre.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhyStart" className="scrollTo">
                                <li>Why start a business in the Netherlands?</li>
                            </a>
                            <a href="#Types" className="scrollTo">
                                <li>Types of companies for Company Registration in Netherlands</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                                <li>Documents to carry for registration process</li>
                            </a>
                            <a href="#ProcessCompany" className="scrollTo">
                                <li>Step-by-step process for Company Registration in Netherlands</li>
                            </a>
                            <a href="#Registration" className="scrollTo">
                                <li>Post-Registration Compliances</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                                <li>Why Choose RegisterKaro for Company Registration in the Netherlands?</li>
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
                <p className="small-heading text-center">Company Registration in Netherlands</p>
                <div>
                    <Image alt="An Overview of Company Registration in Netherlands" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}