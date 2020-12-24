import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Button, Container, Form, Modal, ModalBody, Nav, Navbar } from 'react-bootstrap'
import { contactsContext } from '../../Contexts/ContactsContext';
import Home from '../Home/Home';


const EditContact = (props) => {

    const { contactToEdit, saveContact, goBack } = useContext(contactsContext)
    const [contact, setContact] = useState(contactToEdit)

    useEffect(() => {
        setContact(contactToEdit)
    }, [contactToEdit])

    function createContact(e) {
        let newContact = {
            ...contact,
            [e.target.name]: e.target.value
        }
        setContact(newContact)
    }


    return (
        <>
            {contact ?
                <>
                    <Home/>
                    <Modal show={true} onHide={() => goBack(props.history)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit contact</Modal.Title>
                        </Modal.Header>
                        <ModalBody>
                            <Form onSubmit={(e) => saveContact(contact, props.history, e)}>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control value={contact.name} onChange={createContact} name="name" type="text" placeholder="Name" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>LastName</Form.Label>
                                    <Form.Control value={contact.lastName} onChange={createContact} name="lastName" type="text" placeholder="LastName" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Surname</Form.Label>
                                    <Form.Control value={contact.surname} onChange={createContact} name="surname" type="text" placeholder="Surname" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control value={contact.phone} onChange={createContact} name="phone" type="text" placeholder="Phone" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control value={contact.address} onChange={createContact} name="address" type="text" placeholder="Address" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control value={contact.email} onChange={createContact} name="email" type="email" placeholder="Email" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>LinkedIn</Form.Label>
                                    <Form.Control value={contact.linkedin} onChange={createContact} name="linkedin" type="text" placeholder="LinkedIn" />
                                </Form.Group>
                                <Form.Group controlId="exampleForm.SelectCustom">
                                    <Form.Label>Add as</Form.Label>
                                    <Form.Control as="select" custom name="category" onChange={createContact} defaultValue={contact.category}>
                                        <option>Relative</option>
                                        <option>Friend</option>
                                        <option>Stranger</option>
                                        <option>Colleague</option>
                                        <option>Classmate</option>
                                    </Form.Control>
                                </Form.Group>
                                <Button type="submit">Save</Button>
                            </Form>
                        </ModalBody>
                    </Modal>
                </>
                :
                null
            }
        </>
    );
};

export default EditContact;