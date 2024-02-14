import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const BuyModal = ({ modalOpen }: any, toggleModalOpen: any) => {
  const handleClose = () => toggleModalOpen();
  
  return (
    <>
      <Modal show={modalOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BuyModal;