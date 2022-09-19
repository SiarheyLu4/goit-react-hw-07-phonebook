import { createAction } from "@reduxjs/toolkit"

const fetchContactsLoading = createAction("contacts/fetch/loading");
const fetchContactsSuccess = createAction("contacts/fetch/success");
const fetchContactsError = createAction("contacts/fetch/error");

const addContactLoading = createAction("contacts/add/loading");
const addContactSuccess = createAction("contacts/add/success");
const addContactError = createAction("contacts/add/error");


const actions = {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
  addContactLoading,
  addContactSuccess,
  addContactError,
}

export default actions;