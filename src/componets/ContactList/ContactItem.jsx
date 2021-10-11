import PropTypes from 'prop-types';
import s from './contacts.module.css'

export default function ContactItem({ id, name, number, onDeleteContact }) {
    return <li  className={s.item}>
        <span className={s.name}>{name}</span>
        <span className={s.name}>{number}</span>
        <button className={s.btn} type="button" onClick={() => onDeleteContact(id)} >Delete</button>
    </li>

}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};