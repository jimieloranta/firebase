import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updateDoc, doc } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";
import { useFirestore } from "reactfire";


export default function MessageChange({text, id}) {
    const [show, setShow] = useState(false);
    const firestore = useFirestore();
    const [message, setMessage] = useState(text);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

return (
    <>
    <Button variant="outline-danger" onClick={handleShow}>
        Muokkaa
    </Button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Muokkaa tekstiä</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input value = {message} onChange={e => setMessage(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
                Sulje
            </Button>
            <Button variant="danger" onClick={async () => {
                await updateDoc(doc(firestore, "messages", id),{text:message});
                handleClose();
            }}>
                Tallenna
            </Button>
            <Button variant="danger" onClick={async () => {
            await deleteDoc(doc(firestore, "messages", id),{text:message});
            handleClose();
            }}>
                Poista
        </Button>
        </Modal.Footer>
    </Modal>
    </>
    );
}
