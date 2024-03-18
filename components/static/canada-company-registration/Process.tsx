import certificate from '../../../assets/images/static/canada-company-reg/certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Canada is well known for having a welcoming business environment worldwide. Canada was ranked 23rd out of 197 nations in the World Bank's 2019 Ease of Doing Business index. The nation has improved its intellectual property (IP) laws in a number of ways, including by lowering administrative costs and simplifying processes for Canadian companies. Additionally, tourism is one of the service industries growing at the fastest rate. With one-seventh of the workforce employed in manufacturing and accounting for over one-fifth of the country's GDP, manufacturing and services are Canada's other two largest industries. With all these multiple factors, Canada stands to top the list of countries best for starting a business attracting many investors, entrepreneurs, businessmen to its market.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Benefits " className="scrollTo">
                                <li>Benefits of Company Registration in Canada</li>
                            </a>
                            <a href="#Types " className="scrollTo">
                                <li>Types of Company Structures in Canada</li>
                            </a>
                            <a href="#Prerequisites " className="scrollTo">
                                <li>Prerequisites of Company Registration in Canada</li>
                            </a>
                            <a href="#DocumentRequired " className="scrollTo">
                                <li>Documents required for Company registration</li>
                            </a>
                            <a href="#ProcessCompany " className="scrollTo">
                                <li>Process of Company Registration in Canada</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                                <li>Why Choose RegisterKaro for Company Registration in Canada?</li>
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
                <p className="small-heading text-center">Company Registration in Canada</p>
                <div>
                    <Image alt="An Overview of Company Registration in Canada" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}