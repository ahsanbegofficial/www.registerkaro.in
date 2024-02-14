import React, { FC, useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Image from "next/image";
import styles from '../../public/assets/styles/components/GST-popup.module.css'
import popImg from '../../assets/images/GST/purple.webp'
import logo from '../../assets/images/GST/regIco.webp'
import Card from 'react-bootstrap/Card';
// import PopUpModal from "./PopUpModal";
import PopUpModal from "./ZohoformService";

interface GstModalProps {
  Query: any;
}

const GstModal: FC<GstModalProps> = ({ Query }) => {

  const [centredModal, setCentredModal] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const toggleShow = () => setCentredModal(!centredModal);
  const bgImage = {
    backgroundImage: `url(${popImg.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '570px'
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollPosition > 500) {
        setHasScrolled(true);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (hasScrolled && window.innerWidth >= 768) {
      const timeout = setTimeout(() => {
        setCentredModal(true);
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [hasScrolled]);

  return (
    <div>
      <Modal className={`${styles.modalHeight}`} show={centredModal} onHide={toggleShow}>
        <div style={bgImage}>
          <Modal.Header
            className={`${styles.modalHeadStyle}`}
            onClick={toggleShow} closeButton>
          </Modal.Header>
          <Card className={`${styles.brandLogo}`} style={{ width: '20rem' }}>
            <Card.Body >
              <div className={`d-flex justify-content-center align-items-center ${styles.brandLogoStyle}`}>
                <Image src={logo} width={100} alt='logo'></Image>
                <h2 className={`fw-bold fs-2 text-secondary ${styles.RegKaroName}`}> Register<span className={`text-primary`}>Karo</span></h2>
              </div>
            </Card.Body>
          </Card>
          <Modal.Body className={`${styles.modalBody}`} >
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className={`${styles.modal}`}><PopUpModal service={Query}></PopUpModal></div>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default GstModal;