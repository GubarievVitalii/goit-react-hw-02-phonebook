import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ onFilterContact, filter }) => {
    return (
        <div>
            <p>Find contacts by name</p>
            <input className={s.input} type="text" name="filter" value={filter} onChange={onFilterContact} />
        </div>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterContact: PropTypes.func,
};

export default Filter;