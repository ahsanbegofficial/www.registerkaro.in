import React from 'react'
import Lottie from "react-lottie";
import animationData from "../../assets/data/congrats.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

export const Congratulation:React.FC = () => {
    return (
        <div>
            <div className="congrats-container">
                <div className="congrats-image">
                    <Lottie options={defaultOptions} />
                </div>
            </div>
            <h1 className='congratulation-heading'>Congratulations, your Company name is available</h1>
        </div>
    )
}
