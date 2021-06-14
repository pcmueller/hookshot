import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';

const Results = (
  { location, 
    category, 
    itemCards,
    assignCategory,
    assignLocation,
    usingBackup,
    isRandom
  }) => {

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
        <Header pageName='results' location={location} />
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

