import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import utils from '../../utilities/utils';

function Results (
  { location, 
    category, 
    itemCards,
    assignCategory,
    assignLocation,
    usingBackup,
    isRandom
  }) {

  const [ balloonMessage, setBalloonMessage ] = useState('');

  useEffect(() => {
    const formatted = location.replaceAll('+', ' ');
    assignLocation(formatted);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    if (isRandom) {
      setBalloonMessage(`Feeling lucky, eh? Alright, let's check out some ${category}!`);
    } else if (!isRandom && category === 'treasure' ) {
      setBalloonMessage(`You'll have to find the treasure yourself!  Here's what we've heard is out there:`);
    } else if (usingBackup) {
      setBalloonMessage(`We're not sure about ${category} in your area, so here's some that could be anywhere!`);
    } else {
      setBalloonMessage(`Great choice! Here's a list of ${category} in your area:`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usingBackup]);

  useEffect(() => {
    assignCategory(category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
      <main className='results-page'>
        <section className='banner' onMouseOver={utils.addShimmerEffect}>
          <Link to={'/'}>
            <h1 className='welcome-message'>WELCOME TO HYRULE</h1>
          </Link>
          <div className='welcome-location'>
            <h4>CURRENT LOCATION:</h4>
            <h3>{location}</h3>
          </div>
        </section>
        <section className="results-header message -left">
          <i className="nes-bcrikko animate__heartBeat"></i>
          <div className="nes-balloon from-left">
            <p>
              {balloonMessage}
            </p>
          </div>
        </section>
        <section className='results-section'>
          <div className='results-grid'>
            <div className='item-list'>
              {itemCards}
            </div>
          </div>
        </section>
      </main>
  )
}

export default Results;

Results.propTypes = {
  location: PropTypes.string,
  category: PropTypes.string,
  itemCards: PropTypes.array,
  usingBackup: PropTypes.bool,
  isRandom: PropTypes.bool,
  assignLocation: PropTypes.func,
  assignCategory: PropTypes.func,
}

