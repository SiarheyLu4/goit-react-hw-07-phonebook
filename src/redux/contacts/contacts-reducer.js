import { createReducer } from "@reduxjs/toolkit";

import {
  addContact,
  removeContact,
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError
} from "./contacts-actions";

const initialStore = {
  items: [],
  loading: false,
  error: null,
}

const contactsReducer = createReducer(initialStore, {
  [fetchContactsLoading]: (store) => {
    store.loading = true;
    store.error = null;
  },
  [fetchContactsSuccess]: (store, { payload }) => {
    store.items = payload;
    store.loading = false;
  },
  [fetchContactsError]: (store, { payload }) => {
    store.loading = false;
    store.error = payload;
  },
  [addContact]: (store, {payload}) => [...store, payload],
  [removeContact]: (store, {payload}) => store.filter(({ id }) => id !== payload)
})

export default contactsReducer;