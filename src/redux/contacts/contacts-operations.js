import { Notify } from 'notiflix';

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

const isDublicate = ({ name }, contacts) => {
  const normalizedName = name.toLowerCase();

  const result = contacts.find(item => {
    return (normalizedName === item.name.toLowerCase())
  });

  return Boolean(result);
}

export const addContact = (data) => {
  const func = async (dispatch, getState) => {
    const { contacts } = getState();
    if (isDublicate(data, contacts.items)) {
      return Notify.warning(`${data.name} is already in contacts`, { position: "center-top"}); 
    }
    try {
      dispatch(actions.addContactLoading());
      const result = await api.addContact(data);
      dispatch(actions.addContactSuccess(result));
      Notify.success(`${data.name} added to contacts`, { position: "center-top"});
    } catch (error) {
      dispatch(actions.addContactError(error.message))
    }
  };

  return func;
}

export const removeContact = (id) => {
  const func = async (dispatch) => {
    try {
      dispatch(actions.removeContactLoading());
      await api.removeContact(id);
      dispatch(actions.removeContactSuccess(id));
      Notify.info('added to contacts', { position: "center-top"});
    } catch (error) {
      dispatch(actions.removeContactError(error.message));
    }
  };

  return func;
}