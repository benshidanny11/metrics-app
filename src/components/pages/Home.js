/* eslint-disable max-len */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';
import { getCoutries, resetDetailsState } from '../../redux/actions/population';
import CountryItem from '../items/CountryItem';
import NavBar from '../NavBar';

function Home() {
  const {
    countries,
    world,
    filterdData,
    isFiltering,
  } = useSelector((state) => state.data);
  const [isCoutriesLoaded, setIsCoutriesLoaded] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      dispatch(await getCoutries());
    };
    if (countries.length === 0 && Object.keys(world).length === 0) {
      setIsCoutriesLoaded(false);
      fetchData();
    } else {
      setIsCoutriesLoaded(true);
    }
  }, [countries.length]);

  useEffect(() => {
    dispatch(resetDetailsState());
  }, []);
  return (
    <div>
      <NavBar />
      <div className="img-container img-container-home">
        <h3>Overall population</h3>
        <p>
          {' '}
          {isCoutriesLoaded && world ? (
            <NumberFormat
              thousandsGroupStyle="thousand"
              value={world.world_population}
              suffix={` people in ${world.total_countries} countries`}
              decimalSeparator="."
              displayType="text"
              type="text"
              thousandSeparator
              allowNegative
            />
          ) : (
            'Loading.....'
          )}
        </p>
      </div>
      {isCoutriesLoaded ? (
        <div className="data-container">
          {!isFiltering
            ? countries.map((country) => (
              <CountryItem country={{ name: country }} key={country} />
            ))
            : filterdData.map((country) => (
              <CountryItem country={{ name: country }} key={country} />
            ))}
        </div>
      ) : (
        <h1>Please wait...</h1>
      )}
    </div>
  );
}

export default Home;
