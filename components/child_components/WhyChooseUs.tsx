import React from 'react';
import Card from 'react-bootstrap/Card';
import reasonable from '../../assets/images/whyChooseUs/reasonable.webp';
import services from '../../assets/images/whyChooseUs/services.webp';
import fiveStar from '../../assets/images/whyChooseUs/star-rating.webp';
import turnTime from '../../assets/images/whyChooseUs/time.webp';

const cardData = [
  {
    id: 1,
    title: '5 STAR RATING',
    image: fiveStar.src,
  },
  {
    id: 2,
    title: '300+ SERVICES',
    image: services.src,
  },
  {
    id: 3,
    title: 'REASONABLE PRICE',
    image: reasonable.src,
  },
  {
    id: 4,
    title: 'TURN AROUND TIME',
    image: turnTime.src,
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <div className="mt-5 mainContainer why-choose-us">
      <h1 className='text-center fw-bold mt-5 pb-5 fs-3'>Why To Choose <span className="brandNameF">Register</span>
        <span className="brandNameL">Karo</span>?
      </h1>
      <div className="container d-grid d-lg-flex justify-content-center align-items-center gap-5">
        {cardData.map((card, index) => (
          <Card key={index} className="card">
            <Card.Body>
              <Card.Img className='p-2 mt-4' src={card.image} alt={card.title} />
              <Card.Text className='text-center fw-bold'>{card.title}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="icon-bubble1"></div>
    </div>
  );
};

export default WhyChooseUs;