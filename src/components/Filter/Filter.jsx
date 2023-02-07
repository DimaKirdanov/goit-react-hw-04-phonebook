import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
const Filter = ({ filter }) => {
  return (
    <>
      <p className={styles.title}>Find contacts by name</p>
      <input
        className={styles.input}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={filter}
      />
    </>
  );
};

Filter.prototype = {
  filter: PropTypes.func.isRequired,
};
export default Filter;
