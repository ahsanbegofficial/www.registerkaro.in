import certificate from '../../../assets/images/static/environmental-clearance/Procedure_Environmental.svg';
import Image from 'next/image';
interface HeroProps {
    cityName: string;
}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>Environmental clearance is a procedure that involves obtaining government clearance for certain projects that can cause significant environmental impacts or pollution. It is mandatory to get environmental clearance for projects that fall under the categories specified in the Environmental Impact Assessment (EIA) Notification, 2006. The main purpose of environmental clearance is to assess the environmental impacts of the proposed project and to ensure that the project is environmentally sound and sustainable.</p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#Applicable" className="scrollTo">
                               <li>Applicable Rules/Acts/Regulations</li>
                            </a>
                            <a href="#Prerequisites" className="scrollTo">
                               <li>Eligibility/Pre-Licensing/Mandatory Pre-Requisites</li>
                            </a>
                            <a href="#Types" className="scrollTo">
                               <li>Different types of Environmental Clearance services we offer</li>
                            </a>
                            <a href="#DocumentRequired" className="scrollTo">
                               <li>Documents Required for Environmental Clearance</li>
                            </a>
                            <a href="#Procedure" className="scrollTo">
                               <li>Procedure to get Environmental Clearance</li>
                            </a>
                            <a href="#Certificate" className="scrollTo">
                               <li>Cancellation/Validity/ Renewal of the Environment Clearance Certificate</li>
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
                <p className="small-heading text-center">Get Online Environmental Clearance in {cityName}</p>
                <div>
                    <Image alt="Get Online Environmental Clearance in India" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}