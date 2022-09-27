import React, { useState } from 'react';
import Button from 'react-bootsrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updateDoc, doc } from "firebase/firestore";
import { useFirestore } from "reactfire";

export default function MessageChange({text, id}) {
    const [show, setShow] = useState(false);
    const firestore = useFirestore();
    const [message, setMessage] = useState(text);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

return (
    <>
    <Button variant="outline-warning" onClick={handleShow}>
        Change form
    </Button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Change text</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input value = {message} onChange={e => setMessage(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="warning" onClick={async () => {
                await updateDoc(doc(firestore, "messages", id),{text:message});
                handleClose();
            }}>
            </Button>
        </Modal.Footer>
    </Modal>
    </>
    );
}
