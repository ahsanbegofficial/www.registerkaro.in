import certificate from '../../../assets/images/static/mauritius-company-registration/Why_choose_Mauritius_for_incorporation_certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>The choice of jurisdiction for the incorporation of a business is a critical decision that business owners must consider. Because incorporation, in a particular jurisdiction, makes the company bound to follow the laws of that jurisdiction, similarly it happens in the case of taxation. Multiple business owners choose Hong Kong as their place of incorporating their business. Hence, from now on we will be discussing why to choose Mauritius as the country for incorporation.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Features " className="scrollTo">
                                <li>Features</li>
                            </a>
                            <a href="#Types " className="scrollTo">
                                <li>Types of company incorporated</li>
                            </a>
                            <a href="#DocumentRequired " className="scrollTo">
                                <li>Documents Required</li>
                            </a>
                            <a href="#ProcessCompany " className="scrollTo">
                                <li>Process of incorporation in Mauritius</li>
                            </a>

                            <a href="#IncorporationFees " className="scrollTo">
                                <li>Incorporation Fees</li>
                            </a>
                            <a href="#HowDoes" className="scrollTo">
                                <li>How does RegisterKaro help?</li>
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
                <p className="small-heading text-center">Company Registration in Mauritius</p>
                <div>
                    <Image alt="Why choose Mauritius for incorporation?" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}