import certificate from '../../../assets/images/static/france-company-registration/certificate.svg';
import Image from 'next/image';

export const Process = () => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>The economy of France is the second largest in the Eurozone and the fifth largest in the world. Despite adopting a more liberal corporate culture later than many of its EU competitors, France has actively pursued foreign direct investment, with notable success. As a result, registering a corporation in France is currently a very easy process, albeit local counsel is necessary to guarantee adherence to all applicable financial and legal requirements.</p>
                <p className='text-justify'>In France, registering a company follows no set procedure. The options include starting a new firm from scratch, buying an existing one, or operating a tiny representative office called a bureau de liaison. For clients from outside, a simplified joint stock company (SAS) or limited company (SARL) are the most common forms.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Benefits" className="scrollTo">
                                <li>Benefits of Company Registration in France</li>
                            </a>
                            <a href="#Types" className="scrollTo">
                                <li>Types of Company Structures in France</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                                <li>Documents required for Company registration in France</li>
                            </a>
                            <a href="#ProcessCompany" className="scrollTo">
                                <li>Process of Company Registration in France</li>
                            </a>
                            <a href="#WhyChoose" className="scrollTo">
                                <li>Why Choose RegisterKaro for Company Registration in France?</li>
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
                <p className="small-heading text-center">Company Registration in France</p>
                <div>
                    <Image alt="An Overview of Company Registration in France" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}