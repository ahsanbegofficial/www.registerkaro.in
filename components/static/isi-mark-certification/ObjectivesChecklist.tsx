import React from "react"

interface HeroProps {
  cityName: string;
}

export const ObjectivesChecklist = ({ cityName }: HeroProps) => {
  return (
    <div id='ObjectivesChecklist'>
      <p className='main-para'>A comprehensive list includes cement, household electrical goods, batteries, medical equipment, steel and iron products, kitchen appliances, and many more.</p>

    </div>
  )
}
