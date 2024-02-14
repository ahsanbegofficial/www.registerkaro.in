import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import Image from "next/image";
import arrowLeft from '../../assets/images/slider/arrowLeft.png'
import arrowRight from '../../assets/images/slider/arrowRight.png'

export default function Carroussel(props) {
    const [centeredIndex, setCenteredIndex] = useState(0);

    const handleArrowClick = (direction) => {
        let newCenteredIndex;
        if (direction === 'prev') {
            newCenteredIndex = centeredIndex === 0 ? props.cards.length - 1 : centeredIndex - 1;
        } else {
            newCenteredIndex = centeredIndex === props.cards.length - 1 ? 0 : centeredIndex + 1;
        }
        setGoToSlide(newCenteredIndex);
        setCenteredIndex(newCenteredIndex);
    };

    const table = props.cards.map((element, index) => {
        return {
            ...element,
            onClick: () => {
                setGoToSlide(index),
                    setCenteredIndex(index)
            }
        };
    });

    const [offsetRadius, setOffsetRadius] = useState(2);
    const [showArrows, setShowArrows] = useState(true);
    const [goToSlide, setGoToSlide] = useState(null);

    useEffect(() => {
        setOffsetRadius(props.offset);
        setShowArrows(props.showArrows);
    }, [props.offset, props.showArrows]);

    return (
        <div
            style={{ width: props.width, height: props.height, margin: props.margin }}
        >
            <Carousel
                slides={table}
                goToSlide={goToSlide}
                offsetRadius={offsetRadius}
                // showNavigation={showArrows}
                animationConfig={config.gentle}
                onChange={index => setCenteredIndex(index)}
            />
            <div className="reviews">
                {props.cards.map((card, index) => (
                    <div
                        key={card.key}
                        className={`testimonial-text-item ${index === centeredIndex ? 'active' : ''}`}
                    >
                        <small className="testimonials__cite__review">{card.review}</small>
                    </div>
                ))}
            </div>
            <div className="testimonials__controls">
                <Image className="testimonials__controls__right" onClick={() => handleArrowClick('prev')} width="112" height="97" src={arrowLeft} alt="Testimonials Control Left" />
                <div className="testimonial-text">
                    {props.cards.map((card, index) => (
                        <div
                            key={card.key}
                            className={`testimonial-text-item ${index === centeredIndex ? 'active' : ''}`}
                        >
                            <h6 className="testimonials__cite__name">{card.name}</h6>
                            <small className="testimonials__cite__title">{card.title}</small>
                            <small className="testimonials__cite__locale">{card.locale}</small>
                        </div>
                    ))}
                </div>
                <Image className="testimonials__controls__right" onClick={() => handleArrowClick('next')} width="112" height="97" src={arrowRight} alt="Testimonials Control Right" />
            </div>
        </div>
    );
}