import PropTypes from 'prop-types';
import s from './Contacts.module.css';

const Contacts = ({ contacts }) => {
    return (
        <>
            <ul className={s.contacts}>
                {contacts.map(contact => (
                    <li>{contact}</li>
                ))}
            </ul>
        </>
    )
}

Contacts.propTypes = {
    contacts: PropTypes.string.isRequired,
}

export default Contacts;