import React from 'react'
import certificate from '../../../assets/images/static/shop-and-establishment-act-registration/certificate.svg';
import Image from 'next/image';
interface HeroProps {
    cityName: string;
}
export const Process = ({ cityName }: HeroProps) => {
    return (
        <div className='process flex w-80 m-auto mobile-flex-column-reverse'>
            <div className='flex-5'>
                <p className='text-justify'>
                    In {cityName}, the Shop and Establishment Act was introduced to monitor/regulate work conditions & to protect the employees’ right in an unorganised sector of employment under the Indian Labor Law. The Shop and Establishment Act Registration is compulsory for all types of food businesses in {cityName} be it a food truck or a fine dining restaurant. Generally, shops are defined under the Shop and Establishment Act as the premises where the products selling take place either by retail or wholesale or where services are provided to customers. It comprises offices, storerooms, warehouses & godowns used in association with the trade or business.
                </p>

                <p className='text-justify'>
                    Commercial establishments under the Act are defined as a commercial, trading, banking, or insurance establishment or administrative services in which individuals are employed for office work. It comprises a hotel, eating house, theatre, restaurant, café, or other public entertainment or amusement places. However, industries & factories are not covered by the Shop and Establishment Act & are regulated by the <strong> Factories Act, 1948 and Industries (Development & Regulation) Act, 1951</strong>. The Shop and Establishment Act Registration Certificate or License acts as a Basic Registration or Licence for the business. The Shop and Establishment Act Registration Certificate is produced for getting many other business Licences & Registrations. It serves as incorporation proof of commercial shops or establishments. It is useful when the business owner wants to get a loan or open a current bank account for the business. Most banks will ask for the Shop and Establishment Act Registration Certificate for opening a current bank account.
              </p>
                <div className='page-point'>
                    <ul>
                        <ul>
                            <a href="#WhatRegulations" className="scrollTo">
                                <li>What are the various regulations under the Shop and Establishment Act?</li>
                            </a>
                            <a href="#ImportanceShop" className="scrollTo">
                                <li>Importance of Shop and Establishment Act License</li>
                            </a>
                            <a href="#WhichEntities" className="scrollTo">
                                <li>Which entities have to register under the Shop and Establishment Act?</li>
                            </a>
                            <a href="#AdvantagesShop" className="scrollTo">
                                <li>Advantages of Shop and Establishment Act Registration</li>
                            </a>
                            <a href="#ChecklistDocumentRequired" className="scrollTo">
                                <li>Documents Required for Shop and Establishment Act Registration</li>
                            </a>
                            <a href="#ProcedureShop" className="scrollTo">
                                <li>Procedure for Shop and Establishment Act Registration</li>
                            </a>
                            <a href="#Penalities" className="scrollTo">
                                <li>Penalties for not obtaining Shop and Establishment License in {cityName}</li>
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
                <p className="small-heading text-center"> Online Shop and Establishment Act Registration </p>
                <div>
                    <Image alt="Get Online Shop and Establishment Act Registration" className="certificate h-100 w-100" loading="lazy" src={certificate} />
                </div>
            </div>
        </div>
    )
}
