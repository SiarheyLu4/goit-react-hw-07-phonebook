import React from "react";
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";

import { getFilterContacts } from "redux/contacts/contacts-selectors";
import { removeContact } from "redux/contacts/contacts-operations";

export const ContactList = () => {
  const contacts = useSelector(getFilterContacts);

  const dispatch = useDispatch();

  const onRemoveContact = (id) => {
    dispatch(removeContact(id));
  }

  return (
    <Ul>
      {contacts.sort((a, b) => a.name.localeCompare(b.name)).map(({id, name, phone}) => (
        
        <Li key={id}>{name}: {phone}
            <Btm type='' onClick={() => onRemoveContact(id, name)}> Del </Btm>
        </Li>
        
      ))}
    </Ul>
  )
}

const Btm = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 8px;
  background: darkgray;
  &:hover {
    background: #d3a6a6;
  }
`

const Ul = styled.ul`
  list-style: none;
  padding: 8px;
`

const Li = styled.li`
  padding: 2px 0;
`