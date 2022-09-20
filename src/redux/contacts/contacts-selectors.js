export const getContacts = ({contacts}) => contacts.items;

export const getFilterContacts = ({ contacts, filter }) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter));
};

export const getLoader = ({ contacts }) => contacts.loading;