import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/public-reg/suspension.svg'

export const Suspension = () => {
    return (
        <div className='benefits flex w-80 m-auto mobile-flex-column-reverse' id='Suspension'>
            <div className='flex-4'>
                <p>A company's operations can be suspended for various reasons, such as non-compliance with regulations, regulatory actions, financial difficulties, or exceptional circumstances. The suspension can be temporary or may result in the company's dissolution. Revocation, also known as liquidation, occurs when a Public Limited Company is no longer financially viable or solvent. It usually involves a court order and entails selling the company's assets to settle its debts and distributing any remaining funds to shareholders.</p>
            </div>
            <div className='flex-6'>
                <Image alt="Suspension/Revocation of Service" className="Suspension-img w-100" height={310} loading="lazy" src={bft} />
            </div>
        </div>
    )
}