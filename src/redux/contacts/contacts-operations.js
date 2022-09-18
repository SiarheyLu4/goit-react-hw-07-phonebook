import { getContacts } from "shared/api/contacts";

import { fetchContactsLoading, fetchContactsSuccess, fetchContactsError } from "./contacts-actions";

export const fetchContacts = () => {
  const func = async (dispatch) => {
    try {
      dispatch(fetchContactsLoading());
      const data = await getContacts();
      dispatch(fetchContactsSuccess(data));
    } catch (error) {
      dispatch(fetchContactsError(error.message));
    }
    
  };

  return func;
}