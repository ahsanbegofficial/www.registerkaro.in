import certificate from '../../../assets/images/static/thailand-company-reg/intro_certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Due to its advantageous location, Thailand has excellent business opportunities for international investors as well as foreigners wishing to establish a Thai firm and conduct business there. Thailand's robust export industry, plentiful natural resources, steady economic growth, and vibrant consumer market make it an ideal destination for international business. The <strong>Foreign Business Act (FBA)</strong> regulates foreign company formation, Thai company registration, and foreigners' business operations in Thailand. Foreigners can choose from a wide range of company formations, including the widely used Thai Limited Company. A basic Thai Limited Liability Company can be registered in Thailand in as little as three to five business days, while a more complicated BOI Company may require up to 90 days. This entire procedure is based mostly on the chosen company structure. </p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhyStart" className="scrollTo">
                                <li>Why to start a business in Thailand?</li>
                            </a>
                            <a href="#Types" className="scrollTo">
                                <li>Types of Companies in Thailand</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                                <li>Documents you might need</li>
                            </a>
                            <a href="#ProcessCompany" className="scrollTo">
                                <li>Process for Company Registration in Thailand</li>
                            </a>
                            <a href="#Registration" className="scrollTo">
                                <li>Post Registration To-dos</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                                <li>Why Choose RegisterKaro for Company Registration in Thailand?</li>
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
                <p className="small-heading text-center">Company Registration in Thailand</p>
                <div>
                    <Image alt="An Overview of Company Registration in Thailand" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}