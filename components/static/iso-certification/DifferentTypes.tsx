import Image from 'next/image'
import React from 'react'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

interface HeroProps {
  cityName: string;
}
export const DifferentTypes = ({ cityName }: HeroProps) => {
  return (
    <div id='DifferentTypes'>
      <p className='main-para'>Following are the different types of ISO Standards in { cityName }:</p>
      <div className='w-80 m-auto'>
        <h3>Quality:</h3>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 10004:2012 Customer satisfaction</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 10006:2017 Projects</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 13485:2016 Medical devices</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO/TS 16949:2009 Automotive</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 17582:2014 Electoral organizations</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 18091 Local government</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 19443:2018 Nuclear energy</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 20001 Educational organizations</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO/TS 22163:2017 Business management system requirements for rail organizations</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO/TS 29001 Petroleum, petrochemical, and natural gas industries</li>
          </ul>
        <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO/IEC 90003 Software engineering</li>
          </ul>
        <h3>Industry</h3>

          <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 14298:2013 Graphic technology – Management of security printing processes</li>
          </ul>
          <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 15378:2017 Primary packaging materials for medicinal products</li>
          </ul>
          <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 16000-40 Indoor air</li>
          </ul>
          <ul className='tick list-unstyled'>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 34101-1 Sustainable and traceable cocoa</li>
          </ul>
          <h3>Environment and energy</h3>

            <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 14002-1 Environmental management systems-a guide for applying the 14001 framework</li>
            </ul>
            <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 14004:2016 Environmental management systems-General guidelines on implementation</li>
            </ul>
            <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 14005:2010 Environmental management systems-guidelines for phased implementation</li>
            </ul>
            <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 14006:2011 Environmental management systems-Guidelines for incorporating eco-design</li>
            </ul>
            <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 14009 Environmental management systems-guidelines for incorporating redesign of products and components to improve material circulation</li>
            </ul>
            <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 50001:2018 Energy management systems</li>
            </ul>
            <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 50004:2014 Energy management systems-guidelines for implementation, maintenance, and improvement</li>
            </ul>
        <h3>Services</h3>
            
           <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 21101:2014 Adventure tourism safety management</li>
            </ul>
           <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 21404:2018 Tourism and related services: Sustainability management system for accommodation establishments</li>
            </ul>
           <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 24526 Water efficiency</li>
            </ul>
           <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 20121:2012 Event sustainability</li>
            </ul>
           <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO/IEC 20000-1: 2011 Information technology-service management</li>
            </ul>
            <h3>General Management</h3>
           <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 19600:2014 Compliance management systems</li>
            </ul>
           <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 26000 Social responsibility</li>
            </ul>
           <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 30301:2011 Information and documentation</li>
            </ul>
           <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 30401 Human resource</li>
            </ul>
           <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 31000 Risk management</li>
            </ul>
           <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 37001:2016 Anti-bribery</li>
            </ul>
           <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 37002 Whistleblowing</li>
            </ul>
           <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 37101:2016 Sustainable development in communities</li>
            </ul>
           <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 37301 Compliance management</li>
            </ul>
           <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 41001 Facility management</li>
            </ul>
           <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 44001:2017 Collaborative business relationship management</li>
            </ul>
           <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 44002 Guidelines on the implementation of ISO 44001</li>
            </ul>
           <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 55001:2014 Asset management</li>
            </ul>
           <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 55002:2014 Guidelines for the application of ISO 55001</li>
            </ul>
           <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 56002 Innovation management</li>
            </ul>
            <h3>Safety and security</h3>
            <ul className='tick list-unstyled'>
              <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 22000 Food safety management systems</li>
            </ul>
            <ul className='tick list-unstyled'>
              <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 22004:2014 Guidance on the application of ISO 22000</li>
            </ul>
            <ul className='tick list-unstyled'>
              <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 10377:2013 Consumer product safety</li>
            </ul>
            <ul className='tick list-unstyled'>
              <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 10393:2013 Consumer product recall</li>
            </ul>
            <ul className='tick list-unstyled'>
              <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 18788:2015 Private security operations</li>
            </ul>
            <ul className='tick list-unstyled'>
              <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 22301:2012 Societal Security-Business continuity management systems</li>
            </ul>
            <ul className='tick list-unstyled'>
              <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 24518:2015 Crisis management of water utilities</li>
            </ul>
            <ul className='tick list-unstyled'>
              <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 28007-1:2015 Ships and marine technology</li>
            </ul>
            <ul className='tick list-unstyled'>
              <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO 29001:2012 Road traffic safety</li>
            </ul>
            <ul className='tick list-unstyled'>
              <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO/DIS 45001 Occupational health and safety</li>
            </ul>
            <ul className='tick list-unstyled'>
              <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO/IEC 80079-34:2011 Explosive atmospheres</li>
            </ul>
            <ul className='tick list-unstyled'>
              <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO/NP 35001 Laboratory bio-risk</li>
            </ul>
            <ul className='tick list-unstyled'>
              <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO/TS 34700:2016 Animal welfare management</li>
            </ul>
            <h3>Information technology</h3>

            <ul className='tick list-unstyled'>
              <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO/IEC 20000-1 Service management Part 1</li>
            </ul>
            <ul className='tick list-unstyled'>
              <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO/IEC 20000-2 Service management Part 2</li>
            </ul>
            <ul className='tick list-unstyled'>
              <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO/IEC 27003:2017 Security techniques</li>
            </ul>
            <ul className='tick list-unstyled'>
              <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO/IEC 20000-1 Enhancement to ISO/IEC 27001 for privacy management</li>
            </ul>
            <ul className='tick list-unstyled'>
              <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO/IEC 27010:2015 Information security management for inter-sector and inter-organizational communications</li>
            </ul>
            <ul className='tick list-unstyled'>
              <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO/IEC 27013:2015 Guidance on the integrated implementation of ISO/IEC 27001 and ISO/IEC 20000-1</li>
            </ul>
            <ul className='tick list-unstyled'>
              <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO/IEC 90003:2014 Software engineering</li>
            </ul>
            <ul className='tick list-unstyled'>
              <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />ISO/IEC DIS 19770-1 IT asset management</li>
            </ul>
      </div>
    </div>
  )
}