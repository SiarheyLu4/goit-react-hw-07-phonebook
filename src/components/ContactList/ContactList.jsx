import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <Ul>
      {contacts.sort((a, b) => a.name.localeCompare(b.name)).map(({id, name, phone}) => (
        
        <Li key={id}>{name}: {phone}
            <Btm type='' onClick={() => deleteContact(id, name)}> Del </Btm>
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

ContactList.propTypes = {
  getFilterContacts: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired
}