import Image from 'next/image'
import React from 'react'
import ulArrow from '../../../assets/images//static/private-reg/ulArrow.svg'

interface HeroProps {
  cityName: string;
}

export const Activities = ({ cityName }: HeroProps) => {
  return (

    <div id='Activities'>
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' >
      <div className='flex-5'>
        <div className='flex-3'>
        </div>
        <h3>Asset Finance Company (AFC):</h3> <ul className='tick list-unstyled'>
          <li><Image alt="Copy of Aadhar Card" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> It is a financial institution that primarily engages in financing physical assets supporting economic and productive activity. The range of assets include tractors, cars, lathe machines, earth moving, generator sets, and material handling equipment, self-powered vehicles, and general-purpose industrial machines. For the purposes of this definition, the company’s principal business is the totality of financing real and physical assets that support economic activity and the income generated from such activities, which accounts for at least 60% of the company’s total assets and income.</li></ul>
        <h3>Investment Company (IC):</h3> <ul className='tick list-unstyled'>
          <li><Image alt="Copy of Aadhar Card" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Investment company or IC refers to any such company acting as a financial institution which carries the acquisition of securities as its primary business.</li></ul>
        <h3>Loan Company (LC):</h3> <ul className='tick list-unstyled'>
          <li><Image alt="Copy of Aadhar Card" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> LC refers to any financial organization that does lending, advances, or other forms of financing for businesses other than its own as its primary operation; asset finance companies are not included in this definition.</li></ul>
        <h3>Infrastructure Finance Company (IFC):</h3> <ul className='tick list-unstyled'>
          <li><Image alt="Copy of Aadhar Card" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> As a non-banking finance business, IFC offers services related to infrastructure loans to fund at least 75% of its total assets. It must have a minimum Net Owned Funds of ₹ 300 crore along with the minimum credit rating of ‘A’ (or equivalent), and a 15% CRAR.</li></ul>
        <h3>Systemically Important Core Investment Company (CIC-ND-SI):</h3> <ul className='tick list-unstyled'>
          <li><Image alt="Copy of Aadhar Card" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> With an asset size of Rs 100 crore (or more), CIC-ND-SI is an NBFC that accepts public funds and engages in the business of acquiring shares and securities that meet a variety of requirements. The requirements state that it must own debt, loans, preference shares, equity shares, or other investments in group firms for at least 90% of its total assets. Furthermore, at least 60% of its total assets are made up of its investments in group company equity shares (including instruments that are mandatory convertible into equity shares within a maximum of ten years from the date of issue). Furthermore, it only engages in block sales for the aim of diluting or disinvesting its investments in shares, debt, or loans in group firms. Furthermore, it is crucial that it refrain from engaging in any other financial activity covered by Sections 45I(c) and 45I(f) of the RBI Act, 1934, with the exception of investing in government securities, bank deposits, money market instruments, loans to group companies, and guarantees issued on their behalf.</li></ul>
        <h3>Infrastructure Debt Fund- Non-Banking Financial Company (IDF-NBFC):</h3> <ul className='tick list-unstyled'>
          <li><Image alt="Copy of Aadhar Card" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> it is a form of business structure that was established to help long-term debt flow into infrastructure projects. It is registered as an NBFC. IDF-NBFC raises capital by issuing bonds with a minimum five-year maturity denominated in dollars or rupees. IDF-NBFCs can only be sponsored by companies like Infrastructure Finance Companies (IFC).</li></ul>
        <h3>Non-Banking Financial Company– Factors (NBFC-Factors):</h3> <ul className='tick list-unstyled'>
          <li><Image alt="Copy of Aadhar Card" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> The primary activity of NBFC-Factor, an NBFC that does not accept deposits, is factoring. A factoring company’s financial assets should make up at least half of its total assets, and the revenue it receives from factoring should equal at least half of its gross revenue.</li></ul>
        <h3>Mortgage Guarantee Companies (MGC)-</h3> <ul className='tick list-unstyled'>
          <li><Image alt="Copy of Aadhar Card" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Financial institutions known as MGC have net owned funds of ₹ 100 crore and at least 90% of their business turnover comes from mortgage guarantee business or from mortgage guarantee business at least 90% of the gross income comes from.</li></ul>
        <h3>NBFC- Non-Operative Financial Holding Company (NOFHC):</h3> <ul className='tick list-unstyled'>
          <li><Image alt="Copy of Aadhar Card" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> NOFHC will allow promoters or promoter groups to establish a new bank. To an extent which is permitted by the relevant regulatory prescriptions, the bank and all other financial services businesses governed by the RBI or other financial sector authorities will be held by the wholly-owned Non-Operative Financial Holding Company (NOFHC).</li></ul>
        <h3> (NBFC-MFI):</h3> <ul className='tick list-unstyled'>
          <li><Image alt="Copy of Aadhar Card" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> At least 85% of the assets held by NBFC-MFI, a non-deposit accepting NBFC, are qualifying assets that satisfy a number of criteria. To be eligible for a loan from an NBFC-MFI, a borrower must meet certain conditions, such as having an annual family income in rural areas of no more than ₹1,00,000 or an income in urban or semi-urban areas of no more than ₹1,60,000. Furthermore, the maximum loan amount in the first cycle is ₹50,000, and in the subsequent cycles, it is ₹1,00,000. In addition, the borrower’s total debt cannot be more than ₹1,00,000, and the loan period cannot be shortened to less than 24 months without incurring penalties for early repayment if the loan amount exceeds ₹15,000. Furthermore, the loan must be issued without collateral and must account for at least 50% of the total loans made by MFIs in order to be granted for the purpose of generating revenue. It is important to remember that the borrower may choose to return the loan in weekly, fortnightly, or monthly installments.</li></ul>
      </div>
    </div>
    </div>
  )
}
