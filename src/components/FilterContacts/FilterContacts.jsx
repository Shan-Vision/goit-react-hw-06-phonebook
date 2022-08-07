import { FilterBox, FilterLabel, FilterInput } from './FilterContacts.styled';
import PropTypes from 'prop-types';

function FilterContacts({ onFilterChange }) {
  return (
    <FilterBox>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterInput onChange={onFilterChange} />
    </FilterBox>
  );
}

FilterContacts.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default FilterContacts;
