import Image from 'next/image'
import React from 'react'
import two from '../assets/images/aboutus/two.jpg'
import four from '../assets/images/aboutus/four.jpg'
import oneForm from '../assets/images/aboutus/oneForm.png'
import twoForm from '../assets/images/aboutus/twoForm.png'
import threeForm from '../assets/images/aboutus/threeForm.png'
import fourForm from '../assets/images/aboutus/fourForm.png'
import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <link rel="canonical" href="https://www.registerkaro.in/about-us" />
                <title>About Us | RegisterKaro</title>
                <meta name="description" content="The Official RegisterKaro" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="About Us | RegisterKaro" />
                <meta property="og:description" content="The Official RegisterKaro" />
            </Head>
            <div className='aboutus'>
                <div className='first center flex'>
                    <div className='heading'><h2>Register Your Business Quickly <br /> and <br /> Fulfill Your Business Requirements</h2></div>
                </div>
                <div className='flex second'>
                    <div>
                        <h1>About Us</h1>
                        <p>RegisterKaro is a renowned group of individual professionals that has established itself as a market leader in guiding corporate houses and entrepreneurs. We specialize in Company Incorporation, Tax, and all other services rendered by professionals independently. We assist entrepreneurs and start-ups in providing consultations for their businesses. We have a tailor-made solution in the best interests of your business, and we provide a guaranteed and satisfactory service.</p>
                        <p>We have a group of independent professionals and no member firm has any authority to obligate or bind RegisterKaro or any other member firm vis-à-vis third parties, nor does RegisterKaro have any such authority to obligate or bind any member firm. The professionals on our platform also do not advertise nor solicit business from potential clients. One thing that is unique about RegisterKaro is that clients themselves post their queries or come with their cases on our platform looking for highly qualified experts. Ultimately, the client finds who he or she wants to engage as their experts.</p>
                    </div>
                    <div>
                        <Image className='img' src={two} alt="img" />
                    </div>
                </div>
                <div className="fourth flex">
                    <div>
                        <Image className='img' src={four} alt="img" />
                    </div>
                    <div>
                        <h1>Why RegisterKaro?</h1>
                        <ol>
                            <h3>
                                <li>Instant Response.</li>
                            </h3>
                            <h3>
                                <li>Personalized Solutions.</li>
                            </h3>
                            <h3>
                                <li>Trust and Reliability.</li>
                            </h3>
                            <h3>
                                <li>Affordable.</li>
                            </h3>
                            <h3>
                                <li>Simplified Process.</li>
                            </h3>
                            <h3>
                                <li>Compliance Ensured.</li>
                            </h3>
                        </ol>
                    </div>
                </div>
                <div className="fifth Grid">
                    <div className='child flex'>
                        <div><Image className='img' src={oneForm} alt='img' /></div>
                        <div><h3>Fill Up the Form</h3></div>
                    </div>
                    <div className='child flex'>
                        <div><Image className='img' src={twoForm} alt='img' /></div>
                        <div><h3>Make Online Payment</h3></div>
                    </div>
                    <div className='child flex'>
                        <div><Image className='img' src={threeForm} alt='img' /></div>
                        <div><h3>Our Executive Will Contact You</h3></div>
                    </div>
                    <div className='child flex'>
                        <div><Image className='img' src={fourForm} alt='img' /></div>
                        <div><h3>Get Confirmation</h3></div>
                    </div>
                </div>
            </div>
        </>
    )
}