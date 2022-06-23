/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from './controls/Input';
import { filterData } from '../redux/actions/population';

function NavBar() {
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
        <div className="d-flex nav-container">
          {' '}
          <div><i className="fa-solid fa-house" /></div>
          <div><h1 className="nav-title">World population</h1></div>
          <div className="search-container" onClick={switchViewsHandler}><i className="fa-solid fa-magnifying-glass" /></div>

        </div>
      )}

    </nav>
  );
}

export default NavBar;
