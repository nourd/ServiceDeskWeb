import React, { useState }  from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
function TicketEditForm() {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


//const TicketEditForm = ({ticket}) => {
    return (
<>
       <p>
       <Button variant="primary" onClick={handleShow}>
        Add Ticket
      </Button>
           </p> 

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ticket Nr.</Modal.Title>
        </Modal.Header>
        <Modal.Body>Here will be Edit Form</Modal.Body>
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
//);
}

export default TicketEditForm