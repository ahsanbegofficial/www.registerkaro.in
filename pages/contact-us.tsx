import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <Head>
                <title>Contact Us | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="canonical" href="https://www.registerkaro.in/contact-us" />
                <meta property="og:title" content="Contact Us | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <div className="contactus">
                <div className="whatsapp-main-div flex">
                    <div>
                        <h1>Get all the queries instantly on WhatsApp</h1>
                        <p>Connect with our support team</p>
                    </div>
                    <div className='whatsapp'>
                        <a href="https://api.whatsapp.com/send/?phone=918447746183&text=I+want+to+know+more+about+your+services" target="__blank" className='whatsapp-text'>WHATSAPP</a>
                    </div>
                </div>
                <div className="flex-main mb-40 flex">
                    <div>
                        <h5>Incorporation & Registrations</h5>
                        <p><Link href="tel:+918448789562">+91 84487 89562</Link></p>
                    </div>
                    <div>
                        <h5>Trademark & Copyright</h5>
                        <p><Link href="tel:+919205096817">+91 92050 96817</Link></p>
                    </div>
                    <div>
                        <h5>GST & Income Tax</h5>
                        <p><Link href="tel:+918448789557">+91 84487 89557</Link></p>
                    </div>
                    <div>
                        <h5>Digital Signature(DSC)</h5>
                        <p><Link href="tel:+918448789557">+91 84487 89557</Link></p>
                    </div>
                    <div>
                        <h5>Corporate Compliance</h5>
                        <p><Link href="tel:+919205817927">+91 92058 17927</Link></p>
                    </div>
                    <div>
                        <h5>For More Support</h5>
                        <p><Link href="tel:+918448789562">+91 84487 89562</Link></p>
                    </div>
                    <div>
                        <h5>Compliance Helpline</h5>
                        <p><Link href="tel:+918069137147">+91 80691 37147</Link></p>
                    </div>
                    <div>
                        <h5>For Urgent Escalations <br /> (10 AM to 5 PM)</h5>
                        <p><Link href="tel:+918447746183">+91 84477 46183</Link></p>
                    </div>
                </div>
                <p className='note mb-40'><b>Note :</b> RegisterKaro is a renowned group of individual professionals that has established itself as a market leader in guiding corporate houses and entrepreneurs. We specialize in Company Incorporation, Tax, and all other services rendered by professionals independently. Our registered office is located at #101, Oxford Towers, 139, HAL Old Airport Rd, Kodihalli, Bengaluru, Karnataka 560008</p>
                <div className="customer-billing-main-div mb-40">
                    <h3 className='h3-heading'>For Billing &amp; Payments - Connect With Us</h3>
                    <p className='P-light'><strong>Phone: </strong> <a href="tel:+918448987342">+91 84489 87342</a></p>
                    <p className='P-light'><strong>Email: </strong><a href="mailto:accounting@registerkaro.in">accounting@registerkaro.in</a></p>
                </div>
                <div className="join-our-parent mb-40 flex">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 m_b_15">
                        <h3 className='h3-heading'>Joel Dsouza</h3>
                        <p className="P-light"><strong>Co-founder</strong></p>
                        <p className="P-light"><strong>Email: </strong><a href="mailto:Joel@registerkaro.in">Joel@registerkaro.in</a></p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 m_b_15">
                        <h3 className='h3-heading'>For grievances and complaints</h3>
                        <p className="P-light"><strong>Email: </strong><a href="mailto:support@registerkaro.in">support@registerkaro.in</a></p>
                    </div>
                </div>
                <div className="join-our-parent mb-40 flex">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 m_b_15">
                        <h3 className='h3-heading'>Want to join our team?</h3>
                        <p className="P-light"><strong>Phone: </strong><a href="tel:+919380547202">+91 93805 47202</a></p>
                        <p className="P-light"><strong>Email: </strong><a href="mailto:hr@registerkaro.in">hr@registerkaro.in</a></p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 m_b_15">
                        <h3 className='h3-heading'>RegisterKaro</h3>
                        <p className="P-light"><strong>2nd Floor , 96, </strong> <br />Phase 1 Udyog Vihar, <br />Sector 20, Gurugram, Haryana 122022</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 m_b_15">
                        <h3 className='h3-heading'>Registered Office</h3>
                        <p className="P-light"><strong>#101, Oxford Towers, </strong> <br />139, HAL Old Airport Rd, <br />Kodihalli, Bengaluru, Karnataka 560008</p>
                    </div>
                </div>
            </div>
        </>
    )
}