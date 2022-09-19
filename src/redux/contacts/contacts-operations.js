import * as api from "shared/api/contacts";

import actions from "./contacts-actions";

export const fetchContacts = () => {
  const func = async (dispatch) => {
    try {
      dispatch(actions.fetchContactsLoading());
      const data = await api.getContacts();
      dispatch(actions.fetchContactsSuccess(data));
    } catch (error) {
      dispatch(actions.fetchContactsError(error.message));
    }
    
  };

  return func;
};

export const addContact = (data) => {
  const func = async (dispatch) => {
    try {
      dispatch(actions.addContactLoading());
      const result = await api.addContact(data);
      dispatch(actions.addContactSuccess(result));
    } catch (error) {
      dispatch(actions.addContactError(error.message))
    }
  };

  return func;
}

export const removeContact = (id) => {
  const func = (dispatch) => {

  };

  return func;
}