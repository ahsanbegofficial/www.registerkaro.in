import React from 'react'
import google from '../../assets/images/googleReview.webp'
import rating from '../../assets/images/rating.png'
import Image from 'next/image'

export const GoogleReview = () => {
    return (
        <div className='google-review'>
            <Image src={google} alt="google" height={52} width={52} className='google-img'/>
            <div className='content'>
                <p>Google Reviews</p>
                <div className='rating-flex'>
                    <Image src={rating} alt="rating" width={92} height={16}/>
                    <div>
                        <p className='first'><span className='brown-text'>4.5/</span>5</p>
                        <p className='second'><span className='brown-text'>10.5k+</span> Happy Reviews</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
