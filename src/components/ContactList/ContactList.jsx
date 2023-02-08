import PropTypes from 'prop-types';
import styles from '../ContactList/ContactList.module.css';

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {`${contact.name} : ${contact.number}`}
            <button
              className={styles.buttonDel}
              type="button"
              name="delete"
              onClick={() => onRemoveContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};
