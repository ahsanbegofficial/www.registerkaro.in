import Image from 'next/image'
import React from 'react'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'
import documents from '../../../assets/images/pvt-reg/documents.svg'

export const RegisterUnderEstablishment = () => {
  return (
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' id='RegisterUnderEstablishment'>
      <div className='flex-7'>
      <p>The Shop & Establishment Act allows the Registration of Sole Proprietorship for shops & establishments in India. Under the prescribed law, cafeterias, restaurants, theatres, hotels, factories, commercial facilities, or public entertainment locations aren’t considered shops. Following is the list of premises that qualify as a shop</p>
        <h3>Following is the list of premises that qualify as a shop</h3>
        <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />If the products are sold either retail, wholesale</li>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Services are offered to the customer;</li>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />This comprises offices, sheds, workplaces, or warehouses used in connection with such business whether on the same premises/elsewhere.</li>
        </ul>
        <h3>Following is the general process of Registration</h3>
        <ul className='tick list-unstyled'>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The Labour Department of each state is liable for registering & processing Establishment Acts</li>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The registration process is completely handled by an inspector in charge</li>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Usually, the District Labour Officer takes charge as the inspector in charge</li>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The inspector will provide a form to the owner</li>
            <li className='mt-3'>The following details regarding the establishment & employer should be included</li>
            <ol>
                <li className='fs-6 m-0'>Owner Name</li>
                <li className='fs-6 m-0'>Name of the Establishment</li>
                <li className='fs-6 m-0'>Business Address</li>
                <li className='fs-6 m-0'>No. of Employees</li>
                <li className='fs-6 m-0'>The date that the business opened for business</li>
                <li className='fs-6 m-0'>Business category</li>
            </ol>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The owner of the business should send the application & the registration fees to the inspector in charge within 30 days of establishment</li>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The verification process by the inspector takes some days</li>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The owner of the business will get the Registration Certificate if the Registration fulfills all the requirements</li>
            <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />The Certificate must be shown within the premises & renewed periodically</li>
        </ul>
      </div>
      <div className='flex-3'>
        <Image alt="The Shop & Establishment Act allows the Registration of Sole Proprietorship for shops & establishments in India. Under the prescribed law, cafeterias, restaurants, theatres, hotels, factories, commercial facilities, or public entertainment locations aren’t considered shops. Following is the list of premises that qualify as a shop" className="DocumentRequired-img w-100" loading="lazy" src={documents} height={430}/>
      </div>
    </div>

  )
}
