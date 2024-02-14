import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Image from "next/image";
import styles from '../../public/assets/styles/components/GST-popup.module.css'
import popImg from '../../assets/images/GST/purple.webp'
import logo from '../../assets/images/GST/regIco.webp'
import Card from 'react-bootstrap/Card';
import PopUpModal from "./PopUpModal";
import ZohoformVirtualOFC from "./ZohoformVirtualOFC";

interface ModalPopUpProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalPopUp: React.FC<ModalPopUpProps> = ({ active, setActive }) => {
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = () => {
    setCentredModal(!centredModal)
    setActive(false)
  }
  const bgImage = {
    backgroundImage: `url(${popImg.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '580px'
  };

  useEffect(() => {
    if (active && window.innerWidth >= 768) {
        setCentredModal(true);
    }
  }, [active]);

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
              <div className={`${styles.modal}`}><ZohoformVirtualOFC/></div>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
};

export default ModalPopUp;