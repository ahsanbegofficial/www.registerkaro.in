import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import pic1 from '../../assets/images/Partner/Adobe.webp';
import pic2 from '../../assets/images/Partner/freshworks.webp';
import pic3 from '../../assets/images/Partner/grey-thr.webp';
import pic4 from '../../assets/images/Partner/index_edited.webp';
import pic5 from '../../assets/images/Partner/razor-pay.webp';
import pic6 from '../../assets/images/Partner/WeWork.webp';

const partnerData = [
  { id: 1, image: pic1, alt: 'pic-1' },
  { id: 2, image: pic2, alt: 'pic-2' },
  { id: 3, image: pic3, alt: 'pic-3' },
  { id: 4, image: pic4, alt: 'pic-4' },
  { id: 5, image: pic5, alt: 'pic-5' },
  { id: 6, image: pic6, alt: 'pic-6' },
];

const TrustedPartner: React.FC = () => {
  return (
    <div className='trusted-partner'>
      <hr className="mx-auto fw-bold horizontalLine"/>
      <h1 className="text-center fw-bold fs-3 my-5">Our<span className='text-secondary'> Trusted </span>
        <span className='text-primary'>Partners</span>
      </h1>
      <div className="d-lg-flex justify-content-center align-items-center gap-5 d-grid">
        {partnerData.map((partner) => (
          <Card key={partner.id} className="cardStyle">
            <Card.Body>
              <Image src={partner.image} width={100} alt={partner.alt}/>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TrustedPartner;