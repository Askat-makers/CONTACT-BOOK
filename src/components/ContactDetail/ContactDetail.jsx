import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ListGroup, Modal, ModalBody } from 'react-bootstrap';
import { contactsContext } from '../../Contexts/ContactsContext';
import Home from '../Home/Home';

const ContactDetail = (props) => {
    const { contactToEdit, goBack } = useContext(contactsContext)
    const [contact, setContact] = useState(contactToEdit)

    useEffect(() => {
        setContact(contactToEdit)
    }, [contactToEdit])

    return (
        <>
            {contact ?
                <>
                    <Home/>
                    <Modal show={true} onHide={() => goBack(props.history)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Info about contact: {contact.name}</Modal.Title>
                        </Modal.Header>
                        <ModalBody>
                            <ListGroup>
                                <h5>Name</h5>
                                <ListGroup.Item>{contact.name}</ListGroup.Item>
                                <h5>LastName</h5>
                                <ListGroup.Item>{contact.lastName}</ListGroup.Item>
                                <h5>Surname</h5>
                                <ListGroup.Item>{contact.surname}</ListGroup.Item>
                                <h5>Phone</h5>
                                <ListGroup.Item>{contact.phone}</ListGroup.Item>
                                <h5>Address</h5>
                                <ListGroup.Item>{contact.address}</ListGroup.Item>
                                <h5>Email</h5>
                                <ListGroup.Item>{contact.email}</ListGroup.Item>
                                <h5>Linkedin</h5>
                                <ListGroup.Item>{contact.linkedin}</ListGroup.Item>
                                <h5>Category</h5>
                                <ListGroup.Item>{contact.category}</ListGroup.Item>
                            </ListGroup>
                        </ModalBody>
                    </Modal>
                </>
                :
                null
            }
        </>
    );
};

export default ContactDetail;