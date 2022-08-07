import { List } from './ContactList.styled';
import ContactItem from 'components/ContactItem';

function ContactList({ contacts, onDeleteId }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDeleteId}
        />
      ))}
    </List>
  );
}

export default ContactList;
