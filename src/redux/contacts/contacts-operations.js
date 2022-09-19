import { Notify } from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from "shared/api/contacts";
// import actions from "./contacts-actions";

export const fetchContacts = createAsyncThunk(
  "contacts/fetch",
  async (_, thunkAPI) => {
    try {
      const data = await api.getContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)


/*
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
*/


const isDublicate = ({ name }, contacts) => {
  const normalizedName = name.toLowerCase();

  const result = contacts.find(item => {
    return (normalizedName === item.name.toLowerCase())
  });

  return Boolean(result);
}

export const addContact = createAsyncThunk(
  "contacts/add", 
  async (data, {rejectWithValue}) => {
    try {
      const result = await api.addContact(data);
      Notify.success(`${data.name} added to contacts`, { position: "center-top"});
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      if (isDublicate(data, contacts.items)) {
        Notify.warning(`${data.name} is already in contacts`, { position: "center-top" }); 
        return false;
      }
    }
  }
)


/*
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
*/

export const removeContact = createAsyncThunk(
  "contacts/remove", 
  async (id, {rejectWithValue}) => {
    try {
      await api.removeContact(id);
      Notify.info('added to contacts', { position: "center-top"});
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
)

/*
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
*/