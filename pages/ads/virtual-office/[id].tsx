import React, { useEffect, useState } from 'react'
import { FormVirtualOFCCity } from '../../../components/child_components/FormVirtualOFCCity'
import Image from 'next/image'
import importance from '../../../assets/images/virtualoffice/importance.jpg'
import cost from '../../../assets/images/virtualoffice/cost.png'
import flexibility from '../../../assets/images/virtualoffice/flexibility.png'
import professional from '../../../assets/images/virtualoffice/professional.png'
import access from '../../../assets/images/virtualoffice/access.png'
import rupee from '../../../assets/images/virtualoffice/rupee.png'
import tick from '../../../assets/images/virtualoffice/tick.svg'
import RightArrow from '../../../assets/images/virtualoffice/RightArrow.svg'
import document from '../../../assets/images/virtualoffice/document.png'
import network from '../../../assets/images/virtualoffice/network.png'
import process from '../../../assets/images/virtualoffice/process.png'
import { VirtualOfficeFaq } from '../../../components/child_components/VirtualOfficeFaq'
import { Slider } from '../../../components/child_components/Slider'
import ModalPopUp from '../../../components/child_components/Modal'
import Head from 'next/head'
import { useRouter } from 'next/router'

function formatQuery(query: string) {
    if (!query) return { first: "", second: "" };
    const words = query.split("-");
    if (words.length <= 1) return { first: "", second: "" };
    const lastWord = words.pop();
    const second = lastWord ? lastWord.charAt(0).toUpperCase() + lastWord.slice(1) : "";
    const first = words.join("-") + "-";
    return { first, second };
}

export default function Home() {
    const [active, setActive] = useState(false)
    const router = useRouter();
    let id = router.query.id as any;
    const result1 = formatQuery(id);
    let first = result1.first
    let second = result1.second

    useEffect(() => {
        if (first && first !== 'virtual-office-in-') {
            router.push('/404')
        }
    }, [first,router])


    const handleClick = () => {
        setActive(true)
    }
    let hf = `https://www.registerkaro.in/virtual-office/${id}`
    return (
        <div className='virtual-office'>
            <Head>
                <title>Virtual Office in {second} | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href={hf} />
                <meta property="og:title" content="Virtual Office | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <ModalPopUp active={active} setActive={setActive} />
            <div className='form-section'>
                <div className='left'>
                    <h1 className='firstH1'>Unlock the Benefits of Getting a Virtual <br /> Office Services in {second || ''}</h1>
                    <p>Build your company’s presence with a virtual office in {second || ''}. Our extensive network of workspaces gives you a real business address in prime locations in {second}, with an extensive range of mail handling options & call answering services available, plus access to meeting rooms & desk space whenever you need it only @ Rs. 999 per month.</p>
                    <h1 className='firstH2 hide'>What is a Virtual Office? </h1>
                    <p className='hide'>A virtual office is an arrangement that lets businesses have professional addresses as well as communication services, without physical office space. Companies can establish a professional presence without having to incur overheads related to setting up a physical office. This is because it provides companies with prestigious business addresses, dedicated phone numbers, among other essential services.</p>
                </div>
                {id &&
                    <FormVirtualOFCCity Query={id} />
                }
            </div>
            <div className='importance-section'>
                <div className='left'>
                    <h2>Importance of Virtual Office in {second || ''}</h2>
                    <div className='parent-div'>
                        <div className='divs'>
                            <Image src={cost} alt='image' className='svg' height={60} width={60} />
                            <h3>Cost Efficiency</h3>
                            <p>Cost efficacy is one of the main advantages businesses look for when choosing virtual offices. Traditional office spaces are costly to rent, have high utility bills, and costly to maintain. Virtual offices are a cheaper option for businesses that enable them to use resources in other areas of their operations.</p>
                        </div>
                        <div className='divs'>
                            <Image src={flexibility} alt='image' className='svg' height={60} width={60} />
                            <h3>Flexibility</h3>
                            <p>Virtual offices in {second || ''} offer unique flexibility allowing businesses to operate from anywhere. This flexibility is most crucial for startups, freelancers, and small businesses with limited resources to sign a long-term lease or purchase their own office.</p>
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
                                <p><Image src={rupee} alt="image" height={13} width={13} /> <span className='price'>999</span> month</p>
                                <button className='button'>billed annually</button>
                            </div>
                            <h3>Business Registration Plan</h3>
                            <p>Establish your company in {second || ''} seamlessly with a Virtual Office Address, offering complete documentation, a prestigious location, and comprehensive in-office services.</p>
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
                                <p><Image src={rupee} alt="image" height={13} width={13} /> <span className='price'>699</span> month</p>
                                <button className='button'>billed annually</button>
                            </div>
                            <h3>GST Registration Plan</h3>
                            <p>Obtain a GST number in {second || ''} through a Virtual Office Address. Benefit from essential documentation, including NOC, Agreement, Signage, and Electricity Bill.</p>
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
                                <p><Image src={rupee} alt="image" height={13} width={13} /> <span className='price'>999</span> month</p>
                                <button className='button'>billed annually</button>
                            </div>
                            <h3>Business Mailing Address</h3>
                            <p>Streamline courier handling with a Virtual Office Space, providing a prestigious business address for mailing purposes at different locations in {second || ''}.</p>
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
                        <p>Enjoy the lowest price as compared to any other virtual office service providers in {second || ''}.</p>
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
                <h2>Documents for <span className="bold">Business Registration or GST Registration Plan</span> in {second || ''}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Private and Public Company</th>
                            <th>LLP & Partnership Firms</th>
                            <th>Individual or Sole Proprietor</th>
                        </tr>
                    </thead>
                    <tbody>
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
                    </tbody>
                </table>
            </div>
            <div className="test"></div>
            <Slider />
            <VirtualOfficeFaq />
        </div>
    )
}