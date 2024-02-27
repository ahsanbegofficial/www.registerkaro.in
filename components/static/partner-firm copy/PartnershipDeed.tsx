import Image from 'next/image'
import dft from '../../../assets/images/pvt-reg/differentType.svg'
import ulArrow from '../../../assets/images/pvt-reg/ulArrow.svg'

export const PartnershipDeed = () => {
  return (
    <div>
        <p className='main-para'>A partnership deed is a formal agreement that outlines the rights, duties, profit sharing, and other obligations of the partners in a partnership. It can be in written or oral form, but it is generally recommended to have a written partnership deed to prevent any potential conflicts in the future:</p>
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column-reverse' id='PartnershipDeed'>
     
      <div className='flex-7'>
         <h3>The partnership deed should include the following details:</h3>
        <h3>General details:</h3>
        <ul className='tick list-unstyled'>
          <p className='h6'>Along with the specified fees, an application form must be completed with the Registrar of Firms of the State in which the firm is located. All partners or their agents must sign and verify the registration application. The application, which includes the following information, can be mailed or delivered to the Registrar of Firms.</p>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Name and address of the firm and all the partners.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Nature of the business.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Date of starting the business.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Capital contribution by each partner.</li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} /> Profit/loss sharing ratio among the partners.</li>
        </ul>
        <h3>Specific details:</h3>
        <ul className='tick list-unstyled'>
          <p>In addition to the general details, the partnership deed may include specific clauses to address certain aspects and avoid conflicts. These may include:</p>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Interest on capital invested, partner’s drawings, or any loans provided by partners to the firm. </li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Salaries, commissions, or other amounts payable to partners. </li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Rights and responsibilities of each partner, including any additional rights granted to active partners. </li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Duties and obligations of all partners. </li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Procedures to be followed in the event of a partner’s retirement, death, or dissolution of the firm. </li>
          <li><Image alt="ulArrow" className="ulArrow-img" loading="lazy" height={30} width={30} src={ulArrow} />Any other clauses agreed upon by the partners through mutual discussion. </li>
        </ul>
        <p>It is important to include all relevant details and provisions in the partnership deed to ensure clarity and avoid disputes among the partners.</p>
      </div>
      <div className='flex-3 justify-content-center'>
        <Image alt="Types of business structures in india and these structures are private limited company, public limited company, one person company, limited and sole proprietorship" className="DifferentTypes-img w-100" height={382} loading="lazy" src={dft} />
      </div>
      
      </div>
      
    </div>
  )
}