
import React from 'react'

interface HeroProps {
  cityName: string;
}
export const WhichISO = ({ cityName }: HeroProps) => {
  return (
    <div id='WhichISO'>
        <p className='main-para my-2'>There are different types of ISO Certification Standards as we discussed above which focus on different aspects of business activity. ISO 9001 focus Quality Management System which aids organization to boost customer satisfaction with Company’s products & services. Similarly, ISO 14001 focuses on Environmental Management & so on. Before getting ISO Certification, you must check the entire business process thoroughly & analysis which part or parts of the process you want to standardized with ISO Standards. As per this choose the ISO Certification Standards.</p>
    </div>
  )
}