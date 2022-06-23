/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Input from './controls/Input';
import { filterData } from '../redux/actions/population';

function DetailsNav({ country }) {
  const [showSearch, setShowSearch] = useState(false);

  const switchViewsHandler = () => {
    setShowSearch(!showSearch);
  };

  const dispatch = useDispatch();

  const filterHandler = (e) => {
    dispatch(filterData(e.target.value));
  };

  return (
    <nav>
      {showSearch ? (<Input switchViews={switchViewsHandler} filterHandler={filterHandler} />) : (
        <div className="d-flex nav-container-details">
          {' '}
          <NavLink to="/" className="nav-link"><i className="fa-solid fa-angle-left fa-2x" /></NavLink>
          <div className="title-container"><h1>{country}</h1></div>
        </div>
      )}

    </nav>
  );
}

DetailsNav.propTypes = {
  country: PropTypes.string.isRequired,
};

export default DetailsNav;
