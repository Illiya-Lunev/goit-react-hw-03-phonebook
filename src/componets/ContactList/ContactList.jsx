import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import s from './contacts.module.css'

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
 contacts: PropTypes.array,
};
