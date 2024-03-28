import certificate from '../../../assets/images/static/nidhi-company-compliance/Nidhi_Company_Compliance_ceritificates.svg';
import Image from 'next/image';
interface HeroProps {
    cityName: string;
}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>In {cityName}, a subset of non-banking financial institutions known as Nidhi Companies, is essential to promoting members’ savings and financial security. The Indian government has established a set of rules and Compliance that Nidhi companies must follow to guarantee the smooth functioning of these businesses and safeguard the interests of the general public. We will examine Nidhi company Compliance in-depth in this blog, emphasizing their significance, advantages, and important factors that Nidhi companies must consider and we also discuss some Nidhi Company Compliance. Ultimately, Nidhi Company Compliance are not merely statutory requirements; they are also necessary for the seamless and ethical running of these institutions. Failure to comply with these regulations may result in penalties and, in severe situations, the dissolution of the company. Nidhi companies must prioritize compliance in all parts of their operations, from membership criteria to financial transparency and tax adherence, to expand and accomplish their intended purpose.</p>
                <p className='text-justify'>These institutions may continue to promote financial inclusion and the culture of savings by knowing, complying with, and staying up to date on Nidhi Company Compliance, benefiting not only their members but also contributing to the growth of the Indian economy.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#What" className="scrollTo">
                                <li>What are Nidhi Companies?</li>
                            </a>
                            <a href="#Advantages" className="scrollTo">
                                <li>Key Advantages of a Nidhi Company in {cityName}</li>
                            </a>
                            <a href="#Vital" className="scrollTo">
                                <li>Some Vital Nidhi Company Compliance</li>
                            </a>
                            <a href="#Incorporation" className="scrollTo">
                                <li>Pre-Incorporation Compliance</li>
                            </a>
                            <a href="#PostIncorporation" className="scrollTo">
                                <li>Post-Incorporation Nidhi Company Compliance</li>
                            </a>
                            <a href="#ListofAnnual" className="scrollTo">
                                <li>List of Annual Nidhi Company Compliance</li>
                            </a>
                            <a href="#Penalties" className="scrollTo">
                                <li>Penalties</li>
                            </a>
                            <a href="#Event" className="scrollTo">
                                <li>Event-Based Compliance</li>
                            </a>
                            <a href="#NewComplianceRules" className="scrollTo">
                                <li>New Compliance Rules for Nidhi Companies</li>
                            </a>
                          
                            <a href="#Why" className="scrollTo">
                                <li>Why RegisterKaro?</li>
                            </a>
                    

                        </ul>
                    </ul>
                </div>
            </div>
            <div className='flex-5'>
                <p className="small-heading text-center"> Nidhi Company Compliance sample</p>
                <div>
                    <Image alt="Nidhi Company Compliance – A Complete Analysis" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}