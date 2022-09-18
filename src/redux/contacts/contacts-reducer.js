import { createReducer } from "@reduxjs/toolkit";
import { addContact, removeContact } from "./contacts-actions";

const contactsReducer = createReducer([], {
  [addContact]: (store, {payload}) => [...store, payload],
  [removeContact]: (store, {payload}) => store.filter(({ id }) => id !== payload)
})

export default contactsReducer;