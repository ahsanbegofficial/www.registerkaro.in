import certificate from '../../../assets/images/static/dubai-company-registration/Company_regis_Dubai_certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>After Abu Dhabi, the nation's capital, Dubai, the commercial center of the United Arab Emirates, is the second-richest emirate. Surprisingly, though, Dubai's riches did not come from oil reserves and natural resources like that of the other emirates. Dubai should also be at the top of your choice of sites if you're willing to launch a new business or are wanting to expand your current one. These are a few advantages of establishing a company in Dubai.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Types" className="scrollTo">
                                <li>Types of Companies in Dubai</li>
                            </a>
                            <a href="#WhyReg" className="scrollTo">
                                <li>Why register your company in Dubai?</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                                <li>Documents you would need</li>
                            </a>
                            <a href="#ProcessCompany" className="scrollTo">
                                <li>Process of Company Registration in Dubai</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                                <li>Why Choose RegisterKaro for Company Registration in Dubai?</li>
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
                <p className="small-heading text-center">Company Registration in Dubai</p>
                <div>
                    <Image alt="An Overview Company Registration in Dubai After Abu Dhabi, the nation's capital, Dubai, the commercial center of the United Arab Emirates, is the second-richest emirate. Surprisingly," className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}