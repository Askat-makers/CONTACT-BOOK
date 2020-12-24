import React, { useEffect } from 'react';
import './RenderContacts.css'
import { useContext } from 'react';
import { Container, Table } from 'react-bootstrap';
import { contactsContext } from '../../Contexts/ContactsContext';
// import {FontAwesomeIconnpm } from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserSlash} from '@fortawesome/free-solid-svg-icons'
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import {faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
 
const RenderContacts = () => {

    const { contacts, getContactsData, delContact, editContact } = useContext(contactsContext)

    useEffect(() => {
        getContactsData()
    }, [])

    return (
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                </thead>
                {contacts.map((item, index) => (
                    <tbody key={item.id}>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.address}</td>
                            <td className="icons"><button className="btn delete" title="Come ON" onClick={() => delContact(item.id)}><FontAwesomeIcon icon={faUserSlash} /></button></td>
                            <td className="icons"><Link to="/edit"><button className="btn" onClick={() => editContact(item.id)}><FontAwesomeIcon icon={faEdit} /></button></Link></td>
                            <td className="icons"><Link to="/detail"><button className="btn" onClick={() => editContact(item.id)}><FontAwesomeIcon icon={faAngleDoubleRight} /></button></Link></td>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </Container>
    );
};

export default RenderContacts;