import React, { useContext, useState } from 'react';
import { Button, Container, Form, Modal, ModalBody, Nav, Navbar } from 'react-bootstrap'
import { contactsContext } from '../../Contexts/ContactsContext';

const Navibar = () => {

    const [contact, setContact] = useState({})
    const { addContact } = useContext(contactsContext)
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)


    function createContact(e) {
        let newContact = {
            ...contact,
            [e.target.name]: e.target.value
        }
        setContact(newContact)
    }

    const handleClick = () => {
        addContact(contact)
        setShow(false)
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>Contact Book</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="">
                        <Button onClick={handleShow}>Add new contact</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add contact</Modal.Title>
                </Modal.Header>
                <ModalBody>
                    <Form onSubmit={handleClick}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={createContact} name="name" type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>LastName</Form.Label>
                            <Form.Control onChange={createContact} name="lastName" type="text" placeholder="LastName" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Surname</Form.Label>
                            <Form.Control onChange={createContact} name="surname" type="text" placeholder="Surname" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control onChange={createContact} name="phone" type="text" placeholder="Phone" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Address</Form.Label>
                            <Form.Control onChange={createContact} name="address" type="text" placeholder="Address" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={createContact} name="email" type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>LinkedIn</Form.Label>
                            <Form.Control onChange={createContact} name="linkedin" type="text" placeholder="LinkedIn" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Add as</Form.Label>
                            <Form.Control as="select" custom name="category" onChange={createContact}>
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
    );
};

export default Navibar;