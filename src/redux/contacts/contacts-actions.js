import { nanoid } from "nanoid"
import { createAction } from "@reduxjs/toolkit"


// export const fetchContacts = createAction("contacts/fetch", () => {
//   axios.get("https://63276092ba4a9c475335f3cc.mockapi.io/contacts")
//     .then(({data}) => )
// });

export const fetchContactsLoading = createAction("contacts/fetch/loading");
export const fetchContactsSuccess = createAction("contacts/fetch/success");
export const fetchContactsError = createAction("contacts/fetch/error");



export const addContact = createAction("contact/add", (data) => {
  return {
    payload: {
      ...data,
      id: nanoid()
    }
  }
});

export const removeContact = createAction("contact/remove")