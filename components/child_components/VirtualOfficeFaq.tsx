import React from 'react'
import data  from '../../assets/data/virtual-office.json'
import { FaqTemplate } from './FaqTemplate'

export const VirtualOfficeFaq = () => {
    return (
        <FaqTemplate faqItems={data.Items} />
    )
}