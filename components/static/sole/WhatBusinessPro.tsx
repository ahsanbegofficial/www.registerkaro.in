import Image from 'next/image'
import React from 'react'

import groceryshop from '../../../assets/images/static/sole-proprietorship/grocery_shops.svg'
import fast_food_vendors from '../../../assets/images/static/sole-proprietorship/fast_food_vendors.svg'
import manufacturing_businesses from '../../../assets/images/static/sole-proprietorship/manufacturing_businesses.svg'
import small_traders from '../../../assets/images/static/sole-proprietorship/small_traders.svg'
import repair_and_maintenance_services from '../../../assets/images/static/sole-proprietorship/repair_and_maintenance_services.svg'
import parlours from '../../../assets/images/static/sole-proprietorship/parlours.svg'
import Boutiques from '../../../assets/images/static/sole-proprietorship/boutiques.svg'
import retail_stores from '../../../assets/images/static/sole-proprietorship/retail_stores.svg'
import local_transportation_services from '../../../assets/images/static/sole-proprietorship/local_transportation_services.svg'
import clinical_and_medical_management_facilities from '../../../assets/images/static/sole-proprietorship/clinical_and_medical_management_facilities.svg'
import tutoring_services_and_so_on from '../../../assets/images/static/sole-proprietorship/tutoring_services_and_so_on.svg'
interface HeroProps { cityName: string; }
export const WhatBusinessPro = ({ cityName }: HeroProps) => {
  return (
    <div className='checklist' id='WhatBusinessPro'>
          <p className='main-para'>Following are the various types of businesses in { cityName } that can be Sole Proprietorships:</p>
          <div className="checklist flex w-80 m-auto mobile-flex-column">
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={groceryshop} alt="Grocery Shops"/>
                  </div>
                  <p>Grocery Shops</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={fast_food_vendors} alt="Fast food vendors"/>
                  </div>
                  <p>Fast food vendors</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={manufacturing_businesses} alt="Manufacturing businesses"/>
                  </div>
                  <p>Manufacturing businesses</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={small_traders} alt="Small Traders"/>
                  </div>
                  <p>Small Traders</p>
              </div>
          </div>
          <div className="checklist flex w-80 m-auto mt-4 mobile-flex-column">
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={repair_and_maintenance_services} alt="Repair & Maintenance Services"/>
                  </div>
                  <p>Repair & Maintenance Services</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={parlours} alt="Parlours"/>
                  </div>
                  <p>Parlours</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={Boutiques} alt="Boutiques"/>
                  </div>
                  <p>Boutiques</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={retail_stores} alt="Retail Stores"/>
                  </div>
                  <p>Retail Stores</p>
              </div>
          </div>
          <div className="checklist flex w-80 m-auto mt-4 mobile-flex-column">
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={local_transportation_services} alt="Local Transportation Services"/>
                  </div>
                  <p>Local Transportation Services</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={clinical_and_medical_management_facilities} alt="Clinical & Medical Management Facilities"/>
                  </div>
                  <p>Clinical & Medical Management Facilities</p>
              </div>
              <div className="checklist-divs flex flex-column text-center align-center">
                  <div>
                      <Image height={125} width={125} src={tutoring_services_and_so_on} alt="Tutoring Services and so on."/>
                  </div>
                  <p>Tutoring Services and so on.</p>
              </div>
          </div>
      </div>

  )
}
