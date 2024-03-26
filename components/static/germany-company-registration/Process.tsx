import certificate from '../../../assets/images/static/germany-company-registration/certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Germany is the most popular destination for entrepreneurs looking to launch a business in Europe because of its central location on the continent, which facilitates business growth and offers a plethora of opportunities for networking across the continent. Since Germany is easily accessible from all other European countries via various forms of transportation, it is also the preferred destination for business owners looking to expand internationally. Germany is also a favorable destination for new ventures due to its many advantages, including its business-friendly economy, which makes it easy for investors and entrepreneurs to register their companies there.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhyStart" className="scrollTo">
                                <li>Why to start a business in Germany?</li>
                            </a>
                            <a href="#Types" className="scrollTo">
                                <li>Types of Companies in Germany</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                                <li>Documents you might need</li>
                            </a>
                            <a href="#ProcessCompany" className="scrollTo">
                                <li>Process for Company Registration in Germany</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                                <li>Why Choose RegisterKaro for Company Registration in Germany?</li>
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
                <p className="small-heading text-center">Company Registration in Germany</p>
                <div>
                    <Image alt="An Overview of Company Registration in Germany" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}