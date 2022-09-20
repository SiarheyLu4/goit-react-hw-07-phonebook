import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components';

import { addContact } from "redux/contacts/contacts-operations";

export function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  const onChangeForm = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      
      case 'number':
        setPhone(value);
        break;
      
      default:
        return;
    }
  }

  const onAddContact = (payload) => {
    const action = addContact(payload);
    dispatch(action);
  }

  const onSubmit = e => {
    e.preventDefault();
    onAddContact({name, phone});
    setName('');
    setPhone('');
  }

  return (
    <Form onSubmit={onSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Jacob Mercer"
            value={name}
            onChange={onChangeForm}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="123-45-67"
            value={phone}
            onChange={onChangeForm}
          />
        </Label>
        <Btm type="submit">Add contact</Btm>
      </Form>
  )
}

const Form = styled.form`
  display: table-caption;
  margin: 12px;
  border: 2px solid grey;
  border-radius: 12px;
  padding: 8px;
`

const Label = styled.label`
  font-size: 20px;
`

const Input = styled.input`
  margin: 12px 0;
  padding: 4px;
  border: 1px solid;
  border-radius: 4px;
`

const Btm = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 4px;
  background: darkgray;
  &:hover {
    background: #d3a6a6;
  }
`