import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/public-reg/validityAndRenew.svg'

export const Validity = () => {
    return (
        <div className='Validity flex w-80 m-auto mobile-flex-column' id='Validity'>
            <div className='flex-6'>
                <Image alt="Validity and Renewal of Public Limited Company" className="Validity-img w-100" height={240} loading="lazy" src={bft} />
            </div>
            <div className='flex-4'>
                <p>Once a Public Limited Company is registered, it remains valid unless it is dissolved or removed from the Company Register. Renewal is generally not required unless there are changes to the Company's information or legal obligations.</p>
            </div>
        </div>
    )
}
