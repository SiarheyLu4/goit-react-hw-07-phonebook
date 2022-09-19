import axios from "axios";

const instance = axios.create({
  baseURL: "https://63276092ba4a9c475335f3cc.mockapi.io/contacts",
});

export const getContacts = async () => {
  const { data } = await instance.get("/");
  return data;
};

export const addContact = async (data) => {
  const { data: result } = await instance.post("/", data);
  return result;
}