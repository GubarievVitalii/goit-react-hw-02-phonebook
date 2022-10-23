import PropTypes from 'prop-types';
import s from './Contacts.module.css';

const Contacts = ({ contacts, deteteContact }) => {
  return (
    <>
      <ul className={s.contacts}>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
                    {name} - {number}
                    <button onClick={() => deteteContact(id)}>Delete</button>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
};

export default Contacts;
