import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FormPhoneBook from './componets/FormPhoneBook/FormPhoneBook.jsx';
import ContactList from './componets/ContactList/ContactList.jsx';
import Filter from './componets/Filters/Filters.jsx';
import s from './componets/FormPhoneBook/formPhone.module.css';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    if (this.state.contacts.find(contact => contact.name === data.name)) {
      return alert(`${data.name} is alredy in contacts`);
    } else {
      data.id = uuidv4();
      this.setState(prevState => {
        return { contacts: [...prevState.contacts, data] };
      });
    }
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => {
        return contact.id !== contactId;
      }),
    }));
  };

  handleContactsFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    const { filter } = this.state;
    return (
      <div>
        <h1 className={s.title}>Phonebook</h1>
        <FormPhoneBook onSubmit={this.formSubmitHandler} />
        <h2 className={s.title}>Contacts</h2>
        <Filter onChange={this.handleContactsFilter} value={filter} />
        <ContactList
          onDeleteContact={this.deleteContact}
          contacts={visibleContacts}
        />
      </div>
    );
  }
}
