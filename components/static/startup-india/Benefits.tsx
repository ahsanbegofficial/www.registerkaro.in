import Image from 'next/image'
import benefits_of_startup_india_registration from '../../../assets/images/static/startup_india_registration/benefits-startup-india.svg'
interface HeroProps {cityName: string;}
export const Benefits = ({ cityName }: HeroProps) => {

  return (
    <div className='DocumentArrowWise flex w-80 m-auto mobile-flex-column' id='Benefits'>
       <div className='flex-3'>
        <Image alt="Benefits of Startup India Registration, Easy Access of Funds,Tax Savings for Investors, Income Tax Exemption,Easily apply for Government Tenders,Rebate in Trademark & Patent Filing,Easy Winding Up" className="Benefits-img w-100" loading="lazy" src={benefits_of_startup_india_registration} height={500} />
        </div>
        <div className='flex-7'>
          <p>Following are the benefits of Startup {cityName} Registration:</p>
          <p><strong>Easy Access of Funds:</strong> Rs. 10,000 crores fund is set-up by the Indian Government to provide funds to the startups as Venture Capital. The Government is also giving guarantees to the lenders to encourage banks & other financial institutions to provide Venture Capital.</p>
          <p><strong>Tax Savings for Investors:</strong> Individual investing their capital gains in the venture funds set-up by the Government will get exemption from Capital Gains and this will help all the Startups to attract more investors.</p>
          <p><strong>Income Tax Exemption:</strong> Eligible startups can be exempted from paying Income Tax for 3 Consecutive F.Y. (Financial Years) out of their first 10 years since Incorporation.</p>
          <p><strong>Easily apply for Government Tenders:</strong> Startups in {cityName} can easily apply for Government Tenders and they are exempted from the prior experience or turnover criteria applicable for normal companies answering to Government Tenders.</p>
          <p><strong>Rebate in Trademark & Patent Filing:</strong> Startups working under Startup {cityName} Registration Scheme will get 50% rebate on Trademark Filing and 80% rebate on Patent filing.</p>
          <p><strong>Easy Winding Up:</strong> The process of winding up of Company becomes very easy & it takes 90 days to wind up under IBC, 2016.</p>

         </div>
    </div>
  )
}
