import React from 'react'
import googleIcon from '../../assets/images/static/private-reg/googleIcon.svg';
import star from '../../assets/images/static/private-reg/star.svg';
import Image from 'next/image';

export const GoogleDiv = () => {
  return (
    <div className='Google-main-div'>
      <div>
        <Image src={googleIcon} alt="googleIcon" width={50} height={50} loading="lazy" />
      </div>
      <div>
        <span>Google Customer Rating</span>
        <br />
        <span>4.9 </span>
        <Image src={star} alt="google review star" width={100} loading="lazy" />
      </div>
    </div>
  )
}
