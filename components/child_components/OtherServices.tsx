import Link from 'next/link';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import serviceData from '../../assets/data/other-services.json';

const OtherServices: React.FC = () => {
  return (
    <div className='other-services'>
      <h1 className='text-center fs-3 fw-bold'>Our <span className='text-secondary'>Services</span></h1>
      <div className="cardContainer container p-5 gap-5">
        {serviceData.map((service, index) => (
          <div key={service.id}>
            <Card className="p-2 cardBorder cardBorderEffect">
              <Card.Body className='text-center'>
                <Card.Title>{service.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{service.subtitle}</Card.Subtitle>
                <Card.Text className="mt-4 mb-4 cardTextServices">{service.description}</Card.Text>
                <Link href={service.link} target='_blank' rel='noopener noreferrer'>
                  <Button className='fw-bold d-flex justify-content-center btn btn-secondary' variant="secondary">MORE DETAILS</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherServices;