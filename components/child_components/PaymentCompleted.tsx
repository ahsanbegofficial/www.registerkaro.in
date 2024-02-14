import React from 'react'
import Lottie from "react-lottie";
import animationData from "../../assets/data/payment-completed.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

export const PaymentCompleted: React.FC = () => {
    return (
        <div className='payment-completed'>
            <Lottie options={defaultOptions} />
        </div>
    )
}
