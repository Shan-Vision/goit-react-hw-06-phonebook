// import { useEffect } from 'react';

import ContactForm from 'components/Form';
import ContactList from 'components/ContactList';
import FilterContacts from 'components/FilterContacts';
// import SaveIntoLocalStorage from 'components/Hooks';
import { useDispatch, useSelector } from 'react-redux/';
import {
  getContacts,
  filterByName,
  removeContact,
  getFilterKit,
} from 'redux/contactsSlice';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterKit);

  const filterContactsByName = () =>
    contacts.filter(elem => elem.name.toLowerCase().includes(filter));

  const handleFilterChange = event => {
    dispatch(filterByName(event.target.value.toLowerCase()));
  };

  const deleteContactById = id => {
    dispatch(removeContact(id));
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <FilterContacts onFilterChange={handleFilterChange} />
      <ContactList
        contacts={filterContactsByName()}
        onDeleteId={deleteContactById}
      />
    </div>
  );
};

export default App;
