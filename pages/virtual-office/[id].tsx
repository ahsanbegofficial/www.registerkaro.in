import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Ahmedabad from '../../assets/images/virtualoffice/Ahmedabad.svg'
import Bangalore from '../../assets/images/virtualoffice/Bangalore.svg'
import Chandigarh from '../../assets/images/virtualoffice/Chandigarh.svg'
import Chennai from '../../assets/images/virtualoffice/Chennai.svg'
import Delhi from '../../assets/images/virtualoffice/Delhi.svg'
import Gurgaon from '../../assets/images/virtualoffice/Gurgaon.svg'
import Mumbai from '../../assets/images/virtualoffice/Mumbai.svg'
import RightArrow from '../../assets/images/virtualoffice/RightArrow.svg'
import access from '../../assets/images/virtualoffice/access.png'
import BG from "../../assets/images/virtualoffice/bgVirtual.svg"
import cost from '../../assets/images/virtualoffice/cost.png'
import document from '../../assets/images/virtualoffice/document.png'
import flexibility from '../../assets/images/virtualoffice/flexibility.png'
import importance from '../../assets/images/virtualoffice/importance.jpg'
import network from '../../assets/images/virtualoffice/network.png'
import Noida from '../../assets/images/virtualoffice/noida.svg'
import process from '../../assets/images/virtualoffice/process.png'
import professional from '../../assets/images/virtualoffice/professional.png'
import rupee from '../../assets/images/virtualoffice/rupee.png'
import tick from '../../assets/images/virtualoffice/tick.svg'
import viewMore from '../../assets/images/virtualoffice/viewMore.svg'
import ModalPopUp from '../../components/child_components/Modal'
import { Slider } from '../../components/child_components/Slider'
import { VirtualOfficeFaq } from '../../components/child_components/VirtualOfficeFaq'
import ZohoformVirtualOFC from '../../components/child_components/ZohoformVirtualOFC'
import ZohoformVirtualOFCCity from '../../components/child_components/ZohoformVirtualOFCCity'

export default function Home() {
    const [active, setActive] = useState(false)
    const router = useRouter();
    let QuerySmall = router.query.id as any;
    function capitalizeFirstLetter(str: string) {
        return str?.charAt(0).toUpperCase() + str?.slice(1);
    }

    let Query = capitalizeFirstLetter(QuerySmall);

    const handleClick = () => {
        setActive(true)
    }

    let hf = `https://www.registerkaro.in/virtual-office/${QuerySmall}`
    return (
        <div className='virtual-office'>
            <Head>
                <title>Virtual Office | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href={hf} />
                <meta property="og:title" content="Virtual Office  | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <ModalPopUp active={active} setActive={setActive} />
            <div className="hero mobile-flex-column">
                <Image
                    src={BG}
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    priority={true}
                    className="background-image"
                />
                <div className="header-content">
                    <h4>Unlock the <span className='color-orange'>Benefits of Getting a Virtual Office</span> Services in {Query || ''}</h4>
                    <p className='des'>Build your company's presence with a virtual office in {Query || ''}. Our extensive global network of workspaces gives you a real business address in prime locations, with a wide range of mail handling options and call answering services available, plus access to meeting rooms and desk space whenever you need it.</p>
                    <p className='price'>Only @ Rs. 1,500 per month.</p>
                    <div className="cities">
                        <div>
                            <div className='bgWhite'>
                                <a href="/virtual-office/gurgaon">
                                    <Image className='img' src={Gurgaon} alt='1' height={90} width={90} />
                                </a>
                            </div>
                            <p>Gurgaon</p>
                        </div>
                        <div>
                            <div className='bgWhite'>
                                <a href="/virtual-office/delhi">
                                    <Image className='img' src={Delhi} alt='1' height={90} width={90} />
                                </a>
                            </div>
                            <p>Delhi</p>
                        </div>
                        <div>
                            <div className='bgWhite'>
                                <a href="/virtual-office/noida">
                                    <Image className='img' src={Noida} alt='1' height={90} width={90} />
                                </a>
                            </div>
                            <p>Noida</p>
                        </div>
                        <div>
                            <div className='bgWhite'>
                                <a href="/virtual-office/bangalore">
                                    <Image className='img' src={Bangalore} alt='1' height={90} width={90} />
                                </a>
                            </div>
                            <p>Bangalore</p>
                        </div>
                        <div>
                            <div className='bgWhite'>
                                <a href="/virtual-office/mumbai">
                                    <Image className='img' src={Mumbai} alt='1' height={90} width={90} />
                                </a>
                            </div>
                            <p>Mumbai</p>
                        </div>
                        <div>
                            <div className='bgWhite'>
                                <a href="/virtual-office/ahmedabad">
                                    <Image className='img' src={Ahmedabad} alt='1' height={90} width={90} />
                                </a>
                            </div>
                            <p>Ahmedabad</p>
                        </div>
                        <div>
                            <div className='bgWhite'>
                                <a href="/virtual-office/chandigarh">
                                    <Image className='img' src={Chandigarh} alt='1' height={90} width={90} />
                                </a>
                            </div>
                            <p>Chandigarh</p>
                        </div>
                        <div>
                            <div className='bgWhite'>
                                <a href="/virtual-office/chennai">
                                    <Image className='img' src={Chennai} alt='1' height={90} width={90} />
                                </a>
                            </div>
                            <p>Chennai</p>
                        </div>
                        <div className='pointer'>
                            <div>
                                <a href="#target" className="scrollTo">
                                    <Image className='img' src={viewMore} alt='1' height={90} width={90} />
                                </a>
                            </div>
                            <p>view more</p>
                        </div>
                    </div>
                </div>
                <div className="zoho">
                    <ZohoformVirtualOFCCity Query={Query} />
                </div>
            </div>
            <div className='importance-section'>
                <div className='left'>
                    <h2>Importance of Virtual Office in {Query || ''}</h2>
                    <div className='parent-div'>
                        <div className='divs'>
                            <Image src={cost} alt='image' className='svg' height={60} width={60} />
                            <h3>Cost Efficiency</h3>
                            <p>Cost efficacy is one of the main advantages businesses look for when choosing virtual offices. Traditional office spaces are costly to rent, have high utility bills, and costly to maintain. Virtual offices are a cheaper option for businesses that enable them to use resources in other areas of their operations.</p>
                        </div>
                        <div className='divs'>
                            <Image src={flexibility} alt='image' className='svg' height={60} width={60} />
                            <h3>Flexibility</h3>
                            <p>Virtual offices in {Query || ''} offer unique flexibility allowing businesses to operate from anywhere. This flexibility is most crucial for startups, freelancers, and small businesses with limited resources to sign a long-term lease or purchase their own office.</p>
                        </div>
                        <div className='divs'>
                            <Image src={professional} alt='image' className='svg' height={60} width={60} />
                            <h3>Professional Image</h3>
                            <p>Prestige business address is one among various factors that enhance professionalism of a company. One advantage of virtual offices is that businesses can obtain an address in prime locations thereby giving them an enhanced credibility and a positive impression to their clients and business partners.</p>
                        </div>
                        <div className='divs'>
                            <Image src={access} alt='image' className='svg' height={60} width={60} />
                            <h3>Access to Talent</h3>
                            <p>The virtual office offers businesses unrestrained access to a worldwide market that is not limited by geography. As a result, organizations get to hire the best brains, irrespective of their locations.</p>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <Image src={importance} alt="img" className='img' />
                </div>
            </div>
            <div className='Plans'>
                <h2>Select Different Types of <span className='bold'>Virtual Office Space Plans</span> as per your needs</h2>
                <div className='parent-div'>
                    <div className='card'>
                        <div className="card-header">
                            <div className='flex'>
                                <p><Image src={rupee} alt="image" height={13} width={13} /> <span className='price'>1,500</span> month</p>
                                <button className='button'>billed annually</button>
                            </div>
                            <h3>Business Registration Plan</h3>
                            <p>Establish your company in {Query || ''} seamlessly with a Virtual Office Address, offering complete documentation, a prestigious location, and comprehensive in-office services.</p>
                        </div>
                        <div className="body height-auto">
                            <p><Image src={tick} alt={'image'} height={20} width={20} />Register New Business Entity.</p>
                            <p><Image src={tick} alt={'image'} height={20} width={20} />Use Address for Opening Bank Account.</p>
                            <p><Image src={tick} alt={'image'} height={20} width={20} />Shift your Registered Address to the New Address.</p>
                            <p><Image src={tick} alt={'image'} height={20} width={20} />Use the Address for GST Registration.</p>
                            <p><Image src={tick} alt={'image'} height={20} width={20} />GST Verification at the Venue.</p>
                            <p><Image src={tick} alt={'image'} height={20} width={20} />Use the Address as your Mailing Address.</p>
                            <p><Image src={tick} alt={'image'} height={20} width={20} />Courier Receiving and Courier Forwarding.</p>
                            <p><Image src={tick} alt={'image'} height={20} width={20} />Use the Address on your Website, Visiting Cards, Webmail, etc.</p>
                        </div>
                        <div className="card-footer">
                            <span className='button cursor-pointer' onClick={handleClick}>Learn more <Image src={RightArrow} alt={'image'} height={18} width={18} /></span>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card-header">
                            <div className='flex'>
                                <p><Image src={rupee} alt="image" height={13} width={13} /> <span className='price'>1,000</span> month</p>
                                <button className='button'>billed annually</button>
                            </div>
                            <h3>GST Registration Plan</h3>
                            <p>Obtain a GST number in {Query || ''} through a Virtual Office Address. Benefit from essential documentation, including NOC, Agreement, Signage, and Electricity Bill.</p>
                        </div>
                        <div className="body height-auto">
                            <p><Image src={tick} alt={'image'} height={20} width={20} />Register for GST.</p>
                            <p><Image src={tick} alt={'image'} height={20} width={20} />Shift your GST-registered Address to the Provided Address.</p>
                            <p><Image src={tick} alt={'image'} height={20} width={20} />Use the Address for GST Registration.</p>
                            <p><Image src={tick} alt={'image'} height={20} width={20} />Courier Receiving and Courier Forwarding</p>
                            <p><Image src={tick} alt={'image'} height={20} width={20} />Use the Address on your Website, Visiting Cards, Webmail, etc.</p>
                        </div>
                        <div className="card-footer">
                            <span className='button cursor-pointer' onClick={handleClick}>Learn more <Image src={RightArrow} alt={'image'} height={18} width={18} /></span>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card-header">
                            <div className='flex'>
                                <p><Image src={rupee} alt="image" height={13} width={13} /> <span className='price'>1,500</span> month</p>
                                <button className='button'>billed annually</button>
                            </div>
                            <h3>Business Mailing Address</h3>
                            <p>Streamline courier handling with a Virtual Office Space, providing a prestigious business address for mailing purposes at different locations in {Query || ''}.</p>
                        </div>
                        <div className="body height-auto">
                            <p><Image src={tick} alt={'image'} height={20} width={20} />Use the Address as your Mailing Address.</p>
                            <p><Image src={tick} alt={'image'} height={20} width={20} />Courier Receiving and forwarding Facility.</p>
                            <p><Image src={tick} alt={'image'} height={20} width={20} />Use the Address on your Website, Visiting Cards, Webmail, etc.</p>
                        </div>
                        <div className="card-footer">
                            <span className='button cursor-pointer' onClick={handleClick}>Learn more <Image src={RightArrow} alt={'image'} height={18} width={18} /></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="experience">
                <h2>RegisterKaro assures you a seamless <span className='bold'>virtual office experience</span> with</h2>
                <div className='parent-div'>
                    <div className='divs'>
                        <Image src={cost} alt='image' className='svg' height={60} width={60} />
                        <h3>Lowest Price Guarantee</h3>
                        <p>Enjoy the lowest price as compared to any other virtual office service providers in {Query || ''}.</p>
                    </div>
                    <div className='divs'>
                        <Image src={document} alt='image' className='svg' height={60} width={60} />
                        <h3>Fast Document Turnaround</h3>
                        <p>Receive your documents within just 5 to 7 working days on average.</p>
                    </div>
                    <div className='divs'>
                        <Image src={network} alt='image' className='svg' height={60} width={60} />
                        <h3>Nationwide Network</h3>
                        <p>Extensive partner spaces across India, allowing you to own a virtual office in any major city.</p>
                    </div>
                    <div className='divs'>
                        <Image src={process} alt='image' className='svg' height={60} width={60} />
                        <h3>Hassle-free Process</h3>
                        <p>Streamlined 100% digital procedures eliminate the need for compliance hassles and unnecessary calls.</p>
                    </div>
                </div>
            </div>
            <div className="kyc">
                <h2>Documents for <span className="bold">Business Registration or GST Registration Plan</span> in {Query || ''}</h2>
                <table>
                    <tr>
                        <th>Private and Public Company</th>
                        <th>LLP & Partnership Firms</th>
                        <th>Individual or Sole Proprietor</th>
                    </tr>
                    <tr>
                        <td>Aadhar Card Copy/ Passport Copy (All Directors)</td>
                        <td>Aadhar Card Copy/ Passport Copy (All Partners)</td>
                        <td>Aadhar Card Copy/ Passport Copy</td>
                    </tr>
                    <tr>
                        <td>PAN Card Copy (All Directors)</td>
                        <td>PAN Card Copy (All Partners)</td>
                        <td>PAN Card Copy</td>
                    </tr>
                    <tr>
                        <td>One Photo/ Passport Size Photo (All Directors)</td>
                        <td>One Photo/ Passport Size Photo (All Partners)</td>
                        <td>One Photo/ Passport Size Photo</td>
                    </tr>
                    <tr>
                        <td>Cancelled cheque/ Passbook front page copy.</td>
                        <td>Cancelled cheque/ Passbook front page copy.</td>
                        <td>Cancelled cheque/ Passbook front page copy.</td>
                    </tr>
                    <tr>
                        <td>PAN Card Copy of the Business</td>
                        <td>PAN Card Copy of the Business</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>GST Certificate (if applicable)</td>
                        <td>GST Certificate (if applicable)</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>COI (certificate of Incorporation)</td>
                        <td>COI (certificate of Incorporation)</td>
                        <td>-</td>
                    </tr>
                </table>
            </div>
            <div className="test"></div>
            <Slider />
            <VirtualOfficeFaq />
        </div>
    )
}