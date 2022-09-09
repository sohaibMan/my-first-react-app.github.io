import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalWindow(props) {

  const [Show,setShow]=useState(true);
  
  const handleClose=()=>setShow(false);


 

  return (
    <>
    
      <Modal
        show={Show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Please Enter Your Name(Not Null) and Age (Age is beetween 1 to 100)
    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" 
          onClick={handleClose}
          >
          Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalWindow;

