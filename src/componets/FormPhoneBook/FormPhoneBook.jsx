import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './formPhone.module.css'

export default class FormPhoneBook extends Component {
  state = {
    name: '',
    number: '',
  };

  nameId = uuidv4();
  numberId = uuidv4();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    
  };

  handleSubmit = e => {
   e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
    
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.label} htmlFor={this.nameId}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            id={this.nameId}
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и
            пробелов. Например Adrian, Jacob Mercer, Charles de Batz de
            Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
          />
        </label>
        <label className={s.label} htmlFor={this.numberId}>
          Number
          <input
            className={s.input}
            type="tel"
            name="number"
            id={this.numberId}
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handleChange}
          />
        </label>
        <button className={s.btn} type="submit">Add to contacts</button>
      </form>
    );
  }
}
