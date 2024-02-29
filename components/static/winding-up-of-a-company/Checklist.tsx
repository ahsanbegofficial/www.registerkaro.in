import Image from 'next/image'
import React from 'react'
import one from '../../../assets/images/pvt-reg/checklist/one.png'
import two from '../../../assets/images/pvt-reg/checklist/two.png'
import three from '../../../assets/images/pvt-reg/checklist/three.svg'
import stages from '../../../assets/images/static/winding-up-of-a-company/stages-trubunal.svg';

interface HeroProps {
    cityName: string;
}

export const Checklist = ({ cityName }: HeroProps) => {
    return (
        <div className='checklist' id='Checklist'>
            <div className='flex-5'>
                <p className='main-para'>The process for a tribunal for winding up of a company involuntarily is as follows:</p>
                <Image alt="Stages involved in the process of winding up of a company by tribunal" className="Checklist-img w-100" height={520} loading="lazy" src={stages} />
            </div>
            <div className="checklist flex w-80 m-auto mobile-flex-column">
                <div className="checklist-divs flex flex-column text-center align-center">
                    <div>
                        <Image height={125} width={125} src={one} alt="Section 275 of the Companies Act mandates that the company designate a liquidator. In order to determine if the company qualifies for a mandatory wind-up by the tribunal, the liquidator will need to review the company’s debts and credits. " />
                    </div>
                    <p>Section 275 of the Companies Act mandates that the company designate a liquidator. In order to determine if the company qualifies for a mandatory wind-up by the tribunal, the liquidator will need to review the company’s debts and credits. </p>
                </div>
                <div className="checklist-divs flex flex-column text-center align-center">
                    <div>
                        <Image height={125} width={125} src={two} alt="The liquidator will then be required to submit a report to the tribunal in accordance with Section 281 of the Act." />
                    </div>
                    <p>The liquidator will then be required to submit a report to the tribunal in accordance with Section 281 of the Act.</p>
                </div>
                <div className="checklist-divs flex flex-column text-center align-center">
                    <div>
                        <Image height={125} width={125} src={three} alt="The tribunal then orders the liquidator to begin the process of dissolving the company in accordance with Section 281 of the Companies Act, 2013 after reviewing the report." />
                    </div>
                    <p>The tribunal then orders the liquidator to begin the process of dissolving the company in accordance with Section 281 of the Companies Act, 2013 after reviewing the report.</p>
                </div>

            </div>
        </div>

    )
}
