import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import categories from '../../utilities/categories';
import utils from '../../utilities/utils';

function Main (
  { location, 
    assignLocation, 
    assignCategory, 
    resetData,
    activateRandomState,
  }) {

  const [ currentLocation, setCurrentLocation ] = useState('');
  const [ buttons, setButtons ]  = useState([]);

  useEffect(() => {
    const formatted = location.replaceAll('+', ' ');
    setCurrentLocation(formatted);
    assignLocation(formatted);
    setButtons(buildButtons());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const buildButtons = () => {
    const buttonsArr = categories.map(elem => {
      let btnClass = elem.buttonText === 'ROLL THE DICE' ? 'is-error' : 'is-primary';
      let keyName = elem.buttonText === 'ROLL THE DICE' ? 'random' : elem.name;
      return (
        <Link to={`/location/${location}/category/${elem.name}`} key={keyName}>
          <button
            id={elem.name}
            className={`goal-btn nes-btn ${btnClass}`}
            onClick={() => assignCategory(elem.name)}>
              {elem.buttonText}
          </button>
        </Link>
      )
    });
    return buttonsArr;
  }

  return (
    <main className='main-page'>
      <section className='banner' onMouseOver={utils.addShimmerEffect}>
        <Link to={'/'} onClick={resetData}>
          <h1 className='welcome-message'>WELCOME TO HYRULE</h1>
        </Link>
        <div className='welcome-location'>
          <h2>current location:</h2>
          <h3>{currentLocation}</h3>
        </div>
      </section>
      <section className='search-section nes-container is-rounded'>
        <label className='search-label' htmlFor="search_field">looking for an item or creature?</label>
        <div className='nes-field search-bar'>
          <input
            type='text'
            id='search_field'
            className='nes-input is-inline search-input'
            placeholder='search here!'
            name='input'
          />
          <button type='submit' className='nes-btn'>search</button>
        </div>
      </section>
      <section className='goal-container'>
        <div className='goal-heading'>
          <h4>~OR~</h4>
        </div>
        <div className='goal-btns nes-container is-rounded with-title'>
          <span>choose your adventure!</span>
          <article>
            {buttons}
          </article>
        </div>
      </section>
    </main>
  )
}

export default Main;

Main.propTypes = {
  location: PropTypes.string,
  assignLocation: PropTypes.func,
  assignCategory: PropTypes.func,
  resetData: PropTypes.func,
  activateRandomState: PropTypes.func
}
