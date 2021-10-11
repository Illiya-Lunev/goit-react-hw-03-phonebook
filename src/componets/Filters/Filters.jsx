import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import s from './filters.module.css'

export default function Filter({ onChange, value }) {
    const filterId = uuidv4();

    return <>
        <label className={s.label} htmlFor={filterId}> Find contacts by name:</label>
        <input
            className={s.input}
            type="text"
            name="filter"
            value={value}
            id={filterId}
            onChange={onChange}
        />
      
    </>
    
}

Filter.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};