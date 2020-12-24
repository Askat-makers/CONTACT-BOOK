import React, { useReducer } from 'react';
import { API, PORT, API_ADDRESS } from '../heplers/Constants';
import axios from 'axios'

export const contactsContext = React.createContext();

const INIT_STATE = {
    contacts: [],
    contactToEdit: null
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_CONTACTS_DATA":
            return { ...state, contacts: action.payload }
        case "EDIT_CONTACT":
            return {...state, contactToEdit: action.payload}
        default: return state
    }
}

const ContactsContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const getContactsData = async () => {
        let { data } = await axios(`${API}${PORT}${API_ADDRESS}`)
        dispatch({
            type: 'GET_CONTACTS_DATA',
            payload: data
        })
    }
    const addContact = async (newContact) => {
        await axios.post(`http://localhost:8000/contacts`, newContact)
        getContactsData()
    }

    const delContact = async (id) => {
        await axios.delete(`${API}${PORT}${API_ADDRESS}/${id}`)
        getContactsData()
    }

    const editContact = async (id) => {
        let {data} = await axios(`${API}${PORT}${API_ADDRESS}/${id}`)
        dispatch({
            type: "EDIT_CONTACT",
            payload: data
        })
    }

    const saveContact = async (editedContact, history, e) => {
        e.preventDefault()
        await axios.patch(`${API}${PORT}${API_ADDRESS}/${editedContact.id}`, editedContact)
        history.push('/')
        getContactsData()
    }

    const goBack = (history) => {
        history.push('/')
    }

    return (
        <contactsContext.Provider value={{
            contacts: state.contacts,
            contactToEdit: state.contactToEdit,
            addContact,
            getContactsData,
            delContact,
            editContact,
            saveContact,
            goBack
        }}>
            {children}
        </contactsContext.Provider>
    );
};

export default ContactsContextProvider;