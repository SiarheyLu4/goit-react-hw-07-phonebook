import styled from 'styled-components';
import { Notify } from 'notiflix';
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
    // console.log(payload);
    if (contacts.find(contact => contact.name === payload.name)) {
      Notify.warning(`${payload.name} is already in contacts`, { position: "center-top"}); 
        return
    };
    const action = addContact(payload);
    dispatch(action);
    Notify.success(`${payload.name} added to contacts`, { position: "center-top"});
  }

  const onRemoveContact = (payload, name) => {
    // console.log(payload);
    // console.log(name);
    dispatch(removeContact(payload));
    Notify.info(`${name} added to contacts`, { position: "center-top"});
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










// export function Phonebook() {
//   const [contacts, setContacts] = useState(() => {
//   const contacts = localStorage.getItem("contacts");
//   const parsedContacts = JSON.parse(contacts);
//   return parsedContacts || [
//     // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//     ];
//   });
  
//   const [filter, setFilter] = useState('');

//   const onChangeFilter = event => {
//     setFilter(event.target.value);
//   };

//   const addContact = ({ name, number }) => {
//     const newContact = {
//         id: nanoid(),
//         name,
//         number,
//     } 
//     if (contacts.find(contact => contact.name === name)) {
//       Notify.warning(`${name} is already in contacts`, { position: "center-top"}); 
//           return
//         };
//     setContacts([...contacts, newContact]
//     );
//     Notify.success(`${name} added to contacts`, { position: "center-top"}); 
//   };

//   const getFilterContacts = () => {
//     const caseInsensitive = filter.toLowerCase();
//     return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(caseInsensitive));
//   };

//   const deleteContact = (id, name) => {
//     setContacts(contacts.filter((contact) => contact.id !== id))
//     Notify.info(`${name} added to contacts`, { position: "center-top"});
//   };

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   return (
//       <Card>
//         <h1>Phonebook</h1>
//         <ContactForm addContact={addContact} />
        
//         <h2>Contacts</h2>
//         <Filter value={filter}
//                 onChange={onChangeFilter}/>
//         <ContactList getFilterContacts={getFilterContacts}
//           deleteContact={ deleteContact } />
//       </Card>
//     )
// }