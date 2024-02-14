import React, { FC, memo } from 'react';
import Image from 'next/image';
import WhatsappIcon from '../../assets/images/whatsapp.svg';

interface WhatsappProps {
  Query: any;
}

const Whatsapp: FC<WhatsappProps> = ({ Query }) => {
  return (
    <section className='whatsapp'>
      {
        Query === 'llp-registration' ?
          <a className="whatsapp-icon" href="https://api.whatsapp.com/send/?phone=918447746183&text=I+want+to+incorporate+a+LLP" target="__blank">
            <Image src={WhatsappIcon} width={60} alt='whatsapp-icon' />
          </a>
          : Query === 'producer-company-registration' ?
            <a className="whatsapp-icon" href="https://api.whatsapp.com/send/?phone=918447746183&text=I+want+to+incorporate+a+Farmer+Producer+Company" target="__blank">
              <Image src={WhatsappIcon} width={60} alt='whatsapp-icon' />
            </a>
            : Query === 'public-limited-company-registration' ?
              <a className="whatsapp-icon" href="https://api.whatsapp.com/send/?phone=918447746183&text=I+want+to+incorporate+a+Public+Company" target="__blank">
                <Image src={WhatsappIcon} width={60} alt='whatsapp-icon' />
              </a>
              : Query === 'section-8-company-registration' ?
                <a className="whatsapp-icon" href="https://api.whatsapp.com/send/?phone=918447746183&text=I+want+to+incorporate+a+section+8+Company" target="__blank">
                  <Image src={WhatsappIcon} width={60} alt='whatsapp-icon' />
                </a>
                : Query === 'nidhi-company-registration' ?
                  <a className="whatsapp-icon" href="https://api.whatsapp.com/send/?phone=918447746183&text=I+want+to+incorporate+a+Nidhi+Company" target="__blank">
                    <Image src={WhatsappIcon} width={60} alt='whatsapp-icon' />
                  </a>
                  : Query === 'one-person-company' ?
                    <a className="whatsapp-icon" href="https://api.whatsapp.com/send/?phone=918447746183&text=I+want+to+incorporate+a+OPC++Company" target="__blank">
                      <Image src={WhatsappIcon} width={60} alt='whatsapp-icon' />
                    </a>
                    : <a className="whatsapp-icon" href="https://api.whatsapp.com/send/?phone=918447746183&text=I+want+to+incorporate+a+company" target="__blank">
                      <Image src={WhatsappIcon} width={60} alt='whatsapp-icon' />
                    </a>
      }

    </section>
  );
};

export default memo(Whatsapp);