/* eslint-disable no-restricted-globals */
import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import NumberFormat from 'react-number-format';
import { fetchDetails } from '../../redux/actions/population';
import DetailsNav from '../DeatailsHeader';
import CountryItem from '../items/CountryItem';

function Details() {
  if (performance.navigation.type === 1) {
    location.href = '/';
  }
  const { population, countries } = useSelector((state) => state.data);
  const myRef = useRef();
  const dispatch = useDispatch();
  const locationP = useLocation();
  const { cn } = queryString.parse((locationP.search));
  const [isDetailsLoaded, setIsDetailsLoaded] = useState(true);

  useEffect(() => {
    myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const fetchData = async () => {
      setIsDetailsLoaded(false);
      dispatch(await fetchDetails(cn));
    };

    fetchData().then(() => setIsDetailsLoaded(true));
  }, [cn, Object.keys(population).length]);
  return (
    <div ref={myRef}>
      <DetailsNav country={cn} />
      <div className="img-container">
        <h3>{`${cn}'s population status`}</h3>
        <div className="details-container">
          <div className="number-data">
            <h4>Number</h4>
            <p>
              {' '}
              {isDetailsLoaded && population ? (
                <NumberFormat
                  thousandsGroupStyle="thousand"
                  value={population.population}
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
          <div className="number-data">
            <h4>Ranking</h4>
            <p>
              {' '}
              {population.ranking}
            </p>
          </div>
          <div className="number-data">
            <h4>Percentage</h4>
            <p>
              {' '}
              {`${population.world_share} %`}
            </p>
          </div>
        </div>

      </div>
      {countries.map((country) => (
        <CountryItem country={{ name: country }} key={country} />))}
    </div>
  );
}

export default Details;
