import Image from 'next/image'
import React from 'react'
import bft from '../../../assets/images/static/fssai/whoRequires.svg'

interface HeroProps {
  cityName: string;
}

export const WhoReq = ({ cityName }: HeroProps) => {
  return (
    <div id='WhoReq'>
      <p className='main-para mb-2'> FBOs or Food Business Operators are those involved in the processing, storing, manufacturing, selling, packaging, distributing, or retailing of food in {cityName}. In {cityName}, Food Businesses are regulated & managed by FSSAI.:</p>
      <div className='benefits flex w-80 m-auto mobile-flex-column mt-5' >
        <div className='flex-4'>
          <Image alt="Who Requires FSSAI Registration/License" className="WhoReq-img w-100" height={750} loading="lazy" src={bft} />
        </div>
        <div className='flex-7'>
          <p>FBOs in {cityName} carrying on the following types of food business must have FSSAI Registration or Licence:</p>
          <p><strong>1: </strong>Importers & exporters of food products and ingredients;</p>
          <p><strong>2: </strong>Proprietary & novel food;</p>
          <p><strong>3: </strong>Slaughtering house;</p>
          <p><strong>4: </strong>Meat & fist processing unit;</p>
          <p><strong>5: </strong>Dairy units including milk vendors, milk chilling units & petty milkmen;</p>
          <p><strong>6: </strong>Vegetable oil processing units;</p>
          <p><strong>7: </strong>Cold or refrigerated storage unit;</p>
          <p><strong>8: </strong>Petty retailers, snack shops, bakery shops, retail shops, etc.;</p>
          <p><strong>9: </strong>Temporary stalls, food premises or fixed stalls are involved in storing, selling, preparing & distributing food products;</p>
          <p><strong>10: </strong>All food manufacturing units that include Repacking food;</p>
          <p><strong>11: </strong>Transporter of food products;</p>
          <p><strong>12: </strong>Bars, hotels & restaurants;</p>
          <p><strong>13: </strong>Food vending agencies & caterers;</p>
          <p><strong>14: </strong>E-commerce food suppliers including cloud kitchen;</p>
          <p><strong>15: </strong>Suppliers, marketers, wholesalers, and distributors of food items.</p>
        </div>
      </div>
    </div>
  )
}
