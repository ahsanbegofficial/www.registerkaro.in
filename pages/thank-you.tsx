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
                        <div className='right-main-form'>
                            <BusinessFormMoblieThankYou />
                            <GoogleReview />
                        </div>
                    </div>
                    <div className="box-shadow active-main-container">
                        <p className="text-first"><strong>30,000+</strong> Businesses registered</p>
                        <p className="text-second"><strong>20% of all Indian businesses register with us</strong></p>
                        <div className="first-div">
                            <p><strong>Step 1: Enter Basic Company Details</strong></p>
                            <p>Fill in your company name, indicate its size (small, medium, large), specify the number of employees, and select your company's state</p>
                            <p><strong>Step 2: Submit Your Information</strong></p>
                            <p>Click the submit button to send us your details</p>
                            <p><strong>Step 3: Verification and Access</strong></p>
                            <p>Our team will review your information. Once verified, you'll gain access to our services tailored to your company's needs</p>
                        </div>
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