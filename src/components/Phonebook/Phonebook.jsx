import styled from 'styled-components';
import { useEffect } from 'react';

import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";

import { useSelector, useDispatch } from "react-redux";

import { setFilter } from "redux/filter/filter-actions";
import { fetchContacts, addContact, removeContact } from 'redux/contacts/contacts-operations';

import { getFilterContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';


const Phonebook = () => {
  const contacts = useSelector(getFilterContacts);
  const filter = useSelector(getFilter)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  const onAddContact = (payload) => {
    const action = addContact(payload);
    dispatch(action);
  }

  const onRemoveContact = (id) => {
    dispatch(removeContact(id));
  }

  const onSetFilter = ({target}) => {
    dispatch(setFilter(target.value));
  }

  return (
      <Card>
        <h1>Phonebook</h1>
        <ContactForm addContact={onAddContact} />
        
        <h2>Contacts</h2>
        <Filter value={filter}
          onChange={onSetFilter}/>
        <ContactList contacts={contacts}
          deleteContact={onRemoveContact} />
      </Card>
    )
}

export default Phonebook;

const Card = styled.div`
  margin: 0 auto;
  padding: 16px;
  width: 400px;
  border: 4px solid;
  border-radius: 20px;
  background: lavender;
`
