import styled from 'styled-components';
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { ContactForm } from "components/ContactForm/ContactForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactList/ContactList";
import { Loader } from 'components/Loader/Loader';

import { fetchContacts } from 'redux/contacts/contacts-operations';
import { getLoader } from 'redux/contacts/contacts-selectors';

const Phonebook = () => {
  const loader = useSelector(getLoader);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <Card>
        {loader && <Loader />}
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
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
