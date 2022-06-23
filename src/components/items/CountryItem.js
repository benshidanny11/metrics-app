/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { stopFilter } from '../../redux/actions/population';

// import { useDispatch } from 'react-redux';

function CountryItem({ country }) {
  const dispatch = useDispatch();
  const disableSearch = () => {
    dispatch(stopFilter());
  };
  return (
    <NavLink className="rocket-item" to={`/details?cn=${country.name}`} onClick={disableSearch}>
      <i className="fa-solid fa-circle-arrow-right" />
      <p>
        {country.name.toUpperCase()}
      </p>
    </NavLink>
  );
}

CountryItem.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default CountryItem;
