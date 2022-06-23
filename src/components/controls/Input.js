/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { stopFilter } from '../../redux/actions/population';

function Input({ switchViews, filterHandler }) {
  const dispatch = useDispatch();
  return (
    <div className="input-contaier">
      <input type="text" placeholder="Type a country name" onChange={filterHandler} />
      <span onClick={() => {
        switchViews();
        dispatch(stopFilter());
      }}
      >
        <i className="fa-solid fa-xmark" />

      </span>
    </div>
  );
}

Input.propTypes = {
  switchViews: PropTypes.func.isRequired,
  filterHandler: PropTypes.func.isRequired,
};

export default Input;
