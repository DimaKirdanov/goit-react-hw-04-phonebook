import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
const ContactList = ({ filter, onDeleteContact }) => {
  return (
    <ul className={styles.list}>
      {filter.map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          <p className={styles.text}>
            <div className={styles.container}>
              <div>{name}:</div>
              <div>{number}</div>
            </div>
          </p>
          <button
            className={styles.btnDelete}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
ContactList.prototype = {
  filter: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
