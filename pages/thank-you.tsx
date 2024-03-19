import Image from 'next/image'
import data from "../assets/data/testimonial.json"
import circle from '../assets/images/ads/blueCircle.png'
import { BusinessFormThankYou } from '../components/child_components/BusinessFormThankYou'
import { BusinessFormMoblieThankYou } from '../components/child_components/BusinessFormMoblieThankYou'
import { GoogleReview } from '../components/child_components/GoogleReview'
import TestimonialSliderSmallPhone from '../components/child_components/TestimonialSliderSmallPhone'
import TestimonialSmall from '../components/landing/TestimonialSmall'
import { useState } from 'react'
import info from '../assets/images/ads/info.png'
import Whatsapp from '../components/child_components/Whatsapp'
import TestimonialSmallContent from '../components/landing/TestimonialSmallContent'

const Home = () => {
    const { testimonial } = data;
    const { review } = testimonial;
    const [active, setActive] = useState('1')

    const handleActive = (id: string) => {
        setActive(id)
    }
    let hero = {
        "pack_includes": [
            "2 DIN and DSC for two Directors",
            "Drafting of MoA & AoA",
            "Registration fees and stamp duty",
            "Company Incorporation Certificate",
            "Company PAN and TAN",
            "ZohoBooks subscription"
        ],
        "companyDes": "Get your Private Limited Company Registration",
        "price": "Rs.1,999/-",
        "days": "14 days",
        "companyName": "Private Limited Company Registration In",
        "subtitle": " of Private Limited Company Registration",
        "subtitle2": " required For Private Limited Company Registration"
    }

    return (
        <>
            <div className='pvt-registration-thank-you'>
                <div className='position-thank-you'>
                    <div className='business-main-form-thank-you'>
                        <TestimonialSmallContent />
                        <div className='right-main-form'>
                            <BusinessFormThankYou />
                            <GoogleReview />
                        </div>
                    </div>
                </div>
                <div className='business-main-form-bottom'></div>
                <div className='circle-position'>
                    <Image src={circle} alt={'circle-img'} height={250} width={150} />
                </div>
            </div>


            <div className='pvt-registration-mobile-thank-you'>
                <div className='position-thank-you'>
                    <div className='business-main-form-thank-you'>
                        <div className="col-lg-7 mx-auto test">
                            <div className="hero-content">
                                <h2 className="text-secondary text-center text-md-start display-6 fw-bold  mb-3 hero-banner-container">Private Limited Company Registration</h2>
                                <h5 className="fw-bold fs-4 mt-3 mt-md-0 text-center text-md-start">
                                    <span className="text-green">in just <span className="days-color">{hero.days}</span></span> at
                                    <span className="price-color"> {hero.price}</span> only.
                                </h5>
                            </div>
                        </div>
                        <div className='right-main-form'>
                            <BusinessFormMoblieThankYou />
                            <GoogleReview />
                        </div>
                    </div>
                    <div className="box-shadow active-main-container">
                        <h1>Want to incorporate company</h1>
                    </div>
                </div>
                <div className='business-main-form-bottom'></div>
                <div className='circle-position'>
                    <Image src={circle} alt={'circle-img'} height={250} width={150} />
                </div>
            </div>
            <Whatsapp Query={'thank-you'} />
        </>
    )
}
export default Home